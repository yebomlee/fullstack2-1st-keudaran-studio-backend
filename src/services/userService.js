import { userDAO } from '../models';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

const signInUser = async (email, password) => {
  const [userInfo] = await userDAO.checkUserInfoByEmail(email);

  if (!userInfo) {
    const err = new Error();
    err.statusCode = 401;
    err.message = '유효하지 않은 이메일입니다.';

    throw err;
  }

  const isValidUser = await bcrypt.compare(password, userInfo.password);
  console.log(userInfo);
  console.log(isValidUser);

  if (isValidUser) {
    const { id } = userInfo;
    const token = jwt.sign({ id }, process.env.SECRET_KEY, {
      expiresIn: '1h',
    });

    return { message: '로그인에 성공하였습니다.', token };
  } else {
    const err = new Error();
    err.statusCode = 401;
    err.message = '비밀번호가 일치하지 않습니다.';

    throw err;
  }
};

export default { signInUser };
