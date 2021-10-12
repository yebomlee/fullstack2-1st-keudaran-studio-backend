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

const CheckFormatColum = (value, key) => {
  const checkPattern = checkColumPattern(value);
  if (key === 'username') {
    return (
      value.length < 5 ||
      checkPattern.space ||
      checkPattern.special ||
      checkPattern.korea
    );
  } else if (key === 'email') {
    return (
      value.substring(value.length - 4, value.length) !== '.com' ||
      !value.includes('@') ||
      checkPattern.space ||
      checkPattern.korea
    );
  } else if (key === 'phoneNumber') {
    return (
      value.substring(0, 3) !== '010' ||
      value.length !== 11 ||
      checkPattern.space ||
      checkPattern.special ||
      checkPattern.korea ||
      checkPattern.english
    );
  } else if (key === 'password') {
    return (
      value.length < 8 ||
      checkPattern.space ||
      !checkPattern.special ||
      checkPattern.korea ||
      !checkPattern.english
    );
  } else if (key === 'realName') {
    return (
      value.length > 4 ||
      checkPattern.space ||
      checkPattern.special ||
      checkPattern.number ||
      checkPattern.english
    );
  }
};

export { CheckFormatColum };
