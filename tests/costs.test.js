import Costs from '../src/scripts/modules/Costs';

test('Costs', () => {
  const costModel = document.getElementById('cost-model');
  const costCargo = document.getElementById('cost-cargo');
  const costDistance = document.getElementById('cost-distance');
  expect(costModel).toBeDefined();
  expect(costCargo).toBeDefined();
  expect(costDistance).toBeDefined();
});
