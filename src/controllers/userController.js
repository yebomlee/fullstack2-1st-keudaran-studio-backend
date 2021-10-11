import { userService } from '../services';
import { errorGenerator } from '../utils';
import { asyncWrapper } from '../utils';

const resMessage = (num, res, message, data) => {
  res.status(num).json({
    message,
    data,
  });
};

const getAlluser = asyncWrapper(async (req, res, next) => {
  const user = await userService.getAlluser();
  if (!user) errorGenerator(409, 'Is Not User');
  errorGenerator(404);
  resMessage(201, res, 'Is User', user);
});

const checkRealName = async (req, res, next) => {
  try {
    const { realName } = req.body;
    if (!realName || realName.length < 5) errorGenerator(400, 'Invalid Input');
    const isRealNameCheck = await userService.checkRealName(realName);
    if (isRealNameCheck) {
      errorGenerator(409);
    }
    resMessage(201, res, 'Id Not Duplicate', realName);
  } catch (err) {
    next(err);
  }
};

export default { getAlluser, checkRealName };
