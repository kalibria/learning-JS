var obj = {
    className: 'my menu menu'
  };

  function removeClass(obj, cls){
    var arr = obj.className.split(" ");
    for(var i = 0; i < arr.length; i++){
        if (arr[i] === cls){
            arr.splice(i,1);
            i--;
        }
    } 
    obj.className = arr.join()
  }


  console.log (removeClass(obj, 'menu'))
  console.log (obj)