var number = 15;


for(var divider = 2; divider < number; divider++){
  if(number % divider === 0 && number !== divider && divider !== 1){
    console.log(divider)
    }
  }





/* Техническое задание

Напишите программу, которая находит все делители числа, кроме единицы и самого числа.

Число, делители которого нужно найти, записано в переменную number.

Выводите делители в консоль последовательно, друг за другом.

*/