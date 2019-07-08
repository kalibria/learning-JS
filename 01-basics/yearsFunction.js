var getYears = function(startYear, finishYear, sumNumbers){
    var yearsArray = [];
    var finalArray =[];
    for(var i = startYear; i <= finishYear; i++){
     yearsArray.push(i);
     var newArray = String(i).split('');
     var sumArray = newArray.reduce(function(num1,num2){
       return Number(num1) + Number(num2);
       })
    
    if(sumArray === sumNumbers){
      finalArray.push(i)
      }
    }
    
    finalArray.sort(function(a,b){
      return a - b
      })
  
    return finalArray;
  }
  
  /* Техническое задание
  
  Мяу! Напиши программу getYears, которая будет возвращать массив с подходящими датами для Олимпиады.
  
  Функция должна принимать на вход три параметра. Первый параметр — год, с которого нужно начать вести отсчёт (включительно). Второй — год, которым этот отсчёт надо закончить (включительно). Третий — число, которое обозначает сумму цифр в номере года.
  
  Названия параметров могут быть любыми.
  
  Годы в массиве должны быть расположены по возрастанию, от меньшего к большему.
  
  */
  