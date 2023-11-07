import checkNumber from '../js/task';

test('Принимает корректный номер', () => {
  expect(checkNumber('+79998886655')).toBe('+79998886655');
  expect(checkNumber('8 (927) 000-00-00')).toBe('+79270000000');
  expect(checkNumber('+86 000 000 0000')).toBe('+860000000000');
});
