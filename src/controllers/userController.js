import { userService } from '../services';
import { errorGenerator } from '../utils';
import { asyncWrapper } from '../utils';
import { CheckFormatColumn } from '../utils/formatCheckUser';

const resMessage = (num, res, message, data) => {
  res.status(num).json({
    message,
    data,
  });
};

const getAlluser = asyncWrapper(async (req, res) => {
  const user = await userService.getAllUser();
  if (!user) errorGenerator(409, 'USERNAME_DOSES_NOT_EXIST');
  resMessage(201, res, 'USERNAME_EXIST', user);
});

const checkUserName = asyncWrapper(async (req, res) => {
  const { username } = req.body;
  username || errorGenerator(400, 'USERNAME_DOSES_NOT_EXIST');
  CheckFormatColumn(username, 'username') ||
    errorGenerator(400, `IS_NOT_USERNAME_FORMAT`);
  await userService.checkUserName(username);
  resMessage(201, res, 'AVAILABLE_ID', username);
});

const clickButtonCheckSignup = asyncWrapper(async (req, res) => {
  await userService.checkUserName(req.body.username);
  const requiredKeys = [
    'realName',
    'username',
    'password',
    'email',
    'phoneNumber',
    'isAgreedServicePolicy',
    'isAgreedCollectPrivate',
    'isAgreedPhoneMarketing',
    'isAgreedEmailMarketing',
  ];
  requiredKeys.forEach((key, index) => {
    const keyUpper = key.toLocaleUpperCase();
    if (!(key in req.body)) {
      errorGenerator(400, keyUpper + '_DOSES_NOT_EXIST');
    }
    if (index < 5) {
      CheckFormatColumn(req.body[key], key) ||
        errorGenerator(400, `IS_NOT_${keyUpper}_FORMAT`);
    }
  });
  const { token, signupUser } = await userService.createUser({ ...req.body });
  res.cookie('user', token);
  resMessage(201, res, 'SIGN_IN_SUCCESS', signupUser);
});

const signInUser = asyncWrapper(async (req, res) => {
  const { email, password } = req.body;
  const user = await userService.signInUser(email, password);

  res.cookie('user', user.token);
  res.status(201).json({ message: user.message });
});

export default {
  getAlluser,
  checkUserName,
  clickButtonCheckSignup,
  signInUser,
};
