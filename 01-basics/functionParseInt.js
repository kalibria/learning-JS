function calculate(firstNumber, secondNumber, operator){
  if(operator === '+'){
    return parseInt(firstNumber,10) + parseInt(secondNumber, 10)
    }else if(operator === '-'){
      return parseInt(firstNumber,10) - parseInt(secondNumber, 10)
      }else if(operator === '/'){return parseInt(firstNumber,10) / parseInt(secondNumber, 10)
      }else {return parseInt(firstNumber,10) * parseInt(secondNumber, 10)}
 
}



/* Техническое задание

Мяу! Напиши функцию calculate, которая будет распознавать пользовательский ввод, совершать математические операции и возвращать результат.

Параметры функции — firstNumber, secondNumber и operator.

Параметры firstNumber, secondNumber — операнды, параметр operator - оператор.

Все значения приходят в виде строк, в том числе и операторы. В третьем параметре содержится один из операторов: сложение ('+'), вычитание ('-'), умножение ('*'), деление ('/').

В зависимости от оператора программа должна совершать разные операции: складывать первое число со вторым, вычитать из первого числа второе, умножать первое на второе, делить первое на второе.

Не забудь сделать из строк с числами настоящие числа.

*/
