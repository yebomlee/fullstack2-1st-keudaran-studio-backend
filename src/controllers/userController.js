import { userService } from '../services';
import { errorGenerator } from '../errors';

const resMessage = (num, res, message, data) => {
  res.status(num).json({
    message,
    data,
  });
};

const getAlluser = async (req, res) => {
  try {
    const user = await userService.getAlluser();
    if (!user) errorGenerator(409, 'Is Not User');
    resMessage(201, res, 'Is User', user);
  } catch (err) {
    next(err);
  }
};

const checkRealName = async (req, res, next) => {
  try {
    const { realName } = req.body;
    if (!realName || realName.length < 5) errorGenerator(400, 'Invalid Input');
    const isRealNameCheck = await userService.checkRealName(realName);
    if (!isRealNameCheck) errorGenerator(409);
    resMessage(201, res, 'Id Not Duplicate', realName);
  } catch (err) {
    next(err);
  }
};

export default { getAlluser, checkRealName };
