const checkValue = (value) => {
  if (typeof value === 'number' && Number.isInteger(value) === true) {
    return value;
  }
  throw new Error('Введено не число!');
};

try {
  checkValue('6');
} catch (e) {
  console.log(e);
}

export default checkValue;
