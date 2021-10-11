import prisma from '../../prisma';

const getAlluser = async () => {
  return await prisma.$queryRaw`
  select * from users;
  `;
};

const checkRealName = async realName => {
  const [isRealName] = await prisma.$queryRaw`
  SELECT 
    id,
    real_name
  FROM 
    users 
  WHERE 
    real_name = ${realName};
  `;
  return isRealName;
};

export default { getAlluser, checkRealName };
