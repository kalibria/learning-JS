function filterRangeInPlace(arr, a, b){
    var newArr = arr.slice(); // [...arr]
    for (var i = 0; i < newArr.length; i++){
        if (a <= newArr[i] || newArr[i] >= b){
            arr.splice(i,1);
        }    
    }
}






array = [5, 3, 8, 1];

filterRangeInPlace(array, 2, 7); // удалены числа вне диапазона 1..4

alert( array ); // массив изменился: остались [3, 1]


