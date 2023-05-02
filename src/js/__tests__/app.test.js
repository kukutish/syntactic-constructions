import checkValue from '../app';

test('Check quantity', () => {
  const t = () => checkValue('6');
  const n = checkValue(6);

  expect(t).toThrow('Введено не число!');
  expect(n).toEqual(6);
});
