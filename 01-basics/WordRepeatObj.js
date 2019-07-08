var getRepeats = function(data){
    var numberWord = {};
    for(var i = 0; i < data.length; i++){
     numberWord[data[i]] = 0;
      var number = data.indexOf(data[i]);

      while(number != -1){
      numberWord[data[i]] += 1;
      number += 1;
      number = data.indexOf(data[i], number);
      }
    }
    return numberWord
  }

  getRepeats(["Василий","Пётр","Иннокентий","Пётр","Иван","Василий"])