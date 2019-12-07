import Vehicles from '../src/scripts/modules/Vehicles';

test('Vehicles', () => {
  const createTruck = document.getElementById('create-truck');
  const createShip = document.getElementById('create-ship');
  expect(createTruck).toBeDefined();
  expect(createShip).toBeDefined();
});
