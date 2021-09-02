const pad = (value, length) => {
  let result = value + '';

  while (result.length < length) {
    result = '0' + result;
  }

  return result;
}

const controlDigit = (value) => {
  let sum = 0;
  let len = value.length;

  for (let i = 0; i < len; i++) {
    sum += value[i] * (len + 1 - i);
  }

  let mod = sum % 11;
  return '' + (mod === 0 || mod === 1 ? 0 : 11 - mod);
}

const formatNumberLength = (num, length) => {
  let r = '' + num;
  while (r.length < length) {
    r = '0' + r;
  }
  return r;
}

const getDniChar = (dni) => {
  const letters = 'TRWAGMYFPDXBNJZSQVHLCKET';
  let pos = dni % 23;
  let letter = letters.substring(pos, pos + 1);
  return letter;
}

const generateNIF = (country) => {
  country = country != undefined ? country : 'ES';
  let dni = '';
  switch (country) {
    case 'ES':
      let num = Math.floor(Math.random() * 100000000);
      let sNum = formatNumberLength(num, 8);
      dni = sNum + getDniChar(sNum);
      break;
    case 'PT':
      let numbers = pad(Math.floor(Math.random() * 99999999), 8);
      let control = controlDigit(numbers);
      dni = numbers + control;
      break;
  }

  return dni;
}

export { generateNIF };