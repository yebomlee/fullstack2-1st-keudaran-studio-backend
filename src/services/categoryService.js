import { categoryDAO } from '../models';
import { errorGenerator } from '../utils';

const getCategories = async () => {
  const categories = await categoryDAO.getCategories();
  if (!categories) errorGenerator(404, 'CATEGORY_DOES_NOT_EXIST');

  const subCategories = await categoryDAO.getSubCategories();
  if (!subCategories) errorGenerator(404, 'SUB_CATEGORY_DOES_NOT_EXIST');

  for (let i = 0; i < categories.length; i++) {
    categories[i].subCategory = [];
    for (let j = 0; j < subCategories.length; j++)
      if (categories[i].id === subCategories[j].main_category_id)
        categories[i].subCategory.push(subCategories[j]);
  }
  return categories;
};

export default { getCategories };
