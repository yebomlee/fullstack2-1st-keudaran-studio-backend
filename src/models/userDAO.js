import prisma from '../../prisma';

const checkUserInfoByEmail = async email => {
  const userInfo = await prisma.$queryRaw`
    SELECT u.id, u.username, u.password
    FROM users u
    WHERE
    u.email = ${email}`;

  return userInfo;
};

export default { checkUserInfoByEmail };
