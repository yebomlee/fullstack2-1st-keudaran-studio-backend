import { userDAO } from '../models';

const getAlluser = async () => {
  return await userDAO.getAlluser();
};

const checkRealName = async realName => {
  const isRealNameCheck = await userDAO.checkRealName(realName);
  if (isRealNameCheck) return true;
  else return false;
};

export default { getAlluser, checkRealName };
