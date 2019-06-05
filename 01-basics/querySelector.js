var cardsData = [
    {
      inStock: true,
      imgUrl: 'gllacy/choco.jpg',
      text: 'Сливочно-кофейное с кусочками шоколада',
      price: 310,
      isHit: true,
      specialOffer: 'Двойная порция сиропа бесплатно!'
    },
    {
      inStock: false,
      imgUrl: 'gllacy/lemon.jpg',
      text: 'Сливочно-лимонное с карамельной присыпкой',
      price: 125,
      isHit: false
    },
    {
      inStock: true,
      imgUrl: 'gllacy/cowberry.jpg',
      text: 'Сливочное с брусничным джемом',
      price: 170,
      isHit: false
    },
    {
      inStock: true,
      imgUrl: 'gllacy/cookie.jpg',
      text: 'Сливочное с кусочками печенья',
      price: 250,
      isHit: false
    },
    {
      inStock: true,
      imgUrl: 'gllacy/creme-brulee.jpg',
      text: 'Сливочное крем-брюле',
      price: 190,
      isHit: false
    }
  ];
   
  var list = document.querySelector('.goods');
   
  var createCard = function (card) {
    var good = document.createElement('li');
    good.classList.add('good');
    
    if (card.inStock){
      good.classList.add('good--available');
    }else{
      good.classList.add('good--unavailable');
      }
    
    var header = document.createElement('h2');
    header.classList.add('good__description');
    header.textContent = card.text;
    good.appendChild(header);
    
    var image = document.createElement('img');
    image.classList.add('good__image');
    image.src = card.imgUrl;
    image.alt = card.text;
    good.appendChild(image);
    
    var p = document.createElement('p');
    p.classList.add('good__price');
    p.textContent = card.price + '₽/кг';
    good.appendChild(p);
    
    if (card.isHit) {
      good.classList.add('good--hit');
      var pSpecial = document.createElement('p')
      pSpecial.classList.add('good__special-offer');
      pSpecial.textContent = card.specialOffer;
      good.appendChild(pSpecial);
      }
      
    list.appendChild(good);
  }
  
  var renderCards = function (y) {
    for (var i = 0; i < cardsData.length; i++) {
      var item = cardsData[i];
      createCard (item);
    } 
  }
  
  renderCards (cardsData);
  
  /* Техническое задание
  
  Мяу! Помнишь магазин мороженого? Нужно создать карточки товаров, основываясь на данных, полученных с сервера.
  
  Данные — массив объектов cardsData, один элемент соответствует одному товару. У каждого объекта есть следующие свойства:
  
  - inStock — доступность товара. Если значение true — товар доступен (для такого продукта верстальщик подготовил класс good--available), если false — продукта нет в наличии (товар с классом good--unavailable).
  - imgUrl — ссылка на изображение товара.
  - text — название продукта.
  - price — цена.
  - isHit — является ли товар хитом продаж. Если значение true — продукт «хитовый». Для такого товара подготовлен класс good--hit.
  - specialOffer — специальное предложение, которое есть только у хита продаж. Должно находиться в абзаце с классом good__special-offer и быть самым последним дочерним элементом в карточке.
  
  Вот пример вёрстки одной карточки в каталоге:
  
  <ul class="goods">
    <li class="good">
      <h2 class="good__description">Сливочно-кофейное с кусочками шоколада</h2>
      <img class="good__image" src="gllacy/choco.jpg" alt="Сливочно-кофейное с кусочками шоколада">
      <p class="good__price">110₽/кг</p>
    </li>
    ...
  </ul>
  
  Обрати внимание, что текст в атрибуте alt у изображения должен быть таким же, как и название товара.
  
  Создай функцию renderCards, которая будет принимать на вход массив данных, вызови её, передав cardsData, и отрисуй на странице карточки мороженого.
  
  */
  