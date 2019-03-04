var login = prompt("Введите пароль");
if(login == "Админ"){
    var password = prompt("Какой пароль?");
    if(password == "Чёрный Властелин"){
        alert("Добро пожаловать!");
    } else if (password != "Чёрный Властелин"){
        alert("Пароль неверен");
    }
    else if (password == null){
        alert("Вход отменён")
    }
} else if(login == null){
    alert("cancelled");
} else{
    alert("Я вас не знаю");
}