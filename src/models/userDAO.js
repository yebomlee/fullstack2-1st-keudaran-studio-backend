import prisma from '../../prisma';

const getAlluser = async () => {
  return await prisma.$queryRaw`
  select * from users;
  `;
};

const checkUserName = async username => {
  const [isUserName] = await prisma.$queryRaw`
  SELECT 
    id,
    username
  FROM 
    users 
  WHERE 
    username = ${username};
  `;
  return isUserName;
};

const findLastUser = async () => {
  const newUsers = await prisma.$queryRaw`
    SELECT 
      u.id, 
      u.real_name, 
      u.username 
    FROM 
      users u 
    ORDER BY 
      id 
    DESC 
    LIMIT 1;
  `;
  return newUsers;
};

const createUser = async userInfo => {
  const {
    realName,
    username,
    password,
    email,
    phoneNumber,
    isAgreedServicePolicy,
    isAgreedCollectPrivate,
    isAgreedPhoneMarketing,
    isAgreedEmailMarketing,
  } = userInfo;
  await prisma.$queryRaw`
      INSERT INTO 
        users (
          real_name,
          username,
          password,
          email,
          phone_number,
          is_agreed_service_policy,
          is_agreed_collect_private,
          is_agreed_phone_marketing,
          is_agreed_email_marketing
        )
      VALUES(
        ${realName}, 
        ${username},
        ${password},
        ${email},
        ${phoneNumber},
        ${isAgreedServicePolicy},
        ${isAgreedCollectPrivate},
        ${isAgreedPhoneMarketing},
        ${isAgreedEmailMarketing}
      );
    `;
  return findLastUser();
};

export default { getAlluser, checkUserName, createUser };
