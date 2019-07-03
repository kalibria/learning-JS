var dayLimit = [];
function getDiet(dishesCalories, limit){
    var sumCalories = dishesCalories[0];
    for(var i = 0; i < dishesCalories.length; i++){     
        if(sumCalories < limit){
        sumCalories +=dishesCalories[i];
        dayLimit.push(dishesCalories[i])
      }
 }
 return dayLimit.length;
}
 
  
 

/* Техническое задание

Мяу! Напиши программу, которая будет анализировать мой суточный рацион.

Оформи программу в виде функции getDiet. Она должна принимать два параметра: массив с калорийностью блюд и лимит калорий на день. Названия параметров могут быть любыми.

Программа должна возвращать количество блюд из массива, которые я могу съесть и не превысить допустимые калории. Блюда будут съедаться по порядку, начиная с первого элемента в массиве.

*/
