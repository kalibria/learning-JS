var arr = [1, 2, 3, 4, 5];

var arrNew = arr.sort(function randomNumber(a, b){
return Math.random() > 0.5 ? a - b : b - a
 });

alert( arrNew ); // элементы в случайном порядке, например [3,5,1,2,4]