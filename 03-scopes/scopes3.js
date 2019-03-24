var x = 10;

function foo() {
  var y = 20;
  function bar() {
    var z = 15;
    return x + y + z;
  }
  return bar;
}

var test = foo();

console.log(test());