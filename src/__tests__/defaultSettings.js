import Settings from '../custom';

test('тестирование defaultSettings ', () => {
  const user = new Settings();
  user.theme = 'black';
  user.music = 'bass';
  user.difficulty = 'custom';
  const fullMap = user.setting;
  const list = [];
  user.defaultSettings.forEach((value) => {
    list.push(value);
  });
  expect(list).toMatchObject([
    ['dark', 'light', 'gray'],
    ['trance', 'pop', 'rock', 'chillout', 'off'],
    ['easy', 'normal', 'hard', 'nightmare'],
  ]);
});
