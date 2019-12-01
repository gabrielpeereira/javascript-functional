import { handleStatus } from '../utils/promise-helpers.js';
import { partialize } from '../utils/operators.js';

const API = 'http://localhost:3000/notas';

const getItemsFromNotas = notas => notas.$flatMap(nota => nota.itens);
const filterItemsByCode = (code, items) => items.filter(item => item.codigo == code);
const sumItemsValue = items => items.reduce((total, item) => total + item.valor, 0);


export const notaService = {
    listAll() {
        return fetch(API).then(handleStatus);
    },

    sumItems(code) {
        const filterItems = partialize(filterItemsByCode, code);
        return this.listAll().then(sumItems(code));
    }
}