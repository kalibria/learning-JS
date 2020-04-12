var getData = function(keysArray, valueArray){
    var totalArray = [];
    var totalObject = {};
    totalArray.length = valueArray.length;
        for(var x = 0; x < valueArray.length; x++){
          for(var i = 0; i < keysArray.length; i++){
          totalObject[keysArray[i]] = valueArray[x][i];
          }
          totalArray.push(totalObject)
        }
        
      
    
    return totalArray
  }

  getData(["sea","country","city"],  [["Балтийское","Эстония","Силламяэ"],["Охотское","Россия","Охотск"],["Жёлтое","Китай","Бэйдайхэ"]])