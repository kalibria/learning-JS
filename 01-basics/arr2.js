var poly = 1221;
var ylop = 0;
var isPalindrome = false;

var stringPoly = '' + poly;
var arr = stringPoly.split('');
ylop = arr.reverse();
stringYlop = ylop.join('');
  if(stringPoly === stringYlop){
    isPalindrome = true
    }else{
      isPalindrome = false
      }




/* Техническое задание

Мяу! Напиши программу, которая проверяет, является ли число палиндромом.

Число записано в переменную poly.

Переменная, куда нужно записать «перевёрнутую» версию числа, называется ylop.

Выясни, является ли число из переменной poly палиндромом. Если да, значение флага isPalindrome должно быть true, если число не палиндром, то false.

*/
