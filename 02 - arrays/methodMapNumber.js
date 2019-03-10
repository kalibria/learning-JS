var arr = [1, 2, 3, 4, 5, 6, 7];
var numbers = arr.filter(function(item){
if (item % 2 === 0){
    return true
}

})
alert (numbers)