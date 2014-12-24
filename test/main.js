'use strict';

var Cattle = require('./cattle');

var original = Cattle.frozen({
   one: 1,
   two: 2,
   three: 3,
   untouched: {
      a: 1000,
      b: 2000,
      c: 3000
   },
   data: {
      uno: 1,
      dos: 2,
      tres: 3,
      cuatro: 4
   }
});

var result = Cattle.modifiable(original);
result.two = 200;
result.data.tres = 300;
result = result.done();

console.log(original === result);
console.log(original.one === result.one);
console.log(original.data === result.data);
console.log(original.untouched === result.untouched);

console.log(original);
console.log(result);
