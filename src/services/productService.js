import { productDAO } from '../models';

const getAllProducts = async () => {
  return await productDAO.getAllProducts();
};

const sortLowPrice = async () => {
  const lowPrice = await productDAO.getAllProducts();
  return lowPrice.sort((a, b) => a.price - b.price);
}; //오름차순

const sortHighPrice = async () => {
  const highPrice = await productDAO.getAllProducts();
  return highPrice.sort((a, b) => b.price - a.price);
}; //내림차순

const sortName = async () => {
  const name = await productDAO.getAllProducts();
  return name.sort((a, b) => {
    if (a.name > b.name) return 1;
    if (a.name < b.name) return -1;
  });
}; // 이름순

const sortDate = async () => {
  const date = await productDAO.getAllProducts();
  console.log('service');
  return date.sort((a, b) => (a.created_at > b.created_at ? -1 : 1));
};
export default {
  getAllProducts,
  sortLowPrice,
  sortHighPrice,
  sortName,
  sortDate,
};
