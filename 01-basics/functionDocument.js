function getDocumentsNumbers(documents, year){
    var newDocuments = documents.slice();
    var numberDocuments = [];
    for(var i = 0; i < newDocuments.length; i++){
    var element = newDocuments[i].indexOf(year, 4);
    if(element !== -1){
      numberDocuments.push(newDocuments[i]);
       }
    }
     return numberDocuments.length
  }
    
    
    
  
  
  /* Техническое задание
  
  Мяу! Напиши программу getDocumentsNumbers, которая будет возвращать число документов за указанный год.
  
  У функции должно быть два параметра: массив с названиями документов и год, за который надо найти документы. Названия параметров могут быть любыми. Даты из массива записаны в виде строк.
  
  Функция должна возвращать количество документов, в названии которых есть необходимый год.
  
  Если таких документов в массиве нет, функция должна возвращать 0.
  
  */
  