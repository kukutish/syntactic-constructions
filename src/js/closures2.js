function setUpAttacks(items) {
  const result = [];

  function checkHealth(arr) {
    let n = 0;
    arr.forEach((elem) => {
      elem.health === 0 ? n = n + 1 : n;
    });
    return n;
  }

  items.forEach((elem) => {
    let activGamer = elem;
    function createFunction(sum) {
      const activePlayers = items.length - checkHealth(items);
      const damage = sum % activePlayers;
      const valeuDamage = (sum - damage) / activePlayers;
      items.forEach((character) => {
        if (activGamer.health < (valeuDamage + damage)) {
          let copyItems = items.slice(0);
          let newActiveGamer = copyItems.sort((x, y) => (x.health - y.health))[items.length - 1];
          activGamer = newActiveGamer;
        }
        if (character.health !== 0) {
          const calculateDamage = character.health - valeuDamage;
          if (character !== activGamer) {
            character.health = calculateDamage;
          } else {
            character.health = character.health - (valeuDamage + damage);
          }
          let remainder = 0;
          items.forEach((el) => {
            if (el.health < 0) {
              remainder += Math.abs(el.health);
              el.health = 0;
            }
          });
          if (remainder > 0) {
            createFunction(remainder);
          }
        }
      });
    }
    result.push(createFunction);
  });
  return result;
}

const characters = [
  { name: 'маг', health: 100 },
  { name: 'лучник', health: 1 },
  { name: 'мечник', health: 4 },
];

const attacks = setUpAttacks(characters);

attacks[1](9);

console.log(characters);

export default setUpAttacks;
