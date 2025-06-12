const a = 1;

console.log('a 타입', typeof a);
console.log(typeof a.toString()); //타입을 바꾸는

const b = '1';
console.log('b 타입', typeof b);
console.log(typeof parseInt(b));

console.log(typeof Number(b)); //타입을 바꾸는


// bigint
const c = 2n; // 2^53 -1보다 큰값
console.log('c 타입', typeof c);

const d = true;
console.log('d 타입', typeof d);
const e = null;
console.log('e 타입', typeof e);
const f = undefined;
console.log('f 타입', typeof f);
const g = NaN;
console.log('g 타입', typeof g);
const h = Infinity;
console.log('h 타입', typeof h);
const i = {}
console.log('i 타입', typeof i);