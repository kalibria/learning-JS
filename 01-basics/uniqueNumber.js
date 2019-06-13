var numbers = [1, 4, 5, 9, 2, 5, 1];
var uniqueNumbers = [];

for(var i = 0; i < numbers.length; i++){
  const filtered = numbers.filter(function(x) {
      return x === numbers[i];
  });
  if (filtered.length === 1) {
    uniqueNumbers.push(numbers[i]);
  }
}

console.log('uniqueNumbers', uniqueNumbers)