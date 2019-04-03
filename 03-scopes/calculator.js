function Calculator (){
    this.a;
    this.b;
    this.read = function() {
        this.a = +prompt("put the first number");
        this.b = +prompt("put the second number");       
    };

    this.sum = function() {
        return this.a + this.b; 
    }

    this.mul = function() {
        return this.a * this.b;
    }
}

var calculator = new Calculator();
console.log(calculator);
calculator.read();

alert( "Сумма=" + calculator.sum() );
alert( "Произведение=" + calculator.mul() );