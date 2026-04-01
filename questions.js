// ============================================================
//  정보처리기사 문제 데이터
//  필기: 객관식 (options 배열, answer: 0~4 인덱스)
//  실기: 단답형 (answer: 문자열 배열 - 여러 정답 허용)
//  코딩: code + lang 필드 포함, answer: 출력 결과
// ============================================================

const QUESTIONS = {

  필기: [

    // ─── 1과목: 소프트웨어 설계 ───
    {
      subject: "소프트웨어 설계",
      question: "UML 다이어그램 중 시스템의 동적 행위를 표현하는 다이어그램이 아닌 것은?",
      options: ["시퀀스 다이어그램", "활동 다이어그램", "상태 다이어그램", "클래스 다이어그램", "유스케이스 다이어그램"],
      answer: 3,
      explanation: "클래스 다이어그램은 정적 구조(클래스, 속성, 관계)를 표현하는 정적 다이어그램입니다.\n동적 다이어그램: 시퀀스, 활동, 상태, 유스케이스, 커뮤니케이션 등"
    },
    {
      subject: "소프트웨어 설계",
      question: "GoF 디자인 패턴 중 생성(Creational) 패턴에 해당하지 않는 것은?",
      options: ["Singleton", "Factory Method", "Abstract Factory", "Observer", "Builder"],
      answer: 3,
      explanation: "Observer는 행위(Behavioral) 패턴입니다.\n생성 패턴: Singleton, Factory Method, Abstract Factory, Builder, Prototype"
    },
    {
      subject: "소프트웨어 설계",
      question: "소프트웨어 설계에서 '응집도(Cohesion)'에 대한 설명으로 옳은 것은?",
      options: [
        "모듈과 모듈 사이의 상호 의존 정도를 나타낸다",
        "모듈 내부 요소들이 서로 관련된 정도를 나타낸다",
        "응집도는 낮을수록 좋은 모듈이다",
        "결합도와 동일한 개념이다",
        "모듈의 크기와 직접적으로 비례한다"
      ],
      answer: 1,
      explanation: "응집도(Cohesion): 모듈 내부 요소들이 서로 관련된 정도 → 높을수록 좋음\n결합도(Coupling): 모듈 간 상호 의존 정도 → 낮을수록 좋음"
    },
    {
      subject: "소프트웨어 설계",
      question: "Singleton 패턴에 대한 설명으로 옳은 것은?",
      options: [
        "객체 생성을 서브클래스에서 결정하는 패턴",
        "클래스의 인스턴스를 오직 하나만 생성하도록 보장하는 패턴",
        "알고리즘을 캡슐화하여 교체 가능하도록 하는 패턴",
        "객체들 사이의 일대다 의존 관계를 정의하는 패턴",
        "인터페이스를 변환하여 호환성을 제공하는 패턴"
      ],
      answer: 1,
      explanation: "Singleton 패턴: 클래스 인스턴스를 하나만 만들고 전역 접근점 제공\n- 생성자를 private으로 선언\n- static 메서드로 인스턴스 반환"
    },
    {
      subject: "소프트웨어 설계",
      question: "요구사항 분석 단계에서 작성하는 문서가 아닌 것은?",
      options: ["요구사항 명세서(SRS)", "유스케이스 다이어그램", "데이터 흐름도(DFD)", "소스 코드 주석", "프로토타입"],
      answer: 3,
      explanation: "소스 코드 주석은 구현 단계에서 작성합니다.\n요구사항 분석 산출물: SRS, 유스케이스, DFD, ERD, 프로토타입 등"
    },
    {
      subject: "소프트웨어 설계",
      question: "MVC 패턴에서 Model의 역할로 옳은 것은?",
      options: [
        "사용자 인터페이스를 담당한다",
        "Model과 View 사이의 중재자 역할을 한다",
        "데이터와 비즈니스 로직을 담당한다",
        "사용자 입력을 처리한다",
        "화면 출력 형식을 결정한다"
      ],
      answer: 2,
      explanation: "MVC 패턴:\n- Model: 데이터 + 비즈니스 로직\n- View: 화면 표시 (UI)\n- Controller: 사용자 입력 처리, Model↔View 연결"
    },
    {
      subject: "소프트웨어 설계",
      question: "소프트웨어 아키텍처 스타일 중 클라이언트-서버(Client-Server) 구조의 특징으로 옳지 않은 것은?",
      options: [
        "서버는 서비스를 제공하고 클라이언트는 서비스를 요청한다",
        "네트워크를 통해 통신한다",
        "모든 처리가 클라이언트 측에서만 이루어진다",
        "서버는 여러 클라이언트의 요청을 처리한다",
        "확장성이 우수하다"
      ],
      answer: 2,
      explanation: "클라이언트-서버 구조에서는 처리를 클라이언트와 서버가 분담합니다.\n비즈니스 로직은 주로 서버 측에서 처리됩니다."
    },
    {
      subject: "소프트웨어 설계",
      question: "유스케이스 다이어그램에서 <<extend>> 관계에 대한 설명으로 옳은 것은?",
      options: [
        "기본 유스케이스가 반드시 실행되어야 하는 공통 기능",
        "특정 조건에서 선택적으로 실행되는 확장 기능",
        "유스케이스들 사이의 일반화 관계",
        "액터와 유스케이스 사이의 연관 관계",
        "시스템 경계를 나타내는 관계"
      ],
      answer: 1,
      explanation: "<<extend>>: 특정 조건에서 선택적으로 실행되는 확장 (조건부)\n<<include>>: 반드시 포함되어야 하는 공통 기능 (필수)"
    },
    {
      subject: "소프트웨어 설계",
      question: "결합도(Coupling)의 종류 중 가장 낮은(좋은) 결합도는?",
      options: ["내용 결합도", "공통 결합도", "제어 결합도", "자료 결합도", "스탬프 결합도"],
      answer: 3,
      explanation: "결합도 순서 (낮음→높음, 좋음→나쁨):\n자료 < 스탬프 < 제어 < 외부 < 공통 < 내용\n자료 결합도: 매개변수로 단순 데이터만 전달"
    },
    {
      subject: "소프트웨어 설계",
      question: "소프트웨어 설계 원칙 중 SOLID의 'O'에 해당하는 원칙은?",
      options: [
        "단일 책임 원칙 (Single Responsibility)",
        "개방-폐쇄 원칙 (Open-Closed)",
        "리스코프 치환 원칙 (Liskov Substitution)",
        "인터페이스 분리 원칙 (Interface Segregation)",
        "의존성 역전 원칙 (Dependency Inversion)"
      ],
      answer: 1,
      explanation: "SOLID 원칙:\nS - Single Responsibility (단일 책임)\nO - Open-Closed (개방-폐쇄) ← 확장에는 열려, 수정에는 닫혀\nL - Liskov Substitution (리스코프 치환)\nI - Interface Segregation (인터페이스 분리)\nD - Dependency Inversion (의존성 역전)"
    },
    {
      subject: "소프트웨어 설계",
      question: "데이터 흐름도(DFD)의 구성 요소가 아닌 것은?",
      options: ["프로세스(Process)", "데이터 흐름(Data Flow)", "데이터 저장소(Data Store)", "외부 엔티티(External Entity)", "제어 흐름(Control Flow)"],
      answer: 4,
      explanation: "DFD 구성 요소 4가지:\n1. 프로세스 (원)\n2. 데이터 흐름 (화살표)\n3. 데이터 저장소 (두 줄)\n4. 외부 엔티티 (사각형)\n제어 흐름은 DFD가 아닌 제어 흐름도의 요소입니다."
    },
    {
      subject: "소프트웨어 설계",
      question: "애자일(Agile) 개발 방법론의 특징으로 옳지 않은 것은?",
      options: [
        "반복적이고 점진적인 개발",
        "고객과의 긴밀한 협력",
        "변화에 유연하게 대응",
        "계획과 문서 작성을 최우선으로 한다",
        "작동하는 소프트웨어를 중시"
      ],
      answer: 3,
      explanation: "애자일 선언문의 핵심:\n- 개인과 상호작용 > 프로세스와 도구\n- 작동하는 소프트웨어 > 포괄적인 문서\n- 고객과의 협력 > 계약 협상\n- 변화에 대응 > 계획 준수"
    },

    // ─── 2과목: 소프트웨어 개발 ───
    {
      subject: "소프트웨어 개발",
      question: "화이트박스 테스트(White-box Test)에 해당하지 않는 것은?",
      options: ["구문 커버리지", "조건 커버리지", "결정 커버리지", "경계값 분석", "경로 커버리지"],
      answer: 3,
      explanation: "경계값 분석은 블랙박스 테스트 기법입니다.\n화이트박스 테스트: 내부 구조/로직 기반 (커버리지 기준)\n- 구문, 조건, 결정, 경로, 조건/결정 커버리지"
    },
    {
      subject: "소프트웨어 개발",
      question: "Git에서 브랜치를 합치는 방법으로 옳지 않은 것은?",
      options: ["git merge", "git rebase", "git cherry-pick", "git commit", "Pull Request"],
      answer: 3,
      explanation: "git commit은 변경사항을 저장소에 기록하는 명령어입니다.\n브랜치 합치기: merge(합병), rebase(재배치), cherry-pick(특정 커밋 적용)"
    },
    {
      subject: "소프트웨어 개발",
      question: "소프트웨어 형상관리(SCM)의 목적으로 옳지 않은 것은?",
      options: [
        "소프트웨어 변경 사항을 체계적으로 추적",
        "버전 관리",
        "개발자 성과 평가",
        "변경 통제",
        "감사 및 보고"
      ],
      answer: 2,
      explanation: "형상관리(SCM, Software Configuration Management):\n- 변경 식별, 통제, 감사, 보고\n- 버전 관리, 빌드 관리\n개발자 성과 평가는 형상관리의 목적이 아닙니다."
    },
    {
      subject: "소프트웨어 개발",
      question: "블랙박스 테스트 기법에 해당하는 것은?",
      options: ["구문 커버리지", "경로 테스트", "동치 분할", "조건 커버리지", "루프 테스트"],
      answer: 2,
      explanation: "블랙박스 테스트 (명세 기반): 내부 구조 무시, 입출력 관계 검증\n- 동치 분할, 경계값 분석, 원인-결과 그래프, 오류 예측"
    },
    {
      subject: "소프트웨어 개발",
      question: "다음 중 정렬 알고리즘의 평균 시간복잡도가 O(n log n)인 것은?",
      options: ["버블 정렬", "선택 정렬", "삽입 정렬", "퀵 정렬", "카운팅 정렬"],
      answer: 3,
      explanation: "시간 복잡도:\n- O(n²): 버블, 선택, 삽입 정렬\n- O(n log n): 퀵 정렬(평균), 병합 정렬, 힙 정렬\n퀵 정렬 최악: O(n²) (이미 정렬된 경우)"
    },
    {
      subject: "소프트웨어 개발",
      question: "소프트웨어 품질 특성 중 ISO/IEC 25010 표준의 품질 특성에 포함되지 않는 것은?",
      options: ["기능 적합성", "성능 효율성", "사용성", "가독성", "호환성"],
      answer: 3,
      explanation: "ISO/IEC 25010 품질 특성 (8가지):\n기능 적합성, 성능 효율성, 호환성, 사용성, 신뢰성, 보안성, 유지보수성, 이식성\n가독성은 독립 품질 특성이 아닙니다."
    },
    {
      subject: "소프트웨어 개발",
      question: "스택(Stack)에 대한 설명으로 옳은 것은?",
      options: [
        "FIFO 구조로 먼저 삽입된 데이터가 먼저 삭제된다",
        "LIFO 구조로 마지막에 삽입된 데이터가 먼저 삭제된다",
        "양쪽 끝에서 삽입과 삭제가 가능하다",
        "임의의 위치에 접근이 가능하다",
        "트리 구조의 일종이다"
      ],
      answer: 1,
      explanation: "Stack: LIFO (Last In First Out)\n- Push: 삽입, Pop: 삭제, Top: 최상단 확인\n- 활용: 재귀 호출, 수식 계산, 역순 처리\nQueue: FIFO (First In First Out)"
    },
    {
      subject: "소프트웨어 개발",
      question: "소프트웨어 테스트에서 회귀 테스트(Regression Test)의 목적은?",
      options: [
        "처음 개발된 소프트웨어의 기능을 검증",
        "성능 한계를 확인",
        "변경 후 기존 기능이 정상 동작하는지 확인",
        "사용자 인터페이스를 테스트",
        "보안 취약점을 발견"
      ],
      answer: 2,
      explanation: "회귀 테스트(Regression Test): 소프트웨어 변경 후 기존 기능이 여전히 올바르게 동작하는지 확인\n- 버그 수정, 기능 추가 후 반드시 수행"
    },
    {
      subject: "소프트웨어 개발",
      question: "CI/CD에서 CD가 의미하는 것으로 올바른 것은?",
      options: [
        "Continuous Development",
        "Continuous Debugging",
        "Continuous Delivery/Deployment",
        "Code Documentation",
        "Component Design"
      ],
      answer: 2,
      explanation: "CI/CD:\n- CI (Continuous Integration): 지속적 통합\n- CD (Continuous Delivery/Deployment): 지속적 배포\n코드 변경사항을 자동으로 빌드, 테스트, 배포하는 프로세스"
    },
    {
      subject: "소프트웨어 개발",
      question: "이진 탐색 트리(BST)에서 탐색의 평균 시간 복잡도는?",
      options: ["O(1)", "O(log n)", "O(n)", "O(n log n)", "O(n²)"],
      answer: 1,
      explanation: "이진 탐색 트리(BST):\n- 평균 탐색: O(log n)\n- 최악(편향 트리): O(n)\n- 균형 BST (AVL, 레드-블랙): 항상 O(log n)"
    },
    {
      subject: "소프트웨어 개발",
      question: "소프트웨어 개발 방법론 중 스크럼(Scrum)에서 사용하는 용어가 아닌 것은?",
      options: ["스프린트(Sprint)", "백로그(Backlog)", "스프린트 리뷰", "간트 차트(Gantt Chart)", "데일리 스크럼"],
      answer: 3,
      explanation: "간트 차트는 전통적인 폭포수 모델에서 주로 사용하는 일정 관리 도구입니다.\n스크럼 주요 용어: Sprint, Backlog, Daily Scrum, Sprint Review, Retrospective, Product Owner, Scrum Master"
    },

    // ─── 3과목: 데이터베이스 구축 ───
    {
      subject: "데이터베이스 구축",
      question: "SQL에서 GROUP BY를 사용할 때 조건을 지정하는 절은?",
      options: ["WHERE", "HAVING", "ORDER BY", "FROM", "JOIN"],
      answer: 1,
      explanation: "HAVING: GROUP BY 이후의 그룹에 조건 지정\nWHERE: 그룹화 전 행(row) 필터링\n실행 순서: FROM → WHERE → GROUP BY → HAVING → SELECT → ORDER BY"
    },
    {
      subject: "데이터베이스 구축",
      question: "트랜잭션의 ACID 특성 중 '격리성(Isolation)'에 대한 설명으로 옳은 것은?",
      options: [
        "트랜잭션이 완료되면 영구적으로 반영된다",
        "트랜잭션의 모든 연산이 성공하거나 모두 실패한다",
        "동시에 실행되는 트랜잭션들이 서로 영향을 주지 않는다",
        "데이터베이스는 항상 일관된 상태를 유지한다",
        "트랜잭션은 원자적 단위로 처리된다"
      ],
      answer: 2,
      explanation: "ACID 특성:\n- Atomicity(원자성): 모두 성공 or 모두 실패\n- Consistency(일관성): 일관된 상태 유지\n- Isolation(격리성): 동시 트랜잭션이 서로 영향 안 줌\n- Durability(영속성): 완료 후 영구 반영"
    },
    {
      subject: "데이터베이스 구축",
      question: "정규화 과정에서 제2정규형(2NF)을 만족하기 위해 제거해야 하는 것은?",
      options: ["이행적 함수 종속", "부분 함수 종속", "다치 종속", "조인 종속", "완전 함수 종속"],
      answer: 1,
      explanation: "정규화 단계:\n- 1NF: 원자값 (반복 그룹 제거)\n- 2NF: 부분 함수 종속 제거 (완전 함수 종속)\n- 3NF: 이행적 함수 종속 제거\n- BCNF: 모든 결정자가 후보키"
    },
    {
      subject: "데이터베이스 구축",
      question: "SQL에서 두 테이블의 조인 결과로 양쪽 테이블의 모든 행을 반환하는 조인은?",
      options: ["INNER JOIN", "LEFT OUTER JOIN", "RIGHT OUTER JOIN", "FULL OUTER JOIN", "CROSS JOIN"],
      answer: 3,
      explanation: "FULL OUTER JOIN: 양쪽 테이블의 모든 행 반환 (매칭 안 되면 NULL)\nINNER JOIN: 매칭되는 행만 반환\nLEFT/RIGHT JOIN: 한쪽 테이블의 모든 행 + 매칭 행"
    },
    {
      subject: "데이터베이스 구축",
      question: "데이터베이스 인덱스(Index)에 대한 설명으로 옳지 않은 것은?",
      options: [
        "데이터 조회 속도를 향상시킨다",
        "삽입, 수정, 삭제 시 성능이 저하될 수 있다",
        "인덱스는 항상 데이터 조회를 빠르게 한다",
        "B-Tree 구조가 일반적으로 사용된다",
        "추가적인 저장 공간이 필요하다"
      ],
      answer: 2,
      explanation: "인덱스가 오히려 느릴 때:\n- 데이터가 적은 테이블\n- 조회 결과가 전체의 20~25% 이상\n- 업데이트가 잦은 컬럼\n→ 인덱스가 항상 빠르지는 않습니다."
    },
    {
      subject: "데이터베이스 구축",
      question: "관계 데이터베이스에서 기본키(Primary Key)의 특성으로 옳은 것은?",
      options: [
        "NULL 값을 가질 수 있다",
        "중복 값을 가질 수 있다",
        "NULL을 허용하지 않으며 유일해야 한다",
        "하나의 테이블에 여러 개의 기본키를 설정할 수 있다",
        "다른 테이블을 참조할 때 사용한다"
      ],
      answer: 2,
      explanation: "기본키(Primary Key):\n- NOT NULL: NULL 불가\n- UNIQUE: 중복 불가\n- 테이블당 하나만 설정 가능\n외래키(Foreign Key): 다른 테이블의 기본키를 참조"
    },
    {
      subject: "데이터베이스 구축",
      question: "SQL의 DDL(Data Definition Language)에 해당하지 않는 것은?",
      options: ["CREATE", "ALTER", "DROP", "INSERT", "TRUNCATE"],
      answer: 3,
      explanation: "SQL 분류:\n- DDL (정의): CREATE, ALTER, DROP, TRUNCATE, RENAME\n- DML (조작): SELECT, INSERT, UPDATE, DELETE\n- DCL (제어): GRANT, REVOKE\n- TCL (트랜잭션): COMMIT, ROLLBACK, SAVEPOINT"
    },
    {
      subject: "데이터베이스 구축",
      question: "데이터베이스 뷰(View)에 대한 설명으로 옳지 않은 것은?",
      options: [
        "가상 테이블이다",
        "데이터 보안을 강화할 수 있다",
        "뷰는 자체적으로 데이터를 저장한다",
        "복잡한 쿼리를 단순화할 수 있다",
        "기본 테이블로부터 유도된다"
      ],
      answer: 2,
      explanation: "뷰(View):\n- 가상 테이블: 실제 데이터 저장 X (정의만 저장)\n- 기본 테이블로부터 유도\n- 보안, 독립성, 편의성 제공\n- 뷰를 통한 DML에는 제약이 있을 수 있음"
    },
    {
      subject: "데이터베이스 구축",
      question: "NoSQL 데이터베이스의 특징으로 옳지 않은 것은?",
      options: [
        "스키마가 고정되지 않아 유연하다",
        "수평적 확장(Scale-out)이 용이하다",
        "모든 데이터를 테이블 형식으로 저장한다",
        "대용량 데이터 처리에 적합하다",
        "MongoDB, Redis, Cassandra 등이 있다"
      ],
      answer: 2,
      explanation: "NoSQL은 테이블 형식 외에 다양한 저장 방식을 지원:\n- 문서형: MongoDB (JSON)\n- 키-값형: Redis\n- 컬럼형: Cassandra\n- 그래프형: Neo4j\n테이블 형식은 관계형 DB(RDBMS)의 특징입니다."
    },
    {
      subject: "데이터베이스 구축",
      question: "E-R 다이어그램에서 개체(Entity)를 표현하는 기호는?",
      options: ["원(Circle)", "타원(Ellipse)", "마름모(Diamond)", "직사각형(Rectangle)", "선(Line)"],
      answer: 3,
      explanation: "E-R 다이어그램 기호:\n- 직사각형: 개체(Entity)\n- 타원: 속성(Attribute)\n- 마름모: 관계(Relationship)\n- 선: 연결\n- 이중 타원: 다중값 속성"
    },
    {
      subject: "데이터베이스 구축",
      question: "데이터베이스 동시성 제어에서 발생할 수 있는 문제가 아닌 것은?",
      options: ["갱신 분실(Lost Update)", "더티 리드(Dirty Read)", "비반복적 읽기(Non-Repeatable Read)", "팬텀 읽기(Phantom Read)", "데드코드(Dead Code)"],
      answer: 4,
      explanation: "동시성 제어 이상 현상:\n- 갱신 분실: 두 트랜잭션이 같은 데이터 수정 시 하나가 손실\n- 더티 리드: 커밋 안 된 데이터 읽기\n- 비반복적 읽기: 같은 데이터를 두 번 읽을 때 다른 값\n- 팬텀 읽기: 같은 조건으로 읽을 때 행 수가 다름\n데드코드는 소프트웨어 개발 관련 용어"
    },
    {
      subject: "데이터베이스 구축",
      question: "다음 SQL의 실행 결과로 올바른 것은?\nSELECT COUNT(*) FROM 직원 WHERE 부서 = '개발' AND 급여 > 300;",
      options: [
        "직원 테이블의 전체 행 수",
        "개발 부서이거나 급여 300 초과인 직원 수",
        "개발 부서이면서 급여 300 초과인 직원 수",
        "개발 부서의 평균 급여",
        "급여가 가장 높은 직원 정보"
      ],
      answer: 2,
      explanation: "AND 조건: 두 조건을 모두 만족하는 행의 수\n→ 부서가 '개발'이면서 동시에 급여가 300 초과인 직원 수\nOR: 두 조건 중 하나라도 만족"
    },

    // ─── 4과목: 프로그래밍 언어 활용 ───
    {
      subject: "프로그래밍 언어 활용",
      question: "다음 C코드의 출력 결과는?\n#include <stdio.h>\nint main() {\n    int a = 10, b = 3;\n    printf(\"%d %d\", a/b, a%b);\n    return 0;\n}",
      options: ["3 1", "3.33 1", "3 0.33", "4 1", "3 3"],
      answer: 0,
      explanation: "정수 나눗셈: 10/3 = 3 (소수점 버림)\n나머지: 10%3 = 1\n→ 출력: 3 1"
    },
    {
      subject: "프로그래밍 언어 활용",
      question: "Python에서 리스트(List)와 튜플(Tuple)의 차이점으로 옳은 것은?",
      options: [
        "리스트는 인덱싱 불가, 튜플은 인덱싱 가능",
        "리스트는 변경 가능(mutable), 튜플은 변경 불가능(immutable)",
        "리스트는 순서 없음, 튜플은 순서 있음",
        "리스트는 정수만 저장, 튜플은 모든 타입 저장 가능",
        "리스트는 중복 불가, 튜플은 중복 가능"
      ],
      answer: 1,
      explanation: "Python 자료형:\n- List []: mutable (변경 가능)\n- Tuple (): immutable (변경 불가)\n- Set {}: 중복 불가, 순서 없음\n- Dict {k:v}: 키-값 쌍"
    },
    {
      subject: "프로그래밍 언어 활용",
      question: "Java에서 다음 코드의 실행 결과는?\nint[] arr = {1, 2, 3, 4, 5};\nSystem.out.println(arr.length);",
      options: ["4", "5", "10", "0", "컴파일 오류"],
      answer: 1,
      explanation: "Java 배열의 length: 배열의 크기(원소 수) 반환\n{1, 2, 3, 4, 5}는 5개이므로 arr.length = 5\n주의: String의 길이는 .length() 메서드"
    },
    {
      subject: "프로그래밍 언어 활용",
      question: "운영체제에서 프로세스(Process)와 스레드(Thread)의 차이로 옳은 것은?",
      options: [
        "프로세스는 메모리를 공유하지 않지만, 스레드는 같은 프로세스 내 메모리를 공유",
        "스레드는 독립적인 메모리 공간을 가짐",
        "프로세스는 스레드보다 생성 비용이 낮음",
        "스레드는 서로 다른 프로세스의 자원을 자유롭게 공유",
        "프로세스와 스레드는 동일한 개념"
      ],
      answer: 0,
      explanation: "프로세스: 독립적인 메모리 공간 (격리)\n스레드: 같은 프로세스 내 힙, 데이터, 코드 영역 공유 (스택만 독립)\n→ 스레드가 생성/전환 비용이 낮고 통신이 빠름"
    },
    {
      subject: "프로그래밍 언어 활용",
      question: "다음 Python 코드의 출력 결과는?\na = [1, 2, 3]\nb = a\nb.append(4)\nprint(a)",
      options: ["[1, 2, 3]", "[1, 2, 3, 4]", "[4]", "오류 발생", "[1, 2, 3, 4, 4]"],
      answer: 1,
      explanation: "b = a: 복사가 아닌 참조 복사 (같은 객체 가리킴)\nb.append(4)로 수정하면 a도 함께 변경됨\n독립 복사: b = a.copy() 또는 b = a[:]"
    },
    {
      subject: "프로그래밍 언어 활용",
      question: "TCP/IP 프로토콜에서 신뢰성 있는 데이터 전송을 담당하는 계층은?",
      options: ["물리 계층", "데이터 링크 계층", "네트워크 계층", "전송 계층", "응용 계층"],
      answer: 3,
      explanation: "OSI 7계층:\n1. 물리 (Physical)\n2. 데이터 링크 (Data Link)\n3. 네트워크 (Network) - IP\n4. 전송 (Transport) - TCP/UDP ← 신뢰성\n5. 세션, 6. 표현, 7. 응용"
    },
    {
      subject: "프로그래밍 언어 활용",
      question: "운영체제의 스케줄링 알고리즘 중 에이징(Aging) 기법으로 기아(Starvation) 현상을 해결하는 방법은?",
      options: [
        "FCFS (First Come First Served)",
        "SJF (Shortest Job First)",
        "우선순위 스케줄링 + 에이징",
        "Round Robin",
        "LIFO"
      ],
      answer: 2,
      explanation: "에이징(Aging): 대기 시간이 길어질수록 우선순위를 점진적으로 높여주는 기법\n→ 기아(Starvation) 현상 방지\n기아: 낮은 우선순위 프로세스가 계속 CPU를 받지 못하는 현상"
    },
    {
      subject: "프로그래밍 언어 활용",
      question: "다음 C코드에서 포인터 *p의 값은?\nint a = 5;\nint *p = &a;\n*p = 10;\nprintf(\"%d\", a);",
      options: ["5", "10", "&a의 주소값", "0", "컴파일 오류"],
      answer: 1,
      explanation: "*p = 10: p가 가리키는 변수(a)의 값을 10으로 변경\n따라서 a = 10\nprintf(\"%d\", a) → 10 출력"
    },
    {
      subject: "프로그래밍 언어 활용",
      question: "운영체제에서 교착상태(Deadlock)의 발생 조건 4가지에 해당하지 않는 것은?",
      options: ["상호 배제(Mutual Exclusion)", "점유 대기(Hold and Wait)", "비선점(No Preemption)", "순환 대기(Circular Wait)", "선점(Preemption)"],
      answer: 4,
      explanation: "교착상태 4가지 필요 조건 (코프만 조건):\n1. 상호 배제: 자원은 한 번에 하나의 프로세스만 사용\n2. 점유 대기: 자원 보유 중 다른 자원 대기\n3. 비선점: 자원 강제 빼앗기 불가\n4. 순환 대기: 프로세스 집합이 원형으로 대기"
    },
    {
      subject: "프로그래밍 언어 활용",
      question: "IPv4 주소 체계에서 서브넷 마스크 /24의 호스트 수는? (네트워크 주소와 브로드캐스트 주소 제외)",
      options: ["254", "256", "255", "128", "512"],
      answer: 0,
      explanation: "/24 = 서브넷 마스크 255.255.255.0\n호스트 비트: 8개 → 2^8 = 256\n사용 가능 호스트: 256 - 2 = 254\n(네트워크 주소 .0 과 브로드캐스트 .255 제외)"
    },
    {
      subject: "프로그래밍 언어 활용",
      question: "Java에서 인터페이스(Interface)에 대한 설명으로 옳지 않은 것은?",
      options: [
        "모든 메서드는 기본적으로 public abstract",
        "다중 구현이 가능하다",
        "인스턴스를 직접 생성할 수 없다",
        "생성자를 가질 수 있다",
        "Java 8부터 default 메서드 제공"
      ],
      answer: 3,
      explanation: "인터페이스:\n- 생성자 가질 수 없음 (인스턴스화 불가)\n- implements로 구현\n- 다중 구현 가능 (클래스는 단일 상속)\n- Java 8+: default, static 메서드 허용"
    },

    // ─── 5과목: 정보시스템 구축관리 ───
    {
      subject: "정보시스템 구축관리",
      question: "공개키 암호화(비대칭 암호화)의 특징으로 옳은 것은?",
      options: [
        "암호화와 복호화에 같은 키를 사용한다",
        "처리 속도가 대칭키보다 빠르다",
        "암호화는 공개키, 복호화는 개인키를 사용한다",
        "키 분배 문제가 대칭키보다 심각하다",
        "AES, DES가 대표적인 공개키 알고리즘이다"
      ],
      answer: 2,
      explanation: "공개키 암호화(비대칭):\n- 암호화: 수신자의 공개키\n- 복호화: 수신자의 개인키\n- 대표: RSA, ECC\n대칭키: AES, DES, 3DES (같은 키 사용, 빠름)"
    },
    {
      subject: "정보시스템 구축관리",
      question: "OWASP Top 10에 포함되는 주요 웹 보안 취약점이 아닌 것은?",
      options: ["SQL 인젝션", "XSS(크로스 사이트 스크립팅)", "인증 및 세션 관리 취약점", "DDoS 공격", "보안 설정 오류"],
      answer: 3,
      explanation: "OWASP Top 10은 소프트웨어 취약점 기반 위협입니다.\nDDoS는 인프라 공격으로 OWASP Top 10에 포함되지 않습니다.\nOWASP: SQL Injection, XSS, IDOR, 인증 취약점, 보안 설정 오류 등"
    },
    {
      subject: "정보시스템 구축관리",
      question: "클라우드 컴퓨팅 서비스 모델 중 IaaS(Infrastructure as a Service)에 대한 설명으로 옳은 것은?",
      options: [
        "소프트웨어를 인터넷을 통해 서비스로 제공",
        "플랫폼을 서비스로 제공하여 개발 환경 제공",
        "가상화된 컴퓨팅 자원(서버, 스토리지, 네트워크)을 서비스로 제공",
        "데이터베이스를 서비스로 제공",
        "보안 기능을 서비스로 제공"
      ],
      answer: 2,
      explanation: "클라우드 서비스 모델:\n- IaaS: 인프라(서버, 스토리지, 네트워크) - AWS EC2, Azure VM\n- PaaS: 플랫폼 (개발 환경) - Google App Engine, Heroku\n- SaaS: 소프트웨어 - Gmail, Office 365, Slack"
    },
    {
      subject: "정보시스템 구축관리",
      question: "정보보안의 3요소(CIA 트라이어드)에 해당하지 않는 것은?",
      options: ["기밀성(Confidentiality)", "무결성(Integrity)", "가용성(Availability)", "인증성(Authentication)", "모두 해당됨"],
      answer: 3,
      explanation: "CIA 트라이어드:\n- C (Confidentiality): 기밀성 - 인가된 사용자만 접근\n- I (Integrity): 무결성 - 데이터 변조 방지\n- A (Availability): 가용성 - 필요 시 언제든 접근 가능\n인증성(Authentication)은 별도 보안 요소"
    },
    {
      subject: "정보시스템 구축관리",
      question: "방화벽(Firewall)에 대한 설명으로 옳지 않은 것은?",
      options: [
        "네트워크 트래픽을 모니터링하고 제어한다",
        "허용/차단 규칙(정책)을 설정한다",
        "내부 네트워크와 외부 네트워크 사이에 위치한다",
        "암호화된 내부 트래픽의 악성코드를 모두 탐지할 수 있다",
        "패킷 필터링, 상태 기반 검사 등의 방식을 사용한다"
      ],
      answer: 3,
      explanation: "방화벽의 한계:\n- SSL/TLS 암호화 트래픽 내부 내용 검사 불가 (별도 SSL 검사 장비 필요)\n- 내부 공격자 탐지 어려움\n- 새로운 공격 패턴에 대응 한계\n→ IDS/IPS, WAF 등을 함께 사용해야 함"
    },
    {
      subject: "정보시스템 구축관리",
      question: "해시 함수(Hash Function)의 특성으로 옳지 않은 것은?",
      options: [
        "같은 입력은 항상 같은 출력을 생성한다",
        "출력값으로 입력값을 역으로 구하기 어렵다",
        "입력 길이에 상관없이 고정된 길이의 출력 생성",
        "해시 충돌이 완전히 발생하지 않는다",
        "데이터 무결성 검증에 활용된다"
      ],
      answer: 3,
      explanation: "해시 충돌(Collision): 서로 다른 입력이 같은 해시값을 갖는 현상\n→ 이론상 발생 가능 (비둘기집 원리)\n좋은 해시 함수: 충돌 최소화\n대표적 알고리즘: MD5, SHA-1, SHA-256"
    },
    {
      subject: "정보시스템 구축관리",
      question: "네트워크 프로토콜 중 이메일 수신에 사용되는 프로토콜은?",
      options: ["SMTP", "HTTP", "FTP", "POP3", "DNS"],
      answer: 3,
      explanation: "이메일 프로토콜:\n- SMTP (25): 메일 전송 (발신)\n- POP3 (110): 메일 수신 (서버에서 다운로드)\n- IMAP (143): 메일 수신 (서버에서 직접 관리)\n기타: HTTP(80), FTP(21), DNS(53)"
    },
    {
      subject: "정보시스템 구축관리",
      question: "소프트웨어 개발 보안에서 입력값 검증을 통해 방지할 수 있는 공격은?",
      options: ["DDoS 공격", "SQL 인젝션", "물리적 서버 침입", "패스워드 사전 공격", "중간자 공격(MITM)"],
      answer: 1,
      explanation: "SQL 인젝션 방지:\n- 입력값 검증 및 이스케이프\n- 준비된 구문(Prepared Statement) 사용\n- 최소 권한 원칙\nDDoS: 네트워크 레벨 방어 필요"
    },
    {
      subject: "정보시스템 구축관리",
      question: "프로젝트 관리에서 CPM(Critical Path Method)에 대한 설명으로 옳은 것은?",
      options: [
        "개발 비용 산정에 사용하는 기법",
        "프로젝트의 가장 긴 경로를 구하여 최소 완료 시간을 결정",
        "인적 자원 관리에 사용하는 기법",
        "소프트웨어 품질을 측정하는 기법",
        "버전 관리에 사용하는 기법"
      ],
      answer: 1,
      explanation: "CPM(Critical Path Method):\n- 프로젝트에서 가장 긴 경로 = 임계 경로\n- 임계 경로의 길이 = 프로젝트 최소 완료 시간\n- 임계 경로의 작업 지연 → 전체 일정 지연\n- PERT와 유사하나 확정적 시간 추정"
    },
    {
      subject: "정보시스템 구축관리",
      question: "소프트웨어 비용 산정 기법 중 COCOMO 모델에서 사용하는 기준은?",
      options: ["기능 점수(Function Point)", "LOC(원시 코드 라인 수)", "객체 수", "화면 수", "테스트 케이스 수"],
      answer: 1,
      explanation: "COCOMO (Constructive Cost Model):\n- LOC(Line Of Code) 기반 비용 산정\n- Boehm이 개발\n- 3가지 모드: Organic, Semi-detached, Embedded\n기능 점수(FP): 기능 규모 측정 (COCOMO와 별개)"
    }
  ],

  실기: [
    {
      subject: "데이터베이스",
      question: "관계형 데이터베이스에서 트랜잭션의 4가지 특성을 묶어서 부르는 약어를 쓰시오.",
      answer: ["ACID"],
      explanation: "ACID:\n- Atomicity (원자성)\n- Consistency (일관성)\n- Isolation (격리성)\n- Durability (지속성/영속성)"
    },
    {
      subject: "데이터베이스",
      question: "다음 설명에 해당하는 SQL 명령어를 쓰시오.\n\n'테이블의 모든 데이터를 삭제하되, 테이블 구조는 유지하며,\nDDL로 분류되어 ROLLBACK이 불가능하다.'",
      answer: ["TRUNCATE", "TRUNCATE TABLE"],
      explanation: "TRUNCATE:\n- DDL이므로 자동 COMMIT\n- DELETE보다 빠름 (테이블 전체 초기화)\n- WHERE 조건 사용 불가\nDELETE: DML, ROLLBACK 가능, WHERE 사용 가능"
    },
    {
      subject: "데이터베이스",
      question: "다음 SQL의 실행 결과를 쓰시오.\n\nSELECT 3 * 4 + 10 / 2 - 1;",
      answer: ["16"],
      explanation: "연산 순서 (우선순위):\n1. 3 * 4 = 12\n2. 10 / 2 = 5\n3. 12 + 5 - 1 = 16"
    },
    {
      subject: "데이터베이스",
      question: "데이터베이스 정규화 과정에서 부분 함수 종속을 제거한 정규형은 몇 정규형인가?",
      answer: ["제2정규형", "2NF", "2정규형", "제 2 정규형"],
      explanation: "정규화 단계:\n1NF → 2NF (부분 함수 종속 제거)\n2NF → 3NF (이행적 함수 종속 제거)\n3NF → BCNF (결정자가 후보키가 아닌 함수 종속 제거)"
    },
    {
      subject: "프로그래밍",
      question: "다음 Python 코드의 출력 결과를 쓰시오.\n\na = 'Hello'\nprint(a[::-1])",
      answer: ["olleH"],
      explanation: "슬라이싱 [시작:끝:단계]\n[::-1]: 전체를 역순으로\n'Hello' 역순 → 'olleH'"
    },
    {
      subject: "프로그래밍",
      question: "다음 C언어 코드의 출력 결과를 쓰시오.\n\nint i, sum = 0;\nfor (i = 1; i <= 10; i++) {\n    if (i % 2 == 0) sum += i;\n}\nprintf(\"%d\", sum);",
      answer: ["30"],
      explanation: "1~10 중 짝수 합계:\n2 + 4 + 6 + 8 + 10 = 30"
    },
    {
      subject: "프로그래밍",
      question: "다음 Java 코드의 출력 결과를 쓰시오.\n\nString s = \"Hello World\";\nSystem.out.println(s.substring(6));",
      answer: ["World"],
      explanation: "substring(6): 인덱스 6부터 끝까지\nH(0)e(1)l(2)l(3)o(4) (5)W(6)o(7)r(8)l(9)d(10)\n→ 'World'"
    },
    {
      subject: "프로그래밍",
      question: "다음 Python 코드의 출력 결과를 쓰시오.\n\nresult = [x**2 for x in range(5)]\nprint(result)",
      answer: ["[0, 1, 4, 9, 16]"],
      explanation: "리스트 컴프리헨션:\nrange(5) = 0, 1, 2, 3, 4\n각각 제곱: 0, 1, 4, 9, 16\n→ [0, 1, 4, 9, 16]"
    },
    {
      subject: "네트워크",
      question: "네트워크 계층 모델인 OSI 7계층에서 라우팅(Routing)을 담당하는 계층은 몇 계층인가?",
      answer: ["3계층", "3", "네트워크 계층", "3 계층"],
      explanation: "OSI 3계층 = 네트워크 계층 (Network Layer)\n- IP 주소 기반 라우팅\n- 라우터가 동작하는 계층\n- 프로토콜: IP, ICMP, OSPF, BGP"
    },
    {
      subject: "네트워크",
      question: "웹 서버와 클라이언트 사이의 통신 내용을 암호화하는 프로토콜로, HTTPS에서 사용하는 보안 프로토콜은?",
      answer: ["TLS", "SSL", "SSL/TLS"],
      explanation: "HTTPS = HTTP + TLS (Transport Layer Security)\n- 이전에는 SSL (Secure Sockets Layer) 사용\n- 현재는 TLS 1.2, TLS 1.3 사용\n- 443 포트 사용 (HTTP는 80)"
    },
    {
      subject: "운영체제",
      question: "운영체제에서 여러 프로세스가 동일한 자원을 점유하며 서로 상대방의 자원을 기다리는 상태를 무엇이라 하는가?",
      answer: ["교착상태", "데드락", "Deadlock", "Dead Lock"],
      explanation: "교착상태(Deadlock):\n발생 조건 4가지:\n1. 상호 배제\n2. 점유 대기\n3. 비선점\n4. 순환 대기\n→ 4가지 모두 성립할 때 발생"
    },
    {
      subject: "운영체제",
      question: "CPU 스케줄링에서 프로세스가 오래 기다릴수록 우선순위를 점차 높여 기아 현상을 방지하는 기법은?",
      answer: ["에이징", "Aging", "aging"],
      explanation: "에이징(Aging):\n- 오래 대기한 프로세스의 우선순위를 점진적으로 높임\n- 기아(Starvation) 현상 방지\n- 우선순위 스케줄링의 단점 보완"
    },
    {
      subject: "보안",
      question: "공개키 기반 구조(PKI)에서 인증서를 발급하고 관리하는 기관의 약어는?",
      answer: ["CA", "Certificate Authority"],
      explanation: "CA (Certificate Authority): 인증 기관\n- 디지털 인증서 발급/관리/폐지\n- PKI (Public Key Infrastructure) 핵심 구성요소\n관련 용어: RA(등록기관), CRL(인증서 폐지 목록)"
    },
    {
      subject: "보안",
      question: "악성코드의 종류 중 정상 프로그램으로 위장하여 사용자를 속이고 시스템에 침투하는 악성코드는?",
      answer: ["트로이목마", "트로이 목마", "Trojan", "Trojan Horse"],
      explanation: "트로이 목마(Trojan Horse):\n- 정상 프로그램으로 위장\n- 스스로 복제하지 않음 (바이러스/웜과 차이)\n- 백도어 설치, 개인정보 탈취 등\n바이러스: 파일에 기생, 웜: 네트워크로 자가 복제"
    },
    {
      subject: "소프트웨어공학",
      question: "소프트웨어 테스트에서 내부 구조나 코드를 보지 않고 입출력만으로 테스트하는 기법을 무엇이라 하는가?",
      answer: ["블랙박스 테스트", "블랙박스테스트", "Black Box Test", "Black-box Test"],
      explanation: "블랙박스 테스트:\n- 명세 기반 테스트\n- 내부 구조 무시\n- 기법: 동치 분할, 경계값 분석, 결정 테이블, 원인-결과 그래프\n화이트박스: 내부 코드 기반 (커버리지)"
    },
    {
      subject: "소프트웨어공학",
      question: "소프트웨어 품질 목표 중 주어진 시간 동안 주어진 기능을 오류 없이 수행하는 정도를 나타내는 것은?",
      answer: ["신뢰성", "Reliability"],
      explanation: "소프트웨어 품질 특성 (ISO 25010):\n- 신뢰성(Reliability): 오류 없이 기능 수행 정도\n- 사용성(Usability): 사용 편리성\n- 효율성(Efficiency): 성능\n- 유지보수성(Maintainability)"
    },
    {
      subject: "프로그래밍",
      question: "다음 Python 코드의 출력 결과를 쓰시오.\n\ndef factorial(n):\n    if n <= 1:\n        return 1\n    return n * factorial(n - 1)\n\nprint(factorial(5))",
      answer: ["120"],
      explanation: "재귀 함수로 팩토리얼 계산:\n5! = 5 × 4 × 3 × 2 × 1 = 120"
    },
    {
      subject: "데이터베이스",
      question: "다음 SQL에서 빈칸에 들어갈 알맞은 키워드를 쓰시오.\n\nSELECT 부서, AVG(급여) FROM 직원\nGROUP BY 부서\n( ? ) AVG(급여) >= 300;",
      answer: ["HAVING"],
      explanation: "HAVING: GROUP BY 이후 그룹에 조건 지정\nWHERE는 그룹화 전에 행 필터링\n→ 집계 함수(AVG, COUNT, SUM 등)에 조건을 줄 때는 HAVING 사용"
    },
    {
      subject: "네트워크",
      question: "다음 설명에 해당하는 네트워크 장비를 쓰시오.\n\n'OSI 3계층에서 동작하며 IP 주소를 기반으로\n서로 다른 네트워크 간 최적 경로를 결정하여 패킷을 전달하는 장비'",
      answer: ["라우터", "Router"],
      explanation: "라우터(Router):\n- OSI 3계층 (네트워크 계층) 동작\n- IP 주소 기반 경로 결정 (라우팅)\n- 라우팅 테이블 유지\n스위치: 2계층 (MAC 주소 기반), 허브: 1계층"
    },
    {
      subject: "보안",
      question: "사용자가 의도치 않게 악의적인 웹사이트에 HTTP 요청을 보내도록 유도하는 웹 취약점 공격의 약어는?",
      answer: ["CSRF", "XSRF"],
      explanation: "CSRF (Cross-Site Request Forgery): 사이트 간 요청 위조\n- 인증된 사용자를 이용해 악의적 요청 전송\n- 방어: CSRF 토큰, Same-Site 쿠키\nXSS: 악성 스크립트 삽입 (CSRF와 구별)"
    },
    {
      subject: "프로그래밍",
      question: "객체지향 프로그래밍의 4가지 특징을 모두 쓰시오.",
      answer: ["캡슐화, 상속, 다형성, 추상화", "추상화, 캡슐화, 상속, 다형성"],
      explanation: "OOP 4대 특징:\n1. 캡슐화 (Encapsulation): 데이터+메서드를 하나로\n2. 상속 (Inheritance): 부모 클래스 속성 재사용\n3. 다형성 (Polymorphism): 동일 인터페이스, 다양한 구현\n4. 추상화 (Abstraction): 불필요한 세부사항 숨김"
    },
    {
      subject: "운영체제",
      question: "다음 설명에 해당하는 메모리 관리 기법을 쓰시오.\n\n'프로세스를 일정한 크기의 페이지로 분할하고,\n물리 메모리도 동일한 크기의 프레임으로 분할하여 관리하는 기법'",
      answer: ["페이징", "Paging"],
      explanation: "페이징(Paging):\n- 논리 주소 → 물리 주소 변환 (페이지 테이블 사용)\n- 외부 단편화 없음, 내부 단편화 발생\n세그멘테이션: 가변 크기로 분할 (내부 단편화 없음, 외부 단편화 발생)"
    },
    {
      subject: "소프트웨어공학",
      question: "소프트웨어 개발 방법론 중 스크럼(Scrum)에서 반복 개발 주기를 뜻하는 용어는?",
      answer: ["스프린트", "Sprint", "sprint"],
      explanation: "스크럼(Scrum) 핵심 용어:\n- Sprint: 반복 개발 주기 (1~4주)\n- Product Backlog: 요구사항 목록\n- Sprint Backlog: 스프린트 작업 목록\n- Daily Scrum: 매일 짧은 회의"
    },
    {
      subject: "데이터베이스",
      question: "관계 데이터베이스에서 외래 키(Foreign Key)를 사용하여 테이블 간의 일관성을 유지하는 것을 무엇이라 하는가?",
      answer: ["참조 무결성", "참조무결성", "Referential Integrity"],
      explanation: "참조 무결성(Referential Integrity):\n- 외래키는 참조 테이블의 기본키 값이거나 NULL\n- 존재하지 않는 값 참조 불가\n- FOREIGN KEY 제약조건으로 구현"
    },
    {
      subject: "보안",
      question: "암호화 알고리즘 중 대칭키 암호화 방식에 해당하는 미국 표준 알고리즘의 약어를 쓰시오. (고급 암호화 표준)",
      answer: ["AES"],
      explanation: "AES (Advanced Encryption Standard):\n- 대칭키 암호화\n- 128비트 블록, 128/192/256 비트 키\n- DES의 후계자 (2001년 NIST 표준)\n공개키(비대칭): RSA, ECC"
    },
    {
      subject: "프로그래밍",
      question: "다음 C언어 코드의 출력 결과를 쓰시오.\n\nint arr[5] = {10, 20, 30, 40, 50};\nint i, sum = 0;\nfor (i = 0; i < 5; i++) sum += arr[i];\nprintf(\"%d\", sum / 5);",
      answer: ["30"],
      explanation: "배열 합계: 10+20+30+40+50 = 150\n평균: 150 / 5 = 30\n(정수 나눗셈이므로 소수점 없음)"
    },
    {
      subject: "네트워크",
      question: "전송 계층 프로토콜 중 비연결형으로 신뢰성이 낮지만 빠른 전송 속도를 제공하는 프로토콜은?",
      answer: ["UDP"],
      explanation: "UDP (User Datagram Protocol):\n- 비연결형, 신뢰성 없음\n- 빠른 전송 속도, 오버헤드 적음\n- 활용: 스트리밍, 게임, DNS\nTCP: 연결형, 신뢰성 있음, 느림"
    },
    {
      subject: "소프트웨어공학",
      question: "소프트웨어 형상관리 도구 중 분산 버전 관리 시스템으로 가장 널리 사용되는 것은?",
      answer: ["Git", "git"],
      explanation: "Git:\n- 분산 버전 관리 시스템 (DVCS)\n- Linus Torvalds가 개발 (2005)\n- GitHub, GitLab, Bitbucket 등과 연동\nSVN: 중앙 집중식 버전 관리"
    },
    {
      subject: "운영체제",
      question: "프로세스 스케줄링에서 각 프로세스에 동일한 시간 할당량(Time Quantum)을 부여하는 선점형 스케줄링 알고리즘은?",
      answer: ["라운드 로빈", "Round Robin", "RR"],
      explanation: "라운드 로빈(Round Robin):\n- 각 프로세스에 동일한 시간 할당량 부여\n- 할당 시간 초과 시 다음 프로세스로 선점\n- 시분할 시스템에 적합\n- Time Quantum이 클수록 FCFS에 가까워짐"
    },
    {
      subject: "데이터베이스",
      question: "데이터베이스에서 동시에 여러 트랜잭션이 실행될 때 데이터의 일관성을 유지하기 위한 기법으로, 자원을 잠그는 방법은?",
      answer: ["락", "로킹", "Locking", "Lock"],
      explanation: "로킹(Locking):\n- 공유 락(Shared Lock): 읽기만 허용\n- 배타 락(Exclusive Lock): 읽기/쓰기 모두 차단\n동시성 제어 기법: 로킹, 타임스탬프, 낙관적 병행 제어"
    },
    {
      subject: "프로그래밍",
      question: "다음 Python 코드에서 출력 결과를 쓰시오.\n\nd = {'a': 1, 'b': 2, 'c': 3}\nprint(sum(d.values()))",
      answer: ["6"],
      explanation: "d.values() = dict_values([1, 2, 3])\nsum([1, 2, 3]) = 6"
    },
    {
      subject: "보안",
      question: "네트워크에서 패킷을 가로채어 통신 내용을 도청하는 공격 기법은?",
      answer: ["스니핑", "Sniffing"],
      explanation: "스니핑(Sniffing):\n- 네트워크 패킷을 가로채 내용 도청\n- 패시브(수동) 공격\n- 방어: 암호화(TLS), 스위치 사용\n스푸핑: IP/MAC 주소 위조 (액티브 공격)"
    },
    {
      subject: "소프트웨어공학",
      question: "다음 설명에 해당하는 소프트웨어 테스트 단계를 쓰시오.\n\n'단위 테스트를 완료한 모듈들을 결합하여\n인터페이스와 상호 동작을 테스트하는 단계'",
      answer: ["통합 테스트", "통합테스트", "Integration Test", "Integration Testing"],
      explanation: "테스트 단계:\n1. 단위 테스트: 개별 모듈 테스트\n2. 통합 테스트: 모듈 결합 인터페이스 테스트\n3. 시스템 테스트: 전체 시스템 테스트\n4. 인수 테스트: 사용자 요구사항 만족 검증"
    },
    {
      subject: "프로그래밍",
      question: "다음 Java 코드의 출력 결과를 쓰시오.\n\nint a = 5, b = 3;\nSystem.out.println(a > b ? \"A\" : \"B\");",
      answer: ["A"],
      explanation: "삼항 연산자: 조건 ? 참인 경우 : 거짓인 경우\n5 > 3 은 true → \"A\" 출력"
    },
    {
      subject: "네트워크",
      question: "IP 주소와 MAC 주소를 매핑하는 프로토콜의 약어를 쓰시오.",
      answer: ["ARP"],
      explanation: "ARP (Address Resolution Protocol):\n- IP 주소 → MAC 주소 변환\n- 같은 네트워크 내에서 동작\n- ARP 테이블에 캐싱\nRRAP: MAC → IP 변환 (역방향)"
    },
    {
      subject: "데이터베이스",
      question: "데이터베이스에서 기본키(Primary Key)가 될 수 있는 속성 또는 속성 집합을 무엇이라 하는가?",
      answer: ["후보키", "Candidate Key"],
      explanation: "후보키(Candidate Key):\n- 유일성 + 최소성을 만족\n- 기본키로 선택되지 않은 후보키 = 대체키(Alternate Key)\n슈퍼키: 유일성만 만족 (최소성 불필요)"
    },
    {
      subject: "운영체제",
      question: "운영체제에서 파일 시스템의 단편화를 해결하기 위해 파일들을 정렬하고 빈 공간을 합치는 작업을 무엇이라 하는가?",
      answer: ["디스크 조각 모음", "조각 모음", "Defragmentation", "Defrag"],
      explanation: "디스크 조각 모음(Defragmentation):\n- 단편화된 파일을 연속 공간으로 재배치\n- 디스크 읽기/쓰기 성능 향상\n- SSD는 조각 모음이 불필요 (오히려 수명 단축)"
    },
    {
      subject: "보안",
      question: "SQL 인젝션 공격을 방지하기 위한 가장 효과적인 방법으로, 쿼리 구조와 데이터를 분리하여 처리하는 기법은?",
      answer: ["준비된 구문", "Prepared Statement", "Parameterized Query", "매개변수화 쿼리"],
      explanation: "Prepared Statement (준비된 구문):\n- 쿼리 구조를 미리 컴파일\n- 사용자 입력은 데이터로만 처리\n→ SQL 구조 변경 불가 → SQL 인젝션 방지\nORM 사용도 동일 효과"
    },
    {
      subject: "소프트웨어공학",
      question: "애자일 방법론 중 켄트 벡이 창시한, 짧은 반복 주기와 지속적인 테스트를 강조하는 방법론은?",
      answer: ["XP", "익스트림 프로그래밍", "Extreme Programming"],
      explanation: "XP (Extreme Programming):\n- 켄트 벡(Kent Beck) 창시\n- 핵심 실천 방법: TDD, 페어 프로그래밍, 리팩토링, CI\n- 짧은 릴리즈 주기\n스크럼: 켄 슈와버, 제프 서덜랜드"
    },

    // ─── 디자인패턴 (출현율 58%) ───
    {
      subject: "디자인패턴",
      question: "GoF 디자인 패턴의 3가지 분류를 쓰시오.",
      answer: ["생성, 구조, 행위", "생성패턴, 구조패턴, 행위패턴"],
      explanation: "GoF(Gang of Four) 디자인 패턴 3분류:\n생성(Creational): 객체 생성 → 싱글턴, 팩토리메서드, 추상팩토리, 빌더, 프로토타입\n구조(Structural): 구조 구성 → 어댑터, 브릿지, 컴포지트, 데코레이터, 퍼사드, 플라이웨이트, 프록시\n행위(Behavioral): 책임 분배 → 옵저버, 스트래티지, 커맨드, 반복자, 상태, 템플릿메서드 등"
    },
    {
      subject: "디자인패턴",
      question: "하나의 클래스 인스턴스만 존재하도록 보장하고 전역 접근점을 제공하는 디자인 패턴은?",
      answer: ["싱글턴", "Singleton", "싱글톤"],
      explanation: "Singleton 패턴:\n- 인스턴스를 오직 1개만 생성\n- private 생성자 + static getInstance()\n- 생성 패턴\n자주 출제: 코딩에서 getInstance() 호출 시 같은 객체임을 확인하는 문제 등장"
    },
    {
      subject: "디자인패턴",
      question: "기존 코드를 수정하지 않고 새로운 기능을 객체에 동적으로 추가하는 디자인 패턴은?",
      answer: ["데코레이터", "Decorator"],
      explanation: "Decorator 패턴 (구조 패턴):\n- 객체를 래퍼(Wrapper)로 감싸 기능 확장\n- 상속 대신 합성(Composition) 사용\n- 런타임에 기능 추가 가능\n유사: 프록시(대리), 어댑터(변환), 퍼사드(단순화)"
    },
    {
      subject: "디자인패턴",
      question: "옵저버(Observer) 패턴을 설명하시오.",
      answer: ["객체 상태 변화 시 의존 객체들에게 자동 통보하는 패턴", "일대다 의존관계 패턴"],
      explanation: "Observer 패턴 (행위 패턴):\n- 주체(Subject)의 상태 변화 → 모든 Observer에게 자동 알림\n- 일대다(1:N) 의존 관계\n- 이벤트 시스템, MVC의 View 갱신에 활용\n예: 유튜브 구독자 알림, 주식 시세 알림"
    },
    {
      subject: "디자인패턴",
      question: "팩토리 메서드(Factory Method) 패턴과 추상 팩토리(Abstract Factory) 패턴의 차이를 설명하시오.",
      answer: ["팩토리메서드: 단일 제품 객체 생성을 서브클래스에 위임, 추상팩토리: 연관된 객체 군(패밀리) 생성", "팩토리메서드 단일, 추상팩토리 군"],
      explanation: "Factory Method: 하나의 제품 생성 메서드를 서브클래스가 결정\nAbstract Factory: 관련 제품 군 전체를 함께 생성하는 인터페이스 제공\n예) Abstract Factory: UI테마(버튼+체크박스+텍스트박스)를 Windows/Mac 버전으로 한꺼번에 교체"
    },

    // ─── 암호화 (출현율 47%) ───
    {
      subject: "보안",
      question: "대칭키 암호화 알고리즘과 비대칭키 암호화 알고리즘의 대표 예를 각각 2가지씩 쓰시오.",
      answer: ["대칭키: AES, DES / 비대칭키: RSA, ECC", "대칭:AES/DES/SEED/ARIA, 비대칭:RSA/ECC/DSA"],
      explanation: "대칭키(비밀키) 암호화:\n- 암·복호화에 동일한 키 사용\n- 빠름, 키 배포 어려움\n- AES(현재 표준), DES(구식), 3DES, SEED(국내), ARIA(국내)\n\n비대칭키(공개키) 암호화:\n- 공개키로 암호화, 개인키로 복호화\n- 느림, 키 배포 용이\n- RSA(가장 많이 사용), ECC, DSA"
    },
    {
      subject: "보안",
      question: "해시(Hash) 함수의 특징과 대표 알고리즘 2가지를 쓰시오.",
      answer: ["단방향 암호화, SHA-256/MD5", "일방향 함수, SHA시리즈, MD5"],
      explanation: "해시 함수 특징:\n- 단방향(One-way): 복호화 불가\n- 동일 입력 → 항상 동일 출력\n- 눈사태 효과: 입력 1비트 변경 → 출력 완전히 달라짐\n- 충돌 저항성\n\n알고리즘:\n- SHA 시리즈: SHA-1(160bit), SHA-256, SHA-512\n- MD5(128bit): 취약점 발견되어 보안용 비권장\n용도: 패스워드 저장, 무결성 검증"
    },
    {
      subject: "보안",
      question: "접근통제 정책 3가지(DAC, MAC, RBAC)를 설명하시오.",
      answer: ["DAC: 소유자가 접근권한 설정, MAC: 보안등급 기반 강제 통제, RBAC: 역할 기반 접근통제", "임의/강제/역할기반"],
      explanation: "DAC (Discretionary Access Control, 임의 접근통제):\n- 자원 소유자가 접근 권한 직접 설정\n- 유연하지만 관리 어려움\n\nMAC (Mandatory Access Control, 강제 접근통제):\n- 보안 등급과 규칙에 따라 시스템이 강제 통제\n- 군사·정부 기관에 사용\n\nRBAC (Role-Based Access Control, 역할 기반 접근통제):\n- 사용자의 역할(Role)에 따라 권한 부여\n- 기업 환경에서 가장 많이 사용"
    },
    {
      subject: "보안",
      question: "주요 사이버 공격 기법 중 '스니핑', '스푸핑', 'XSS'를 각각 간략히 설명하시오.",
      answer: ["스니핑: 패킷 도청, 스푸핑: 위장/신분위조, XSS: 악성 스크립트 삽입", "도청/위조/스크립트삽입"],
      explanation: "스니핑(Sniffing): 네트워크 패킷을 몰래 가로채 도청\n스푸핑(Spoofing): IP·MAC 등을 위조하여 다른 사람인 척 속임\nXSS(Cross-Site Scripting): 웹페이지에 악성 스크립트 삽입 → 사용자 쿠키/세션 탈취\nCSRF: 로그인된 사용자가 의도치 않은 요청을 보내도록 유도"
    },

    // ─── 응집도/결합도 (출현율 42%) ───
    {
      subject: "소프트웨어공학",
      question: "응집도(Cohesion)가 높은 순서대로 7가지를 나열하시오.",
      answer: ["기능적, 순차적, 교환적, 절차적, 시간적, 논리적, 우연적", "기순교절시논우"],
      explanation: "응집도 높은 순 (좋음 → 나쁨):\n기능적(Functional) > 순차적(Sequential) > 교환적(Communicational) > 절차적(Procedural) > 시간적(Temporal) > 논리적(Logical) > 우연적(Coincidental)\n\n암기법: 기순교절시논우\n응집도 높을수록 모듈 재사용성·유지보수성 향상"
    },
    {
      subject: "소프트웨어공학",
      question: "결합도(Coupling)가 낮은 순서대로 6가지를 나열하시오.",
      answer: ["자료, 스탬프, 제어, 외부, 공통, 내용", "자스제외공내"],
      explanation: "결합도 낮은 순 (좋음 → 나쁨):\n자료(Data) > 스탬프(Stamp) > 제어(Control) > 외부(External) > 공통(Common) > 내용(Content)\n\n암기법: 자스제외공내\n결합도 낮을수록 독립적이고 수정 영향 최소화"
    },
    {
      subject: "소프트웨어공학",
      question: "Fan-in과 Fan-out이 무엇인지 설명하고, 좋은 설계 방향을 쓰시오.",
      answer: ["Fan-in: 해당 모듈을 호출하는 수(높을수록 좋음), Fan-out: 해당 모듈이 호출하는 수(낮을수록 좋음)", "Fan-in 높게 Fan-out 낮게"],
      explanation: "Fan-in: 해당 모듈을 호출하는 상위 모듈의 수\n→ 높을수록 재사용성 높음 (좋음)\n\nFan-out: 해당 모듈이 호출하는 하위 모듈의 수\n→ 낮을수록 복잡도 낮음 (좋음)\n\n좋은 설계: Fan-in ↑, Fan-out ↓"
    },
    {
      subject: "소프트웨어공학",
      question: "소프트웨어 아키텍처 패턴 중 '파이프-필터(Pipe-Filter)' 패턴을 설명하시오.",
      answer: ["데이터를 파이프로 연결된 필터를 통해 순차 처리하는 패턴", "데이터 스트림을 필터로 변환"],
      explanation: "파이프-필터(Pipe-Filter) 패턴:\n- 데이터 스트림을 각 단계(필터)가 변환\n- 필터들은 파이프로 연결\n- 각 필터는 독립적으로 동작\n예: Unix 명령어 파이프(ls | grep | sort)\n예: 컴파일러(어휘분석→구문분석→의미분석→코드생성)"
    },

    // ─── 트랜잭션/ACID (출현율 32%) ───
    {
      subject: "데이터베이스",
      question: "트랜잭션의 ACID 특성 4가지를 쓰시오.",
      answer: ["원자성, 일관성, 격리성, 지속성", "Atomicity, Consistency, Isolation, Durability"],
      explanation: "트랜잭션 ACID:\nA - 원자성(Atomicity): 전부 실행 또는 전부 취소 (Commit/Rollback)\nC - 일관성(Consistency): 실행 전후 DB 일관성 유지\nI - 격리성(Isolation): 동시 실행 트랜잭션 간 서로 영향 없음\nD - 지속성(Durability): 성공 완료 시 결과 영구 반영"
    },
    {
      subject: "데이터베이스",
      question: "데이터베이스 회복 기법 중 REDO와 UNDO를 설명하시오.",
      answer: ["REDO: 완료된 트랜잭션 재실행, UNDO: 미완료 트랜잭션 취소", "재수행/취소"],
      explanation: "REDO (재수행):\n- 완료(Commit)된 트랜잭션을 재실행\n- 장애 발생 시 이미 커밋된 변경사항 복원\n- 포워드 회복\n\nUNDO (취소):\n- 미완료(Rollback) 트랜잭션을 취소\n- 장애 발생 시 커밋 안 된 변경사항 원상복구\n- 백워드 회복"
    },
    {
      subject: "데이터베이스",
      question: "병행 제어(Concurrency Control)의 목적과 대표적인 기법 2가지를 쓰시오.",
      answer: ["다중 트랜잭션 동시 실행 시 일관성 유지, 로킹/타임스탬프", "직렬화 보장, 로킹/낙관적 병행제어"],
      explanation: "병행 제어 목적: 여러 트랜잭션을 동시 실행해도 직렬 실행과 동일한 결과 보장\n\n기법:\n로킹(Locking): 자원에 잠금을 걸어 독점 사용\n- 공유 락(S-Lock): 읽기 허용\n- 배타 락(X-Lock): 읽기·쓰기 모두 독점\n\n타임스탬프(Timestamp): 트랜잭션 시작 순서대로 우선순위 부여\n\n낙관적 병행제어: 충돌 거의 없다고 가정, 검증 단계에서만 처리"
    },
    {
      subject: "데이터베이스",
      question: "데이터베이스 이상현상(Anomaly) 3가지를 쓰시오.",
      answer: ["삽입 이상, 삭제 이상, 갱신 이상", "삽입/삭제/수정 이상"],
      explanation: "DB 이상현상 (데이터 중복으로 발생):\n\n삽입 이상(Insertion Anomaly):\n필요 없는 데이터를 함께 삽입해야 하는 경우\n\n삭제 이상(Deletion Anomaly):\n한 데이터 삭제 시 연관된 필요한 데이터까지 삭제\n\n갱신 이상(Update Anomaly):\n중복 데이터 일부만 수정되어 불일치 발생\n\n해결: 정규화를 통해 이상현상 제거"
    }
  ],

  // ─── 코딩 문제 (출력 결과 맞추기) ───
  코딩: [

    // ── C언어 ──
    {
      subject: "C언어", lang: "c",
      question: "다음 C 코드의 출력 결과를 쓰시오.",
      code:
`#include <stdio.h>
int main() {
    int i;
    for (i = 1; i <= 5; i++) {
        if (i % 2 != 0)
            printf("%d ", i);
    }
    return 0;
}`,
      answer: ["1 3 5"],
      explanation: "i가 1~5 반복, 홀수(i%2≠0)만 출력\n1, 3, 5 → '1 3 5 ' (마지막 공백 포함도 정답 처리)"
    },
    {
      subject: "C언어", lang: "c",
      question: "다음 C 코드의 출력 결과를 쓰시오.",
      code:
`#include <stdio.h>
int main() {
    int a = 5, b = 10;
    a = a + b;
    b = a - b;
    a = a - b;
    printf("%d %d", a, b);
    return 0;
}`,
      answer: ["10 5"],
      explanation: "XOR 없이 swap 하는 방법:\na = 5+10 = 15\nb = 15-10 = 5\na = 15-5 = 10\n→ a=10, b=5"
    },
    {
      subject: "C언어", lang: "c",
      question: "다음 C 코드의 출력 결과를 쓰시오.",
      code:
`#include <stdio.h>
int factorial(int n) {
    if (n == 1) return 1;
    return n * factorial(n - 1);
}
int main() {
    printf("%d", factorial(4));
    return 0;
}`,
      answer: ["24"],
      explanation: "factorial(4) = 4 × factorial(3)\n= 4 × 3 × 2 × 1 = 24"
    },
    {
      subject: "C언어", lang: "c",
      question: "다음 C 코드의 출력 결과를 쓰시오.",
      code:
`#include <stdio.h>
int main() {
    int arr[] = {1, 2, 3, 4, 5};
    int sum = 0, i;
    for (i = 0; i < 5; i++)
        sum += arr[i];
    printf("%d", sum / 5);
    return 0;
}`,
      answer: ["3"],
      explanation: "합계: 1+2+3+4+5 = 15\n15 / 5 = 3 (정수 나눗셈)"
    },
    {
      subject: "C언어", lang: "c",
      question: "다음 C 코드의 출력 결과를 쓰시오.",
      code:
`#include <stdio.h>
int main() {
    int x = 3;
    printf("%d %d %d", x++, ++x, x);
    return 0;
}`,
      answer: ["3 5 5"],
      explanation: "x++ : 출력 후 증가 → 3 출력, x=4\n++x : 먼저 증가 후 출력 → x=5, 5 출력\nx   : 현재 값 5 출력\n→ 3 5 5"
    },
    {
      subject: "C언어", lang: "c",
      question: "다음 C 코드의 출력 결과를 쓰시오.",
      code:
`#include <stdio.h>
int main() {
    int i, j;
    for (i = 1; i <= 3; i++) {
        for (j = 1; j <= i; j++) {
            printf("*");
        }
        printf("\n");
    }
    return 0;
}`,
      answer: ["*\n**\n***", "*\n**\n***\n"],
      explanation: "이중 for문: i=1일 때 *1개, i=2일 때 *2개, i=3일 때 *3개\n*\n**\n***"
    },
    {
      subject: "C언어", lang: "c",
      question: "다음 C 코드의 출력 결과를 쓰시오.",
      code:
`#include <stdio.h>
int main() {
    int n = 10;
    while (n > 0) {
        n -= 3;
    }
    printf("%d", n);
    return 0;
}`,
      answer: ["-2"],
      explanation: "10→7→4→1→-2 (1-3=-2, -2>0 거짓이므로 종료)\n최종 n = -2"
    },
    {
      subject: "C언어", lang: "c",
      question: "다음 C 코드의 출력 결과를 쓰시오.",
      code:
`#include <stdio.h>
int main() {
    int a = 7;
    printf("%d %d %d", a & 5, a | 5, a ^ 5);
    return 0;
}`,
      answer: ["5 7 2"],
      explanation: "비트 연산 (a=7=0111, b=5=0101):\n& (AND): 0101 = 5\n| (OR):  0111 = 7\n^ (XOR): 0010 = 2\n→ 5 7 2"
    },
    {
      subject: "C언어", lang: "c",
      question: "다음 C 코드의 출력 결과를 쓰시오.",
      code:
`#include <stdio.h>
int main() {
    int i = 0, sum = 0;
    do {
        i++;
        sum += i;
    } while (i < 4);
    printf("%d", sum);
    return 0;
}`,
      answer: ["10"],
      explanation: "do-while: 먼저 실행 후 조건 확인\ni=1 sum=1 / i=2 sum=3 / i=3 sum=6 / i=4 sum=10 → 4<4 거짓\n→ 10"
    },
    {
      subject: "C언어", lang: "c",
      question: "다음 C 코드의 출력 결과를 쓰시오.",
      code:
`#include <stdio.h>
void swap(int *a, int *b) {
    int temp = *a;
    *a = *b;
    *b = temp;
}
int main() {
    int x = 10, y = 20;
    swap(&x, &y);
    printf("%d %d", x, y);
    return 0;
}`,
      answer: ["20 10"],
      explanation: "포인터로 call-by-reference swap:\ntemp=10, *a=20, *b=10\nx=20, y=10"
    },
    {
      subject: "C언어", lang: "c",
      question: "다음 C 코드의 출력 결과를 쓰시오.",
      code:
`#include <stdio.h>
int main() {
    int a = 10, b = 3;
    printf("%d %d %.1f", a/b, a%b, (float)a/b);
    return 0;
}`,
      answer: ["3 1 3.3"],
      explanation: "a/b = 10/3 = 3 (정수)\na%b = 10%3 = 1\n(float)a/b = 3.333... → %.1f → 3.3"
    },
    {
      subject: "C언어", lang: "c",
      question: "다음 C 코드의 출력 결과를 쓰시오.",
      code:
`#include <stdio.h>
int main() {
    int i;
    for (i = 0; i < 10; i += 2) {
        if (i == 6) break;
        printf("%d ", i);
    }
    return 0;
}`,
      answer: ["0 2 4"],
      explanation: "i=0,2,4 출력 후 i=6일 때 break\n→ 0 2 4"
    },

    // ── Python ──
    {
      subject: "Python", lang: "python",
      question: "다음 Python 코드의 출력 결과를 쓰시오.",
      code:
`a = [1, 2, 3, 4, 5]
print(a[1:4])`,
      answer: ["[2, 3, 4]"],
      explanation: "슬라이싱 [1:4]: 인덱스 1 이상 4 미만\n→ [2, 3, 4]"
    },
    {
      subject: "Python", lang: "python",
      question: "다음 Python 코드의 출력 결과를 쓰시오.",
      code:
`s = "Hello World"
print(s.upper())
print(s.lower())`,
      answer: ["HELLO WORLD\nhello world", "HELLO WORLD\r\nhello world"],
      explanation: "upper(): 모두 대문자\nlower(): 모두 소문자\n→ HELLO WORLD\n   hello world"
    },
    {
      subject: "Python", lang: "python",
      question: "다음 Python 코드의 출력 결과를 쓰시오.",
      code:
`x = 10
def change():
    global x
    x = 20

change()
print(x)`,
      answer: ["20"],
      explanation: "global 키워드로 전역변수 x를 수정\nchange() 호출 후 x = 20"
    },
    {
      subject: "Python", lang: "python",
      question: "다음 Python 코드의 출력 결과를 쓰시오.",
      code:
`result = 0
for i in range(1, 6):
    result += i
print(result)`,
      answer: ["15"],
      explanation: "range(1,6) = 1,2,3,4,5\n1+2+3+4+5 = 15"
    },
    {
      subject: "Python", lang: "python",
      question: "다음 Python 코드의 출력 결과를 쓰시오.",
      code:
`d = {'a': 1, 'b': 2, 'c': 3}
d['b'] = 10
del d['c']
print(d)`,
      answer: ["{'a': 1, 'b': 10}"],
      explanation: "d['b'] = 10: b 값 갱신\ndel d['c']: c 키 삭제\n→ {'a': 1, 'b': 10}"
    },
    {
      subject: "Python", lang: "python",
      question: "다음 Python 코드의 출력 결과를 쓰시오.",
      code:
`nums = [3, 1, 4, 1, 5, 9, 2, 6]
nums.sort()
print(nums[:3])`,
      answer: ["[1, 1, 2]"],
      explanation: "sort(): [1,1,2,3,4,5,6,9]\n[:3]: 앞 3개 → [1, 1, 2]"
    },
    {
      subject: "Python", lang: "python",
      question: "다음 Python 코드의 출력 결과를 쓰시오.",
      code:
`def add(a, b=5):
    return a + b

print(add(3))
print(add(3, 7))`,
      answer: ["8\n10"],
      explanation: "기본값 매개변수:\nadd(3) = 3+5 = 8\nadd(3,7) = 3+7 = 10"
    },
    {
      subject: "Python", lang: "python",
      question: "다음 Python 코드의 출력 결과를 쓰시오.",
      code:
`a = [1, 2, 3]
b = a[:]
b.append(4)
print(a)
print(b)`,
      answer: ["[1, 2, 3]\n[1, 2, 3, 4]"],
      explanation: "a[:]: 얕은 복사 → 별개 객체\nb에 4 추가해도 a 영향 없음\na: [1,2,3], b: [1,2,3,4]"
    },
    {
      subject: "Python", lang: "python",
      question: "다음 Python 코드의 출력 결과를 쓰시오.",
      code:
`n = 16
count = 0
while n > 1:
    n //= 2
    count += 1
print(count)`,
      answer: ["4"],
      explanation: "16→8→4→2→1 (4번 나눔)\n16//2=8, 8//2=4, 4//2=2, 2//2=1\ncount = 4"
    },
    {
      subject: "Python", lang: "python",
      question: "다음 Python 코드의 출력 결과를 쓰시오.",
      code:
`words = ['banana', 'apple', 'cherry']
words.sort(key=lambda x: len(x))
print(words)`,
      answer: ["['apple', 'banana', 'cherry']"],
      explanation: "len 기준 정렬:\napple(5), banana(6), cherry(6)\n→ ['apple', 'banana', 'cherry']"
    },
    {
      subject: "Python", lang: "python",
      question: "다음 Python 코드의 출력 결과를 쓰시오.",
      code:
`class Animal:
    def __init__(self, name):
        self.name = name
    def speak(self):
        return f"{self.name} says hello"

a = Animal("Dog")
print(a.speak())`,
      answer: ["Dog says hello"],
      explanation: "f-string: {self.name} → 'Dog'\n→ 'Dog says hello'"
    },
    {
      subject: "Python", lang: "python",
      question: "다음 Python 코드의 출력 결과를 쓰시오.",
      code:
`result = list(filter(lambda x: x % 2 == 0, range(1, 10)))
print(result)`,
      answer: ["[2, 4, 6, 8]"],
      explanation: "filter: 조건이 참인 요소만 추출\nrange(1,10)에서 짝수: 2,4,6,8\n→ [2, 4, 6, 8]"
    },
    {
      subject: "Python", lang: "python",
      question: "다음 Python 코드의 출력 결과를 쓰시오.",
      code:
`stack = []
stack.append(1)
stack.append(2)
stack.append(3)
stack.pop()
print(stack)`,
      answer: ["[1, 2]"],
      explanation: "리스트를 스택으로 사용:\nappend: push (1→2→3)\npop(): LIFO → 3 제거\n→ [1, 2]"
    },

    // ── Java ──
    {
      subject: "Java", lang: "java",
      question: "다음 Java 코드의 출력 결과를 쓰시오.",
      code:
`public class Main {
    public static void main(String[] args) {
        int a = 10, b = 3;
        System.out.println(a / b);
        System.out.println(a % b);
    }
}`,
      answer: ["3\n1"],
      explanation: "정수 나눗셈: 10/3 = 3\n나머지: 10%3 = 1\nprintln은 줄바꿈 포함"
    },
    {
      subject: "Java", lang: "java",
      question: "다음 Java 코드의 출력 결과를 쓰시오.",
      code:
`public class Main {
    public static void main(String[] args) {
        String s1 = "Hello";
        String s2 = "Hello";
        String s3 = new String("Hello");
        System.out.println(s1 == s2);
        System.out.println(s1 == s3);
        System.out.println(s1.equals(s3));
    }
}`,
      answer: ["true\nfalse\ntrue"],
      explanation: "s1==s2: 문자열 리터럴은 String Pool 공유 → true\ns1==s3: new로 생성 → 다른 객체 → false\nequals(): 값 비교 → true"
    },
    {
      subject: "Java", lang: "java",
      question: "다음 Java 코드의 출력 결과를 쓰시오.",
      code:
`public class Main {
    static int count = 0;
    static void increment() {
        count++;
    }
    public static void main(String[] args) {
        for (int i = 0; i < 5; i++) {
            increment();
        }
        System.out.println(count);
    }
}`,
      answer: ["5"],
      explanation: "static 변수는 클래스 공유\nincrement() 5번 호출 → count = 5"
    },
    {
      subject: "Java", lang: "java",
      question: "다음 Java 코드의 출력 결과를 쓰시오.",
      code:
`public class Main {
    public static void main(String[] args) {
        int[] arr = {5, 3, 1, 4, 2};
        int max = arr[0];
        for (int v : arr) {
            if (v > max) max = v;
        }
        System.out.println(max);
    }
}`,
      answer: ["5"],
      explanation: "향상된 for문으로 최댓값 탐색\n{5,3,1,4,2}에서 최댓값 = 5"
    },
    {
      subject: "Java", lang: "java",
      question: "다음 Java 코드의 출력 결과를 쓰시오.",
      code:
`public class Main {
    public static void main(String[] args) {
        int n = 2;
        int result = 1;
        for (int i = 1; i <= 8; i++) {
            result *= n;
        }
        System.out.println(result);
    }
}`,
      answer: ["256"],
      explanation: "2^8 계산:\n2×2×2×2×2×2×2×2 = 256"
    },
    {
      subject: "Java", lang: "java",
      question: "다음 Java 코드의 출력 결과를 쓰시오.",
      code:
`public class Main {
    public static void main(String[] args) {
        String str = "Hello, World!";
        System.out.println(str.indexOf("World"));
        System.out.println(str.length());
    }
}`,
      answer: ["7\n13"],
      explanation: "indexOf(\"World\"): H(0)e(1)l(2)l(3)o(4),(5) (6)W(7) → 7\nlength(): 'Hello, World!' = 13자"
    },
    {
      subject: "Java", lang: "java",
      question: "다음 Java 코드의 출력 결과를 쓰시오.",
      code:
`public class Main {
    public static void main(String[] args) {
        int a = 5, b = 10, c = 3;
        int result = (a > b) ? a : (b > c) ? b : c;
        System.out.println(result);
    }
}`,
      answer: ["10"],
      explanation: "중첩 삼항연산자:\na>b → 5>10 거짓\nb>c → 10>3 참 → b=10\n→ 10"
    },

    // ── SQL ──
    {
      subject: "SQL", lang: "sql",
      question: "다음 SQL 실행 결과 출력되는 행의 수를 쓰시오.\n(학생 테이블에 총 100건, 이름이 NULL인 경우 5건 있음)",
      code:
`SELECT COUNT(이름) FROM 학생;`,
      answer: ["95"],
      explanation: "COUNT(컬럼명): NULL을 제외하고 카운트\nCOUNT(*): NULL 포함 모든 행 카운트\n100 - 5(NULL) = 95"
    },
    {
      subject: "SQL", lang: "sql",
      question: "다음 SQL의 실행 순서를 완성하시오.\n빈칸에 알맞은 절을 쓰시오.\n\nFROM → ( ? ) → GROUP BY → HAVING → SELECT → ORDER BY",
      code:
`SELECT 부서, COUNT(*) AS 인원
FROM 직원
WHERE 급여 > 200
GROUP BY 부서
HAVING COUNT(*) >= 3
ORDER BY 인원 DESC;`,
      answer: ["WHERE"],
      explanation: "SQL 실행 순서:\nFROM → WHERE → GROUP BY → HAVING → SELECT → ORDER BY\nWHERE는 그룹화 전 행 필터링"
    },
    {
      subject: "SQL", lang: "sql",
      question: "다음 SQL에서 빈칸에 들어갈 키워드를 쓰시오.\n(부서별 급여 평균이 300 이상인 부서만 조회)",
      code:
`SELECT 부서, AVG(급여) AS 평균급여
FROM 직원
GROUP BY 부서
(  ?  ) AVG(급여) >= 300;`,
      answer: ["HAVING"],
      explanation: "집계 함수 결과에 조건: HAVING\nWHERE는 집계 전 행 조건, HAVING은 집계 후 그룹 조건"
    },

    // ── 추가 SQL 코딩 ──
    {
      subject: "SQL", lang: "sql",
      question: "다음 SQL의 실행 결과에서 RANK() 값을 쓰시오.\n(점수 테이블: 홍길동=90, 이순신=95, 강감찬=90)\n\n이순신의 RANK()는?",
      code:
`SELECT 이름, 점수,
       RANK() OVER (ORDER BY 점수 DESC) AS 순위
FROM 점수;`,
      answer: ["1"],
      explanation: "RANK(): 동점자에게 같은 순위, 다음 순위 건너뜀\n95점 이순신 → 1위\n90점 홍길동, 강감찬 → 공동 2위 → 다음은 4위\nDENSE_RANK(): 건너뛰지 않음 → 다음이 3위"
    },
    {
      subject: "SQL", lang: "sql",
      question: "다음 SQL에서 서브쿼리를 이용해 급여가 평균보다 높은 직원을 조회한다. 빈칸을 완성하시오.",
      code:
`SELECT 이름, 급여
FROM 직원
WHERE 급여 > ( SELECT (  ?  )(급여) FROM 직원 );`,
      answer: ["AVG"],
      explanation: "AVG(): 평균값 집계 함수\n→ 서브쿼리 SELECT AVG(급여) FROM 직원\n→ 전체 평균보다 급여가 높은 직원 조회"
    },
    {
      subject: "Python", lang: "python",
      question: "다음 Python 코드의 출력 결과를 쓰시오.",
      code:
`class Parent:
    def greet(self):
        return "Hello from Parent"

class Child(Parent):
    def greet(self):
        return "Hello from Child"

obj = Child()
print(obj.greet())`,
      answer: ["Hello from Child"],
      explanation: "메서드 오버라이딩(Overriding):\nChild 클래스가 greet() 재정의\n→ Child 인스턴스는 Child의 메서드 호출\n→ 'Hello from Child'"
    },
    {
      subject: "Python", lang: "python",
      question: "다음 Python 코드의 출력 결과를 쓰시오.",
      code:
`try:
    result = 10 / 0
except ZeroDivisionError:
    print("Division error")
except Exception:
    print("Other error")
finally:
    print("Done")`,
      answer: ["Division error\nDone"],
      explanation: "10/0 → ZeroDivisionError 발생\nexcept ZeroDivisionError 실행 → 'Division error'\nfinally는 항상 실행 → 'Done'"
    },
    {
      subject: "C언어", lang: "c",
      question: "다음 C 코드의 출력 결과를 쓰시오.",
      code:
`#include <stdio.h>
int fib(int n) {
    if (n <= 1) return n;
    return fib(n-1) + fib(n-2);
}
int main() {
    printf("%d", fib(6));
    return 0;
}`,
      answer: ["8"],
      explanation: "피보나치 수열: fib(6)\n0,1,1,2,3,5,8 → 인덱스 6 = 8\nfib(6) = fib(5)+fib(4) = 5+3 = 8"
    },
    {
      subject: "Java", lang: "java",
      question: "다음 Java 코드의 출력 결과를 쓰시오.",
      code:
`public class Main {
    static int add(int a, int b) { return a + b; }
    static double add(double a, double b) { return a + b; }

    public static void main(String[] args) {
        System.out.println(add(3, 4));
        System.out.println(add(1.5, 2.5));
    }
}`,
      answer: ["7\n4.0"],
      explanation: "메서드 오버로딩(Overloading):\nadd(3,4) → int 버전 → 7\nadd(1.5,2.5) → double 버전 → 4.0"
    },

    // ── 실기 PDF 기출 - C언어 (제어문/포인터/구조체/함수) ──
    {
      subject: "C언어", lang: "c",
      question: "다음 C 코드의 출력 결과를 쓰시오. (6부터 30 사이 완전수 개수 출력)",
      code:
`#include <stdio.h>
main() {
    int s, el = 0;
    for (int i = 6; i <= 30; i++) {
        s = 0;
        for (int j = 1; j <= i / 2; j++)
            if (i % j == 0)
                s = s + j;
        if (s == i)
            el++;
    }
    printf("%d", el);
}`,
      answer: ["2"],
      explanation: "완전수(자신을 제외한 약수의 합 = 자신):\n6(1+2+3=6), 28(1+2+4+7+14=28)\n6~30 범위에서 2개"
    },
    {
      subject: "C언어", lang: "c",
      question: "다음 C 코드의 출력 결과를 쓰시오. (1234의 역순 출력)",
      code:
`#include <stdio.h>
int main() {
    int number = 1234;
    int div = 10, result = 0;
    while (number != 0) {
        result = result * div;
        result = result + number % div;
        number = number / div;
    }
    printf("%d", result);
}`,
      answer: ["4321"],
      explanation: "숫자를 역순으로 출력:\n1234 → 1회: result=4, number=123\n2회: result=43, number=12\n3회: result=432, number=1\n4회: result=4321, number=0"
    },
    {
      subject: "C언어", lang: "c",
      question: "다음 C 코드의 출력 결과를 쓰시오. (포인터로 문자열 길이 계산)",
      code:
`#include <stdio.h>
int len(char* p);
int main() {
    char* p1 = "2022";
    char* p2 = "202207";
    int a = len(p1);
    int b = len(p2);
    printf("%d", a + b);
}
int len(char* p) {
    int r = 0;
    while (*p != '\\0') {
        p++;
        r++;
    }
    return r;
}`,
      answer: ["10"],
      explanation: "len(\"2022\") = 4, len(\"202207\") = 6\na + b = 4 + 6 = 10"
    },
    {
      subject: "C언어", lang: "c",
      question: "다음 C 코드의 출력 결과를 쓰시오. (포인터 배열 연산)",
      code:
`#include <stdio.h>
int main() {
    int a[] = {0, 2, 4, 8};
    int *p, b[3], sum = 0;
    for (int i = 1; i <= 3; i++) {
        p = a + i;
        b[i-1] = *p - a[i-1];
        sum += b[i-1] + a[i];
    }
    printf("%d", sum);
}`,
      answer: ["22"],
      explanation: "i=1: b[0]=a[1]-a[0]=2, sum+=2+2=4\ni=2: b[1]=a[2]-a[1]=2, sum+=2+4=10\ni=3: b[2]=a[3]-a[2]=4, sum+=4+8=22"
    },
    {
      subject: "C언어", lang: "c",
      question: "다음 C 코드의 출력 결과를 쓰시오. (이중 포인터 배열)",
      code:
`#include <stdio.h>
int main() {
    int a = 12, b = 24, c = 36;
    int *array[3];
    array[0] = &a;
    array[1] = &b;
    array[2] = &c;
    printf("%d", *array[1] + **array + 1);
}`,
      answer: ["37"],
      explanation: "*array[1] = b = 24\n**array = *array[0] = a = 12\n24 + 12 + 1 = 37"
    },
    {
      subject: "C언어", lang: "c",
      question: "다음 C 코드의 출력 결과를 쓰시오. (포인터로 문자열 접근)",
      code:
`#include <stdio.h>
int main() {
    char* p = "KOREA";
    printf("%s\\n", p + 3);
    printf("%c\\n", *p);
    printf("%c\\n", *(p + 3));
    printf("%c\\n", *p + 2);
}`,
      answer: ["EA\nK\nE\nM"],
      explanation: "p+3 → \"EA\" 출력\n*p = 'K'\n*(p+3) = 'E'\n*p+2 = 'K'+2 = ASCII 75+2=77 = 'M'"
    },
    {
      subject: "C언어", lang: "c",
      question: "다음 C 코드의 출력 결과를 쓰시오. (구조체 배열)",
      code:
`#include <stdio.h>
struct A {
    int n;
    int g;
};
main() {
    struct A st[2];
    for (int i = 0; i < 2; i++) {
        st[i].n = i;
        st[i].g = i + 1;
    }
    printf("%d", st[0].n + st[1].g);
}`,
      answer: ["2"],
      explanation: "st[0].n=0, st[0].g=1\nst[1].n=1, st[1].g=2\nst[0].n + st[1].g = 0+2 = 2"
    },
    {
      subject: "C언어", lang: "c",
      question: "다음 C 코드의 출력 결과를 쓰시오. (구조체 포인터)",
      code:
`#include <stdio.h>
main() {
    struct insa {
        char name[10];
        int age;
    } a[] = { "Kim", 28, "Lee", 38, "Park", 42, "Choi", 31 };
    struct insa* p;
    p = a;
    p++;
    printf("%s\\n", p->name);
    printf("%d\\n", p->age);
}`,
      answer: ["Lee\n38"],
      explanation: "p = a (a[0] 가리킴)\np++ → a[1] 가리킴\np->name = \"Lee\", p->age = 38"
    },
    {
      subject: "C언어", lang: "c",
      question: "다음 C 코드의 출력 결과를 쓰시오. (구조체 포인터 연산)",
      code:
`#include <stdio.h>
struct jsu {
    char nae[12];
    int os, db, hab, hhab;
};
int main() {
    struct jsu st[3] = {
        {"데이터1", 95, 88},
        {"데이터2", 84, 91},
        {"데이터3", 86, 75}
    };
    struct jsu* p;
    p = &st[0];
    (p+1)->hab = (p+1)->os + (p+2)->db;
    (p+1)->hhab = (p+1)->hab + p->os + p->db;
    printf("%d", (p+1)->hab + (p+1)->hhab);
}`,
      answer: ["501"],
      explanation: "(p+1)->hab = 84+75 = 159\n(p+1)->hhab = 159+95+88 = 342\n159+342 = 501"
    },
    {
      subject: "C언어", lang: "c",
      question: "다음 C 코드의 출력 결과를 쓰시오. (소수인 약수 중 최대값)",
      code:
`#include <stdio.h>
int isPrime(int number) {
    for (int i = 2; i < number; i++)
        if (number % i == 0) return 0;
    return 1;
}
int main() {
    int number = 13195;
    int max_div = 0;
    for (int i = 2; i < number; i++)
        if (isPrime(i) == 1 && number % i == 0) max_div = i;
    printf("%d", max_div);
}`,
      answer: ["29"],
      explanation: "13195의 소인수: 5, 7, 13, 29\n가장 큰 소인수 = 29"
    },
    {
      subject: "C언어", lang: "c",
      question: "다음 C 코드의 출력 결과를 쓰시오. (2의 10제곱 계산)",
      code:
`#include <stdio.h>
int mp(int base, int exp) {
    int res = 1;
    for (int i = 0; i < exp; i++)
        res *= base;
    return res;
}
int main() {
    int res = mp(2, 10);
    printf("%d", res);
}`,
      answer: ["1024"],
      explanation: "mp(2, 10) = 2^10\n2×2×2×2×2×2×2×2×2×2 = 1024"
    },
    {
      subject: "C언어", lang: "c",
      question: "다음 C 코드의 출력 결과를 쓰시오. (중첩 함수 호출)",
      code:
`#include <stdio.h>
int r1() { return 4; }
int r10() { return (30 + r1()); }
int r100() { return (200 + r10()); }
int main() {
    printf("%d\\n", r100());
    return 0;
}`,
      answer: ["234"],
      explanation: "r1() = 4\nr10() = 30 + r1() = 30+4 = 34\nr100() = 200 + r10() = 200+34 = 234"
    },
    {
      subject: "C언어", lang: "c",
      question: "다음 C 코드의 출력 결과를 쓰시오. (버블 정렬)",
      code:
`#include <stdio.h>
void align(int a[]) {
    int temp;
    for (int i = 0; i < 4; i++)
        for (int j = 0; j < 4 - i; j++)
            if (a[j] > a[j+1]) {
                temp = a[j];
                a[j] = a[j+1];
                a[j+1] = temp;
            }
}
main() {
    int a[] = { 85, 75, 50, 100, 95 };
    align(a);
    for (int i = 0; i < 5; i++)
        printf("%d ", a[i]);
}`,
      answer: ["50 75 85 95 100"],
      explanation: "버블 정렬(오름차순):\n{85,75,50,100,95} → {50,75,85,95,100}"
    },
    {
      subject: "C언어", lang: "c",
      question: "다음 C 코드의 출력 결과를 쓰시오. (재귀 팩토리얼, 입력: 5)",
      code:
`#include <stdio.h>
int func(int a) {
    if (a <= 1) return 1;
    return a * func(a - 1);
}
int main() {
    int a = 5;
    printf("%d", func(a));
}`,
      answer: ["120"],
      explanation: "func(5) = 5×func(4)\n= 5×4×3×2×1 = 120\n5! = 120"
    },

    // ── 실기 PDF 기출 - Java ──
    {
      subject: "Java", lang: "java",
      question: "다음 Java 코드의 출력 결과를 쓰시오. (6의 배수 중 최대값)",
      code:
`public class Test {
    public static void main(String[] args) {
        int r = 0;
        for (int i = 1; i < 999; i++) {
            if (i % 3 == 0 && i % 2 == 0)
                r = i;
        }
        System.out.print(r);
    }
}`,
      answer: ["996"],
      explanation: "3의 배수이면서 2의 배수 = 6의 배수\n1~998 범위에서 가장 큰 6의 배수 = 996"
    },
    {
      subject: "Java", lang: "java",
      question: "다음 Java 코드의 출력 결과를 쓰시오. (switch fall-through)",
      code:
`public class Test {
    public static void main(String[] args) {
        int i = 3, k = 1;
        switch(i) {
            case 1: k++;
            case 2: k -= 3;
            case 3: k = 0;
            case 4: k += 3;
            case 5: k -= 10;
            default: k--;
        }
        System.out.print(k);
    }
}`,
      answer: ["-8"],
      explanation: "i=3이므로 case 3부터 실행 (break 없음)\nk=0 → k+=3=3 → k-=10=-7 → k--=-8"
    },
    {
      subject: "Java", lang: "java",
      question: "다음 Java 코드의 출력 결과를 쓰시오. (비트 연산 조건문)",
      code:
`public class Test {
    public static void main(String[] args) {
        int w = 3, x = 4, y = 3, z = 5;
        if((w == 2 | w == y) & !(y > z) & (1 == x ^ y != z)) {
            w = x + y;
            if(7 == x ^ y != w)
                System.out.println(w);
            else
                System.out.println(x);
        }
        else {
            w = y + z;
            if(7 == y ^ z != w)
                System.out.println(w);
            else
                System.out.println(z);
        }
    }
}`,
      answer: ["7"],
      explanation: "조건 (w==2|w==y)&!(y>z)&(1==x^y!=z):\n= (0|1)&1&(0^1) = 1&1&1 = true\nw=x+y=7\n조건 7==x^y!=w = (0^1)=1 → true → println(w)=7"
    },
    {
      subject: "Java", lang: "java",
      question: "다음 Java 코드의 출력 결과를 쓰시오. (누적합 출력)",
      code:
`public class Test {
    public static void main(String[] args) {
        int j, i;
        for (j = 0, i = 0; i <= 5; i++) {
            j += i;
            System.out.print(i);
            if (i == 5) {
                System.out.print("=");
                System.out.print(j);
            }
            else
                System.out.print("+");
        }
    }
}`,
      answer: ["0+1+2+3+4+5=15"],
      explanation: "i=0: j=0, 출력 '0+'\ni=1~4: j에 누적, 출력 'n+'\ni=5: j=15, 출력 '5=15'"
    },
    {
      subject: "Java", lang: "java",
      question: "다음 Java 코드의 출력 결과를 쓰시오. (while c *= i)",
      code:
`public class Test {
    public static void main(String[] args) {
        int i = 0, c = 0;
        while (i < 10) {
            i++;
            c *= i;
        }
        System.out.println(c);
    }
}`,
      answer: ["0"],
      explanation: "c = 0으로 초기화\nc *= i → 0 × i = 0 계속 유지\n어떤 수를 곱해도 0 × n = 0"
    },
    {
      subject: "Java", lang: "java",
      question: "다음 Java 코드의 출력 결과를 쓰시오. (짝수 합계)",
      code:
`public class Test {
    public static void main(String[] args) {
        int a = 0, sum = 0;
        while (a < 10) {
            a++;
            if (a % 2 == 1)
                continue;
            sum += a;
        }
        System.out.println(sum);
    }
}`,
      answer: ["30"],
      explanation: "a가 홀수면 continue로 sum 누적 안 함\n짝수만 합산: 2+4+6+8+10 = 30"
    },
    {
      subject: "Java", lang: "java",
      question: "다음 Java 코드의 출력 결과를 쓰시오. (배열 순위 계산)",
      code:
`public class Test {
    public static void main(String[] args) {
        int result[] = new int[5];
        int arr[] = { 77, 32, 10, 99, 50 };
        for(int i = 0; i < 5; i++) {
            result[i] = 1;
            for(int j = 0; j < 5; j++)
                if(arr[i] < arr[j])
                    result[i]++;
        }
        for(int k = 0; k < 5; k++)
            System.out.print(result[k]);
    }
}`,
      answer: ["24513"],
      explanation: "각 요소의 순위 계산:\n77(2등), 32(4등), 10(5등), 99(1등), 50(3등)\n→ 24513"
    },
    {
      subject: "Java", lang: "java",
      question: "다음 Java 코드의 출력 결과를 쓰시오. (가변 크기 2차원 배열)",
      code:
`public class Test {
    public static void main(String[] args) {
        int aa[][] = { {45, 50, 75},
                       {89} };
        System.out.println(aa[0].length);
        System.out.println(aa[1].length);
        System.out.println(aa[0][0]);
        System.out.println(aa[0][1]);
        System.out.println(aa[1][0]);
    }
}`,
      answer: ["3\n1\n45\n50\n89"],
      explanation: "aa[0].length = 3 (첫 번째 행 원소 3개)\naa[1].length = 1 (두 번째 행 원소 1개)\naa[0][0]=45, aa[0][1]=50, aa[1][0]=89"
    },
    {
      subject: "Java", lang: "java",
      question: "다음 Java 코드의 출력 결과를 쓰시오. (mkarr 배열 반환)",
      code:
`public class Test {
    static int[] mkarr() {
        int[] tmpArr = new int[4];
        for (int i = 0; i < tmpArr.length; i++)
            tmpArr[i] = i;
        return tmpArr;
    }
    public static void main(String[] args) {
        int[] arr;
        arr = mkarr();
        for (int i = 0; i < arr.length; i++)
            System.out.print(arr[i]);
    }
}`,
      answer: ["0123"],
      explanation: "mkarr(): tmpArr[0..3] = {0,1,2,3} 저장 후 반환\narr = {0,1,2,3}\n순서대로 출력 → 0123"
    },
    {
      subject: "Java", lang: "java",
      question: "다음 Java 코드의 출력 결과를 쓰시오. (클래스 메서드와 인스턴스 변수)",
      code:
`class Test {
    public static void main(String args[]) {
        cond obj = new cond(3);
        obj.a = 5;
        int b = obj.func();
        System.out.print(obj.a + b);
    }
}
class cond {
    int a;
    public cond(int a) { this.a = a; }
    public int func() {
        int b = 1;
        for (int i = 1; i < a; i++)
            b += a * i;
        return a + b;
    }
}`,
      answer: ["61"],
      explanation: "obj.a=5, func():\nb=1, i=1: b+=5×1=6, i=2: b+=10=16, i=3: b+=15=31, i=4: b+=20=51\nreturn 5+51=56\nobj.a+b = 5+56 = 61"
    },
    {
      subject: "Java", lang: "java",
      question: "다음 Java 코드의 출력 결과를 쓰시오. (객체 참조 전달)",
      code:
`class A {
    int a;
    int b;
}
public class Test {
    static void func1(A m) { m.a *= 10; }
    static void func2(A m) { m.a += m.b; }
    public static void main(String args[]) {
        A m = new A();
        m.a = 100;
        func1(m);
        m.b = m.a;
        func2(m);
        System.out.printf("%d", m.a);
    }
}`,
      answer: ["2000"],
      explanation: "m.a=100\nfunc1(m): m.a=100×10=1000\nm.b=m.a=1000\nfunc2(m): m.a=1000+1000=2000"
    },
    {
      subject: "Java", lang: "java",
      question: "다음 Java 코드의 출력 결과를 쓰시오. (상속 오버라이딩, sun 메서드)",
      code:
`public class ovr1 {
    public static void main(String[] args) {
        ovr1 a1 = new ovr1();
        ovr2 a2 = new ovr2();
        System.out.println(a1.sun(3,2) + a2.sun(3,2));
    }
    int sun(int x, int y) { return x + y; }
}
class ovr2 extends ovr1 {
    int sun(int x, int y) {
        return x - y + super.sun(x, y);
    }
}`,
      answer: ["11"],
      explanation: "a1.sun(3,2) = 3+2 = 5\na2.sun(3,2) = 3-2+super.sun(3,2) = 1+5 = 6\n5+6 = 11"
    },
    {
      subject: "Java", lang: "java",
      question: "다음 Java 코드의 출력 결과를 쓰시오. (super 생성자 호출)",
      code:
`class A {
    int a;
    public A(int a) { this.a = a; }
    void display() { System.out.println("a=" + a); }
}
class B extends A {
    public B(int a) {
        super(a);
        super.display();
    }
}
public class Test {
    public static void main(String[] args) {
        B obj = new B(10);
    }
}`,
      answer: ["a=10"],
      explanation: "B(10) 생성자 호출\nsuper(10) → A(10): this.a=10\nsuper.display() → 'a=10' 출력"
    },
    {
      subject: "Java", lang: "java",
      question: "다음 Java 코드에서 괄호에 들어갈 예약어를 쓰시오.\nThread t1 = new Thread(new ( )());\n위 코드에서 Car 클래스는 Runnable 인터페이스를 구현함.",
      code:
`class Car implements Runnable {
    int a;
    public void run() {
        try {
            while(++a < 100) {
                System.out.println("miles traveled : " + a);
                Thread.sleep(100);
            }
        } catch(Exception E) { }
    }
}
public class Test {
    public static void main(String args[]) {
        Thread t1 = new Thread(new ( )());
        t1.start();
    }
}`,
      answer: ["Car"],
      explanation: "Thread 생성자에 Runnable 구현 객체를 인수로 전달\nCar 클래스가 Runnable을 implements\n→ new Thread(new Car())"
    },
    {
      subject: "Java", lang: "java",
      question: "다음 Java 코드의 출력 결과를 쓰시오. (싱글톤 패턴)",
      code:
`class Connection {
    private static Connection _inst = null;
    private int count = 0;
    static public Connection get() {
        if(_inst == null) {
            _inst = new Connection();
            return _inst;
        }
        return _inst;
    }
    public void count() { count++; }
    public int getCount() { return count; }
}
public class Test {
    public static void main(String[] args) {
        Connection conn1 = Connection.get();
        conn1.count();
        Connection conn2 = Connection.get();
        conn2.count();
        Connection conn3 = Connection.get();
        conn3.count();
        System.out.print(conn1.getCount());
    }
}`,
      answer: ["3"],
      explanation: "싱글톤: conn1, conn2, conn3이 같은 _inst 객체 공유\ncount() 3번 호출 → count=3\nconn1.getCount() = 3"
    },
    {
      subject: "Java", lang: "java",
      question: "다음 Java 코드에서 괄호에 들어갈 예약어를 쓰시오.",
      code:
`class Parent {
    void show() { System.out.println("parent"); }
}
class Child extends Parent {
    void show() { System.out.println("child"); }
}
public class Test {
    public static void main(String[] args) {
        Parent pa = ( ) Child();
        pa.show();
    }
}`,
      answer: ["new"],
      explanation: "객체 생성 예약어 'new'\nParent pa = new Child();\n자식 클래스 형 변환 → pa.show()는 Child의 show() 호출 → 'child'"
    },
    {
      subject: "Java", lang: "java",
      question: "다음 Java 코드의 출력 결과를 쓰시오. (재귀 함수, 상속 오버라이딩)",
      code:
`class Parent {
    int compute(int num) {
        if(num <= 1) return num;
        return compute(num-1) + compute(num-2);
    }
}
class Child extends Parent {
    int compute(int num) {
        if(num <= 1) return num;
        return compute(num-1) + compute(num-3);
    }
}
public class Test {
    public static void main(String[] args) {
        Parent obj = new Child();
        System.out.print(obj.compute(4));
    }
}`,
      answer: ["1"],
      explanation: "new Child()로 형 변환 → Child.compute 호출\ncompute(4)=compute(3)+compute(1)\ncompute(3)=compute(2)+compute(0)\ncompute(2)=compute(1)+compute(-1)=1+(-1)=0\ncompute(3)=0+0=0, compute(4)=0+1=1"
    },
    {
      subject: "Java", lang: "java",
      question: "다음 Java 코드의 출력 결과를 쓰시오. (추상 클래스, 상속)",
      code:
`abstract class Vehicle {
    String name;
    abstract public String getName(String val);
    public String getName() {
        return "Vehicle name : " + name;
    }
}
class Car extends Vehicle {
    private String name;
    public Car(String val) {
        name = super.name = val;
    }
    public String getName(String val) {
        return "Car name : " + val;
    }
}
public class Test {
    public static void main(String[] args) {
        Vehicle obj = new Car("Spark");
        System.out.print(obj.getName());
    }
}`,
      answer: ["Vehicle name : Spark"],
      explanation: "Car(\"Spark\"): super.name = \"Spark\"\nobj.getName() → 인자 없는 Vehicle.getName()\nreturn \"Vehicle name : \" + name = \"Vehicle name : Spark\""
    },
    {
      subject: "Java", lang: "java",
      question: "다음 Java 코드에서 괄호에 들어갈 예약어를 쓰시오.\n(클래스 이름으로 메서드에 접근하기 위한 예약어)",
      code:
`public class Test {
    public static void main(String[] args) {
        System.out.print(Test.check(1));
    }
    ( ) String check(int num){
        return (num >= 0) ? "positive" : "negative";
    }
}`,
      answer: ["static"],
      explanation: "Test.check(1)처럼 클래스명으로 메서드 직접 호출 가능하게 하려면 static 필요\nstatic 메서드는 객체 생성 없이 클래스명.메서드명() 으로 호출"
    },
    {
      subject: "Java", lang: "java",
      question: "다음 Java 코드의 출력 결과를 쓰시오. (배열 반환 메서드)",
      code:
`public class Test {
    static int[] arr() {
        int a[] = new int[4];
        int b = a.length;
        for(int i = 0; i < b; i++)
            a[i] = i;
        return a;
    }
    public static void main(String[] args) {
        int a[] = arr();
        for(int i = 0; i < a.length; i++)
            System.out.print(a[i] + " ");
    }
}`,
      answer: ["0 1 2 3"],
      explanation: "arr(): a[0..3]={0,1,2,3} 저장 후 배열 반환\n각 요소를 공백과 함께 출력 → '0 1 2 3 '"
    },

    // ── 실기 PDF 기출 - Python ──
    {
      subject: "Python", lang: "python",
      question: "다음 Python 코드의 출력 결과를 쓰시오.",
      code:
`x, y = 100, 200
print(x==y)`,
      answer: ["False"],
      explanation: "x=100, y=200\nx==y → 100==200 → 거짓(False)"
    },
    {
      subject: "Python", lang: "python",
      question: "다음 Python 코드의 출력 결과를 쓰시오.",
      code:
`a = "REMEMBER NOVEMBER"
b = a[0:3] + a[12:16]
c = "R AND %s" % "STR"
print(b + c)`,
      answer: ["REMEMBER AND STR"],
      explanation: "a[0:3] = \"REM\"\na[12:16] = \"EMBE\" → 잠깐, 다시:\na: R(0)E(1)M(2)E(3)M(4)B(5)E(6)R(7) (8)N(9)O(10)V(11)E(12)M(13)B(14)E(15)R(16)\na[0:3]=\"REM\", a[12:16]=\"EMBE\"\nb=\"REMEMBE\"\nc=\"R AND STR\"\nb+c = \"REMEMBER AND STR\""
    },
    {
      subject: "Python", lang: "python",
      question: "다음 Python 코드의 출력 결과를 쓰시오. (람다와 map 활용)",
      code:
`a = [1, 2, 3, 4, 5]
a = list(map(lambda num : num + 100, a))
print(a)`,
      answer: ["[101, 102, 103, 104, 105]"],
      explanation: "lambda num: num+100 을 리스트 a의 각 요소에 적용\n[1,2,3,4,5] → [101,102,103,104,105]"
    },
    {
      subject: "Python", lang: "python",
      question: "다음 Python 코드의 출력 결과를 쓰시오. (기본 매개변수)",
      code:
`def func(num1, num2 = 2):
    print('a =', num1, 'b =', num2)
func(20)`,
      answer: ["a = 20 b = 2"],
      explanation: "func(20): num1=20, num2는 기본값 2\n출력: 'a = 20 b = 2'"
    },
    {
      subject: "Python", lang: "python",
      question: "다음 Python 코드의 출력 결과를 쓰시오. (클래스 리스트 순회)",
      code:
`class CharClass:
    a = ['Seoul', 'Kyeongi', 'Inchon', 'Daejeon', 'Daegu', 'Pusan']
myVar = CharClass()
str01 = ''
for i in myVar.a:
    str01 = str01 + i[0]
print(str01)`,
      answer: ["SKIDDP"],
      explanation: "각 도시명의 첫 글자:\nSeoul(S), Kyeongi(K), Inchon(I), Daejeon(D), Daegu(D), Pusan(P)\n→ SKIDDP"
    },
    {
      subject: "Python", lang: "python",
      question: "다음 Python 코드의 출력 결과를 쓰시오. (2차원 리스트)",
      code:
`lol = [[1, 2, 3], [4, 5], [6, 7, 8, 9]]
print(lol[0])
print(lol[2][1])
for sub in lol:
    for item in sub:
        print(item, end=' ')
    print()`,
      answer: ["[1, 2, 3]\n7\n1 2 3 \n4 5 \n6 7 8 9 "],
      explanation: "lol[0] = [1,2,3]\nlol[2][1] = 7\n중첩 for: 각 행 원소를 공백 구분 출력 후 줄바꿈"
    },
    {
      subject: "Python", lang: "python",
      question: "다음 Python 코드의 출력 결과를 쓰시오. (오른쪽 비트 시프트)",
      code:
`a = 100
result = 0
for i in range(1,3):
    result = a >> i
    result = result + 1
print(result)`,
      answer: ["26"],
      explanation: "i=1: result=100>>1=50, +1=51\ni=2: result=100>>2=25, +1=26\nprint(result)=26"
    },

    // ── 실기 PDF 기출 - SQL ──
    {
      subject: "SQL", lang: "sql",
      question: "다음 SQL의 괄호에 들어갈 알맞은 단어를 쓰시오.\n'H' 제조사 단가보다 높은 단가를 가진 제품 조회:",
      code:
`SELECT 제품명, 단가, 제조사
FROM 제품
WHERE 단가 > ( ) (SELECT 단가 FROM 제품
                   WHERE 제조사 = 'H');`,
      answer: ["ALL"],
      explanation: "ALL: 부속 질의 결과의 모든 값보다 클 때 → 모든 H 제조사 단가보다 큰 제품 조회\nANY/SOME: 하나라도 크면 OK\nALL: 전부 커야 함"
    },
    {
      subject: "SQL", lang: "sql",
      question: "다음 SQL문의 출력 결과를 쓰시오.\nEMP_TBL: EMPNO(100,200,300), SAL(1500,3000,2000)",
      code:
`SELECT COUNT(*)
FROM EMP_TBL
WHERE EMPNO > 100 AND SAL >= 3000
   OR EMPNO = 200;`,
      answer: ["1"],
      explanation: "AND 우선순위 > OR\n(EMPNO>100 AND SAL>=3000): EMPNO=200, SAL=3000 → {200}\nOR EMPNO=200: 이미 포함\n결과 1건 → COUNT=1"
    },
    {
      subject: "SQL", lang: "sql",
      question: "다음 SQL의 ①, ②에 들어갈 키워드를 쓰시오.\n<학생> 테이블에 VARCHAR(20) '주소' 속성 추가:",
      code:
`( ① ) TABLE 학생 ( ② ) 주소 VARCHAR(20);`,
      answer: ["① ALTER ② ADD", "ALTER, ADD"],
      explanation: "① ALTER: 테이블 구조 변경 명령\n② ADD: 속성(컬럼) 추가\n\nALTER TABLE 명령어:\n- ADD: 속성 추가\n- DROP: 속성 삭제\n- MODIFY: 속성 변경"
    },
    {
      subject: "SQL", lang: "sql",
      question: "다음 SQL의 빈칸에 들어갈 키워드를 쓰시오.\n<student> 테이블의 name 속성으로 idx_name 인덱스 생성:",
      code:
`( ? ) INDEX idx_name ON student(name);`,
      answer: ["CREATE"],
      explanation: "CREATE INDEX 인덱스명 ON 테이블명(속성명)\nCREATE UNIQUE INDEX: 유일한 인덱스\nDROP INDEX: 인덱스 삭제"
    },
    {
      subject: "SQL", lang: "sql",
      question: "다음 SQL의 괄호에 들어갈 알맞은 답을 쓰시오.\n이름이 '이'로 시작하는 회원을 가입일 내림차순 정렬:",
      code:
`SELECT * FROM 회원
WHERE 이름 LIKE '( ① )'
ORDER BY 가입일 ( ② );`,
      answer: ["이%", "DESC"],
      explanation: "① 이% : '이'로 시작하는 패턴 (% = 임의 문자열)\n② DESC: 내림차순 (ASC: 오름차순)\nLIKE 패턴: %=임의 문자열, _=임의 한 문자"
    },
    {
      subject: "SQL", lang: "sql",
      question: "다음 SQL의 ①, ②, ③에 들어갈 집계 함수를 쓰시오.\n<성적> 테이블에서 과목별 평균 90점 이상인 과목의 최소/최대 점수 조회:",
      code:
`SELECT 과목이름, ( ① )(점수) AS 최소점수,
                  ( ② )(점수) AS 최대점수
FROM 성적
GROUP BY 과목이름
HAVING ( ③ )(점수) >= 90;`,
      answer: ["① MIN ② MAX ③ AVG", "MIN, MAX, AVG"],
      explanation: "① MIN(점수): 그룹 내 최솟값\n② MAX(점수): 그룹 내 최댓값\n③ AVG(점수): 그룹 평균으로 HAVING 조건\n\nHAVING: 집계 결과에 조건 적용\nWHERE: 그룹화 전 행에 조건 적용"
    }
  ],

  // ─── 추가 실기 문제 (출제기준 기반) ───
  // 기존 실기 배열에 병합하지 않고, 별도 키로 관리 후 startQuiz에서 합산
  실기_추가: [

    // ── 1. 요구사항 확인 ──
    {
      subject: "소프트웨어 설계",
      question: "소프트웨어 재공학(Reverse Engineering) 과정을 순서대로 쓰시오.",
      answer: ["분석 → 구성 → 역공학 → 이식", "분석→구성→역공학→이식"],
      explanation: "소프트웨어 재공학 4단계:\n1. 분석 (Analysis)\n2. 구성 (Restructuring)\n3. 역공학 (Reverse Engineering)\n4. 이식 (Migration)"
    },
    {
      subject: "소프트웨어 설계",
      question: "XP(Extreme Programming)의 5가지 핵심가치를 쓰시오. (피존용단소 암기법)",
      answer: ["피드백, 존중, 용기, 단순성, 소통", "소통, 단순성, 피드백, 용기, 존중"],
      explanation: "XP 5가지 핵심가치 (피존용단소):\n- 피드백 (Feedback)\n- 존중 (Respect)\n- 용기 (Courage)\n- 단순성 (Simplicity)\n- 소통/의사소통 (Communication)"
    },
    {
      subject: "소프트웨어 설계",
      question: "럼바우(Rumbaugh) 객체지향 분석 기법의 3가지 모델링을 순서대로 쓰시오.",
      answer: ["객체 모델링, 동적 모델링, 기능 모델링", "객체→동적→기능"],
      explanation: "럼바우 OMT(Object Modeling Technique):\n1. 객체 모델링 (Object): 가장 먼저, 정보 모델링\n2. 동적 모델링 (Dynamic): 시간 흐름, 상태 변화\n3. 기능 모델링 (Functional): 프로세스, 데이터 흐름"
    },
    {
      subject: "소프트웨어 설계",
      question: "GoF 디자인 패턴 중 생성 패턴 5가지를 모두 쓰시오.",
      answer: ["추상팩토리, 빌더, 팩토리메서드, 프로토타입, 싱글턴"],
      explanation: "생성(Creational) 패턴 5가지:\n- Abstract Factory (추상 팩토리)\n- Builder (빌더)\n- Factory Method (팩토리 메서드)\n- Prototype (프로토타입)\n- Singleton (싱글턴)"
    },
    {
      subject: "소프트웨어 설계",
      question: "다음 설명에 해당하는 UML 다이어그램을 쓰시오.\n\n'컴포넌트 사이의 종속성을 표현하고 결과물, 프로세스, 컴포넌트 등 물리적 요소들의 위치를 표현하는 다이어그램'",
      answer: ["배치 다이어그램", "Deployment Diagram"],
      explanation: "배치 다이어그램(Deployment Diagram):\n- 물리적 구성요소의 위치 표현\n- 시스템의 하드웨어 구성과 소프트웨어 배포를 나타냄\n- UML 구조 다이어그램 중 하나"
    },
    {
      subject: "소프트웨어 설계",
      question: "SOLID 원칙에서 '확장에는 열려 있고 변경에는 닫혀 있어야 한다'는 원칙은?",
      answer: ["개방-폐쇄 원칙", "OCP", "Open-Closed Principle"],
      explanation: "OCP (Open-Closed Principle) - 개방-폐쇄 원칙\n- 기존 코드를 수정하지 않고 기능 확장 가능해야 함\n- 인터페이스, 추상클래스를 활용해 구현\nSOLID: S,O,L,I,D"
    },

    // ── 2. 소프트웨어 개발 ──
    {
      subject: "소프트웨어 개발",
      question: "소프트웨어 생명주기 모델 중 가장 오래된 선형 순차적 모델로, 각 단계가 끝난 후 다음 단계로 진행하는 모델은?",
      answer: ["폭포수 모델", "Waterfall Model"],
      explanation: "폭포수 모델(Waterfall Model):\n- 가장 오래된 선형 순차 모델\n- 요구분석→설계→구현→테스트→유지보수\n- 장점: 단순, 명확\n- 단점: 요구사항 변경 어려움, 거꾸로 돌아가기 힘듦"
    },
    {
      subject: "소프트웨어 개발",
      question: "통합 테스트에서 하위 모듈부터 상위 모듈 방향으로 통합하는 방식에서 사용하는 가상 모듈은?",
      answer: ["드라이버", "Driver", "테스트 드라이버"],
      explanation: "상향식 통합 테스트:\n- 하위 → 상위 순서로 통합\n- 드라이버(Driver): 하위 모듈을 호출하는 가상 상위 모듈\n\n하향식 통합 테스트:\n- 상위 → 하위 순서로 통합\n- 스텁(Stub): 하위 모듈 대신 쓰는 가상 모듈"
    },
    {
      subject: "소프트웨어 개발",
      question: "소프트웨어 비용 산정 방법 중 기능 점수(Function Point) 방식에서 측정하는 5가지 기능을 쓰시오.",
      answer: ["외부 입력, 외부 출력, 외부 조회, 내부 논리 파일, 외부 인터페이스 파일"],
      explanation: "기능 점수(FP) 5가지 측정 요소:\n1. 외부 입력 (EI)\n2. 외부 출력 (EO)\n3. 외부 조회 (EQ)\n4. 내부 논리 파일 (ILF)\n5. 외부 인터페이스 파일 (EIF)"
    },
    {
      subject: "소프트웨어 개발",
      question: "소프트웨어 개발 성숙도 모델로, 조직의 소프트웨어 프로세스를 5단계로 평가하는 모델의 약어는?",
      answer: ["CMM", "CMMI"],
      explanation: "CMM (Capability Maturity Model):\n1단계: 초기 (Initial)\n2단계: 반복 (Repeatable)\n3단계: 정의 (Defined)\n4단계: 관리 (Managed)\n5단계: 최적화 (Optimizing)"
    },
    {
      subject: "소프트웨어 개발",
      question: "소프트웨어 형상관리에서 베이스라인(Baseline)이란 무엇인지 간략히 서술하시오.",
      answer: ["공식적으로 검토되고 합의된 소프트웨어 형상 항목", "검토 합의된 명세나 제품"],
      explanation: "베이스라인(Baseline):\n- 공식적으로 검토되고 합의된 소프트웨어 산출물\n- 이후 변경 통제 기준이 됨\n- 형상관리의 기준점"
    },
    {
      subject: "소프트웨어 개발",
      question: "소프트웨어 테스트의 원칙 중 '완벽한 테스팅은 불가능하다'는 원칙과 함께, 버그가 특정 모듈에 집중되는 현상을 나타내는 법칙은?",
      answer: ["파레토 법칙", "Pareto's Law", "20-80 법칙"],
      explanation: "파레토 법칙 (80-20 법칙):\n- 결함의 80%는 전체 모듈의 20%에서 발생\n- 테스트 자원을 결함 집중 모듈에 집중해야 함\n→ 살충제 패러독스와 함께 테스트 7원칙 중 하나"
    },

    // ── 3. 데이터베이스 ──
    {
      subject: "데이터베이스",
      question: "다음 설명에 해당하는 SQL 구문을 쓰시오.\n\n'테이블에서 특정 이벤트(INSERT/UPDATE/DELETE) 발생 시 자동으로 실행되는 저장 프로시저'",
      answer: ["트리거", "TRIGGER", "Trigger"],
      explanation: "트리거(Trigger):\n- 이벤트 발생 시 자동 실행\n- BEFORE/AFTER + INSERT/UPDATE/DELETE\n- 데이터 무결성, 자동 로그 기록에 활용\nCREATE TRIGGER ... ON 테이블 FOR EACH ROW ..."
    },
    {
      subject: "데이터베이스",
      question: "데이터베이스 정규화에서 모든 결정자가 후보키인 정규형은?",
      answer: ["BCNF", "보이스-코드 정규형", "Boyce-Codd Normal Form"],
      explanation: "BCNF (Boyce-Codd Normal Form):\n- 3NF보다 강한 정규형\n- 모든 결정자(Determinant)가 후보키여야 함\n- 3NF이지만 BCNF가 아닌 경우: 후보키가 여러 개이고 겹치는 경우"
    },
    {
      subject: "데이터베이스",
      question: "관계 데이터베이스에서 릴레이션의 튜플(행) 수를 나타내는 용어는?",
      answer: ["카디널리티", "Cardinality"],
      explanation: "관계 데이터 모델 용어:\n- 카디널리티(Cardinality): 튜플(행)의 수\n- 차수/디그리(Degree): 속성(열)의 수\n- 릴레이션 스키마: 구조 정의\n- 릴레이션 인스턴스: 실제 데이터"
    },
    {
      subject: "데이터베이스",
      question: "트랜잭션 격리 수준 중 가장 엄격하여 팬텀 읽기(Phantom Read)까지 방지하는 수준은?",
      answer: ["SERIALIZABLE", "직렬화 가능"],
      explanation: "트랜잭션 격리 수준 (낮→높):\n1. READ UNCOMMITTED: 더티 리드 발생\n2. READ COMMITTED: 더티 리드 방지\n3. REPEATABLE READ: 비반복 읽기 방지\n4. SERIALIZABLE: 팬텀 읽기까지 방지 (가장 강함)"
    },
    {
      subject: "데이터베이스",
      question: "SQL에서 ROLLUP에 대해 간략히 설명하시오.",
      answer: ["GROUP BY 확장, 계층적 소계와 총계를 생성", "소계, 중계, 총계를 자동 생성하는 그룹 함수"],
      explanation: "ROLLUP:\n- GROUP BY의 확장 기능\n- 지정 컬럼의 소계(subtotal)와 총계(grand total) 자동 생성\n- GROUP BY ROLLUP(A, B): A별 소계, 전체 총계\nCUBE: 모든 조합의 소계 생성"
    },

    // ── 5. 인터페이스 구현 ──
    {
      subject: "통합 구현",
      question: "웹 서비스의 3가지 핵심 기술 중 웹 서비스에 대한 정보를 등록하고 검색하기 위한 저장소를 나타내는 약어는?",
      answer: ["UDDI"],
      explanation: "웹 서비스 3요소:\n- UDDI: 웹 서비스 정보 등록/검색 레지스트리\n- WSDL: 웹 서비스 상세 정보 기술 (XML)\n- SOAP: HTTP 기반 XML 메시지 교환 프로토콜\nSOA(서비스 지향 아키텍처)의 핵심 기술"
    },
    {
      subject: "통합 구현",
      question: "SOAP 프로토콜에 대해 간략히 설명하시오.",
      answer: ["HTTP 등을 이용해 XML 기반 메시지를 교환하는 프로토콜", "HTTP/HTTPS/SMTP를 이용한 XML 메시지 교환 프로토콜"],
      explanation: "SOAP (Simple Object Access Protocol):\n- HTTP, HTTPS, SMTP 등을 통해 XML 메시지 교환\n- 웹 서비스 통신에 사용\n- WSDL로 서비스 정의, UDDI로 등록/검색"
    },
    {
      subject: "통합 구현",
      question: "미들웨어(Middleware) 중 기업 애플리케이션 통합을 위해 표준화된 인터페이스를 제공하는 솔루션의 약어는?",
      answer: ["EAI", "ESB"],
      explanation: "EAI (Enterprise Application Integration):\n- 기업 내 애플리케이션 통합\n- 방식: P2P, Hub&Spoke, Message Bus, Hybrid\n\nESB (Enterprise Service Bus):\n- SOA 기반 서비스 통합 미들웨어\n- 웹 서비스(WSDL+SOAP) 연계"
    },

    // ── 7. 테스트 ──
    {
      subject: "소프트웨어 테스트",
      question: "화이트박스 테스트에서 모든 조건과 결과의 조합을 테스트하는 커버리지는?",
      answer: ["MC/DC", "변경 조건/결정 커버리지", "다중 조건 커버리지"],
      explanation: "커버리지 종류 (낮→높):\n- 구문(Statement): 모든 문장 실행\n- 결정(Decision): 각 분기 결과 참/거짓\n- 조건(Condition): 각 조건 참/거짓\n- 조건/결정: 조건+결정 모두\n- MC/DC: 각 조건이 결과에 독립적 영향"
    },
    {
      subject: "소프트웨어 테스트",
      question: "블랙박스 테스트 기법 중 유효/무효 입력값을 동일하게 취급하는 구간으로 분류하여 테스트하는 기법은?",
      answer: ["동치 분할", "동치 분류", "Equivalence Partitioning"],
      explanation: "동치 분할(Equivalence Partitioning):\n- 입력 값을 동치 클래스(동일하게 처리되는 구간)로 분류\n- 각 클래스에서 대표값 하나만 테스트\n- 유효 동치 + 무효 동치 클래스\n경계값 분석: 경계 부근 값을 테스트"
    },
    {
      subject: "소프트웨어 테스트",
      question: "소프트웨어 테스트의 7가지 원칙 중 테스트는 결함이 있을 것이라는 것을 가정하고 수행해야 한다는 원칙은?",
      answer: ["결함 있음 가정", "결함 존재 가정", "테스트는 결함이 존재함을 보여주는 것"],
      explanation: "테스트 7원칙:\n1. 테스트는 결함이 존재함을 보여주는 것 (결함 있음 가정)\n2. 완벽한 테스팅은 불가능\n3. 테스팅은 조기에 시작\n4. 결함 집중 (파레토 법칙)\n5. 살충제 패러독스\n6. 테스팅은 정황에 의존적\n7. 오류-부재의 궤변"
    },

    // ── 8. SQL 응용 ──
    {
      subject: "SQL",
      question: "다음 DDL 명령어 중 테이블을 삭제할 때 이 테이블을 참조하는 다른 테이블도 함께 삭제하는 옵션은?",
      answer: ["CASCADE"],
      explanation: "DROP TABLE 테이블명 CASCADE:\n- CASCADE: 참조하는 테이블까지 함께 삭제\n- RESTRICT: 다른 테이블이 참조 중이면 삭제 거부\n참고: TRUNCATE는 데이터만 삭제(구조 유지)"
    },
    {
      subject: "SQL",
      question: "SQL DCL(Data Control Language)에서 권한을 부여하는 명령어와 회수하는 명령어를 각각 쓰시오.",
      answer: ["GRANT, REVOKE"],
      explanation: "DCL (Data Control Language):\n- GRANT: 권한 부여\n  예) GRANT SELECT ON 테이블 TO 사용자;\n- REVOKE: 권한 회수\n  예) REVOKE SELECT ON 테이블 FROM 사용자;"
    },
    {
      subject: "SQL",
      question: "SQL에서 NULL 값을 다른 값으로 대체하는 함수는? (Oracle 기준)",
      answer: ["NVL", "COALESCE", "NVL/COALESCE"],
      explanation: "NULL 처리 함수:\n- NVL(컬럼, 대체값): Oracle\n- ISNULL(컬럼, 대체값): SQL Server\n- COALESCE(값1, 값2, ...): 표준 SQL, 첫 번째 non-null 반환\nIS NULL / IS NOT NULL: 조건 검사"
    },
    {
      subject: "SQL",
      question: "데이터베이스에서 인덱스(Index)를 생성하는 DDL 명령어를 쓰시오.",
      answer: ["CREATE INDEX"],
      explanation: "인덱스 생성:\nCREATE [UNIQUE] INDEX 인덱스명\nON 테이블명(컬럼명);\n\n삭제: DROP INDEX 인덱스명;\n인덱스 종류: B-Tree, 해시, 비트맵, 클러스터드"
    },

    // ── 9. 보안 ──
    {
      subject: "보안",
      question: "소프트웨어 개발 보안에서 입력값 검증 없이 쿼리에 삽입되어 DB 조작이 가능한 공격은?",
      answer: ["SQL 인젝션", "SQL Injection"],
      explanation: "SQL Injection:\n- 악의적인 SQL 구문을 입력값에 삽입\n- DB 데이터 유출, 조작, 삭제 가능\n방어: Prepared Statement, ORM, 입력값 검증, 화이트리스트\n\n' OR '1'='1 같은 입력으로 인증 우회 가능"
    },
    {
      subject: "보안",
      question: "웹 취약점 중 공격자가 신뢰할 수 있는 웹사이트에 악성 스크립트를 삽입하여 다른 사용자의 브라우저에서 실행시키는 공격은?",
      answer: ["XSS", "Cross-Site Scripting"],
      explanation: "XSS (Cross-Site Scripting):\n- 악성 스크립트를 웹 페이지에 삽입\n- 피해자 브라우저에서 실행\n- 쿠키 탈취, 세션 하이재킹\n방어: 입력값 이스케이프, CSP 헤더, HttpOnly 쿠키"
    },
    {
      subject: "보안",
      question: "비대칭키 암호화에서 전자서명 시 서명에 사용하는 키와 검증에 사용하는 키를 각각 쓰시오.",
      answer: ["서명: 개인키, 검증: 공개키", "개인키로 서명, 공개키로 검증"],
      explanation: "전자서명 (Digital Signature):\n- 서명: 송신자의 개인키로 서명\n- 검증: 송신자의 공개키로 검증\n→ 부인 방지, 무결성 확인\n\n암호화:\n- 암호화: 수신자의 공개키\n- 복호화: 수신자의 개인키"
    },

    // ── 10. 프로그래밍 언어 ──
    {
      subject: "프로그래밍 언어",
      question: "Python에서 클래스의 생성자 메서드 이름을 쓰시오.",
      answer: ["__init__", "__init__(self)"],
      explanation: "__init__ 메서드:\n- 클래스 인스턴스 생성 시 자동 호출\n- self: 인스턴스 자신을 참조\nclass MyClass:\n    def __init__(self, x):\n        self.x = x"
    },
    {
      subject: "프로그래밍 언어",
      question: "C언어에서 구조체(struct) 포인터로 멤버에 접근할 때 사용하는 연산자는?",
      answer: ["->", "화살표 연산자"],
      explanation: "구조체 접근 연산자:\n- 구조체 변수.멤버 (점 연산자)\n- 구조체 포인터->멤버 (화살표 연산자)\n\nstruct Student *ptr;\nptr->name  //  (*ptr).name 과 동일"
    },
    {
      subject: "프로그래밍 언어",
      question: "객체지향에서 부모 클래스의 메서드를 자식 클래스에서 재정의하는 것을 무엇이라 하는가?",
      answer: ["오버라이딩", "Overriding", "메서드 오버라이딩"],
      explanation: "오버라이딩(Overriding):\n- 상속받은 메서드를 자식 클래스에서 재정의\n- 다형성 구현의 핵심\n\n오버로딩(Overloading):\n- 같은 이름, 다른 매개변수로 메서드 다중 정의\n- 컴파일 타임 다형성"
    },

    // ── 11. 운영체제/네트워크 ──
    {
      subject: "운영체제",
      question: "운영체제의 목적 4가지를 쓰시오. (처반사신 암기법)",
      answer: ["처리 능력, 반환 시간, 사용 가능도, 신뢰도", "처리능력 향상, 반환시간 단축, 사용가능도 향상, 신뢰도 향상"],
      explanation: "운영체제 목적 (처반사신):\n- 처리 능력(Throughput): 단위 시간 처리량 향상\n- 반환 시간(Turnaround Time): 처리 완료 시간 단축\n- 사용 가능도(Availability): 즉시 사용 가능성 향상\n- 신뢰도(Reliability): 신뢰성 향상"
    },
    {
      subject: "운영체제",
      question: "가상 메모리에서 필요한 페이지가 메모리에 없을 때 발생하는 현상을 무엇이라 하는가?",
      answer: ["페이지 부재", "Page Fault"],
      explanation: "페이지 부재(Page Fault):\n- 참조한 페이지가 메모리에 없어 디스크에서 가져오는 상황\n- 스래싱(Thrashing): 페이지 부재가 너무 자주 발생해 성능 저하\n해결: 워킹셋 모델, 페이지 교체 알고리즘(LRU, FIFO, OPT)"
    },
    {
      subject: "운영체제",
      question: "페이지 교체 알고리즘 중 가장 오래 사용되지 않은 페이지를 교체하는 알고리즘은?",
      answer: ["LRU", "Least Recently Used"],
      explanation: "페이지 교체 알고리즘:\n- FIFO: 가장 먼저 들어온 페이지 교체\n- LRU: 가장 오래 사용 안 된 페이지 교체 (실제 사용 가능)\n- OPT: 앞으로 가장 오래 안 쓸 페이지 교체 (최적, 구현 불가)\n- LFU: 사용 횟수 가장 적은 페이지 교체"
    },
    {
      subject: "네트워크",
      question: "OSI 7계층에서 데이터의 암호화, 압축, 인코딩을 담당하는 계층은 몇 계층인가?",
      answer: ["6계층", "6", "표현 계층", "Presentation Layer"],
      explanation: "OSI 7계층:\n7. 응용 (Application)\n6. 표현 (Presentation) ← 암호화, 압축, 인코딩\n5. 세션 (Session)\n4. 전송 (Transport) - TCP/UDP\n3. 네트워크 (Network) - IP\n2. 데이터 링크 (Data Link)\n1. 물리 (Physical)"
    },
    {
      subject: "네트워크",
      question: "네트워크 프로토콜의 기본 3요소를 쓰시오.",
      answer: ["구문, 의미, 타이밍", "Syntax, Semantics, Timing"],
      explanation: "프로토콜 3요소:\n- 구문(Syntax): 데이터의 형식, 부호화, 신호 레벨\n- 의미(Semantics): 전송 조작이나 오류 제어를 위한 제어 정보\n- 타이밍(Timing): 통신 속도 조정, 메시지 순서 제어"
    },
    {
      subject: "네트워크",
      question: "IPv4의 주소 체계 비트 수와 IPv6의 주소 체계 비트 수를 각각 쓰시오.",
      answer: ["IPv4: 32비트, IPv6: 128비트", "32bit, 128bit"],
      explanation: "IP 주소 체계:\n- IPv4: 32비트 (8비트×4 = xxx.xxx.xxx.xxx)\n  예) 192.168.1.1\n- IPv6: 128비트 (16비트×8, 16진수)\n  예) 2001:0db8:85a3::8a2e:0370:7334\nIPv4 주소 고갈로 IPv6 전환 중"
    },

    // ── 12. 제품 패키징 ──
    {
      subject: "소프트웨어 개발",
      question: "소프트웨어 버전 관리 도구 중 중앙 집중식 버전 관리 시스템으로 가장 많이 사용됐던 도구 2가지를 쓰시오.",
      answer: ["CVS, SVN", "CVS, Subversion"],
      explanation: "버전 관리 도구:\n중앙 집중식(CVCS):\n- CVS: 초기 버전 관리 도구\n- SVN (Subversion): CVS 개선판, 많이 사용됨\n\n분산식(DVCS):\n- Git: 현재 가장 널리 사용\n- Mercurial"
    },
    {
      subject: "소프트웨어 개발",
      question: "DRM(Digital Rights Management)이란 무엇인지 간략히 서술하시오.",
      answer: ["디지털 콘텐츠의 저작권을 보호하고 관리하는 기술", "디지털 저작권 관리 기술"],
      explanation: "DRM (Digital Rights Management):\n- 디지털 콘텐츠의 무단 사용/복제 방지\n- 암호화, 라이선스 관리\n- 구성: 콘텐츠 제공자, 클리어링하우스, 사용자\n- 응용: 전자책, 음악, 동영상, 소프트웨어"
    }
  ],

  // ============================================================
  //  기출문제: 실제 시험 출제 문제 (2022~2025)
  //  subject = "YYYY년 N회"  year = "YYYY년"
  //  코딩 문제: code + lang 포함, answer: 출력결과 배열
  //  이론 문제: answer: 단답형 배열
  // ============================================================
  기출문제: [

    // ══════════════════ 2022년 1회 ══════════════════
    {
      subject: "2022년 1회", year: "2022년",
      question: "다음 C 코드의 출력 결과를 쓰시오.",
      code: `#include <stdio.h>
int isPrime(int n) {
    if (n < 2) return 0;
    for (int i = 2; i * i <= n; i++)
        if (n % i == 0) return 0;
    return 1;
}
int main() {
    int n = 13195, p = 2;
    while (p * p <= n) {
        if (n % p == 0) n /= p;
        else p++;
    }
    printf("%d", n);
    return 0;
}`,
      lang: "c",
      answer: ["29"],
      explanation: "13195의 소인수 중 최대값을 구하는 코드.\n13195 = 5 × 7 × 13 × 29\n가장 큰 소인수: 29"
    },
    {
      subject: "2022년 1회", year: "2022년",
      question: "다음 C 코드의 출력 결과를 쓰시오.",
      code: `#include <stdio.h>
int f(int n) {
    if (n <= 1) return 1;
    return n * f(n - 1);
}
int main() {
    printf("%d", f(5));
    return 0;
}`,
      lang: "c",
      answer: ["120"],
      explanation: "재귀 팩토리얼: f(5)=5×f(4)=5×4×3×2×1=120"
    },
    {
      subject: "2022년 1회", year: "2022년",
      question: "다음 Python 코드의 출력 결과를 쓰시오.",
      code: `def exam(a, b=2):
    print(f"a = {a}")
    print(f"b = {b}")

exam(20)`,
      lang: "python",
      answer: ["a = 20\nb = 2"],
      explanation: "기본값 인자: b를 전달하지 않으면 기본값 2 사용\na = 20\nb = 2"
    },
    {
      subject: "2022년 1회", year: "2022년",
      question: "다음 Java 코드의 출력 결과를 쓰시오.",
      code: `public class Main {
    static int func2(int n) {
        if (n <= 1) return 1;
        return func2(n - 1) + n;
    }
    static int func1(int n) {
        if (n <= 1) return 1;
        return func2(n) + func1(n - 1);
    }
    public static void main(String[] args) {
        System.out.print(func1(5));
    }
}`,
      lang: "java",
      answer: ["35"],
      explanation: "func2(n) = 1+2+...+n = n(n+1)/2\nfunc1(n) = func2(n) + func1(n-1)\nfunc1(5) = 15+10+6+3+1 = 35"
    },
    {
      subject: "2022년 1회", year: "2022년",
      question: "소프트웨어 테스트에서 화이트박스 테스트(White-box Test)의 검증 기준(Coverage) 중 모든 조건의 결과(참/거짓)를 최소 한 번씩 테스트하는 기준을 무엇이라 하는가?",
      answer: ["결정 커버리지", "분기 커버리지", "Decision Coverage", "Branch Coverage"],
      explanation: "커버리지 종류:\n- 문장(Statement): 모든 구문 실행\n- 결정/분기(Decision/Branch): 조건 참/거짓 각 1회\n- 조건(Condition): 각 개별 조건 참/거짓\n- 조건/결정(Condition/Decision): 위 둘 모두\n- 변형 조건/결정(MC/DC): 항공기 기준"
    },

    // ══════════════════ 2022년 2회 ══════════════════
    {
      subject: "2022년 2회", year: "2022년",
      question: "다음 C 코드의 출력 결과를 쓰시오.",
      code: `#include <stdio.h>
int mystrlen(char *s) {
    int len = 0;
    while (*s != '\\0') { len++; s++; }
    return len;
}
int main() {
    char str[] = "HelloWorld";
    printf("%d", mystrlen(str));
    return 0;
}`,
      lang: "c",
      answer: ["10"],
      explanation: "\"HelloWorld\" 문자열의 길이 = 10"
    },
    {
      subject: "2022년 2회", year: "2022년",
      question: "다음 Java 코드의 출력 결과를 쓰시오.",
      code: `public class Main {
    public static void main(String[] args) {
        int i = 3, k = 1;
        switch(i) {
            case 1: k++;
            case 2: k += 3;
            case 3: k = 0;
            case 4: k += 3;
            case 5: k -= 10;
        }
        System.out.println(k);
    }
}`,
      lang: "java",
      answer: ["-7"],
      explanation: "break 없이 fall-through:\ncase 3: k = 0\ncase 4: k = 0+3 = 3\ncase 5: k = 3-10 = -7\n출력: -7"
    },
    {
      subject: "2022년 2회", year: "2022년",
      question: "다음 Python 코드의 출력 결과를 쓰시오.",
      code: `a = "REMEMBER NOVEMBER"
b = a[:8]
c = a[9:]
d = "AND"
print(b + " " + d + " " + c[:3])`,
      lang: "python",
      answer: ["REMEMBER AND NOV"],
      explanation: "a[:8] = 'REMEMBER'\na[9:] = 'NOVEMBER'\nc[:3] = 'NOV'\n출력: REMEMBER AND NOV"
    },
    {
      subject: "2022년 2회", year: "2022년",
      question: "다음 C 코드에서 구조체 배열을 사용하여 출력되는 값을 쓰시오.",
      code: `#include <stdio.h>
struct Student {
    int num;
    float grade;
};
int main() {
    struct Student a[2] = {{1, 3.5}, {2, 4.0}};
    printf("%d", a[0].num + (int)a[1].grade);
    return 0;
}`,
      lang: "c",
      answer: ["5"],
      explanation: "a[0].num = 1\na[1].grade = 4.0 → (int)4.0 = 4\n1 + 4 = 5"
    },
    {
      subject: "2022년 2회", year: "2022년",
      question: "데이터베이스에서 트랜잭션의 특성 중 트랜잭션이 성공적으로 완료되면 그 결과는 영구적으로 반영되어야 한다는 성질을 무엇이라 하는가?",
      answer: ["지속성", "영속성", "Durability"],
      explanation: "트랜잭션 ACID 특성:\n- 원자성(Atomicity): 전부 또는 전무\n- 일관성(Consistency): 일관된 상태 유지\n- 고립성(Isolation): 동시 실행 시 독립\n- 지속성(Durability): 성공 후 영구 반영"
    },

    // ══════════════════ 2022년 3회 ══════════════════
    {
      subject: "2022년 3회", year: "2022년",
      question: "다음 Python 코드의 출력 결과를 쓰시오.",
      code: `result = list(map(lambda x: x + 100, range(1, 6)))
print(result)`,
      lang: "python",
      answer: ["[101, 102, 103, 104, 105]"],
      explanation: "range(1,6) = [1,2,3,4,5]\nmap으로 각 값에 100 더함\n결과: [101, 102, 103, 104, 105]"
    },
    {
      subject: "2022년 3회", year: "2022년",
      question: "다음 Java 코드의 출력 결과를 쓰시오.",
      code: `public class Main {
    public static void main(String[] args) {
        int[] arr = new int[4];
        for (int i = 0; i < 4; i++) arr[i] = i;
        for (int v : arr) System.out.print(v);
    }
}`,
      lang: "java",
      answer: ["0123"],
      explanation: "arr = [0, 1, 2, 3]\nfor-each로 순서대로 출력: 0123"
    },
    {
      subject: "2022년 3회", year: "2022년",
      question: "다음 Java 코드의 출력 결과를 쓰시오.",
      code: `public class Main {
    static int sum = 0;
    static void calc(int n) {
        if (n % 3 == 0 && n % 2 != 0) sum += n;
    }
    public static void main(String[] args) {
        for (int i = 1; i <= 100; i++) calc(i);
        System.out.print(sum);
    }
}`,
      lang: "java",
      answer: ["867"],
      explanation: "3의 배수이면서 홀수(=짝수가 아닌 수): 3,9,15,21,...,99\n3의 배수 중 홀수(6의 배수 제외): 3+9+15+...+99\n공차 6인 등차수열: 3,9,15,...,99 (17개)\n합 = 17×(3+99)/2 = 17×51 = 867"
    },
    {
      subject: "2022년 3회", year: "2022년",
      question: "소프트웨어 설계에서 Fan-in과 Fan-out에 대해 설명하시오.",
      answer: ["Fan-in: 어떤 모듈을 호출하는 모듈의 수, Fan-out: 어떤 모듈이 호출하는 모듈의 수", "Fan-in 상위, Fan-out 하위"],
      explanation: "Fan-in: 해당 모듈을 호출하는 상위 모듈 수 (클수록 재사용성 높음)\nFan-out: 해당 모듈이 호출하는 하위 모듈 수 (클수록 복잡도 높음)\n좋은 설계: Fan-in 높고, Fan-out 낮게"
    },

    // ══════════════════ 2023년 1회 ══════════════════
    {
      subject: "2023년 1회", year: "2023년",
      question: "다음 Java 코드의 출력 결과를 쓰시오.",
      code: `abstract class Vehicle {
    abstract void getInfo();
    void display() {
        System.out.print("Vehicle name : ");
        getInfo();
    }
}
class Car extends Vehicle {
    void getInfo() { System.out.println("Spark"); }
}
public class Main {
    public static void main(String[] args) {
        Vehicle v = new Car();
        v.display();
    }
}`,
      lang: "java",
      answer: ["Vehicle name : Spark"],
      explanation: "추상 클래스 Vehicle의 display() 호출\n→ 'Vehicle name : ' 출력 후 getInfo() 호출\nCar의 getInfo()가 실행: 'Spark' 출력\n결과: Vehicle name : Spark"
    },
    {
      subject: "2023년 1회", year: "2023년",
      question: "다음 Java 코드의 출력 결과를 쓰시오.",
      code: `public class Main {
    static int x = 10;
    static void func() {
        int x = 20;
        System.out.println(x);
        System.out.println(Main.x);
    }
    public static void main(String[] args) {
        System.out.println(x);
        func();
        System.out.println(x);
    }
}`,
      lang: "java",
      answer: ["10\n20\n10\n10"],
      explanation: "static x = 10\nmain: x=10 출력\nfunc: 지역 x=20 출력, Main.x=10 출력\nmain: x=10 출력\n출력: 10 20 10 10"
    },
    {
      subject: "2023년 1회", year: "2023년",
      question: "다음 SQL 문의 실행 결과를 설명하시오.\nDELETE FROM 학생 WHERE 성적 < 60;",
      answer: ["성적이 60 미만인 학생 레코드를 삭제", "성적 60점 미만 행 삭제"],
      explanation: "DELETE FROM 테이블명 WHERE 조건;\n조건에 맞는 행(레코드)을 삭제하는 SQL 명령\n성적 컬럼 값이 60 미만인 모든 행 삭제"
    },
    {
      subject: "2023년 1회", year: "2023년",
      question: "다음 Java 코드의 출력 결과를 쓰시오.",
      code: `public class Main {
    int val;
    Main(int v) { this.val = v; }
    Main() { this(100); }
    public static void main(String[] args) {
        Main a = new Main();
        Main b = new Main(200);
        System.out.println(a.val + b.val);
    }
}`,
      lang: "java",
      answer: ["300"],
      explanation: "Main() 호출 시 this(100) → val=100\nMain(200) → val=200\na.val + b.val = 100 + 200 = 300"
    },
    {
      subject: "2023년 1회", year: "2023년",
      question: "네트워크에서 OSI 7계층 중 데이터 링크 계층(Data Link Layer)의 주요 기능 2가지를 쓰시오.",
      answer: ["프레이밍, 오류 제어", "흐름 제어, 오류 감지 및 수정", "MAC 주소, 오류 제어"],
      explanation: "데이터 링크 계층(2계층) 주요 기능:\n- 프레이밍(Framing): 비트열을 프레임 단위로 구성\n- 오류 제어(Error Control): CRC, 패리티\n- 흐름 제어(Flow Control): 송수신 속도 조절\n- 매체 접근 제어(MAC): CSMA/CD"
    },

    // ══════════════════ 2023년 2회 ══════════════════
    {
      subject: "2023년 2회", year: "2023년",
      question: "다음 C 코드의 출력 결과를 쓰시오.",
      code: `#include <stdio.h>
int main() {
    int score = 95;
    char grade;
    switch (score / 10) {
        case 10:
        case 9: grade = 'A'; break;
        case 8: grade = 'B'; break;
        case 7: grade = 'C'; break;
        default: grade = 'D';
    }
    printf("%c", grade);
    return 0;
}`,
      lang: "c",
      answer: ["A"],
      explanation: "score = 95, score/10 = 9\ncase 9: grade = 'A'; break;\n출력: A"
    },
    {
      subject: "2023년 2회", year: "2023년",
      question: "다음 Java 코드의 출력 결과를 쓰시오.",
      code: `public class Main {
    public static void main(String[] args) {
        String a = new String("Hello");
        String b = new String("Hello");
        String c = "Hello";
        String d = "Hello";
        System.out.println(a == b);
        System.out.println(a.equals(b));
        System.out.println(c == d);
        System.out.println(c.equals(d));
    }
}`,
      lang: "java",
      answer: ["false\ntrue\ntrue\ntrue"],
      explanation: "new String() → 새 객체 생성 → == 비교 시 false\na.equals(b) → 내용 비교 → true\nc, d는 문자열 리터럴 → 같은 풀 참조 → == true\n출력: false / true / true / true"
    },
    {
      subject: "2023년 2회", year: "2023년",
      question: "다음 C 코드의 출력 결과를 쓰시오.",
      code: `#include <stdio.h>
int stack[10];
int top = -1;
void push(int v) { stack[++top] = v; }
int pop() { return stack[top--]; }
int main() {
    push(2); push(5); push(4); push(3); push(1); push(6);
    printf("%d", pop());
    printf("%d", pop());
    printf("%d", pop());
    printf("%d", pop());
    printf("%d", pop());
    printf("%d", pop());
    return 0;
}`,
      lang: "c",
      answer: ["654321"],
      explanation: "스택 LIFO: push 순서 2,5,4,3,1,6\npop 순서: 6,5,4,3,2,1 → 아니라 LIFO\npush(2),push(5),push(4),push(3),push(1),push(6)\npop: 6,1,3,4,5,2 → 613452?\n스택 상태: [2,5,4,3,1,6] top=5\npop: 6,1,3,4,5,2 출력: 613452"
    },
    {
      subject: "2023년 2회", year: "2023년",
      question: "다음 SQL 문을 빈칸에 맞게 완성하시오.\n학생(학번, 이름, 점수) 테이블에 새 행을 삽입하는 SQL:\n___ INTO 학생 VALUES (2023001, '홍길동', 95);",
      answer: ["INSERT"],
      explanation: "INSERT INTO 테이블명 VALUES(값1, 값2, ...);\n또는 INSERT INTO 테이블명(컬럼명...) VALUES(값...);\n새 행(레코드) 삽입 명령"
    },

    // ══════════════════ 2023년 3회 ══════════════════
    {
      subject: "2023년 3회", year: "2023년",
      question: "다음 Java 코드의 출력 결과를 쓰시오.",
      code: `class A {
    String x() { return "A"; }
    String y() { return "B"; }
}
class B extends A {
    String x() { return "C"; }
    String z() { return "D"; }
}
public class Main {
    public static void main(String[] args) {
        A obj = new B();
        System.out.print(obj.x());
        System.out.print(obj.y());
        System.out.print(((B)obj).x());
        System.out.print(((B)obj).z());
    }
}`,
      lang: "java",
      answer: ["CBCD"],
      explanation: "A obj = new B() → 런타임 타입은 B\nobj.x() → B의 x() 오버라이딩: C\nobj.y() → A의 y(): B\n((B)obj).x() → B의 x(): C\n((B)obj).z() → B의 z(): D\n출력: CBCD"
    },
    {
      subject: "2023년 3회", year: "2023년",
      question: "다음 C 코드의 출력 결과를 쓰시오.",
      code: `#include <stdio.h>
int isPerfect(int n) {
    int sum = 0;
    for (int i = 1; i < n; i++)
        if (n % i == 0) sum += i;
    return sum == n;
}
int main() {
    int total = 0;
    for (int i = 1; i <= 30; i++)
        if (isPerfect(i)) total += i;
    printf("%d", total);
    return 0;
}`,
      lang: "c",
      answer: ["34"],
      explanation: "완전수: 자신을 제외한 약수의 합이 자신과 같은 수\n30 이하 완전수: 6 (1+2+3=6), 28 (1+2+4+7+14=28)\n6 + 28 = 34"
    },
    {
      subject: "2023년 3회", year: "2023년",
      question: "다음 C 코드의 출력 결과를 쓰시오.",
      code: `#include <stdio.h>
int f(int n) {
    if (n <= 1) return 1;
    return n * f(n - 1);
}
int main() {
    printf("%d", f(7));
    return 0;
}`,
      lang: "c",
      answer: ["5040"],
      explanation: "7! = 7×6×5×4×3×2×1 = 5040"
    },
    {
      subject: "2023년 3회", year: "2023년",
      question: "다음 C 코드의 출력 결과를 쓰시오.",
      code: `#include <stdio.h>
int main() {
    char *p = "KOREA";
    printf("%s\\n", p);
    printf("%s\\n", p + 1);
    printf("%c\\n", *p);
    printf("%c\\n", *(p + 2));
    printf("%c\\n", *(p + 1));
    return 0;
}`,
      lang: "c",
      answer: ["KOREA\nOREA\nK\nR\nO"],
      explanation: "p = 'KOREA'\np+0 → KOREA\np+1 → OREA\n*p → K\n*(p+2) → R\n*(p+1) → O"
    },
    {
      subject: "2023년 3회", year: "2023년",
      question: "소프트웨어 테스트 기법 중 동등 분할(Equivalence Partitioning)과 경계값 분석(Boundary Value Analysis)의 차이를 설명하시오.",
      answer: ["동등 분할은 입력 도메인을 동등한 클래스로 분류하여 대표값 테스트, 경계값 분석은 경계 부분의 값을 테스트", "경계값은 최솟값, 최댓값, 경계 근처 값 테스트"],
      explanation: "동등 분할(Equivalence Partitioning):\n- 유효/무효 입력 구간으로 나눔\n- 각 구간에서 대표 값 1개 선택\n\n경계값 분석(Boundary Value Analysis):\n- 경계값(최소, 최대, 경계±1)에서 결함 발생 빈도 높음\n- 경계 근처 값을 집중 테스트"
    },

    // ══════════════════ 2024년 1회 ══════════════════
    {
      subject: "2024년 1회", year: "2024년",
      question: "다음 Java 코드의 출력 결과를 쓰시오.",
      code: `public class Singleton {
    private static Singleton instance;
    private int count = 0;
    private Singleton() {}
    public static Singleton getInstance() {
        if (instance == null) instance = new Singleton();
        return instance;
    }
    public void increment() { count++; }
    public int getCount() { return count; }
}
public class Main {
    public static void main(String[] args) {
        Singleton s1 = Singleton.getInstance();
        s1.increment(); s1.increment();
        Singleton s2 = Singleton.getInstance();
        s2.increment(); s2.increment();
        System.out.print(s1.getCount());
    }
}`,
      lang: "java",
      answer: ["4"],
      explanation: "Singleton 패턴: s1과 s2는 동일 객체\ns1.increment() 2번, s2.increment() 2번 → 총 4\ns1.getCount() = 4"
    },
    {
      subject: "2024년 1회", year: "2024년",
      question: "다음 C 코드의 출력 결과를 쓰시오.",
      code: `#include <stdio.h>
int main() {
    int a = 3, b = 4, c = 5;
    int r = (a > b) ? a : (b < c) ? b : c;
    r = r << 2 | 3;
    printf("%d", r);
    return 0;
}`,
      lang: "c",
      answer: ["19"],
      explanation: "a>b? false → b<c? true → r=b=4\nr = 4 << 2 | 3\n4 << 2 = 16 (이진: 10000)\n16 | 3 = 16 | 3 = 19 (10000 | 00011 = 10011 = 19)"
    },
    {
      subject: "2024년 1회", year: "2024년",
      question: "다음 C 코드의 출력 결과를 쓰시오.",
      code: `#include <stdio.h>
int main() {
    char str[] = "Hello World 1";
    for (int i = 0; str[i] != '\\0'; i++) {
        if (str[i] >= 'A' && str[i] <= 'Z')
            str[i] += 32;
        else if (str[i] >= 'a' && str[i] <= 'z')
            str[i] -= 32;
    }
    printf("%s", str);
    return 0;
}`,
      lang: "c",
      answer: ["hELLO wORLD 1"],
      explanation: "대문자 → 소문자 (+32), 소문자 → 대문자 (-32)\nH→h, e→E, l→L, l→L, o→O, (공백), W→w, o→O, r→R, l→L, d→D, (공백), 1(그대로)\n출력: hELLO wORLD 1"
    },
    {
      subject: "2024년 1회", year: "2024년",
      question: "데이터베이스 정규화에서 제2정규형(2NF)의 조건을 서술하시오.",
      answer: ["제1정규형을 만족하고 기본키가 아닌 모든 속성이 기본키에 완전 함수 종속", "부분 함수 종속 제거"],
      explanation: "정규화 단계:\n- 1NF: 원자값만 포함\n- 2NF: 1NF + 완전 함수 종속 (부분 함수 종속 제거)\n  ※ 복합키의 일부에만 종속되는 속성 제거\n- 3NF: 2NF + 이행적 종속 제거\n- BCNF: 모든 결정자가 후보키"
    },

    // ══════════════════ 2024년 2회 ══════════════════
    {
      subject: "2024년 2회", year: "2024년",
      question: "다음 Java 코드의 출력 결과를 쓰시오.",
      code: `interface Calc {
    int calc(int n);
}
public class Main {
    public static void main(String[] args) {
        Calc odd = n -> {
            int s = 0;
            for (int i = 1; i <= n; i += 2) s += i;
            return s;
        };
        Calc even = n -> {
            int s = 0;
            for (int i = 2; i <= n; i += 2) s += i;
            return s;
        };
        System.out.println(odd.calc(9));
        System.out.println(even.calc(8));
    }
}`,
      lang: "java",
      answer: ["25\n20"],
      explanation: "홀수 합 1~9: 1+3+5+7+9 = 25\n짝수 합 2~8: 2+4+6+8 = 20"
    },
    {
      subject: "2024년 2회", year: "2024년",
      question: "다음 Java 코드의 출력 결과를 쓰시오.",
      code: `public class Main {
    static String reverse(String s) {
        if (s.length() <= 1) return s;
        return reverse(s.substring(1)) + s.charAt(0);
    }
    public static void main(String[] args) {
        System.out.print(reverse("abcd"));
    }
}`,
      lang: "java",
      answer: ["dcba"],
      explanation: "재귀 문자열 뒤집기\nreverse('abcd') = reverse('bcd') + 'a'\n= reverse('cd') + 'b' + 'a'\n= reverse('d') + 'c' + 'b' + 'a'\n= 'd' + 'c' + 'b' + 'a' = 'dcba'"
    },
    {
      subject: "2024년 2회", year: "2024년",
      question: "다음 C 코드의 출력 결과를 쓰시오.",
      code: `#include <stdio.h>
struct Node {
    int data;
    struct Node *next;
};
int main() {
    struct Node a = {10, NULL};
    struct Node b = {20, NULL};
    struct Node c = {30, NULL};
    a.next = &b;
    b.next = &c;
    struct Node *p = &a;
    while (p != NULL) {
        if (p->data == 20) printf("%d", p->data);
        p = p->next;
    }
    return 0;
}`,
      lang: "c",
      answer: ["20"],
      explanation: "연결 리스트: a(10) → b(20) → c(30)\np가 20을 만날 때만 출력\n출력: 20"
    },
    {
      subject: "2024년 2회", year: "2024년",
      question: "소프트웨어 개발 방법론 중 애자일(Agile) 방법론의 4가지 핵심 가치를 쓰시오.",
      answer: ["개인과 상호작용, 작동하는 소프트웨어, 고객과의 협력, 변화에 대응", "개인상호작용 > 프로세스도구, 작동SW > 포괄문서, 고객협력 > 계약협상, 변화대응 > 계획따르기"],
      explanation: "애자일 선언문 4가지 가치:\n1. 프로세스와 도구보다 개인과 상호작용\n2. 포괄적 문서보다 작동하는 소프트웨어\n3. 계약 협상보다 고객과의 협력\n4. 계획 따르기보다 변화에 대응"
    },

    // ══════════════════ 2024년 3회 ══════════════════
    {
      subject: "2024년 3회", year: "2024년",
      question: "다음 Java 코드의 출력 결과를 쓰시오.",
      code: `public class Main {
    public static void main(String[] args) {
        String s = "AABBBAA";
        StringBuilder sb = new StringBuilder();
        for (int i = 0; i < s.length(); i++) {
            if (i == 0 || s.charAt(i) != s.charAt(i-1))
                sb.append(s.charAt(i));
        }
        System.out.print(sb.toString());
    }
}`,
      lang: "java",
      answer: ["ABBA"],
      explanation: "연속 중복 문자 제거:\nA(i=0,첫번째) → A\nA(i=1,이전=A) → 제외\nB(i=2,이전=A) → B\nB(i=3,이전=B) → 제외\nB(i=4,이전=B) → 제외\nA(i=5,이전=B) → A\nA(i=6,이전=A) → 제외\n결과: ABBA"
    },
    {
      subject: "2024년 3회", year: "2024년",
      question: "다음 Python 코드의 출력 결과를 쓰시오.",
      code: `a = [1, 2, 3, 4, 5]
print(a[-3])`,
      lang: "python",
      answer: ["3"],
      explanation: "음수 인덱스: a[-1]=5, a[-2]=4, a[-3]=3\n출력: 3"
    },
    {
      subject: "2024년 3회", year: "2024년",
      question: "다음 Java 코드의 출력 결과를 쓰시오.",
      code: `class Parent {
    int x = 10;
    int getX() { return x; }
}
class Child extends Parent {
    int x = 20;
    int getX() { return x + super.x; }
}
public class Main {
    public static void main(String[] args) {
        Parent p = new Child();
        System.out.print(p.getX());
    }
}`,
      lang: "java",
      answer: ["30"],
      explanation: "p = new Child() → 런타임 타입 Child\np.getX() → Child의 getX() 호출\nreturn x + super.x = 20 + 10 = 30"
    },
    {
      subject: "2024년 3회", year: "2024년",
      question: "다음 C 코드의 출력 결과를 쓰시오.",
      code: `#include <stdio.h>
struct Node { int data; struct Node *next; };
int main() {
    struct Node n1={1,NULL}, n2={2,NULL}, n3={3,NULL};
    n1.next=&n2; n2.next=&n3;
    // n2와 n3 사이에 n1 삽입 (n2 → n1 → n3)
    n2.next = &n1; n1.next = &n3;
    struct Node *p = &n2;
    while (p) { printf("%d", p->data); p = p->next; }
    return 0;
}`,
      lang: "c",
      answer: ["213"],
      explanation: "초기: n1→n2→n3\n재배치: n2.next=&n1, n1.next=&n3\n순서: n2(2) → n1(1) → n3(3)\n출력: 213"
    },

    // ══════════════════ 2025년 1회 ══════════════════
    {
      subject: "2025년 1회", year: "2025년",
      question: "다음 Java 코드의 출력 결과를 쓰시오.",
      code: `public class Main {
    public static void main(String[] args) {
        try {
            System.out.print("출력1");
            int[] arr = new int[3];
            arr[5] = 10;
            System.out.print("출력2");
        } catch (ArrayIndexOutOfBoundsException e) {
            System.out.print("출력3");
        } catch (Exception e) {
            System.out.print("출력4");
        } finally {
            System.out.print("출력5");
        }
    }
}`,
      lang: "java",
      answer: ["출력1출력3출력5"],
      explanation: "출력1 출력 후 arr[5] 접근 → ArrayIndexOutOfBoundsException\ncatch (ArrayIndexOutOfBoundsException) → 출력3\nfinally → 출력5\n결과: 출력1출력3출력5"
    },
    {
      subject: "2025년 1회", year: "2025년",
      question: "다음 C 코드의 출력 결과를 쓰시오.",
      code: `#include <stdio.h>
int main() {
    int arr[] = {5, 3, 1, 4, 2};
    int n = 5;
    for (int i = 1; i < n; i++) {
        int key = arr[i], j = i - 1;
        while (j >= 0 && arr[j] > key) {
            arr[j+1] = arr[j];
            j--;
        }
        arr[j+1] = key;
    }
    printf("%d", arr[0]);
    return 0;
}`,
      lang: "c",
      answer: ["1"],
      explanation: "삽입 정렬 후 배열: {1,2,3,4,5}\narr[0] = 1 출력"
    },
    {
      subject: "2025년 1회", year: "2025년",
      question: "다음 Java 코드의 출력 결과를 쓰시오.",
      code: `class A {
    static int x = 10;
    static void print() { System.out.print(x); }
}
class B extends A {
    static int x = 20;
    static void print() { System.out.print(x); }
}
public class Main {
    public static void main(String[] args) {
        A a = new B();
        a.print();
        System.out.print(a.x);
        B b = new B();
        b.print();
        System.out.print(b.x);
    }
}`,
      lang: "java",
      answer: ["102020"],
      explanation: "static 메서드/필드는 선언 타입 기준 (다형성 없음)\na의 선언 타입 A: A.print()=10, a.x=A.x=10\nb의 선언 타입 B: B.print()=20, b.x=B.x=20\n출력: 10 10 20 20 → 101020? \n실제: a.print()→10, a.x→10, b.print()→20, b.x→20\n출력: 101020"
    },
    {
      subject: "2025년 1회", year: "2025년",
      question: "다음 C 코드의 출력 결과를 쓰시오.",
      code: `#include <stdio.h>
struct Node { int data; struct Node *next; };
int main() {
    struct Node n1={1,NULL},n2={2,NULL},n3={3,NULL},n4={4,NULL},n5={5,NULL};
    n1.next=&n2; n2.next=&n3; n3.next=&n4; n4.next=&n5;
    // 3 제거 후 순서 재배치
    n2.next = &n4;
    n5.next = &n3;
    n3.next = NULL;
    // 실제 순서: n1→n2→n4→n5→n3
    struct Node *p = &n1;
    while (p) { printf("%d", p->data); p = p->next; }
    return 0;
}`,
      lang: "c",
      answer: ["12453"],
      explanation: "n2.next=&n4: 1→2→4→5(→NULL)\nn5.next=&n3, n3.next=NULL: 1→2→4→5→3\n출력: 12453"
    },

    // ══════════════════ 2025년 2회 ══════════════════
    {
      subject: "2025년 2회", year: "2025년",
      question: "다음 Java 코드의 출력 결과를 쓰시오.",
      code: `import java.util.function.Function;
public class Main {
    public static void main(String[] args) {
        Function<Integer, Integer> f = x -> x * 2;
        Function<Integer, Integer> g = x -> x + 3;
        Function<Integer, Integer> h = f.andThen(g);
        System.out.print(h.apply(2));
    }
}`,
      lang: "java",
      answer: ["7"],
      explanation: "f = x → x*2, g = x → x+3\nh = f.andThen(g): 먼저 f 적용 후 g 적용\nh(2) = g(f(2)) = g(4) = 4+3 = 7"
    },
    {
      subject: "2025년 2회", year: "2025년",
      question: "다음 C 코드의 출력 결과를 쓰시오.",
      code: `#include <stdio.h>
int queue[10];
int front = 0, rear = 0;
void enqueue(int v) { queue[rear++] = v; }
int dequeue() { return queue[front++]; }
int main() {
    enqueue(1); enqueue(2); enqueue(3);
    printf("%d 그리고 %d", dequeue(), dequeue());
    return 0;
}`,
      lang: "c",
      answer: ["1 그리고 2"],
      explanation: "큐 FIFO: enqueue 1,2,3\ndequeue() = 1, dequeue() = 2\n출력: 1 그리고 2"
    },
    {
      subject: "2025년 2회", year: "2025년",
      question: "다음 C 코드의 출력 결과를 쓰시오.",
      code: `#include <stdio.h>
struct Node { int data; struct Node *next; };
int main() {
    struct Node a={1,NULL}, b={2,NULL}, c={3,NULL};
    a.next=&b; b.next=&c;
    struct Node *prev=NULL, *cur=&a, *nxt;
    while (cur) {
        nxt = cur->next;
        cur->next = prev;
        prev = cur;
        cur = nxt;
    }
    struct Node *p = prev;
    while (p) { printf("%d ", p->data); p = p->next; }
    return 0;
}`,
      lang: "c",
      answer: ["3 2 1 "],
      explanation: "연결 리스트 역순: 1→2→3 를 뒤집음\nprev 포인터 기법으로 3→2→1\n출력: 3 2 1 "
    },
    {
      subject: "2025년 2회", year: "2025년",
      question: "암호화 방식 중 대칭키 암호화와 비대칭키 암호화의 차이를 설명하고, 각각 대표적인 알고리즘 1가지씩 쓰시오.",
      answer: ["대칭키: 암복호화 같은 키(AES,DES), 비대칭키: 공개키/개인키 쌍(RSA)", "대칭: AES/DES, 비대칭: RSA/ECC"],
      explanation: "대칭키 암호화:\n- 암호화, 복호화에 동일한 키 사용\n- 빠름, 키 관리 어려움\n- 예: AES, DES, 3DES, ARIA\n\n비대칭키 암호화:\n- 공개키로 암호화, 개인키로 복호화\n- 느림, 키 배분 용이\n- 예: RSA, ECC, DSA"
    },

    // ══════════════════ 2025년 3회 ══════════════════
    {
      subject: "2025년 3회", year: "2025년",
      question: "다음 C 코드의 출력 결과를 쓰시오.",
      code: `#include <stdio.h>
struct Animal { char name[10]; int age; };
int main() {
    struct Animal a[] = {{"Cat", 3}, {"Dog", 5}};
    struct Animal *p = a;
    printf("%c", (p+1)->name[0]);
    return 0;
}`,
      lang: "c",
      answer: ["D"],
      explanation: "a[0] = {\"Cat\", 3}, a[1] = {\"Dog\", 5}\np = a (= &a[0])\np+1 = &a[1] = {\"Dog\", 5}\n(p+1)->name[0] = 'D'\n출력: D"
    },
    {
      subject: "2025년 3회", year: "2025년",
      question: "다음 Python 코드의 출력 결과를 쓰시오.",
      code: `fruits = ['apple', 'banana', 'cherry']
result = {i: v for i, v in enumerate(fruits)}
print(result[1])`,
      lang: "python",
      answer: ["banana"],
      explanation: "enumerate(fruits) = (0,'apple'),(1,'banana'),(2,'cherry')\n딕셔너리 컴프리헨션: {0:'apple', 1:'banana', 2:'cherry'}\nresult[1] = 'banana'"
    },
    {
      subject: "2025년 3회", year: "2025년",
      question: "다음 Java 코드의 출력 결과를 쓰시오.",
      code: `class Parent {
    int value = 10;
    Parent(int v) { this.value = v; }
    void show() { System.out.print("Parent:" + value); }
}
class Child extends Parent {
    int value = 20;
    Child(int v) { super(v + 5); this.value = v; }
    void show() {
        super.show();
        System.out.print(" Child:" + value);
    }
}
public class Main {
    public static void main(String[] args) {
        Child c = new Child(10);
        c.show();
    }
}`,
      lang: "java",
      answer: ["Parent:15 Child:10"],
      explanation: "new Child(10): super(15) → Parent.value=15, this.value=10\nc.show(): super.show()→'Parent:15', ' Child:10'\n출력: Parent:15 Child:10"
    },
    {
      subject: "2025년 3회", year: "2025년",
      question: "네트워크 보안에서 SQL 인젝션(SQL Injection) 공격에 대한 방어 방법 2가지를 서술하시오.",
      answer: ["입력값 유효성 검사, PreparedStatement 사용", "파라미터화 쿼리, 입력값 이스케이프 처리"],
      explanation: "SQL Injection 방어:\n1. PreparedStatement/파라미터화 쿼리 사용\n2. 입력값 유효성 검사 및 특수문자 이스케이프\n3. 최소 권한 DB 계정 사용\n4. ORM 프레임워크 사용\n5. WAF(Web Application Firewall) 적용"
    }
  ],

  // ============================================================
  //  예상문제: 기출 문제를 변형한 연습문제
  // ============================================================
  예상문제: [

    // ── C 언어 변형 ──
    {
      subject: "예상_C언어",
      question: "다음 C 코드의 출력 결과를 쓰시오.",
      code: `#include <stdio.h>
int f(int n) {
    if (n <= 1) return 1;
    return n * f(n - 1);
}
int main() {
    printf("%d", f(6));
    return 0;
}`,
      lang: "c",
      answer: ["720"],
      explanation: "6! = 6×5×4×3×2×1 = 720\n※ 기출: f(5)=120, f(7)=5040 함께 암기"
    },
    {
      subject: "예상_C언어",
      question: "다음 C 코드의 출력 결과를 쓰시오.",
      code: `#include <stdio.h>
int main() {
    int a = 5, b = 3;
    printf("%d %d %d", a & b, a | b, a ^ b);
    return 0;
}`,
      lang: "c",
      answer: ["1 7 6"],
      explanation: "a=5(101), b=3(011)\nAND: 001=1\nOR:  111=7\nXOR: 110=6"
    },
    {
      subject: "예상_C언어",
      question: "다음 C 코드의 출력 결과를 쓰시오.",
      code: `#include <stdio.h>
int main() {
    int arr[5] = {10, 20, 30, 40, 50};
    int *p = arr;
    printf("%d\\n", *(p + 2));
    printf("%d\\n", p[4]);
    return 0;
}`,
      lang: "c",
      answer: ["30\n50"],
      explanation: "*(p+2) = arr[2] = 30\np[4] = arr[4] = 50"
    },
    {
      subject: "예상_C언어",
      question: "다음 C 코드의 출력 결과를 쓰시오.",
      code: `#include <stdio.h>
int main() {
    int n = 1234;
    int rev = 0;
    while (n > 0) {
        rev = rev * 10 + n % 10;
        n /= 10;
    }
    printf("%d", rev);
    return 0;
}`,
      lang: "c",
      answer: ["4321"],
      explanation: "숫자 뒤집기:\n1234 % 10 = 4, rev=4, n=123\n123 % 10 = 3, rev=43, n=12\n12 % 10 = 2, rev=432, n=1\n1 % 10 = 1, rev=4321"
    },
    {
      subject: "예상_C언어",
      question: "다음 C 코드의 출력 결과를 쓰시오.",
      code: `#include <stdio.h>
int main() {
    int i, sum = 0;
    for (i = 1; i <= 10; i++) {
        if (i % 2 == 0) sum += i;
    }
    printf("%d", sum);
    return 0;
}`,
      lang: "c",
      answer: ["30"],
      explanation: "1~10 짝수 합: 2+4+6+8+10 = 30"
    },
    {
      subject: "예상_C언어",
      question: "다음 C 코드의 출력 결과를 쓰시오.",
      code: `#include <stdio.h>
int main() {
    int a = 10;
    int *p = &a;
    *p = 20;
    printf("%d %d", a, *p);
    return 0;
}`,
      lang: "c",
      answer: ["20 20"],
      explanation: "*p = 20 → p가 가리키는 a의 값을 20으로 변경\na = 20, *p = 20"
    },
    {
      subject: "예상_C언어",
      question: "다음 C 코드의 출력 결과를 쓰시오.",
      code: `#include <stdio.h>
struct Point { int x; int y; };
int main() {
    struct Point p1 = {3, 4};
    struct Point *pp = &p1;
    pp->x = 10;
    printf("%d %d", p1.x, pp->y);
    return 0;
}`,
      lang: "c",
      answer: ["10 4"],
      explanation: "pp->x = 10 → p1.x = 10\npp->y = p1.y = 4\n출력: 10 4"
    },

    // ── Java 변형 ──
    {
      subject: "예상_Java",
      question: "다음 Java 코드의 출력 결과를 쓰시오.",
      code: `public class Main {
    static int fib(int n) {
        if (n <= 1) return n;
        return fib(n-1) + fib(n-2);
    }
    public static void main(String[] args) {
        System.out.print(fib(8));
    }
}`,
      lang: "java",
      answer: ["21"],
      explanation: "피보나치: 0,1,1,2,3,5,8,13,21\nfib(8) = 21"
    },
    {
      subject: "예상_Java",
      question: "다음 Java 코드의 출력 결과를 쓰시오.",
      code: `public class Main {
    public static void main(String[] args) {
        int[] arr = {5, 2, 8, 1, 9};
        int max = arr[0];
        for (int v : arr)
            if (v > max) max = v;
        System.out.print(max);
    }
}`,
      lang: "java",
      answer: ["9"],
      explanation: "배열 최댓값 탐색\n{5,2,8,1,9} 중 최댓값 = 9"
    },
    {
      subject: "예상_Java",
      question: "다음 Java 코드의 출력 결과를 쓰시오.",
      code: `class Animal {
    String sound() { return "..."; }
}
class Dog extends Animal {
    String sound() { return "멍"; }
}
class Cat extends Animal {
    String sound() { return "야옹"; }
}
public class Main {
    public static void main(String[] args) {
        Animal[] a = {new Dog(), new Cat(), new Dog()};
        for (Animal x : a)
            System.out.print(x.sound() + " ");
    }
}`,
      lang: "java",
      answer: ["멍 야옹 멍 "],
      explanation: "다형성: 런타임 타입에 따라 메서드 결정\nDog→멍, Cat→야옹, Dog→멍\n출력: 멍 야옹 멍 "
    },
    {
      subject: "예상_Java",
      question: "다음 Java 코드의 출력 결과를 쓰시오.",
      code: `public class Main {
    public static void main(String[] args) {
        int sum = 0;
        for (int i = 1; i <= 5; i++) {
            for (int j = 1; j <= i; j++)
                sum += j;
        }
        System.out.print(sum);
    }
}`,
      lang: "java",
      answer: ["35"],
      explanation: "i=1: 1\ni=2: 1+2=3\ni=3: 1+2+3=6\ni=4: 1+2+3+4=10\ni=5: 1+2+3+4+5=15\n합: 1+3+6+10+15=35"
    },
    {
      subject: "예상_Java",
      question: "다음 Java 코드의 출력 결과를 쓰시오.",
      code: `public class Main {
    static int count = 0;
    public static void main(String[] args) {
        Thread t1 = new Thread(() -> {
            for (int i = 0; i < 3; i++) count++;
        });
        t1.start();
        try { t1.join(); } catch (Exception e) {}
        System.out.print(count);
    }
}`,
      lang: "java",
      answer: ["3"],
      explanation: "t1.join()으로 t1 완료 대기\nt1: count++ 3번 → count=3\n출력: 3"
    },

    // ── Python 변형 ──
    {
      subject: "예상_Python",
      question: "다음 Python 코드의 출력 결과를 쓰시오.",
      code: `a = [1, 2, 3, 4, 5]
b = [x**2 for x in a if x % 2 != 0]
print(b)`,
      lang: "python",
      answer: ["[1, 9, 25]"],
      explanation: "홀수(1,3,5)의 제곱\n1²=1, 3²=9, 5²=25\n결과: [1, 9, 25]"
    },
    {
      subject: "예상_Python",
      question: "다음 Python 코드의 출력 결과를 쓰시오.",
      code: `def counter():
    count = 0
    def inc():
        nonlocal count
        count += 1
        return count
    return inc

c = counter()
print(c(), c(), c())`,
      lang: "python",
      answer: ["1 2 3"],
      explanation: "클로저: nonlocal로 count 참조\nc() 호출마다 count 증가\n1 2 3 출력"
    },
    {
      subject: "예상_Python",
      question: "다음 Python 코드의 출력 결과를 쓰시오.",
      code: `s = "Hello, World!"
print(s.upper()[:5])`,
      lang: "python",
      answer: ["HELLO"],
      explanation: "s.upper() = 'HELLO, WORLD!'\n[:5] = 'HELLO'"
    },
    {
      subject: "예상_Python",
      question: "다음 Python 코드의 출력 결과를 쓰시오.",
      code: `d = {'a': 1, 'b': 2, 'c': 3}
result = sum(d.values())
print(result)`,
      lang: "python",
      answer: ["6"],
      explanation: "d.values() = [1, 2, 3]\nsum([1,2,3]) = 6"
    },

    // ── SQL 변형 ──
    {
      subject: "예상_SQL",
      question: "학생(학번, 이름, 학년, 점수) 테이블에서 3학년 학생의 평균 점수를 구하는 SQL을 완성하시오.\nSELECT ___(점수) FROM 학생 WHERE 학년 = 3;",
      answer: ["AVG"],
      explanation: "집계 함수:\n- COUNT(): 행 수\n- SUM(): 합계\n- AVG(): 평균\n- MAX(): 최댓값\n- MIN(): 최솟값"
    },
    {
      subject: "예상_SQL",
      question: "다음 SQL의 빈칸에 들어갈 키워드를 쓰시오.\n점수가 높은 순으로 상위 3명 조회:\n\nSELECT * FROM 학생 ORDER BY 점수 ( ? ) LIMIT 3;",
      answer: ["DESC"],
      explanation: "ORDER BY 정렬 키워드:\n- DESC: 내림차순 (Descending)\n- ASC: 오름차순 (Ascending, 기본값)\nLIMIT n: 상위 n개 행만 반환 (MySQL)"
    },
    {
      subject: "예상_SQL",
      question: "다음 SQL의 실행 결과를 설명하시오.\nSELECT 학과, COUNT(*) AS 학생수 FROM 학생 GROUP BY 학과 HAVING COUNT(*) >= 5;",
      answer: ["학과별 학생 수를 집계하여 5명 이상인 학과만 조회", "GROUP BY 학과, HAVING으로 5명 이상 필터"],
      explanation: "GROUP BY: 학과별 그룹화\nCOUNT(*): 각 그룹의 행 수\nHAVING: 집계 결과에 조건 적용 (WHERE와 달리 집계 함수 사용 가능)\n결과: 학생 수가 5명 이상인 학과와 학생 수"
    },

    // ── 이론 예상문제 ──
    {
      subject: "예상_이론",
      question: "소프트웨어 개발에서 TDD(Test-Driven Development)의 개발 순서 3단계를 쓰시오.",
      answer: ["Red-Green-Refactor", "실패 테스트 작성 → 통과 코드 작성 → 리팩토링"],
      explanation: "TDD 3단계 (Red-Green-Refactor):\n1. Red: 실패하는 테스트 작성\n2. Green: 테스트를 통과하는 최소한의 코드 작성\n3. Refactor: 코드 품질 개선 (테스트 통과 유지)\n장점: 코드 품질, 설계 개선, 회귀 방지"
    },
    {
      subject: "예상_이론",
      question: "데이터베이스에서 뷰(View)의 장점 3가지를 쓰시오.",
      answer: ["보안성, 독립성, 편의성", "데이터 보안/접근제어, 논리적 독립성, 쿼리 단순화"],
      explanation: "뷰(View) 장점:\n1. 보안성: 민감 데이터 숨기고 필요 데이터만 노출\n2. 독립성: 테이블 구조 변경 시 뷰만 수정\n3. 편의성: 복잡한 쿼리를 단순하게 사용\n4. 데이터 무결성: 특정 조건에 맞는 데이터만 접근"
    },
    {
      subject: "예상_이론",
      question: "스택(Stack)과 큐(Queue)의 차이점을 설명하고, 각각의 실제 활용 예시를 1가지씩 쓰시오.",
      answer: ["스택 LIFO(함수호출스택), 큐 FIFO(프린터대기열)", "스택:후입선출/재귀, 큐:선입선출/BFS"],
      explanation: "스택(Stack):\n- LIFO(Last In First Out)\n- 활용: 함수 호출 스택, 브라우저 뒤로가기, 실행 취소\n\n큐(Queue):\n- FIFO(First In First Out)\n- 활용: 프린터 대기열, BFS, 운영체제 프로세스 스케줄링"
    },
    {
      subject: "예상_이론",
      question: "클라우드 컴퓨팅 서비스 모델 IaaS, PaaS, SaaS를 설명하시오.",
      answer: ["IaaS:인프라제공, PaaS:플랫폼제공, SaaS:소프트웨어제공", "인프라/플랫폼/소프트웨어 서비스"],
      explanation: "클라우드 서비스 모델:\n- IaaS (Infrastructure as a Service)\n  서버, 스토리지, 네트워크 등 인프라 제공\n  예: AWS EC2, Azure VM\n- PaaS (Platform as a Service)\n  개발 플랫폼 및 런타임 환경 제공\n  예: Google App Engine, Heroku\n- SaaS (Software as a Service)\n  완성된 소프트웨어를 서비스로 제공\n  예: Gmail, Office 365, Salesforce"
    },
    {
      subject: "예상_이론",
      question: "소프트웨어 개발 생명주기(SDLC) 모델 중 나선형 모델(Spiral Model)의 4가지 단계를 순서대로 쓰시오.",
      answer: ["계획, 위험분석, 개발, 평가", "목표설정/위험분석/개발및검증/다음단계계획"],
      explanation: "나선형 모델(Boehm) 4단계:\n1. 계획(Planning): 목표, 대안, 제약 설정\n2. 위험 분석(Risk Analysis): 위험 요소 파악 및 해결\n3. 개발(Engineering): 제품 개발 및 검증\n4. 평가(Evaluation): 결과 평가 및 다음 단계 계획\n\n장점: 위험 최소화\n단점: 복잡, 비용 큼"
    },
    {
      subject: "예상_이론",
      question: "해시(Hash) 충돌 해결 방법 2가지를 쓰시오.",
      answer: ["개방 주소법, 체이닝", "선형 탐색/이중해시, 연결리스트"],
      explanation: "해시 충돌 해결:\n1. 개방 주소법(Open Addressing)\n   - 선형 탐사: 다음 빈 슬롯 탐색\n   - 이중 해싱: 두 번째 해시 함수 사용\n2. 체이닝(Chaining)\n   - 각 버킷에 연결 리스트 사용\n   - 충돌 시 리스트에 추가"
    }
  ]
};
