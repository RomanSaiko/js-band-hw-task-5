import LocalStorage from '../src/scripts/modules/LocalStorage';

test('Storage', () => {
  expect(LocalStorage.getLocalStorageData()).toBeDefined();
});
