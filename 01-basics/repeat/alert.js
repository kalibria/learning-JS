/*function truncate(str, maxlength) {
  if(str.length > maxlength) {
    let excessLetter = str.length - maxlength; // 10
    str = str.slice(0, str.length - excessLetter - 1) + '…';
    
    console.log(str);
        
  } else {
    return str;
    
  };
}

truncate("Вот, что мне хотелось бы сказать на эту тему:", 20); // = "Вот, что мне хотело…"



let  styles = ['Джаз', 'Блюз'];
styles.push('Рок-н-ролл');


function camelize(str) {
  let arr = str.split('-');
  
  for(let i = 1; i < arr.length; i++) {
    let firstLetter = arr[i][0].toUpperCase();
    let restOfWord = arr[i].slice(1);
    arr[i] = firstLetter + restOfWord;
  };
 
  str = arr.join('');
  return str
};

camelize("-webkit-transition");

function filterRange(arr, a, b) {
  let newArr = arr.filter(item => (a <= item && item <= b));
  console.log(newArr)
}



let arr = [5, 3, 8, 1];
filterRange(arr, 1, 4);




function filterRangeInPlace(arr, a, b) {
  arr.forEach((item, index, arr) => {
    if( item > a || item < b) {
      arr.splice(index,1)
    }
  })
  
}

let arr = [5, 3, 8, 1];

filterRangeInPlace(arr, 1, 4);



let arr = [5, 2, 1, -10, 8];

arr.sort(function(a,b){
  return b - a;
})

alert( arr ); // 8, 5, 2, 1, -10


let arr = ["HTML", "JavaScript", "CSS"];

function copySorted(arr) {
  let sorted = arr.slice().sort();
}

copySorted(arr);

alert( sorted ); // CSS, HTML, JavaScript
alert( arr ); // HTML, JavaScript, CSS (без изменений)*/


function Calculator() {
  this.operators = [
    {
      operator: '+',
      func: (a, b) => a + b,
    },
    {
      operator: '-',
      func: (a, b) => a - b,
    }
  ];
  this.calculate = function(str) {
    let arr = str.split(' ');
    
    const operatorObj = this.operators.find(function(item){
      return item.operator === arr[1]
    });

    if(operatorObj === undefined){
      return 'not supported'
    }

    return operatorObj.func(+arr[0], +arr[2]);
  };

  this.addMethod = function(name, func) {
    this.operators.push({
      operator: name,
      func: func,
    })
  };
}

let calc = new Calculator;

console.log( calc.calculate("3 - 7") ); // 10

let powerCalc = new Calculator;
powerCalc.addMethod("*", (a, b) => a * b);
powerCalc.addMethod("/", (a, b) => a / b);
powerCalc.addMethod("**", (a, b) => a ** b);

let result = powerCalc.calculate("2 ** 3");
