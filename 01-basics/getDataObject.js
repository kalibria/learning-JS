var getData = function(keysArray, valueArray){
    var totalArray = [];
    totalArray.length = valueArray.length;
   
    for(var x = 0; x < valueArray.length; x++){
      
      
      for(var i = 0; i < keysArray.length; i++){
          totalArray[x] = {};
          totalArray[x][keysArray[x]] = valueArray[x][i];

          }
          totalArray.push(totalArray[x])
        }
        
      
    
    return totalArray
  }

  getData(["sea","country","city"], [["Балтийское","Эстония","Силламяэ"],["Охотское","Россия","Охотск"],["Жёлтое","Китай","Бэйдайхэ"]])