// ============================================================
//  정보처리기사 퀴즈 앱 로직
// ============================================================

let currentMode = '';
let currentSubject = '';
let questions = [];
let currentIndex = 0;
let score = 0;
let wrongList = [];
let stats = { solved: 0, correct: 0 };

// ── D-Day 계산 ──
function calcDday() {
  const exam = new Date('2026-04-18');
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const diff = Math.ceil((exam - today) / (1000 * 60 * 60 * 24));
  document.getElementById('dday').textContent = diff > 0 ? diff : '당일!';
}

// ── 통계 로드/저장 ──
function loadStats() {
  const s = localStorage.getItem('quiz_stats');
  if (s) stats = JSON.parse(s);
  updateStatDisplay();
}
function saveStats() {
  localStorage.setItem('quiz_stats', JSON.stringify(stats));
  updateStatDisplay();
}
function updateStatDisplay() {
  document.getElementById('total-solved').textContent = stats.solved;
  document.getElementById('total-correct').textContent = stats.correct;
  const rate = stats.solved > 0 ? Math.round(stats.correct / stats.solved * 100) : 0;
  document.getElementById('total-rate').textContent = rate + '%';
}

// ── 화면 전환 ──
function showScreen(id) {
  document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
  document.getElementById(id).classList.add('active');
}

function goHome() {
  showScreen('screen-home');
  loadStats();
}

// ── 모드 선택 ──
function startMode(mode) {
  currentMode = mode;
  if (mode === '필기') {
    showScreen('screen-subject');
  } else if (mode === '실기') {
    startQuiz('실기', '전체');
  } else if (mode === '코딩') {
    showScreen('screen-coding');
  } else if (mode === '기출문제') {
    showScreen('screen-gichu');
  } else if (mode === '예상문제') {
    startQuiz('예상문제', '전체');
  }
}

// ── 코딩 언어 선택 ──
function startCoding(lang) {
  startQuiz('코딩', lang);
}

// ── 퀴즈 시작 ──
function startQuiz(mode, subject) {
  currentMode = mode;
  currentSubject = subject;

  // 문제 필터링
  let pool = QUESTIONS[mode] || [];
  // 실기 추가 문제 합산
  if (mode === '실기' && QUESTIONS.실기_추가) {
    pool = pool.concat(QUESTIONS.실기_추가);
  }
  if (subject !== '전체' && subject !== '전체언어') {
    if (mode === '기출문제') {
      // 기출문제는 year 필드로 필터링
      pool = pool.filter(q => q.year === subject);
    } else {
      pool = pool.filter(q => q.subject === subject);
    }
  }

  // 셔플 후 최대 20문제
  questions = shuffle([...pool]).slice(0, 20);
  currentIndex = 0;
  score = 0;
  wrongList = [];

  // 배지 표시
  document.getElementById('quiz-mode-badge').textContent = mode;
  const subjectLabel = (subject === '전체' || subject === '전체언어') ? '전체' : subject;
  document.getElementById('quiz-subject-badge').textContent = subjectLabel;
  document.getElementById('q-total').textContent = questions.length;

  showScreen('screen-quiz');
  showQuestion(0);
}

// ── 문제 표시 ──
function showQuestion(idx) {
  const q = questions[idx];
  currentIndex = idx;

  // 진행 상황
  document.getElementById('q-current').textContent = idx + 1;
  const pct = ((idx) / questions.length) * 100;
  document.getElementById('progress-fill').style.width = pct + '%';

  // 주제 태그
  document.getElementById('question-subject-tag').textContent = q.subject;

  // 문제 텍스트
  document.getElementById('question-text').textContent = q.question;

  // 코드 블록
  const codeBlock = document.getElementById('code-block');
  if (q.code) {
    codeBlock.style.display = 'block';
    document.getElementById('code-lang-tag').textContent = (q.lang || 'code').toUpperCase();
    document.getElementById('code-content').innerHTML = highlight(q.code, q.lang || '');
  } else {
    codeBlock.style.display = 'none';
  }

  // 결과 숨김
  document.getElementById('result-container').style.display = 'none';

  if (currentMode === '필기') {
    document.getElementById('input-container').style.display = 'none';
    document.getElementById('options-container').style.display = 'flex';
    renderOptions(q);
  } else {
    document.getElementById('options-container').style.display = 'none';
    document.getElementById('options-container').innerHTML = '';
    document.getElementById('input-container').style.display = 'flex';
    const input = document.getElementById('answer-input');
    input.value = '';
    // 기출문제/예상문제의 이론 문제(코드 없는 단답형)는 placeholder 변경
    if ((currentMode === '기출문제' || currentMode === '예상문제') && !q.code) {
      input.placeholder = '핵심 키워드를 입력하세요';
    } else {
      input.placeholder = '답을 입력하세요';
    }
    input.focus();
  }
}

