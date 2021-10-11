import { userDAO } from '../models';
import { errorGenerator } from '../utils';

const getAlluser = async () => {
  return await userDAO.getAlluser();
};

const checkRealName = async realName => {
  const isRealNameCheck = await userDAO.checkRealName(realName);
  if (!isRealNameCheck) errorGenerator(409);
};

const createUser = async newUser => {
  const { password } = newUser;
  // const salt = await bcrypt.genSalt(10);
  // const hashPassword = await bcrypt.hash(password, salt);
};

export default { getAlluser, checkRealName, createUser };
