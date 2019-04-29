var lastNumber = 5;
var multiplicationResult = 1;
var nextNumber = 1;

while(lastNumber--){
  
  if(nextNumber % 2 === 0){
    multiplicationResult = nextNumber * multiplicationResult;
      }
      nextNumber++;
  }



/* Техническое задание

Напишите универсальную программу, которая находит произведение всех чётных чисел из последовательности от 1 до n.

Число, до которого идёт последовательность (включительно), записано в переменную lastNumber

Найдите произведение всех чисел и сохраните результат в переменную multiplicationResult.

*/
