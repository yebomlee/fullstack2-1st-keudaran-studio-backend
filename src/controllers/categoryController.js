import { categoryService } from '../services';
import { asyncWrapper } from '../utils';

const getCategories = asyncWrapper(async (req, res) => {
  const categories = await categoryService.getCategories();
  res.status(200).json({
    message: 'SUCCESS',
    categories: categories,
  });
});

export default { getCategories };
