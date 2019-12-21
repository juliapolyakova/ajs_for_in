import orderByProps from '../src/app';

test('Сортировка массива', () => {
  const obj = {
    name: 'мечник', health: 10, level: 2, attack: 80, defence: 40,
  };
  const expected = [

    { key: 'name', value: 'мечник' },

    { key: 'level', value: 2 },

    { key: 'attack', value: 80 },

    { key: 'defence', value: 40 },

    { key: 'health', value: 10 },

  ];
  const received = orderByProps(obj, ['name', 'level']);

  expect(received).toBe(expected);
});
