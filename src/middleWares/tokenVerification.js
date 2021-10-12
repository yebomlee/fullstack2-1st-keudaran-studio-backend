import jwt from '../utils/jwt';
import { asyncWrapper } from '../utils';

const tokenVerification = asyncWrapper(async (req, res, next) => {
  const token = req.cookies.user;
  if (token) {
    const payload = await jwt.verifyToken(token);
    req.body.userId = payload.id;
  }
  next();
});

export default tokenVerification;
