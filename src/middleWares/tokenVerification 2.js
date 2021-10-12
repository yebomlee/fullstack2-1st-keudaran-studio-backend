import jwt from '../utils/jwt';

const tokenVerifiation = async (req, res, next) => {
  const token = req.cookies.user;
  try {
    const result = await jwt.verifyToken(token);
    req.body.userId = result.id;
    next();
  } catch (err) {
    res
      .status(401)
      .json({ message: '유효한 토큰이 아닙니다. 다시 로그인 해주세요.' });
  }
};

export default tokenVerifiation;
