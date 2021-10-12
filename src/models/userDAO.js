import prisma from '../../prisma';

const getAllUser = async () => {
  return await prisma.$queryRaw`
  select * from users;`;
};

const checkUserName = async userName => {
  const [isUserName] = await prisma.$queryRaw`
  SELECT 
  id,
  real_name
  FROM 
  users 
  WHERE 
  real_name = ${userName};
  `;
  return isUserName;
};

const checkUserInfoByEmail = async email => {
  const userInfo = await prisma.$queryRaw`
    SELECT u.password
    FROM users u
    WHERE
    u.email = ${email}`;

  return userInfo;
};

export default { getAllUser, checkUserInfoByEmail, checkUserName };
