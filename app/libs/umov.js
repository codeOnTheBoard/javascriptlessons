'use strict';

document.addEventListener('DOMContentLoaded', () => {
  console.info(' ');
  console.info(' *** Умовні розгалуження *** ');
  console.info(' ');

  console.info(' **** Просте умовне розгалуження **** ');

  console.log(' Задача 1 ');

  let ageMan = 20;
  if (ageMan < 18) {
    console.log('Перед нами: Дитина');
  } else if (ageMan > 70) {
    console.log('Перед нами: Старий');
  } else {
    console.log('Перед нами: Дорослий');
  }

  console.log(' Задача 2 ');

  console.log(' ');

  const srtString = 'Hello';

  if (srtString == 'hello') console.log('Hello');
  else console.log('By!');

  console.log(' Задача 3 Тернарний оператор  ');

  console.log('  ');
  // тернаорний оператор
  const logicy = true;
  console.log(logicy ? true : false);

  console.log(' Задача 4 Декілька тернарних операторів ');
  console.log('  ');

  let num = 5; // або будь-яке інше значення

  console.log(num < 10 ? 'num < 10' : num == 10 ? 'num == 10' : 'num > 10');

  /**
   * !  Робота тернарного оператора:
   *
   * Якщо num < 10, то буде виведено 'num < 10'.
   * Якщо num == 10, то буде виведено 'num == 10'.
   * Якщо num > 10, то буде виведено 'num > 10'.
   *
   */
  console.log(
    ' **** Пропрацьовую умовне ротзгалуження з різними умовами **** '
  );
  console.log('  ');

  console.log(' Умова 1 ');

  let umove1 = 0;
  if (umove1) {
    console.log(' *** Умова 1 true *** ');
  } else {
    console.log('  *** Умова 1 false *** ');
  }

  console.log('  ');
  console.log(' Умова 2 ');

  let umove2 = 1;
  if (umove2) {
    console.log(' *** Умова 2 true *** ');
  } else {
    console.log('  *** Умова 2 false *** ');
  }

  console.log('  ');
  let umove3 = '';
  if (umove3) {
    console.log(' *** Умова 3 true *** ');
  } else {
    console.log('  *** Умова 3 false *** ');
  }

  console.log('  ');
  let umove4 = ' ';
  if (umove4) {
    console.log(' *** Умова 4 true *** ');
  } else {
    console.log('  *** Умова 4 false *** ');
  }

  console.log('  ');
  let umove5 = 'рядок';
  if (umove5) {
    console.log(' *** Умова 5 true *** ');
  } else {
    console.log('  *** Умова 5 false *** ');
  }

  console.log('  ');
  if (null) {
    console.log(' *** Умова 6 true *** ');
  } else {
    console.log('  *** Умова 6 false *** ');
  }

  console.log('  ');
  if (undefined) {
    console.log(' *** Умова 7 true *** ');
  } else {
    console.log('  *** Умова 7 false *** ');
  }
  console.log('  ');
  if (45 / 0) {
    console.log(' *** Умова 8 true *** ');
  } else {
    console.log('  *** Умова 8 false *** ');
  }

  console.log('  ');
  if (NaN) {
    console.log(' *** Умова 9 true *** ');
  } else {
    console.log('  *** Умова 9 false *** ');
  }

  console.log('  ');
  if ({}) {
    console.log(' *** Умова 10 true *** ');
  } else {
    console.log('  *** Умова 10 false *** ');
  }

  console.log('  ');
  if (false) {
    console.log(' *** Умова 11 true *** ');
  } else {
    console.log('  *** Умова 11 false *** ');
  }

  console.log('  ');
  if (true) {
    console.log(' *** Умова 12 true *** ');
  } else {
    console.log('  *** Умова 12 false *** ');
  }

  console.log(
    ' **** Пропрацьовую умовне ротзгалуження з різними умовами: або || **** '
  );

  console.log('  ');
  if (4 > 5 || null) {
    console.log(' *** Умова 13 true *** ');
  } else {
    console.log('  *** Умова 13 false *** ');
  }

  console.log('  ');
  if (4 > 5 || null || undefined) {
    console.log(' *** Умова 14 true *** ');
  } else {
    console.log('  *** Умова 14 false *** ');
  }

  console.log('  ');
  if (4 > 5 || null || undefined || 0) {
    console.log(' *** Умова 15 true *** ');
  } else {
    console.log('  *** Умова 15 false *** ');
  }

  console.log('  ');
  if (4 > 5 || null || undefined || 0 || '') {
    console.log(' *** Умова 16 true *** ');
  } else {
    console.log('  *** Умова 16 false *** ');
  }
  console.log('  ');
  if (4 > 5 || null || undefined || 0 || '' || NaN) {
    console.log(' *** Умова 17 true *** ');
  } else {
    console.log('  *** Умова 17 false *** ');
  }

  console.log('  ');
  if (4 > 5 || null || undefined || 0 || '' || NaN || !12) {
    console.log(' *** Умова 18 true *** ');
  } else {
    console.log('  *** Умова 18 false *** ');
  }

  console.log('  ');
  if (4 > 5 || null || undefined || 0 || '' || NaN || !12 || false) {
    console.log(' *** Умова 19 true *** ');
  } else {
    console.log('  *** Умова 19 false *** ');
  }

  console.log('  ');
  if (
    4 > 5 ||
    null ||
    undefined ||
    0 ||
    '' ||
    NaN ||
    !12 ||
    false ||
    4 === ' '
  ) {
    console.log(' *** Умова 20 true *** ');
  } else {
    console.log('  *** Умова 20 false *** ');
  }

  console.log('  ');
  if (
    4 > 5 ||
    null ||
    undefined ||
    0 ||
    '' ||
    NaN ||
    !12 ||
    false ||
    4 === ' ' ||
    true
  ) {
    console.log(' *** Умова 21 true *** ');
  } else {
    console.log('  *** Умова 21 false *** ');
  }

  console.log('  ');
  if (
    4 > 5 ||
    null ||
    undefined ||
    0 ||
    '' ||
    true ||
    NaN ||
    !12 ||
    false ||
    4 === ' '
  ) {
    console.log(' *** Умова 22 true *** ');
  } else {
    console.log('  *** Умова 22 false *** ');
  }
  console.log('  ');

  console.log(
    ' **** Пропрацьовую умовне ротзгалуження з різними умовами: i  -  && **** '
  );

  if (4 > 5) {
    console.log(' *** Задача && - Умова 1 true *** ');
  } else {
    console.log(' *** Задача && - Умова 1 false *** ');
  }
  console.log('  ');

  if (4 < 5) {
    console.log(' *** Задача && - Умова 2 true *** ');
  } else {
    console.log(' *** Задача && - Умова 2 false *** ');
  }
  console.log('  ');

  if (4 < 5 && true) {
    console.log(' *** Задача && - Умова 3 true *** ');
  } else {
    console.log(' *** Задача && - Умова 3 false *** ');
  }
  console.log('  ');

  if (13 < 5 && true) {
    console.log(' *** Задача && - Умова 4 true *** ');
  } else {
    console.log(' *** Задача && - Умова 4 false *** ');
  }
  console.log('  ');

  if (4 < 5 && true) {
    console.log(' *** Задача && - Умова 3 true *** ');
  } else {
    console.log(' *** Задача && - Умова 3 false *** ');
  }
  console.log('  ');

  if (23 >= 23 && true) {
    console.log(' *** Задача && - Умова 4 true *** ');
  } else {
    console.log(' *** Задача && - Умова 4 false *** ');
  }
  console.log('  ');

  if (23 >= 23 && true && undefined) {
    console.log(' *** Задача && - Умова 5 true *** ');
  } else {
    console.log(' *** Задача && - Умова 5 false *** ');
  }
  console.log('  ');

  if (0 && 23 >= 23 && true && undefined) {
    console.log(' *** Задача && - Умова 6 true *** ');
  } else {
    console.log(' *** Задача && - Умова 6 false *** ');
  }
  console.log('  ');

  if (0 && 23 >= 23 && true && !undefined) {
    console.log(' *** Задача && - Умова 7 true *** ');
  } else {
    console.log(' *** Задача && - Умова 7 false *** ');
  }
  console.log('  ');
  const r = !undefined;
  console.log(r);
  console.log('  ');

  if (23 >= 23 && true && undefined && 0 && '') {
    console.log(' *** Задача && - Умова 8 true *** ');
  } else {
    console.log(' *** Задача && - Умова 8 false *** ');
  }
  console.log('  ');

  if (0 && 23 >= 23 && true && undefined && 0 && '' && ' ') {
    console.log(' *** Задача && - Умова 9 true *** ');
  } else {
    console.log(' *** Задача && - Умова 9 false *** ');
  }
  console.log('  ');
  if (
    0 &&
    23 >= 23 &&
    true &&
    undefined &&
    0 &&
    '' &&
    ' ' &&
    NaN &&
    !12 &&
    false &&
    4 === 0
  ) {
    console.log(' *** Задача && - Умова 10 true *** ');
  } else {
    console.log(' *** Задача && - Умова 10 false *** ');
  }
  console.log('  ');
  const rr =
    0 &&
    23 >= 23 &&
    true &&
    undefined &&
    0 &&
    '' &&
    ' ' &&
    NaN &&
    !12 &&
    false &&
    4 === 0;
  console.log('Змінна rr        : ', rr);
  console.log('  ');
  const rrr =
    10 &&
    23 >= 23 &&
    true &&
    !undefined &&
    !0 &&
    ' ' &&
    ' ' &&
    !NaN &&
    !!12 &&
    !false &&
    4 !== 0; // якщо хоча б 1блок віддає false переходить до блока else {}
  // якщо всі без виключення true видає перший блок в інструкцією

  console.log('Змінна rrr        : ', rrr);
  console.log('  ');

  console.log('  ');
  const tttttrr =
    0 ||
    23 >= 23 ||
    true ||
    undefined ||
    0 ||
    '' ||
    ' ' ||
    NaN ||
    !12 ||
    false ||
    4 === 0;
  console.log('Змінна tttttrr        : ', tttttrr);
  // якщо хоча б одна змінна виддає true показує/відпрацює 1 блок
  //якщо все false - відпрацює блок, що йде після else {}
  console.log('  ');

  console.log(' **** Вирішую задачі плл темі **** ');

  console.warn(' *** 1. Перевірка на парність *** ');
  // Напишіть програму, яка приймає число і перевіряє, чи є воно парним. Якщо число парне, виведіть "Число парне", інакше — "Число непарне".
  const patnnumber = 1300;
  if (patnnumber % 2 == 0) {
    console.log('Задане число парне');
  } else {
    console.log('Задане число не парне');
  }
  console.log('  ');
  console.warn(' *** 2. Визначення більшого числа *** ');
  //Напишіть програму, яка приймає два числа і визначає, яке з них більше. Якщо числа рівні, виведіть "Числа рівні".
  const oneNavedNumber = 13,
    tvoNavedNumber = 13;
  if (oneNavedNumber > tvoNavedNumber) {
    console.log('Перше число більше другого');
  } else if (oneNavedNumber < tvoNavedNumber) {
    console.log('Перше число меньше другого');
  } else {
    console.log('Перше число та друге число рівні');
  }

  console.log('  ');
  console.warn(' *** 3. Перевірка на позитивність *** ');
  // Напишіть програму, яка приймає число і перевіряє, чи є воно позитивним, негативним або нулем. Відповідно, виведіть "Позитивне число", "Негативне число" або "Нуль".
  const checkNumberTest = 0;
  if (checkNumberTest < 0) {
    console.log('Задане число негативне');
  } else if (checkNumberTest === 0) {
    console.log('Задане число Є нуль');
  } else {
    console.log('Задане число позиитвним');
  }

  console.warn(' *** 4. Перевірка на вік *** ');
  // Напишіть програму, яка приймає вік користувача і виводить "Ви дорослий", якщо вік більше або дорівнює 18. Інакше виведіть "Ви ще не дорослий".

  console.warn(' *** 5. Визначення кварталу *** ');
  // Напишіть програму, яка приймає номер місяця (від 1 до 12) і визначає, до якого кварталу року він належить (1-4).

  console.warn(' *** 6. Оцінка успішності *** ');
  // Напишіть програму, яка приймає оцінку учня (від 0 до 100) і визначає, чи пройшов учень іспит. Якщо оцінка більше або дорівнює 60, виведіть "Іспит здано", інакше "Іспит не здано".

  console.warn(' *** 7. Калькулятор з умовами *** ');
  // Напишіть програму, яка приймає два числа та один з операторів (+, -, *, /). Виконайте відповідну математичну операцію між цими числами і виведіть результат.

  console.warn(' *** 8. Перевірка на високосний рік *** ');
  // Напишіть програму, яка приймає рік і визначає, чи є він високосним. Високосний рік ділиться на 4, але не ділиться на 100, якщо не ділиться на 400.

  console.warn(' *** 9. Перевірка діапазону *** ');
  // Напишіть програму, яка приймає число і перевіряє, чи входить воно в діапазон від 10 до 20 включно. Якщо входить, виведіть "Число в діапазоні", інакше "Число не в діапазоні".

  console.warn(' *** 10. Визначення дня тижня *** ');
  // Напишіть програму, яка приймає номер дня тижня (від 1 до 7) і виводить назву цього дня (1 — понеділок, 2 — вівторок тощо). Якщо номер не відповідає жодному дню тижня, виведіть "Некоректний номер дня".

  /**
   *
   * Ці задачі допоможуть вам краще зрозуміти, як працює умовне розгалуження в JavaScript.
   *
   */

  console.log('  ');
  console.warn(' *** інструкція Switch *** ');
  console.log('  ');
  const fruit = 'apple';
  switch (fruit) {
    case 'orange':
      console.log('Працює інструкція Switch, задача 1:  orange');
      break;
    case 'pear':
      console.log('Працює інструкція Switch, задача 1: pear');
      break;
    case 'apple':
      console.log('Працює інструкція Switch, задача 1: apple');
      break;
    case 'nut':
      console.log('Працює інструкція Switch, задача 1: nut');
      break;
    default:
      console.log('Працює інструкція Switch, задача 1: unknow fruit');
  }
  console.log('  ');

  console.log('Switch вирішення завдання на парне не парне . Задача 2 ');
  console.log('  ');

  const numCheck = 4;
  switch (numCheck) {
    case 2:
    case 4:
    case 6:
    case 8:
    case 10:
      console.log('Switch. Задача 2. Парне');
      break;
    case 1:
    case 3:
    case 5:
    case 7:
    case 9:
      console.log('Switch. Задача 2. Не парне');
      break;
    default:
      console.log('Switch. Задача 2. Не відомо');
  }
  console.log('  ');

  if (
    numCheck == 2 ||
    numCheck == 4 ||
    numCheck == 6 ||
    numCheck == 8 ||
    numCheck == 10
  ) {
    console.log('Switch. Задача 3. Парне');
  } else if (
    numCheck == 1 ||
    numCheck == 3 ||
    numCheck == 5 ||
    numCheck == 7 ||
    numCheck == 9
  ) {
    console.log('Switch. Задача 3. Не парне');
  } else {
    console.log('Switch. Задача 3. Не відомо');
  }
  console.log('  ');
  console.log('  ');
  console.log('  ');
});

