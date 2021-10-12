import jwt from '../utils/jwt';

const tokenVerifiation = async (req, res, next) => {
  try {
    const token = req.cookies.user;
    if (token) {
      const payload = await jwt.verifyToken(token);
      req.body.userId = payload.id;
    }
    next();
  } catch (err) {
    res.status(401).json({ message: 'INVALID_TOKEN' });
  }
};

export default tokenVerifiation;
