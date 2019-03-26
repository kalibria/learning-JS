function filter(arr, func) {
    var result = [];
  
    for (var i = 0; i < arr.length; i++) {
      var val = arr[i];
      if (func(val) === true) {
        result.push(val);
      }
    }
  
    return result;
  }
  
  var arr = [1, 2, 3, 4, 5, 6, 7];
  
  /*alert(filter(arr, function(a) {
    return a % 2 == 0;
  })); // 2, 4, 6*/


function inArray(...args){
    return function(z){
      return ??
    }
}


var arr = [1, 2, 3, 4, 5, 6, 7];


//alert( filter(arr, inBetween(3, 6)) ); // 3,4,5,6

alert( filter(arr, inArray([1, 2, 10])) ); // 1,2