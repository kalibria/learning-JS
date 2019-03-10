var arr = ["Есть", "жизнь", "на", "Марсе"];

var arrLength = arr.filter(function(name){
  return name.length < 4
})
alert( arrLength ); // на