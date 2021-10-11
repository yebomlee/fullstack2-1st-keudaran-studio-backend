import { productService } from '../services';
import { asyncWrapper } from '../utils';

const getProduct = asyncWrapper(async (req, res) => {
  const { id } = req.query;
  const product = await productService.getProduct(id);
  const productOptions = await productService.getProductOptions(id);
  const productImages = await productService.getProductImages(id);
  const allProduct = {
    ...product,
    productOption: productOptions,
    productImages: productImages,
  };
  res.json(allProduct);
});

export default { getProduct };
