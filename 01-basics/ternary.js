var message = 
(login =='Вася') ? 
'Привет' : 
(
    (login == 'Директор') ?
        'Здравствуйте' :
        (
            (login == '') ?
                'Нет логина' : ''
            )
);
  

if (login == 'Вася') {
  message = 'Привет';
} else if (login == 'Директор') {
  message = 'Здравствуйте';
} else if (login == '') {
  message = 'Нет логина';
} else {
  message = '';
}
