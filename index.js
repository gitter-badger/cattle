'use strict';

var Cow = require('cow');

var Cattle = {};

Cattle.frozen = function (data) {
   return Object.freeze(data);
};

Cattle.modifiable = function (data) {
   var cow = new Cow(data);
   var proxy = cow.proxy;
   proxy.done = function () {
      return Cattle.frozen(cow.finish());
   };
   return proxy;
};

module.exports = Cattle;
