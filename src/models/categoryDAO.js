import prisma from '../../prisma';

const getCategories = async () => {
  const getCategories = await prisma.$queryRaw`
  SELECT * FROM main_categories;
  `;
  return getCategories;
};

const getSubCategories = async () => {
  const getSubCategories = await prisma.$queryRaw`
  SELECT *
  FROM sub_categories;
  `;
  return getSubCategories;
};

export default { getCategories, getSubCategories };
