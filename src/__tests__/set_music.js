import Settings from '../custom';

const result = [[], ['test'], []];
test.each([
  ['test - дубль', 'test', result],
  ['pop', 'pop', result],
])('тестирование set music(%s)', (_, value, expected) => {
  const user = new Settings();
  user.music = 'test';
  user.music = value;
  const list = [];
  user.userSettings.forEach((element) => {
    list.push(element);
  });
  expect(list).toMatchObject(expected);
});
