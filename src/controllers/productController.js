import { asyncWrapper } from '../utils';
import { productService } from '../services';

const getAllProducts = asyncWrapper(async (req, res) => {
  const products = await productService.getAllProducts();
  res.status(200).json({
    myProducts: products,
  });
});

const getSortedProducts = asyncWrapper(async (req, res) => {
  const { sort } = req.query;
  const product = await productService.getSortedProducts(sort);
  res.status(200).json({
    data: product,
    message: 'success',
  });
});

const getProductDetail = asyncWrapper(async (req, res) => {
  const { id } = req.query;
  const productDetail = await productService.getProductDetail(id);
  res.json(productDetail);
});

export default {
  getProductDetail,
  getAllProducts,
  getSortedProducts,
};
