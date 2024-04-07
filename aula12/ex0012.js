var time = new Date()
var dayWeek = time.getDay()

/*
0 - domingo
...
6 - Sabado
*/

// console.log(dayWeek);

switch (dayWeek) {
  case 0:
    console.log('Domingo');
    break
  case 1:
    console.log('Segunda');
    break
  case 2:
    console.log('Terça');
    break
  case 3:
    console.log('Quarta');
    break
  case 4:
    console.log('Quinta');
    break
  case 5:
    console.log('Sexta');
    break
  case 6:
    console.log('Sabado');
    break
  default:
    console.log('[ERROR] invalid day');
    break
}