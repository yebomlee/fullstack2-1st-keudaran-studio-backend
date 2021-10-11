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

const findLastUser = async () => {
  const newUsers = await prisma.$queryRaw`
    SELECT
      u.id, 
      u.real_name,
      u.username,
      u.password,
      u.email,
      u.phone_number,
      u.is_agreed_service_policy,
      u.is_agreed_collect_private,
      u.is_agreed_phone_marketing,
      u.is_agreed_email_marketing
    FROM 
      users u
    ORDER BY id DESC
    LIMIT 1;
  `;
  return newUsers;
};

const createUser = async req => {
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

export default { getAlluser, checkRealName, createUser };
