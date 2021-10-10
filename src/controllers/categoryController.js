import { categoryService } from '../services';

const getCategories = async (req, res) => {
  const getCategories = await categoryService.getCategories();
  res.status(200).json({
    categories: getCategories,
  });
};

export default { getCategories };
