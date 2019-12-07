import LocalStorage from '../src/scripts/modules/localStorage';

test('Storage', () => {
  expect(LocalStorage.getLocalStorageData()).toBeDefined();
});
