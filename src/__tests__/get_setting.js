import Settings from '../custom';

test('общий тест get метода setting и сеттеров свойств ', () => {
  const user = new Settings();
  user.theme = 'black';
  user.music = 'bass';
  user.difficulty = 'custom';
  const list = [];
  user.setting.forEach((value) => {
    list.push(value);
  });
  expect(list).toMatchObject([
    ['dark', 'light', 'gray', 'black'],
    ['trance', 'pop', 'rock', 'chillout', 'off', 'bass'],
    ['easy', 'normal', 'hard', 'nightmare', 'custom'],
  ]);
});
