function makeBuffer() { 
    var line = "";
    function buffer(){
        if (arguments.length > 0){
            line = line + arguments[0] + " ";
        }   else {
            return line;
        }  
    }
    return buffer;
}

var buffer = makeBuffer();

// добавить значения к буферу
buffer('Замыкания');
buffer(' Использовать');
buffer(' Нужно!');

// получить текущее значение
alert( buffer() ); // Замыкания Использовать Нужно!