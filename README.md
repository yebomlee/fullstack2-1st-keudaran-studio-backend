<br>
<img width="951" alt="kedaran" src="https://user-images.githubusercontent.com/87700801/147952251-7469bda8-6bc7-4e04-89c3-4bcf30a181cc.png">
<br>

# 🦖 크다란 스토어(keudaran_store) 프로젝트 소개

### **꿈이 크다란 우리들**

**'크다란 스토어'는 문구 & 잡화 쇼핑 웹 어플리케이션입니다.** <br>
본 프로젝트는 학습 목적으로 [조구만 스토어](http://www.jogumanstore.com)를 모티브로 하여 구현한 프로젝트 입니다. 소스를 참고하여 복사 구현 한 것이 아닌 서비스 중인 웹 어플리케이션을 유저의 입장에서 외관만 참고하여, 리소스 중심으로 데이터베이스를 직접 기획하였습니다. 이를 바탕으로 기존 웹 어플리케이션과 동일한 또는 유사한 기능을 실행 할 수 있도록 구현한 프로젝트입니다.

<br>

## 📆 프로젝트 기간

- **2021.10.04 ~ 2021.10.15 (2주)**
- **2021.10.16 ~ 리팩토링**

<br>

## 🛠 Skills & Tools

### Back-End
<p float="left">
<img src="https://cdn.icon-icons.com/icons2/2699/PNG/128/nodejs_logo_icon_169910.png" alt="node.js" style="display: inline; width:30px; margin-right:5px;">
  <img src="https://cdn.icon-icons.com/icons2/2415/PNG/128/express_original_logo_icon_146527.png" alt="node.js" style="display: inline; width:30px; margin-right:5px;">
  <img src="https://cdn.icon-icons.com/icons2/2107/PNG/128/file_type_nodemon_icon_130299.png" alt="node.js" style="display: inline; width:30px; margin-right:5px;">
  <img src="https://cdn.icon-icons.com/icons2/2107/PNG/128/file_type_light_prisma_icon_130444.png" alt="node.js" style="display: inline; width:30px; margin-right:5px;">
  <img src="https://cdn.icon-icons.com/icons2/2415/PNG/128/mysql_original_wordmark_logo_icon_146417.png" alt="node.js" style="display: inline; width:30px; margin-right:5px;">
    <img src="https://cdn.icon-icons.com/icons2/3053/PNG/128/postman_macos_bigsur_icon_189815.png" alt="node.js" style="display: inline; width:30px; margin-right:5px;">
  </p>
 
- **Node.js, Express, Prisma, Nodemon, MySQL, Postman <br>
Bcrypt, Json Web Token, Cookies, Layered Pattern, Restful-API**


### Co-Working Tools
<p float="left">
<img src="https://cdn.icon-icons.com/icons2/2107/PNG/128/file_type_git_icon_130581.png" alt="git" style="display: inline; width:30px; margin-right:5px;">
<img src="https://cdn.icon-icons.com/icons2/2389/PNG/128/notion_logo_icon_145025.png" alt="notion" style="display: inline; width:30px; margin-right:5px;">
<img src="https://cdn.icon-icons.com/icons2/2108/PNG/128/slack_icon_130829.png" alt="slack" style="display: inline; width:30px; margin-right:5px;">
<img src="https://cdn.icon-icons.com/icons2/2429/PNG/128/zoom_logo_icon_147196.png" alt="zoom" style="display: inline; width:30px; margin-right:5px;">
  </p>
  
- **Git, Notion, Slack, Zoom**

<br>

## 📝 Back-End 구현 기능

### 공통 구현

- **Database**
   - DB diagram 사용하여 데이터베이스 모델링
   - Prisma ORM 사용하여 스키마 구현

- **Layered Pattern 기반 구현 (Router, Controller, Service, Model)**
   - 각 API별 레이어드 패턴에 기반하여 기능 구분
   
- **MiddleWare 구현 (Error Handler, Token Verification 구현)**
   - 발생 가능한 Error종류 정의 및 status code에 맞는 메시지 전달
   - 로그인을 완료한 유저에게만 제공하는 서비스를 위해 서비스를 제공 전 유저의 Token 유효성을 검사하는 미들웨어 구현

- **Util (Async Wrapper, Error Generator, Bcrypt, JWT, Format Checker)**
   - 비동기 오류처리를 위한 wrapper 함수 유틸화
   - Error throw 및 Error Message 부여하는 함수 유틸화
   - Bcrypt 암호화 및 복호화 메서드 유틸화
   - JWT 발행 및 인가 메서드 유틸화
   - user input 데이터 정규표현식으로 체크하는 메서드 유틸화

### User API

- **로그인 API**

   - 유저 로그인 성공 시, Json Web Token 발행 및 Access Token 쿠키 저장 Main으로 Redirect
   - 유저 정보 input 값 불일치 시, Error Message 출력
   - 유저 정보 input 값 없을 시, Error Message 출력

<br>

## 💽 DB ERD

![big-studio](https://user-images.githubusercontent.com/87700801/147952733-6a6304b1-825c-4cde-a4a7-e4d62c7f04f3.png)

- [https://dbdiagram.io/d/61581f9f825b5b01461d8050](https://dbdiagram.io/d/61581f9f825b5b01461d8050)

<br>

## 🏃 Step to Run

- Git bash를 사용하여 Github Repository에 있는 프로젝트 폴더를 가져옵니다.
  - $ git clone `https://github.com/yebomlee/fullstack2-1st-keudaran-studio-backend.git`
- 가져온 프로젝트 폴더에서 노드 패키지 모듈을 설치합니다.
  - $ npm install
- 프로젝트 폴더를 VS code와 같은 editor 환경에서 실행시킵니다.
- .env 파일 생성 후 DATABASE 설정을 추가합니다. 포트를 설정합니다. 필요에 따라 KEY값도 설정 할 수 있습니다.<br>(아래 예시는 MySQL 데이터베이스를 사용하는 것을 가정합니다.)
  - <pre><code>DATABASE_URL = "mysql://root:{데이터베이스 계정 비밀번호}@localhost:3306/{연동할 데이터베이스 이름}"
    PORT = 8000
    </pre></code>
- Prisma를 사용하여 데이터베이스에 테이블을 생성합니다.
  - npx prisma migrate dev
- 설치 완료 후, 프로젝트를 로컬 환경에서 실행시킵니다.
  - $ npm start

<br>

## ☕️ Reference

- 이 프로젝트는 [조구만 스토어](http://www.jogumanstore.com) 웹 어플리케이션을 참조하여 학습 목적으로 구현하였습니다. 해당 Repository의 코드를 활용하여 이득을 취하거나 무단 배포할 경우, 법적으로 문제가 될 수 있음을 알려드립니다.
