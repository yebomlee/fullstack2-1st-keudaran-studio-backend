const checkColumPattern = str => {
  const specialPattern = /[~!@#$%'"`^&*()_,.\-=[+|<>?:{}]/;
  const koreaPattern = /[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]/;
  const numberPattern = /[0-9]/;
  const englishPattern = /[a-zA-Z]/;
  return {
    space: str.search(/\s/) != -1,
    special: specialPattern.test(str),
    korea: koreaPattern.test(str),
    number: numberPattern.test(str),
    english: englishPattern.test(str),
  };
};

const usernameCheckFormat = username => {
  const checkPattern = checkColumPattern(username);
  return (
    username.length < 5 ||
    checkPattern.space ||
    checkPattern.special ||
    checkPattern.korea
  );
};

const emailCheckFormat = email => {
  const checkPattern = checkColumPattern(email);
  return (
    email.substring(email.length - 4, email.length) !== '.com' ||
    !email.includes('@') ||
    checkPattern.space ||
    checkPattern.korea
  );
};

const phoneNumberCheckFormat = phoneNumber => {
  const checkPattern = checkColumPattern(phoneNumber);
  return (
    phoneNumber.substring(0, 3) !== '010' ||
    phoneNumber.length !== 11 ||
    checkPattern.space ||
    checkPattern.special ||
    checkPattern.korea ||
    checkPattern.english
  );
};

const passwordCheckFormat = password => {
  const checkPattern = checkColumPattern(password);
  return (
    password.length < 8 ||
    checkPattern.space ||
    !checkPattern.special ||
    checkPattern.korea ||
    !checkPattern.english
  );
};

const realNameCheckFormat = realName => {
  const checkPattern = checkColumPattern(realName);
  return (
    realName.length > 4 ||
    checkPattern.space ||
    checkPattern.special ||
    checkPattern.number ||
    checkPattern.english
  );
};

export default {
  usernameCheckFormat,
  realNameCheckFormat,
  passwordCheckFormat,
  phoneNumberCheckFormat,
  emailCheckFormat,
};
