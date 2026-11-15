import './css/style.css';
import canIterate from './js/canIterate';

console.log('Map:', canIterate(new Map())); // true
console.log('Set:', canIterate(new Set())); // true
console.log('null:', canIterate(null)); // false
console.log('10:', canIterate(10)); // false
console.log('"Netology":', canIterate('Netology')); // true
console.log('Array:', canIterate([1, 2, 3])); // true
console.log('Object:', canIterate({})); // false
console.log('undefined:', canIterate(undefined)); // false