console.log('Switch. Задача 4. Вартість кімнат в квартирі');

let rooms = +document.querySelector('#get-data'),
  strRoom = '';
switch (rooms) {
  case 1:
    strRoom = 'Вартість $15 000';
    break;
  case 2:
    strRoom = 'Вартість $25 000';
    break;
  case 3:
    strRoom = 'Вартість $37 000';
    break;
  case 4:
    strRoom = 'Вартість $49 000';
    break;
  default:
    strRoom = 'Більше 5 кімнат в квартирі не передбачено у нашому проекті';
}
document.querySelector('#push-data').textContent = strRoom;

let day = '',
  today = new Date();
switch (today.getDay()) {
  case 0:
    day = 'воскресенье';
    break;
  case 1:
    day = 'понедельник';
    break;
  case 2:
    day = 'вторник';
    break;
  case 3:
    day = 'среда';
    break;
  case 4:
    day = 'четверг';
    break;
  case 5:
    day = 'пятница';
    break;
  case 6:
    day = 'суббота';
}
console.log(`Сегодня ${day}, ${today.toLocaleString()}`);

let select = document.getElementById('cheese'),
  outputPar = document.getElementById('output'),
  result = '';

select.addEventListener('change', setPizza);

function setPizza() {
  const choice = select.value;
  switch (choice) {
    case '':
      result = 'піца не вибрана';
      break;

    case 'mozarella':
      result = 'Маргарита';
      break;

    case 'filadelfia':
      result = 'Филадельфия';
      break;

    case 'chedder':
      result = 'Чеддер';
      break;

    case 'parmezan':
      result = 'Пармезан';
      break;

    case 'mramor':
      result = 'Мраморний';
      break;

    case 'dor-blue':
      result = 'Дор Блю';
      break;

    default:
      result = 'Зробіть вибір повторно';
  }
  outputPar.textContent = `Пицца  ${result}`;
}

