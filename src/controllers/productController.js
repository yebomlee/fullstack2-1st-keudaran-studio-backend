import { productService } from '../services';
import { asyncWrapper } from '../utils';

const getProductDetail = asyncWrapper(async (req, res) => {
  const { id } = req.query;
  const productDetail = await productService.getProductDetail(id);
  res.json(productDetail);
});

export default { getProductDetail };
