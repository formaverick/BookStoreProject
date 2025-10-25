# BookStoreProject

- 교보문고 메인/상세 페이지를 클론한 반응형 웹 프로젝트입니다. 정적 자원(HTML/CSS/JS/이미지/JSON)으로 구성되며, 일부 도서는 카카오 책 검색 API를 통해 동적으로 불러옵니다. 빌드 도구 없이 브라우저에서 바로 실행됩니다.

**데모 페이지**

- 메인: `index.html`
- 상세(서브): `sub.html`

## 프로젝트 소개

- 실제 서점(교보문고)의 정보 아키텍처와 UI 패턴을 분석해 메인 홈과 책 상세 영역을 설계/구현했습니다.
- 메인 영역은 배너 슬라이더, 오늘의 선택, 신간/추천/인기, KB 베스트, Picks, CASTing, 이벤트, 사이드 배너 등으로 구성됩니다.
- 상세 페이지는 도서 대표 이미지, 저자 정보, 같은 저자 작품, 함께 보면 좋은 책, PICK 섹션 등으로 구성됩니다.
- jQuery + Ajax로 카카오 책 검색 API를 호출해 썸네일·제목·저자·출판사·가격을 DOM에 주입합니다. 일부 블록은 JSON 정적 데이터로 구성합니다.

## 기술 스택

- HTML5, CSS3 (모듈화된 스타일 시트: `css/`)
- JavaScript (ES5/ES6 혼용), jQuery 3.6
- 외부 라이브러리: Font Awesome, Google Fonts
- 데이터: 정적 JSON(`json/`) + Kakao Book Search API
- 이미지 에셋: `img/` 하위 다수 리소스

## 주요 기능

- 메인 슬라이더/배너
  - 자동 재생/일시정지, 좌/우 버튼, 현재 페이지 표시 (`js/mainSlider.js`, `js/imageSlider.js`, `js/eventSlider.js`).
- 검색 UI 커스텀 셀렉트
  - 상단 검색바의 커스텀 드롭다운, 외부 클릭 닫힘 처리 (`js/search.js`).
- 카테고리 내비게이션
  - 탭 전환, 카테고리/서비스 토글, 단계별 페이드/슬라이드 애니메이션 (`js/category.js`).
- 도서 데이터 로딩
  - Kakao Book API로 도서 목록/썸네일 주입 (메인: `js/BookFetch.js`, 상세: `js/BookFetchSub.js`).
  - 카테고리/픽스/CASTing 등 일부 섹션은 로컬 JSON을 Ajax로 로드 (`json/*.json`).
- 랭킹/베스트
  - 카테고리별 베스트 탭 전환 및 순위 표시 (`js/KBbest.js`).
- 여러 슬라이더 구성
  - 인기/추천/직접 만든 책/CASTing/Side 등 개별 슬라이더 제어 스크립트 분리 (`js/*Slider.js`, `js/casting*.js`, `js/pickSlide.js`).
- 공통 레이아웃/상단 고정/사이드
  - 공통 상단 고정바, 사이드 배너, TOP 버튼 등 인터랙션 (`js/fixed.js`, `js/side.js`).

## 폴더 구조(요약)

- `index.html`, `sub.html` — 메인/상세 페이지
- `css/` — 레이아웃/섹션 단위 스타일 (`head.css`, `body.css`, `todayPick.css`, `new_recommend_popular.css`, `KBbest.css`, `picks.css`, `madeBook.css`, `casting.css`, `event.css`, `side.css`, `footer.css`, …)
- `js/` — 기능 단위 스크립트 (`mainSlider.js`, `BookFetch.js`, `KBbest.js`, `category.js`, `search.js`, `eventSlider.js`, `popularSlider.js`, `madeBookSlider.js`, `subSlider.js`, `BookFetchSub.js`, …)
- `json/` — 정적 데이터 (`picks.json`, `iconmenu.json`, `casting*.json`, 카테고리 별 json 등)
- `img/` — 섹션별 이미지 에셋 (banner, casting, category, event, icon, subimgs, …)

