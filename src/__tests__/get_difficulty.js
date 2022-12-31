import Settings from '../custom';

test('тестирование get difficulty()', () => {
  const user = new Settings();
  expect(user.difficulty).toBe('easy');
});
