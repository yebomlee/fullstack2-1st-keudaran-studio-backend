import prisma from '../../prisma';

const getCategories = async () => {
  const productList = await prisma.$queryRaw`
  select * from main_categories;
  `;
  return getCategories;
};

export default { getCategories };
