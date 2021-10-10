import { categoryDAO } from '../models';

const getCategories = async () => {
  const getCategories = await categoryDAO.getCategories();
  return getCategories;
};

export default { getCategories };
