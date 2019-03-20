// get the last array item
var array = [1, 2, 3, 4, 5];

function tail(arr){
    return arr.slice(-1)
    // return arr.reverse()[0] // alternative
}

alert(tail(array));
