import { categoryService } from '../services';
import { asyncWrapper } from '../utils';

const getCategories = asyncWrapper(async (req, res) => {
  const getCategories = await categoryService.getCategories();
  res.status(200).json({
    message: 'SUCCESS',
    categories: getCategories,
  });
});

export default { getCategories };
