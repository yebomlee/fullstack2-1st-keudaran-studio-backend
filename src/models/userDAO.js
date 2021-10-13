import prisma from '../../prisma';

const checkUsername = async username => {
  const [user] = await prisma.$queryRaw`
    SELECT  u.id,
            u.username,
            u.password
    FROM    users u
    WHERE   username = ${username};
  `;
  return user;
};

const deleteUser = async id => {
  return await prisma.$queryRaw`
    DELETE
    FROM   users u
    WHERE  id = ${id}
  `;
};

const findLastUser = async () => {
  return await prisma.$queryRaw`
    SELECT  u.id,
            u.real_name as realName,
            u.username
    FROM    users u
    ORDER   BY id DESC
    LIMIT   1; 
  `;
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
    INSERT INTO users
    (
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
    VALUES
    (
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

const checkUserInfoByEmail = async username => {
  const userInfo = await prisma.$queryRaw`
  SELECT  u.id,
          u.username,
          u.password
  FROM    users u
  WHERE   u.username = ${username}`;

  return userInfo;
};

export default {
  checkUsername,
  createUser,
  deleteUser,
  checkUserInfoByEmail,
};
