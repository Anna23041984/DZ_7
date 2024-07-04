

function sum(x, y) {
    return x + y;
  }
  
  
  function name(x) {
    return function(y) {
      return x + y;
    };
  }
  
  console.log(name(5)(2));
