
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