var getNumber = function (N) {
  var array = [];
  var currentNumb = N;
  if (currentNumb >= 10 && currentNumb % 2 === 0) {
    for (var i = 9; i > 1; i--) {   //Тут мы получаем простые множители//
      if (currentNumb % i === 0) {
        currentNumb = currentNumb / i;
        var index = i.toString(10); //Приводим к строке
        array.push(index); //Добавление в массив
        if (currentNumb < 10) {
          var first = currentNumb.toString(10); //Приводим к строке
          array.push(first);  //Добавление в массив
          break;
        }
      }
    }
    var reverse = array.reverse();  //Получаем массив в обратном порядке
    console.log(reverse.join());  //Вывод числа из массива
  }
  else {
    return 0;
  }
};
console.log(getNumber(10));
