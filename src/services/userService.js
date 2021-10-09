import { userDAO } from '../models';

const getAlluser = async () => {
  return await userDAO.getAlluser();
};

export default { getAlluser };
