import prisma from '../../prisma';

const getAlluser = async () => {
  return await prisma.$queryRaw`
  select * from users;
  `;
};

export default { getAlluser };
