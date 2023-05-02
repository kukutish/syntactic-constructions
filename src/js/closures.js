const result = [
  { name: 'маг', type: 'character', description: 'Персонаж, обладающий магическими способностями' },
  { name: 'заклинание', type: 'attack', description: 'Атака магическим заклинанием' },
  { name: 'урон', type: 'help', description: 'Страница описания элемента интерфейса' },
];

function findBy(key, value) {
  return (elem) => elem[key] === value;
}

console.log(result.filter(findBy('type', 'help')));

export default findBy;
