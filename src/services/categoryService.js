import { categoryDAO } from '../models';

const getCategories = async () => {
  const getCategories = await categoryDAO.getCategories();
  const getSubCategories = await categoryDAO.getSubCategories();

  for (let i = 0; i < getCategories.length; i++) {
    getCategories[i].subCategory = [];
    for (let j = 0; j < getSubCategories.length; j++) {
      if (getCategories[i].id === getSubCategories[j].main_category_id) {
        getCategories[i].subCategory.push(getSubCategories[j]);
      }
    }
  }

  return getCategories;
};

export default { getCategories };
