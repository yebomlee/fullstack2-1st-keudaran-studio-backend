import { userService } from '../services';
import { errorGenerator } from '../utils';
import { asyncWrapper } from '../utils';
import userCheckError from '../utils/userCheckError';

const resMessage = (num, res, message, data) => {
  res.status(num).json({
    message,
    data,
  });
};

const getAlluser = asyncWrapper(async (req, res) => {
  const user = await userService.getAlluser();
  if (!user) errorGenerator(409, 'USERNAME_DOSEN_NOT_EXIST');
  resMessage(201, res, 'USERNAME_EXIST', user);
});

const checkUserName = asyncWrapper(async (req, res) => {
  const { username } = req.body;
  username || errorGenerator(400, 'USERNAME_DOSEN_NOT_EXIST');
  !userCheckError.usernameCheckFormat(username) ||
    errorGenerator(400, `IS_NOT_USERNAME_FORMAT`);
  await userService.checkUserName(username);
  resMessage(201, res, 'ID_NOT_DUPLICATE', username);
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
      errorGenerator(400, keyUpper + '_DOSEN_NOT_EXIST');
    }
    if (index < 5) {
      !userCheckError[`${key}CheckFormat`](req.body[key]) ||
        errorGenerator(400, `IS_NOT_${keyUpper}_FORMAT`);
    }
  });
  const user = await userService.createUser({ ...req.body });
  resMessage(201, res, 'CREATE_NEW_SIGNUP', user);
});

export default { getAlluser, checkUserName, clickButtonCheckSignup };
