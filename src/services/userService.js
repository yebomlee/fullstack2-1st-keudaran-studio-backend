import { userDAO } from '../models';
import { errorGenerator, bcrypt, jwt } from '../utils';

const getAllUser = async () => {
  return await userDAO.getAllUser();
};

const checkUserName = async userName => {
  const isUserNameCheck = await userDAO.checkUserName(userName);
  if (isUserNameCheck) return true;
  else return false;
};

const signInUser = async (email, password) => {
  const [userInfo] = await userDAO.checkUserInfoByEmail(email);

  if (!userInfo) {
    errorGenerator(401, 'EMAIL_IS_NOT_VALID');
  }

  const isValidUser = await bcrypt.comparePw(password, userInfo.password);

  if (isValidUser) {
    const { id } = userInfo;
    const token = jwt.issueToken;
    return { message: 'SIGN_IN_SUCCESS', token };
  } else {
    errorGenerator(401, 'PASSWORD_DOES_NOT_MATCH');
  }
};

export default { getAllUser, signInUser, checkUserName };
