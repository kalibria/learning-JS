var getZippedArrays = function(keys, value){

    var newObject = {};
    for(var i = 0; i < keys.length; i++){
  
      newObject[keys[i]] = value[i]
      }
    
    return newObject
  }
  
  /*
  
  Создайте функцию getZippedArrays.
  
  У функции должно быть два параметра. Первый — массив с названиями ключей. Второй — массив со значениями этих ключей.
  
  Функция должна собирать из этих двух массивов объект и возвращать его. Каждому элементу из массива ключей соответствует элемент из массива значений.
  
  */
  