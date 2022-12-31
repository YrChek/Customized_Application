import Settings from '../custom';

const result = [[], [], ['test']];
test.each([
  ['test - дубль', 'test', result],
  ['easy', 'easy', result],
])('тестирование set difficulty(%s)', (_, value, expected) => {
  const user = new Settings();
  user.difficulty = 'test';
  user.difficulty = value;
  const list = [];
  user.userSettings.forEach((element) => {
    list.push(element);
  });
  expect(list).toMatchObject(expected);
});
