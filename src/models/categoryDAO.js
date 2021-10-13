import prisma from '../../prisma';

const getCategories = async () => {
  const getCategories = await prisma.$queryRaw`
  SELECT m.id,
         m.name
  FROM   main_categories m; 
  `;
  return getCategories;
};

const getSubCategories = async () => {
  const getSubCategories = await prisma.$queryRaw`
  SELECT s.id,
         s.name,
         s.main_category_id
  FROM   sub_categories s; 
  `;
  return getSubCategories;
};

export default { getCategories, getSubCategories };
