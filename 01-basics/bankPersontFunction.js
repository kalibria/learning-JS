var getProfitableDeposit = function (startSum, termination, percent, capitalisePercent) {
  
    var SumPercent = startSum + (percent/100 / 12 * startSum * termination);
    
    var SumCapitalise = startSum;
    
    for(var i = 1; i <=termination; i++){
        var profit = capitalisePercent/100 / 12 * SumCapitalise;
        SumCapitalise += profit;
        }
     
    if (SumPercent > SumCapitalise){
      return 'Выбирай обычный вклад. Заработаешь ' + Math.floor(SumPercent)}
      
    if(SumPercent < SumCapitalise){
      return 'Выбирай капитализацию. Заработаешь ' + Math.floor(SumCapitalise)}
   
  };
  
  
  /* Техническое задание
  
  Мяу! Мне нужна программа getProfitableDeposit для сравнения вкладов. У неё должно быть четыре параметра:
  
  исходный размер депозита;
  срок депозита в месяцах;
  процентная ставка для депозита с простыми процентами;
  процентная ставка для депозита с капитализацией процентов.
  
  Программа должна рассчитать, сколько я заработаю с двух разных вкладов: с обычными процентами и с капитализацией. Затем программа должна сравнить результаты и вернуть подходящую строку:
  
  'Выбирай обычный вклад. Заработаешь ' + доход от вклада.
  'Выбирай капитализацию. Заработаешь ' + доход от вклада.
  
  */
  