function chooseFruitImg() {
  let fruitChioce = fruit.value,
    imgURL = '';
  let fruits = {
    apple: 'https://source.unsplash.com/iqIJE3Jo8YM/300x300',
    banana: 'https://source.unsplash.com/fczCr7MdE7U/300x300',
    grape: 'https://source.unsplash.com/vGQ49l9I4EE/300x300',
    kiwi: 'https://source.unsplash.com/a9rxefN9vgY/300x300',
    peach: 'https://source.unsplash.com/l60tPwIN0uo/300x300',
    pinapple: 'https://source.unsplash.com/Lkf6FmPu25U/300x300',
    melon: 'https://source.unsplash.com/AbwqpFnBDms/300x300',
    watermelon: 'https://source.unsplash.com/1C55VIfJSuQ/300x300',
  };
  switch (fruitChioce) {
    case 'apple':
      imgURL = 'https://source.unsplash.com/I58f47LRQYM/300x300';
      break;
    case 'banana':
      imgURL = 'https://source.unsplash.com/aEwNCA_uiVg/300x300';
      break;
    case 'grape':
      imgURL = 'https://source.unsplash.com/UqgTtfaikio/300x300';
      break;
    case 'kiwi':
      imgURL = 'https://source.unsplash.com/1oMGgHn-M8k/300x300';
      break;
    case 'peach':
      imgURL = 'https://source.unsplash.com/Ze0QgKf2u0k/300x300';
      break;
    case 'pinapple':
      imgURL = 'https://source.unsplash.com/-E3dv3zRGEk/300x300';
      break;
    case 'melon':
      imgURL = 'https://source.unsplash.com/MQ82YY6iuPc/300x300';
      break;
    case 'watermellon':
    case 'watermelon':
      imgURL = 'https://source.unsplash.com/izi5AnlbRIA/300x300';
      break;
    default:
      imgURL = 'https://source.unsplash.com/zeFy-oCUhV8/300x300';
  }

  fruitImg.src = imgURL;
  fruitImgObj.src =
    fruits[fruitChioce] || 'https://source.unsplash.com/M_xIaxQE3Ms/300x300';

  fruitImg.alt =
    fruitImg.title =
    fruitImgObj.alt =
    fruitImgObj.title =
      fruitChioce;
}
