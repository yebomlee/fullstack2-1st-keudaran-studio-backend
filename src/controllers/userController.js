import { userService } from '../services';
import { errorGenerator } from '../utils';
import { asyncWrapper } from '../utils';

const resMessage = (num, res, message, data) => {
  res.status(num).json({
    message,
    data,
  });
};

const getAlluser = asyncWrapper(async (req, res) => {
  const user = await userService.getAlluser();
  if (!user) errorGenerator(409, 'Is Not User');
  errorGenerator(404);
  resMessage(201, res, 'Is User', user);
});

const checkRealName = asyncWrapper(async (req, res) => {
  const { realName } = req.body;
  if (!realName || realName.length < 5) errorGenerator(400, 'INVALID_INPUT');
  await userService.checkRealName(realName);
  resMessage(201, res, 'ID_NOT_DUPLICATE', realName);
});

const checkIsNullColum = async newUser => {
  const {
    username,
    password,
    email,
    phoneNumber,
    isAgreedServicePolicy,
    isAgreedCollectPrivate,
  } = newUser;
  if (!username) errorGenerator(400, 'USERNAME_DOSE_NOT_EXIST ');
  else if (!password) errorGenerator(400, 'PASSWORD_DOSE_NOT_EXIST ');
  else if (!email) errorGenerator(400, 'EMAIL_DOSE_NOT_EXIST');
  else if (!phoneNumber) errorGenerator(400, 'PHONENUMBER_DOSE_NOT_EXIST');
  else if (!isAgreedServicePolicy)
    errorGenerator(400, 'ISAGREEDSERVICEPOLICY_DOSE_NOT_EXIST');
  else if (!isAgreedCollectPrivate)
    errorGenerator(400, 'ISAGREEDCOLLECTPRIVATE_DOSE_NOT_EXIST');
};

const clickButtonCheckSignup = asyncWrapper(async (req, res) => {
  await checkIsNullColum({ ...req.body });
  const user = await userService.createUser({ ...req.body });
  resMessage(201, res, 'CREATE_NEW_SIGNUP', user);
});

export default { getAlluser, checkRealName, clickButtonCheckSignup };
