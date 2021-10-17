
# 🦖크다란 스토어(keudaran_store)

---

꿈이 크다란 우리들

# 🤝 팀원

---

- [김시원](https://github.com/k-cool)

- [성지수](https://github.com/seong-ji-sue)

- [신기철](https://github.com/PhilipShinnn)

- [이욱창](https://github.com/wook95)

- [이예봄](https://github.com/yebomlee)

- [이은정](http://github.com/leecoder21)

# 📆 프로젝트 기간

---

2021.10.04. ~ 2021.10.15.

# 🛠스킬

---

- 프론트 엔드 : React, React-Router, JS, SASS, Restful API
- 백 엔드 : Node.js, Express, Prisma, MySQL, Bcrypt, Json Web Token, Cookies, Layered Pattern
- 협업툴 : Git, Notion, Slack, Zoom

# ⚜️프론트 엔드 Repository Link

---

- [https://github.com/wecode-bootcamp-korea/fullstack2-1st-keudaran-studio-frontend](https://github.com/wecode-bootcamp-korea/fullstack2-1st-keudaran-studio-frontend)

# 📀 DB Modeling

---

- [https://dbdiagram.io/d/61581f9f825b5b01461d8050](https://dbdiagram.io/d/61581f9f825b5b01461d8050)

![modeling.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/dc93c7da-45b5-434b-bbad-7303b5288b28/modeling.png)

# ⚙️ Backend 구현 기능 상세

---

## 공통구현사항

1. DB modeling / Database
   - DB diagram 사용하여 데이터베이스 모델링
   - Prisma ORM 사용하여 스키마 구현
2. Layered Pattern 기반 구현 (Router, Controller, Service, Model)
   - 각 API별 레이어드 패턴에 기반하여 기능 구분
3. MiddleWare구현 (Error Handler, Token Verification 구현)
   - 발생가능한 Error종류 정의 및 코드에 맞는 메시지 전달
   - 로그인 완료한 유저에게 제공하는 서비스 제공전 토큰의 유효성을 검사하는 미들웨어 구현
4. Util(Async Wrapper, Error Generator, Bcrypt, JWT, Format Checker)
   - 비동기 오류처리를 위한 wrapper함수 유틸화
   - Error throw 및 에러메시지 부여하는 함수 유틸화
   - Bcrypt 암호화 및 복호화 메서드 유틸화
   - JWT 토클 발행 및 인가 메서드 유틸화
   - user input 데이터 정규표현식으로 체크하는 메서드 유틸화

## User API

1. 회원가입 API

   - 전달받은 값 유효성 체크 유틸 구현 및 사용
   - 회원가입시 토큰발행하여 자동 로그인 구현

1. 아이디 중복 검사 및 체크 API

1. 회원탈퇴 API

   - 비밀번호 복호화 및 일치여부 체크 후 Hard Delete 데이터 삭제

1. 로그인 API
   - 로그인시 토큰 발행 및 쿠키전송

## Category API

1. 카테고리 정보 조회 API
   - 메인카테고리 및 서브카테고리 데이터 가공하여 조회

## Product API

1. 디테일 상품정보 조회 API

   - 상품, 상품제조사, 이미지 와 상품 옵션 정보 조회
   - Service에서 프론트에서 필요한 형태로 데이터 가공하여 응답

1. 리스트 상품 조회 및 정렬 API
   - 쿼리스트링으로 정렬기준 반영
   - Service에서 프론트에서 필요한 형태로 데이터 가공하여 응답

## Review API

1. 리뷰 정보 조회 및 정렬 API

   - 쿼리스트링을 통해 리뷰 정렬기준 반영

1. 리뷰 생성 API
   - 인가 미들웨어 통과한 리뷰데이터 생성
   - 리뷰사진 존재여부에 따른 조건문 쿼리문

## ☕️ Reference

- 이 프로젝트는 [조구만 스토어](http://www.jogumanstore.com)사이트를 참조하여 학습 목적으로 구현하였습니다. 해당 Repository의 코드를 활용하여 이득을 취하거나 무단 배포할 경우, 법적으로 문제가 될 수 있음을 알려드립니다.
