// Состав смузи

var liquids = ['вода', 'молоко', 'сок', 'чай', 'йогурт'];
var fruits = ['киви', 'банан', 'персик', 'манго', 'груша', 'ананас'];
var greens = ['мята', 'шпинат', 'руккола', 'петрушка', 'базилик'];

// Выбор посетителя

var chosenLiquid = 1;
var chosenFruit = 3;
var chosenGreen = 2;

var orderedLiquid = chosenLiquid - 1;
var orderedFruit = chosenFruit - 1;
var orderedGreen = chosenGreen - 1;

// Заказ

var order = 'Основа — ' + liquids[orderedLiquid] + ', фрукт — ' + fruits[orderedFruit] + ', зелень — ' + greens[orderedGreen];

/* Техническое задание

Напиши программу, которая формирует заказ в виде строки.

Массив с вариантами основы для смузи записан в переменную liquids.

Массив с фруктами находится в переменной fruits.

Массив с зеленью записан в переменную greens.

Выбор посетителя записан в виде чисел в переменные chosenLiquid (индекс выбранной основы для смузи), chosenFruit (выбранный фрукт), chosenGreen (выбранная зелень).

Обрати внимание, что посетители выбирают пункты в электронном меню, где нумерация начинается с единицы, а не с нуля, как в массивах. Учти это при решении.

Собери строку с заказом посетителя вида 'Основа — ' + основа для смузи + ', фрукт — ' + выбранный фрукт + ', зелень — ' + выбранная зелень. Запиши результат в переменную order.

*/
