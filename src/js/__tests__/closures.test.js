import findBy from '../closures';

test('return closures', () => {
  const obj = { name: 'маг', type: 'character', description: 'Персонаж, обладающий магическими способностями' };
  const result = findBy('name', 'маг')(obj);
  expect(result).toEqual(true);
});
