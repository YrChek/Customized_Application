import Settings from '../custom';

const result = [['black'], [], []];
test.each([
  ['black - дубль', 'black', result],
  ['dark', 'dark', result],
])('тестирование set theme(%s)', (_, value, expected) => {
  const user = new Settings();
  user.theme = 'black';
  user.theme = value;
  const list = [];
  user.userSettings.forEach((element) => {
    list.push(element);
  });
  expect(list).toMatchObject(expected);
});
