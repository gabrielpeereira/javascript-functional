import { log } from './utils/promise-helpers.js';
import './utils/arrays-helpers.js';
import { notaService as service} from './nota/service.js'

const ehDivisivel = (divisor, numero) => !(numero % divisor);

const ehDivisivelPorDois = ehDivisivel.bind(null, 2);

document
.querySelector('#myButton')
.onclick = () => 
    service
    .sumItems('2143')
    .then(console.log)
    .catch(console.log);

