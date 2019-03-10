var words = ["Есть", "жизнь", "на", "Марсе"];

words.forEach(function(item, i, arr){
    arr[i] = item + "!";  
})
alert( words );