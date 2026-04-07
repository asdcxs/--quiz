# 정보처리기사 문제풀이

정보처리기사 실기 시험 대비용 정적 웹앱.
HTML/CSS/JavaScript만 사용 — 빌드 도구 없이 그대로 동작합니다.

## 모드

- **필기** — 객관식 5지선다 (5과목)
- **실기** — 단답형 주관식
- **코딩** — C / Java / Python / SQL 출력 결과
- **기출문제** — 2020~2025년 회차별 실제 기출
- **예상문제** — 기출 변형 예상문제
- **모의고사** — 실전과 동일한 20문제·100분 타이머·60점 합격 기준
- **오답노트** — 자주 틀리는 문제 자동 수집

## 데이터

- `questions.js` — 모든 문제 데이터 (필기 56·실기 97·코딩 88·기출 87·예상 47)
- 기출문제는 2020~2025년 19회차 (회차당 5문제)

## 동기화 (선택)

- `firebase-config.js`의 Firebase 프로젝트로 로그인 시 클라우드 동기화
- Firebase 미사용 시 localStorage만으로도 동작
- Firestore Rules로 사용자별 데이터 보호 필수

## 로컬 실행

```bash
# 단순 정적 파일이라 아무 정적 서버나 사용 가능
python3 -m http.server 8080
# → http://localhost:8080
```

## GitHub Pages 배포

1. Settings → Pages → Source: `main` branch / `/ (root)`
2. 잠시 후 `https://<username>.github.io/<repo>/` 접속
