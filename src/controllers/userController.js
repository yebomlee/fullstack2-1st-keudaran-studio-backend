import { userService } from '../services';
import { errorGenerator } from '../utils';
import { asyncWrapper } from '../utils';

const resMessage = (num, res, message, data) => {
  res.status(num).json({
    message,
    data,
  });
};

const getAllUser = asyncWrapper(async (req, res, next) => {
  const user = await userService.getAllUser();
  if (!user) errorGenerator(409, 'Is Not User');
  resMessage(201, res, 'Is User', user);
});

const checkUserName = async (req, res, next) => {
  try {
    const { userName } = req.body;
    if (!userName || userName.length < 5) errorGenerator(400, 'Invalid Input');
    const isUserNameCheck = await userService.checkUserName(userName);
    if (isUserNameCheck) {
      errorGenerator(409);
    }
    resMessage(201, res, 'Id Not Duplicate', userName);
  } catch (err) {
    next(err);
  }
};

const signInUser = asyncWrapper(async (req, res) => {
  const { email, password } = req.body;
  const user = await userService.signInUser(email, password);

  res.cookie('user', user.token);
  res.status(201).json({ message: user.message });
});

export default { signInUser, getAllUser, checkUserName };
