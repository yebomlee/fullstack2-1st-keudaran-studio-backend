import { userDAO } from '../models';
import { errorGenerator } from '../utils';
import { bcrypt } from '../utils';

const getAlluser = async () => {
  return await userDAO.getAlluser();
};

const checkUserName = async username => {
  const isRealNameCheck = await userDAO.checkUserName(username);
  if (isRealNameCheck) throw errorGenerator(409);
};

const createUser = async userInfo => {
  const { password } = userInfo;
  const hashPassword = await bcrypt.encryptPw(password);
  userInfo.password = hashPassword;
  return userDAO.createUser(userInfo);
};

export default { getAlluser, checkUserName, createUser };
