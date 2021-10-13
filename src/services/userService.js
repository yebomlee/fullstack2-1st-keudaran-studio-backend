import { userDAO } from '../models';
import { errorGenerator, bcrypt, jwt } from '../utils';

const getAllUser = async () => {
  return await userDAO.getAllUser();
};

const checkUserName = async username => {
  const isRealNameCheck = await userDAO.checkUserName(username);
  if (isRealNameCheck) errorGenerator(409);
};

const createUser = async userInfo => {
  const { password } = userInfo;
  const hashPassword = await bcrypt.encryptPw(password);
  userInfo.password = hashPassword;
  return userDAO.createUser(userInfo);
};

const signInUser = async (email, password) => {
  const [userInfo] = await userDAO.checkUserInfoByEmail(email);

  if (!userInfo) {
    errorGenerator(401, 'EMAIL_IS_NOT_VALID');
  }

  const isValidUser = await bcrypt.comparePw(password, userInfo.password);

  if (isValidUser) {
    const { id } = userInfo;
    const token = await jwt.issueToken(id);
    return { message: 'SIGN_IN_SUCCESS', token };
  } else {
    errorGenerator(401, 'PASSWORD_DOES_NOT_MATCH');
  }
};

export default { getAllUser, checkUserName, createUser, signInUser };
