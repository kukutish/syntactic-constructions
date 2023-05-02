import setUpAttacks from "../closures2";

test.each([
  [[
    { name: 'маг', health: 100 },
    { name: 'лучник', health: 80 },
    { name: 'мечник', health: 10 },
  ], [
    { name: 'маг', health: 97 },
    { name: 'лучник', health: 77 },
    { name: 'мечник', health: 7 },
  ]],
  [[
    { name: 'маг', health: 100 },
    { name: 'лучник', health: 1 },
    { name: 'мечник', health: 4 },
  ], [
    { name: 'маг', health: 96 },
    { name: 'лучник', health: 0 },
    { name: 'мечник', health: 0 },
  ]],
])('get array', (arr, arrResult) => {
  const attacks = setUpAttacks(arr);
  attacks[1](9);
  expect(arr).toEqual(arrResult);
});