## 데이터/외부 API

- Kakao Book Search API
  - Endpoint: `https://dapi.kakao.com/v3/search/book?target=title`
  - 헤더: `Authorization: KakaoAK <REST_API_KEY>`
  - 사용처: 메인/상세 페이지의 도서 카드 및 썸네일 삽입
- 로컬 JSON
  - `json/picks.json`, `json/iconmenu.json`, `json/casting*.json` 등은 각 섹션의 리스트 뷰 데이터를 제공합니다.

## 프로젝트 인사이트

- DOM 재사용과 데이터 주입 분리
  - 공통 레이아웃은 HTML로 고정하고, 리스트/카드는 Ajax로 데이터만 주입해 유지보수성을 높였습니다.
- 슬라이더 아키텍처 단순화
  - jQuery 애니메이션 + `append/prepend` 재배치로 무한 슬라이드 구현. 제어 버튼/오토플레이/페이지 표기를 일관된 패턴으로 구성했습니다.
- 점진적 데이터 소스
  - 실시간 데이터(Kakao API)와 정적 데이터(JSON)를 혼용해 개발 속도와 데모 신뢰성을 균형화했습니다.
- UI 상태 관리
  - 다수의 탭/토글이 중첩되는 영역은 클래스 토글과 초기 상태를 명확히 하여 상호작용 충돌을 줄였습니다.

## 회고

- 장점
  - 섹션/기능별 스크립트 분리와 네이밍 일관성으로 온보딩 시간이 줄고 변경 영향 범위가 명확했습니다.
  - 슬라이더 구현을 공통 패턴(append/prepend + animate)으로 통일해 기능 추가·수정이 쉽도록 하였습니다.
  - 데이터 주입 레이어(BookFetch, BookFetchSub)를 뷰와 분리해 DOM 구조 변경 시 영향이 최소화되었습니다.
  - 정적 JSON과 외부 API 혼용으로 개발/시연 환경에서 안정성과 실시간성을 균형 있게 확보했습니다.
  - 카테고리·탭·토글 상태를 클래스 토글로 일관 처리해 상호작용 충돌과 사이드 이펙트를 줄였습니다.
  - CSS를 섹션별 파일로 모듈화해 스타일 간섭(전역 선택자 충돌)과 회귀 이슈를 줄였습니다.
  - 의존성을 최소화(CDN, 빌드 도구 없음)하여 실행 진입 장벽이 낮고 배포가 단순했습니다.
  - Ajax 요청/DOM 업데이트 경로가 명확해 네트워크·렌더링 문제 디버깅이 수월했습니다.
  - 반복 리스트 렌더링을 제너릭 로직으로 구성해 데이터 소스 교체와 확장이 용이했습니다.
  - 역할 기반 폴더 구조로 탐색성과 협업 효율을 높였습니다.
- 아쉬움/개선점
  - 브라우저에서 직접 REST API를 호출하므로 키 노출 위험이 있습니다. 서버 프록시 또는 환경변수 빌드 체인 도입이 필요합니다.
  - 여러 jQuery 모듈 간 전역 상태 충돌 가능성이 있어 모듈 시스템(ES Modules/번들러) 도입을 고려할 수 있습니다.
  - 접근성(키보드 내비게이션, ARIA)과 성능(이미지 지연 로딩, 슬라이더 스로틀링) 최적화 여지가 있습니다.
  - 다국어/인코딩 이슈를 줄이기 위해 리소스 텍스트 관리와 폰트/문자셋 설정을 정교화할 수 있습니다.

## 기타

- 저작권이 있는 로고/이미지는 학습/포트폴리오 용도 데모로만 사용되었습니다.
- 기여/문의: 이슈 또는 PR로 제안해주세요.
