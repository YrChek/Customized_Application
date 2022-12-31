import Settings from '../custom';

test('тестирование userSettings ', () => {
  const user = new Settings();
  user.theme = 'black';
  user.music = 'bass';
  user.difficulty = 'custom';
  const fullMap = user.setting;
  const list = [];
  user.userSettings.forEach((value) => {
    list.push(value);
  });
  expect(list).toMatchObject([['black'], ['bass'], ['custom']]);
});
