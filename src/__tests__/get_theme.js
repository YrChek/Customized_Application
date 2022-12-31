import Settings from '../custom';

test('тестирование get theme()', () => {
  const user = new Settings();
  expect(user.theme).toBe('dark');
});
