# 37-COLLABORATION-WEB-EVERYTIME

### DIVE SOPT 37기 합동세미나 데스크탑 웹 1조 에브리타임 ⏰

<br/>

<p align="center">
  <img src="src/assets/readme/everytime.png" alt="에브리타임 리디자인" />
</p>

<br/>

## 👥 팀 소개

<div align="center">

| **👑 이채영** | **김어진** | **김윤지** | **백지연** | **임서준** |
| :-: | :-: | :-: | :-: | :-: |
| <img src="https://github.com/hummingbbird.png" width="150" height="150"/><br/>[@hummingbbird](https://github.com/hummingbbird) | <img src="https://github.com/eojindesu.png" width="150" height="150"/><br/>[@eojindesu](https://github.com/eojindesu) | <img src="https://github.com/yooncandooit.png" width="150" height="150"/><br/>[@yooncandooit](https://github.com/yooncandooit) | <img src="https://github.com/jyeon03.png" width="150" height="150"/><br/>[@jyeon03](https://github.com/jyeon03) | <img src="https://github.com/jm8468.png" width="150" height="150"/><br/>[@jm8468](https://github.com/jm8468) |

</div>

<br/>

## 🛠️ 기술 스택

| 역할 | 종류 |
| --- | --- |
| Library | ![React](https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=React&logoColor=black) |
| Programming Language | ![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=TypeScript&logoColor=white) |
| Styling | ![TailwindCSS](https://img.shields.io/badge/TailwindCSS-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white) |
| Data Fetching | ![Tanstack Query](https://img.shields.io/badge/tanstackquery-FF4154.svg?style=for-the-badge&logo=tanstackquery&logoColor=white) |
| Formatting | ![ESLint](https://img.shields.io/badge/ESLint-4B3263?style=for-the-badge&logo=eslint&logoColor=white) ![Prettier](https://img.shields.io/badge/Prettier-1A2C34?style=for-the-badge&logo=prettier&logoColor=F7BA3E) |
| Package Manager | ![Pnpm](https://img.shields.io/badge/Pnpm-F69220?style=for-the-badge&logo=pnpm&logoColor=white) |
| Version Control | ![Git](https://img.shields.io/badge/git-%23F05033.svg?style=for-the-badge&logo=git&logoColor=white) ![GitHub](https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white) |
| Deployment | ![Vercel](https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white) |
| Cooperation | ![Notion](https://img.shields.io/badge/Notion-000000?style=for-the-badge&logo=notion&logoColor=white) ![Discord](https://img.shields.io/badge/Discord-5865F2?style=for-the-badge&logo=discord&logoColor=white) ![Figma](https://img.shields.io/badge/Figma-F24E1E?style=for-the-badge&logo=figma&logoColor=white) ![Swagger](https://img.shields.io/badge/Swagger-85EA2D?style=for-the-badge&logo=swagger&logoColor=black) |

<br/>

## 🗂️ 폴더 구조

```
📦 37-COLLABORATION-WEB-EVERYTIME
├── 📁 node_modules
├── 📁 public
├── 📁 src
│   ├── 📁 apis
│   ├── 📁 assets
│   ├── 📁 components
│   │   ├── 📁 common
│   │   │   ├── 📁 footer
│   │   │   ├── 📁 header
│   │   │   ├── 📁 item
│   │   │   ├── 📁 sidebar
│   │   │   └── DelayedSuspense.tsx
│   │   ├── 📁 MainPage
│   │   └── 📁 SearchPage
│   ├── 📁 constants
│   ├── 📁 hooks
│   ├── 📁 layouts
│   ├── 📁 mocks
│   ├── 📁 pages
│   ├── 📁 routes
│   ├── 📁 types
│   ├── 📁 utils
│   ├── App.tsx
│   ├── index.css
│   ├── main.tsx
│   ├── theme.css
│   └── vite.env.d.ts
├── .eslintrc.cjs
├── .prettierrc
```

<br/>

## 📑 컨벤션

### Git Branch

| 브랜치         | 용도      |
| -------------- | --------- |
| **main**       | 배포용    |
| **dev**        | 통합 개발 |
| **feat/issue** | 기능 개발 |

<br/>

### Commit Convention

| 태그           | 내용                                        |
| -------------- | ------------------------------------------- |
| **[init]**     | 개발 환경 초기 세팅                         |
| **[feat]**     | 새로운 기능 추가                            |
| **[fix]**      | 버그 수정                                   |
| **[design]**   | 스타일 변경 및 디자인 구현                  |
| **[update]**   | 기존 정상 동작 대비 개선 / 보완             |
| **[remove]**   | 파일 삭제                                   |
| **[move]**     | 코드 또는 파일 이동                         |
| **[rename]**   | 파일 또는 폴더명 수정                       |
| **[docs]**     | 문서 수정                                   |
| **[comment]**  | 필요한 주석 추가 및 변경                    |
| **[refactor]** | 기능 변화 없이 코드 구조 개선 / 가독성 향상 |
| **[test]**     | 테스트 코드 작성 / 수정                     |
| **[chore]**    | 기타 자잘한 작업 (설정, 패키지 업데이트 등) |

### 💡 Commit Message Example

<태그>: 작업 내용 #이슈 번호

<br/>

### Issue Convention

```
[TYPE] 작업 내용

## 📄 TASK
<!-- 작업에 대한 설명 -->
-

## ✅ TO DO
<!-- 이슈에서 수행해야 할 구체적인 작업 항목들 체크리스트 -->
- [ ] 해야 할 작업 1
- [ ] 해야 할 작업 2

## 📎 ETC
<!-- 작업과 관련된 추가 정보나 참고 사항 -->
-
```

<br/>

### PR Convention

```
[TYPE] 작업 내용

## 📌 Related Issues
- close #이슈 번호

## 📄 Tasks
- 작업 내용

## ⭐ PR Point (To Reviewer)
- 리뷰어가 봐주었으면 하는 부분

## 📷 Screenshot
- 작업 결과물에 관련된 사진이나 영상

## 🔔 ETC
- 기타 이외 작업 작성 (ex. 참고한 아티클 링크 / 새롭게 알게 된 점 등)
```

<br/>

### Coding Convention

### 컴포넌트

- 공통 컴포넌트는 `common`에, 나머지는 페이지 별로 구분
- 컴포넌트 명은 모두 **파스칼케이스**(ex)`LivePostItem`

### 변수/상수

- var 금지!
- 상수의 경우 대문자 스네이크케이스(ex) `FILTER_CATEGORY`

### 함수 & 훅

- hooks: `use-` 접두어 사용
- **화살표** 함수 우선 사용
- utils: 함**수 export는 마지막 줄에 한 번에, name export** 방식
- 이벤트 핸들러 함수는 `handle-` 접두어 사용(카멜케이스)

### 타입

- interface 사용
- 공통적으로 사용되는 타입(서버 api response, request, 배열 아이템 타입 등)은 types 폴더에 `~Type` 로 작성
- **1회성 props 타입은 `~Props` 로 네이밍 통일**

### API

- 네이밍: getReviews, getPostsSearch(카멜케이스)

### 기타

- 유틸, 상수, 커스텀훅은 확장자 `.ts`
- 시맨틱 태그 사용 지향, 단위는 `rem` 사용 (border와 같은 고정 크기는 `px`)

<br/>

## 🧩 초기 세팅 역할 분배

| 담당자   | 담당 기능                      |
| -------- | ------------------------------ |
| **채영** | CI/CD 구축 (GitHub Actions)    |
| **채영** | 라벨링 자동화 (GitHub Actions) |
| **채영** | 배포                           |
| **어진** | 스타일 커스텀 (`theme.css`)    |
| **어진** | SVGR 세팅                      |
| **윤지** | Router 설정 (절대 경로)        |
| **윤지** | Reviewer 설정                  |
| **지연** | ESLint & Prettier 설정         |
| **지연** | TanStack Query 세팅            |
| **서준** | Issue & PR Template 생성       |

<br/>

## 🧩 컴포넌트 & 뷰 역할 분배

| 담당자     | 담당 컴포넌트                                                |
| ---------- | ------------------------------------------------------------ |
| **이채영** | Header + LNB + LnbSearch, Pagination, GnbButton, SearchPage  |
| **김어진** | SimplePostItem, Filter, SearchResult, Footer                 |
| **김윤지** | LnbItem, ProfileItem, LivePostItem, SearchTextField, SideBar |
| **백지연** | SidebarHeader, ReviewItem, MyHistory, BookItem, MainPage     |
| **임서준** | Board, BoardItem, SearchContent, SearchHighlight             |

<br/>

## 🧩 API 역할 분배

| 담당자     | 담당 기능                                       |
| ---------- | ----------------------------------------------- |
| **이채영** | 검색 결과 조회                                  |
| **김어진** | 핫 게시물 조회, 최근 강의평 조회, API 초기 세팅 |
| **김윤지** | 실시간 인기 글 조회                             |
| **백지연** | 장터 게시판 조회                                |
| **임서준** | 게시판 전체 목록 조회, API 초기 세팅            |

<br/>
