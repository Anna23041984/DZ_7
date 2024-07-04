


const getAdd = function () { let res = 0; return function(x) { res += x; return res; } };

let sum = getAdd();

console.log(sum(1)); 
console.log(sum(3));
  