const checkColumnPattern = str => {
  return {
    space: str.search(/\s/) != -1,
    special: /[~!@#$%'"`^&*()_,.\-=[+|<>?:{}]/.test(str),
    korea: /[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]/.test(str),
    number: /[0-9]/.test(str),
    english: /[a-zA-Z]/.test(str),
  };
};

const CheckFormatColumn = (value, key) => {
  const checkPattern = checkColumnPattern(value);
  const isPatternColumn = {
    username:
      value.length < 5 ||
      checkPattern.space ||
      checkPattern.special ||
      checkPattern.korea,
    email:
      value.substring(value.length - 4, value.length) !== '.com' ||
      !value.includes('@') ||
      checkPattern.space ||
      checkPattern.korea,
    phoneNumber:
      value.substring(0, 3) !== '010' ||
      value.length !== 11 ||
      checkPattern.space ||
      checkPattern.special ||
      checkPattern.korea ||
      checkPattern.english,
    password:
      value.length < 8 ||
      checkPattern.space ||
      !checkPattern.special ||
      checkPattern.korea ||
      !checkPattern.english,
    realName:
      value.length > 4 ||
      checkPattern.space ||
      checkPattern.special ||
      checkPattern.number ||
      checkPattern.english,
  };
  return !isPatternColumn[key];
};

export { CheckFormatColumn };
