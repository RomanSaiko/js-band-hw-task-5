import '../styles/index.scss';
import Costs from './modules/Costs';
import Vehicles from './modules/Vehicles';

function Init() {
  new Costs();
  new Vehicles();
}

document.addEventListener('DOMContentLoaded', Init);
