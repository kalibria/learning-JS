var obj = {
    className: 'open menu'
  }
  function addClass(obj, cls){
    var list = obj.className.split(" ");
    var a = list.indexOf(cls);
    if(a == -1){
        list.push(cls)
    }
    obj.className = list.join(" "); //['open', 'menu', 'new']
    //console.log (obj);
    return obj;
  }

  addClass(obj, 'me')