import prisma from '../../prisma';

const getAllProducts = async () => {
  return await prisma.$queryRaw`
  SELECT p.id, p.name, p.price, p.thumbnail_url, p.description_image_url, p.created_at FROM Products p;
  `;
};

export default { getAllProducts };