// ── 선택지 렌더링 ──
function renderOptions(q) {
  const container = document.getElementById('options-container');
  container.innerHTML = '';
  const nums = ['①', '②', '③', '④', '⑤'];
  q.options.forEach((opt, i) => {
    const btn = document.createElement('button');
    btn.className = 'option-btn';
    btn.innerHTML = `<span class="opt-num">${nums[i]}</span><span>${opt}</span>`;
    btn.onclick = () => selectOption(i);
    container.appendChild(btn);
  });
}

// ── 객관식 선택 ──
function selectOption(selected) {
  const q = questions[currentIndex];
  const buttons = document.querySelectorAll('.option-btn');
  buttons.forEach(b => b.disabled = true);

  const isCorrect = selected === q.answer;
  buttons[selected].classList.add(isCorrect ? 'correct' : 'wrong');
  if (!isCorrect) {
    buttons[q.answer].classList.add('correct');
    wrongList.push({ q, userAnswer: q.options[selected] });
  } else {
    score++;
  }
  stats.solved++;
  if (isCorrect) stats.correct++;

  showResult(isCorrect, q, q.options[selected]);
}

// ── 주관식 제출 ──
function submitTextAnswer() {
  const input = document.getElementById('answer-input');
  const userAns = input.value.trim();
  if (!userAns) return;

  const q = questions[currentIndex];
  const correct = q.answer.some(a =>
    a.toLowerCase().replace(/\s+/g, '') === userAns.toLowerCase().replace(/\s+/g, '')
  );

  stats.solved++;
  if (correct) {
    score++;
    stats.correct++;
  } else {
    wrongList.push({ q, userAnswer: userAns });
  }

  document.getElementById('input-container').style.display = 'none';
  showResult(correct, q, userAns);
}

// ── Enter 키 제출 ──
document.addEventListener('keydown', e => {
  if (e.key === 'Enter') {
    const inputContainer = document.getElementById('input-container');
    if (inputContainer.style.display !== 'none') {
      submitTextAnswer();
    } else {
      const nextBtn = document.querySelector('.next-btn');
      if (nextBtn && document.getElementById('result-container').style.display !== 'none') {
        nextQuestion();
      }
    }
  }
});

// ── 결과 표시 ──
function showResult(isCorrect, q, userAnswer) {
  const container = document.getElementById('result-container');
  const badge = document.getElementById('result-badge');
  const explanation = document.getElementById('result-explanation');

  badge.className = 'result-badge ' + (isCorrect ? 'ok' : 'ng');
  badge.textContent = isCorrect ? '✓ 정답!' : '✗ 오답';

  let expText = '';
  if (!isCorrect) {
    const correctAns = Array.isArray(q.answer) ? q.answer[0] : q.answer;
    expText += `정답: ${correctAns}\n내 답: ${userAnswer}\n\n`;
  }
  expText += q.explanation || '';
  explanation.textContent = expText;

  container.style.display = 'block';
  saveStats();
}

// ── 다음 문제 ──
function nextQuestion() {
  if (currentIndex + 1 >= questions.length) {
    showFinalResult();
  } else {
    showQuestion(currentIndex + 1);
  }
}

// ── 최종 결과 ──
function showFinalResult() {
  const rate = Math.round(score / questions.length * 100);
  document.getElementById('final-score').textContent = score;
  document.getElementById('final-total').textContent = questions.length;
  document.getElementById('final-rate').textContent = rate + '%';

  let emoji, msg;
  if (rate >= 90) { emoji = '🏆'; msg = '완벽해요! 합격 확실!'; }
  else if (rate >= 70) { emoji = '🎯'; msg = '좋아요! 조금만 더!'; }
  else if (rate >= 50) { emoji = '📚'; msg = '절반 넘겼어요. 복습이 필요해요!'; }
  else { emoji = '💪'; msg = '틀린 문제를 집중 복습하세요!'; }

  document.getElementById('result-emoji').textContent = emoji;
  document.getElementById('final-message').textContent = msg;

  // 틀린 문제 목록
  const wrongSection = document.getElementById('wrong-section');
  const wrongListEl = document.getElementById('wrong-list');
  if (wrongList.length === 0) {
    wrongSection.style.display = 'none';
  } else {
    wrongSection.style.display = 'block';
    wrongListEl.innerHTML = wrongList.map(item => {
      const correctAns = Array.isArray(item.q.answer) ? item.q.answer[0] : item.q.answer;
      const qText = item.q.question.length > 60 ? item.q.question.slice(0, 60) + '...' : item.q.question;
      return `<div class="wrong-item">
        <div class="wi-q">${qText}</div>
        <div class="wi-ans">
          <span class="wi-label">내 답: </span><span class="wi-wrong">${item.userAnswer}</span>
          &nbsp;|&nbsp;
          <span class="wi-label">정답: </span><span class="wi-correct">${correctAns}</span>
        </div>
      </div>`;
    }).join('');
  }

  showScreen('screen-result');
}

