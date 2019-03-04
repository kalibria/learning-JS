function camelize(str){
    var stringArr = str.split("");// строк преобразована в массив string
    var symbol;
    for(let i = 0; i < stringArr.length; i++){        
        if(stringArr[i] === "-"){
            stringArr[i] = "";
        }
        if(stringArr[i-1] === ""){
            stringArr[i] = stringArr[i].toUpperCase();
        }
    }
    return stringArr.join("")
}

console.log(camelize("-webkit-transition"));







