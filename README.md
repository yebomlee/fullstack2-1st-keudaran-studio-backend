# 🦖크다란 스토어(keudaran_store)

꿈이 크다란 우리들

<br><br><br>

# 🤝 팀원

- [김시원](https://github.com/k-cool)

- [성지수](https://github.com/seong-ji-sue)

- [신기철](https://github.com/PhilipShinnn)

- [이욱창](https://github.com/wook95)

- [이예봄](https://github.com/yebomlee)

- [이은정](http://github.com/leecoder21)

<br><br><br>

# 📣 프로젝트 소개

본 프로젝트는 학습 목적으로 [조구만 스토어](http://www.jogumanstore.com)를 클론하여 구현한 프로젝트 입니다. 클론코딩이긴 하지만 소스를 보고 카피한 것이 아닌 서비스 중인 사이트를 유저의 입장에서 외관만 참고하여, 동일한 또는 유사한 기능을 할 수 있도록 구현해 보았습니다.

<br><br><br>

# 📆 프로젝트 기간

2021.10.04. ~ 2021.10.15.(2주간)

<br><br><br>

# 🛠스킬

### Frontend
<p float="left">
<img src="https://cdn.icon-icons.com/icons2/2415/PNG/128/react_original_logo_icon_146374.png" alt="react" style="display: inline-block; width:30px; margin-right:5px;">
<img src="https://cdn.icon-icons.com/icons2/649/PNG/128/sign_icon-icons.com_59775.png" alt="routes" style="display: inline-block; width:30px; margin-right:5px;">
<img src="https://cdn.icon-icons.com/icons2/2107/PNG/128/file_type_js_official_icon_130509.png" alt="js" style="display: inline; width:30px; margin-right:5px;">
<img src="https://cdn.icon-icons.com/icons2/2107/PNG/128/file_type_scss_icon_130177.png" alt="sass" style="display: inline; width:30px; margin-right:5px;">
<img src="https://cdn.icon-icons.com/icons2/2107/PNG/128/file_type_html_icon_130541.png" alt="html" style="display: inline; width:30px; margin-right:5px;">
</p>

React, React-Router, JS, SASS, HTML

<br>

### Backend
<p float="left">
<img src="https://cdn.icon-icons.com/icons2/2699/PNG/128/nodejs_logo_icon_169910.png" alt="node.js" style="display: inline; width:30px; margin-right:5px;">
  <img src="https://cdn.icon-icons.com/icons2/2415/PNG/128/express_original_logo_icon_146527.png" alt="node.js" style="display: inline; width:30px; margin-right:5px;">
  <img src="https://cdn.icon-icons.com/icons2/2107/PNG/128/file_type_nodemon_icon_130299.png" alt="node.js" style="display: inline; width:30px; margin-right:5px;">
  <img src="https://cdn.icon-icons.com/icons2/2107/PNG/128/file_type_light_prisma_icon_130444.png" alt="node.js" style="display: inline; width:30px; margin-right:5px;">
  <img src="https://cdn.icon-icons.com/icons2/2415/PNG/128/mysql_original_wordmark_logo_icon_146417.png" alt="node.js" style="display: inline; width:30px; margin-right:5px;">
    <img src="https://cdn.icon-icons.com/icons2/3053/PNG/128/postman_macos_bigsur_icon_189815.png" alt="node.js" style="display: inline; width:30px; margin-right:5px;">
  </p>
 
Node.js, Express, Prisma, Nodemon, MySQL, Postman <br>
Bcrypt, Json Web Token, Cookies, Layered Pattern, Restful-API

<br>

### Co-Working tools
<p float="left">
<img src="https://cdn.icon-icons.com/icons2/2107/PNG/128/file_type_git_icon_130581.png" alt="git" style="display: inline; width:30px; margin-right:5px;">
<img src="https://cdn.icon-icons.com/icons2/2389/PNG/128/notion_logo_icon_145025.png" alt="notion" style="display: inline; width:30px; margin-right:5px;">
<img src="https://cdn.icon-icons.com/icons2/2108/PNG/128/slack_icon_130829.png" alt="slack" style="display: inline; width:30px; margin-right:5px;">
<img src="https://cdn.icon-icons.com/icons2/2429/PNG/128/zoom_logo_icon_147196.png" alt="zoom" style="display: inline; width:30px; margin-right:5px;">
  </p>
  
Git, Notion, Slack, Zoom

<br><br><br>

# ⚜️프론트 엔드 Repository Link

- [https://github.com/wecode-bootcamp-korea/fullstack2-1st-keudaran-studio-frontend](https://github.com/wecode-bootcamp-korea/fullstack2-1st-keudaran-studio-frontend)

<br><br><br>

# 📀 DB Modeling

<img width="1145" alt="modeling" src="https://user-images.githubusercontent.com/39205612/137620849-a7124364-2aa2-49cd-9c15-16fe3f3eb5b7.png">

- [https://dbdiagram.io/d/61581f9f825b5b01461d8050](https://dbdiagram.io/d/61581f9f825b5b01461d8050)

<br><br><br>

# ⚙️ Backend 구현 기능 상세

### 공통구현사항

1. DB modeling / Database
   - DB diagram 사용하여 데이터베이스 모델링
   - Prisma ORM 사용하여 스키마 구현

<br>

2. Layered Pattern 기반 구현 (Router, Controller, Service, Model)
   - 각 API별 레이어드 패턴에 기반하여 기능 구분

<br>

3. MiddleWare구현 (Error Handler, Token Verification 구현)
   - 발생가능한 Error종류 정의 및 코드에 맞는 메시지 전달
   - 로그인 완료한 유저에게 제공하는 서비스 제공전 토큰의 유효성을 검사하는 미들웨어 구현

<br>

4. Util(Async Wrapper, Error Generator, Bcrypt, JWT, Format Checker)
   - 비동기 오류처리를 위한 wrapper함수 유틸화
   - Error throw 및 에러메시지 부여하는 함수 유틸화
   - Bcrypt 암호화 및 복호화 메서드 유틸화
   - JWT 토클 발행 및 인가 메서드 유틸화
   - user input 데이터 정규표현식으로 체크하는 메서드 유틸화

<br>

### User API

1. 회원가입 API

   - 전달받은 값 유효성 체크 유틸 구현 및 사용
   - 회원가입시 토큰발행하여 자동 로그인 구현

<br>

2. 아이디 중복 검사 및 체크 API

<br>

3. 회원탈퇴 API

   - 비밀번호 복호화 및 일치여부 체크 후 Hard Delete 데이터 삭제

<br>

4. 로그인 API
   - 로그인시 토큰 발행 및 쿠키전송

<br>

### Category API

1. 카테고리 정보 조회 API
   - 메인카테고리 및 서브카테고리 데이터 가공하여 조회

<br>

### Product API

1. 디테일 상품정보 조회 API

   - 상품, 상품제조사, 이미지 와 상품 옵션 정보 조회
   - Service에서 프론트에서 필요한 형태로 데이터 가공하여 응답

<br>

2. 리스트 상품 조회 및 정렬 API
   - 쿼리스트링으로 정렬기준 반영
   - Service에서 프론트에서 필요한 형태로 데이터 가공하여 응답

<br>

### Review API

1. 리뷰 정보 조회 및 정렬 API

   - 쿼리스트링을 통해 리뷰 정렬기준 반영

<br>

2. 리뷰 생성 API
   - 인가 미들웨어 통과한 리뷰데이터 생성
   - 리뷰사진 존재여부에 따른 조건문 쿼리문

<br><br><br>

# ☕️ Reference

- 이 프로젝트는 [조구만 스토어](http://www.jogumanstore.com)사이트를 참조하여 학습 목적으로 구현하였습니다. 해당 Repository의 코드를 활용하여 이득을 취하거나 무단 배포할 경우, 법적으로 문제가 될 수 있음을 알려드립니다.
