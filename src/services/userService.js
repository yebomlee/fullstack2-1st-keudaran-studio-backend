import { userDAO } from '../models';
import { errorGenerator, bcrypt, jwt } from '../utils';

const getAllUser = async () => {
  return await userDAO.getAllUser();
};

const checkUsername = async username => {
  const isValidName = await userDAO.checkUsername(username);
  if (isValidName) errorGenerator(409);
};

const deleteUser = async id => {
  const isUser = await userDAO.checkId(id);
  if (isUser) await userDAO.deleteUser(id);
  else errorGenerator(401, 'USER_IS_NOT_EXIST');
};

const createUser = async userInfo => {
  const { password } = userInfo;
  const hashPassword = await bcrypt.encryptPw(password);
  userInfo.password = hashPassword;
  const signupUser = await userDAO.createUser(userInfo);
  const token = await jwt.issueToken(signupUser.id);
  return { token, signupUser };
};

const signInUser = async (email, password) => {
  const [userInfo] = await userDAO.checkUserInfoByEmail(email);
  if (!userInfo) {
    errorGenerator(401, 'EMAIL_IS_NOT_VALID');
  }
  const isValidUser = await bcrypt.comparePw(password, userInfo.password);
  if (isValidUser) {
    const { id } = userInfo;
    const token = jwt.issueToken(id);
    return { message: 'SIGN_IN_SUCCESS', token };
  } else {
    errorGenerator(401, 'PASSWORD_DOES_NOT_MATCH');
  }
};

export default {
  getAllUser,
  checkUsername,
  createUser,
  signInUser,
  deleteUser,
};
