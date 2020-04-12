var getSortedArray = function(array, key){
    var filteredArray = array.sort(function(a,b){
      return a.key - b.key});
      return filteredArray
  }