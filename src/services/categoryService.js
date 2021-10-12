import { categoryDAO } from '../models';

const getCategories = async () => {
  const categories = await categoryDAO.getCategories();
  const subCategories = await categoryDAO.getSubCategories();

  for (let i = 0; i < categories.length; i++) {
    categories[i].subCategory = [];
    for (let j = 0; j < subCategories.length; j++)
      if (categories[i].id === subCategories[j].main_category_id)
        categories[i].subCategory.push(subCategories[j]);
  }
  return categories;
};

export default { getCategories };
