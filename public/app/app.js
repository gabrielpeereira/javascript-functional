import { log } from './utils/promise-helpers.js';
import './utils/arrays-helpers.js';
import { notaService as service} from './nota/service.js'



document
.querySelector('#myButton')
.onclick = () => 
    service
    .sumItems('2143')
    .then(console.log)
    .catch(console.log);

