import Settings from '../custom';

test('тестирование get music()', () => {
  const user = new Settings();
  expect(user.music).toBe('trance');
});