// ── 다시 풀기 ──
function retryQuiz() {
  startQuiz(currentMode, currentSubject);
}

function exitQuiz() {
  goHome();
}

// ── 배열 셔플 ──
function shuffle(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

// ── 문법 하이라이팅 ──
function highlight(code, lang) {
  let h = escapeHtml(code);

  if (lang === 'c' || lang === 'java') {
    const keywords = lang === 'c'
      ? ['int','char','float','double','void','if','else','for','while','do','return','struct','typedef','include','define','printf','scanf','break','continue','switch','case','default','static','const','long','short','unsigned','sizeof']
      : ['public','private','protected','static','void','int','String','boolean','char','double','float','long','class','interface','extends','implements','new','return','if','else','for','while','do','break','continue','switch','case','default','this','super','null','true','false','System','println','print'];
    keywords.forEach(kw => {
      h = h.replace(new RegExp(`\\b${kw}\\b`, 'g'), `<span class="kw">${kw}</span>`);
    });
    // 숫자
    h = h.replace(/\b(\d+)\b/g, '<span class="nm">$1</span>');
    // 문자열
    h = h.replace(/(&quot;.*?&quot;)/g, '<span class="st">$1</span>');
    // 주석
    h = h.replace(/(\/\/.*)/g, '<span class="cm">$1</span>');
    h = h.replace(/(\/\*[\s\S]*?\*\/)/g, '<span class="cm">$1</span>');
    // #include
    h = h.replace(/(<span class="kw">include<\/span>.*)/g, (m, p) =>
      `<span class="cm">${p.replace(/<[^>]+>/g,'')}</span>`);
    h = h.replace(/(#\w+)/g, '<span class="kw">$1</span>');
  } else if (lang === 'python') {
    const keywords = ['def','class','return','if','elif','else','for','while','in','not','and','or','import','from','as','with','try','except','finally','raise','pass','break','continue','lambda','True','False','None','print','range','len','list','dict','set','tuple','str','int','float','sorted','filter','map','sum','global','self'];
    keywords.forEach(kw => {
      h = h.replace(new RegExp(`\\b${kw}\\b`, 'g'), `<span class="kw">${kw}</span>`);
    });
    h = h.replace(/\b(\d+)\b/g, '<span class="nm">$1</span>');
    h = h.replace(/(&quot;.*?&quot;|&#039;.*?&#039;|f&quot;.*?&quot;)/g, '<span class="st">$1</span>');
    h = h.replace(/(#.*)/g, '<span class="cm">$1</span>');
  } else if (lang === 'sql') {
    const keywords = ['SELECT','FROM','WHERE','GROUP','BY','HAVING','ORDER','JOIN','LEFT','RIGHT','INNER','OUTER','FULL','ON','INSERT','INTO','UPDATE','SET','DELETE','CREATE','TABLE','DROP','ALTER','ADD','INDEX','VIEW','AS','DISTINCT','COUNT','SUM','AVG','MAX','MIN','AND','OR','NOT','NULL','IS','IN','LIKE','BETWEEN','COMMIT','ROLLBACK','SAVEPOINT'];
    keywords.forEach(kw => {
      h = h.replace(new RegExp(`\\b${kw}\\b`, 'gi'), `<span class="kw">${kw}</span>`);
    });
    h = h.replace(/(&quot;.*?&quot;|&#039;.*?&#039;)/g, '<span class="st">$1</span>');
    h = h.replace(/\b(\d+)\b/g, '<span class="nm">$1</span>');
    h = h.replace(/(--.*)/g, '<span class="cm">$1</span>');
  }

  return h;
}

function escapeHtml(text) {
  return text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

// ── 초기화 ──
calcDday();
loadStats();
