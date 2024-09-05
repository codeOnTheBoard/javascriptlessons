'use strict';

document.addEventListener('DOMContentLoaded', () => {
  /**
   * План вивчення JS
   *https://miro.com/app/board/o9J_kxm_io0=/
  *
  * /
  /*
  * Javascript
  *** Основи Javascript
  ****
  * ! Розділ пропрацьований
  * Типи даних :
  * !     number
    !     string
    !     boolean
    !     null
    !     undefined
    !     Object
    !     Symbol
    !     BigInt
  **** Оператори
  **** Условия
  **** Цикли
  **** Функції
         класифікація
         замикание функцій
         callback-фунції
  **** OOП
  **** Динамічна типизація

  *** Робота зі сторінкою
  **** Отримання елементіа
  **** Собития
         Всплиите собитий
         Делегування собитий
         Обькт собитий
         Цикл собитий
  **** Обработчик собитий
  **** Отмена стандартних собитий
  **** Параметри глобльних обектов
         window
         screen
         document
  **** JS параметри елементів
  **** Робота скриптов с теченмием времени

   *** Регулярні вирази

   *** JS в роботі

   **** this Контекст виклику
   **** Конструктори
   **** Формат передачі даних JSON
   **** Обращение с сервером AJAX
   **** Iнкапсуляція
   **** Сборка проекта
   **** Перехват помилок try/catch
   **** Робота с LocalStorage

   *** Стандарт ES6

   **** Змінні let/const
   **** Стрелочние функції
   **** Інтерполяція
   **** Promise
   **** Цикл for of
   **** Деструкотурирование
   **** spread
   **** Class
   **** Babel
   **** ...

  *** Стандарт ES7, ES8

  **** Оператор **
  **** async/await**
  **** ...
  */

  console.warn('Починаю систематизувати знання JS');

  /*
  clear() - очистка консолі
  error() - отобржение сообщения об ошибке
  warn() - отображение сообщения с предупреждением
  log(), info() - отображение информационного сообщения
  dir() - обображение елементів в вигляді JS обектів
  table() - відображення даних у таблічній формі
  time()/timeEnd() - запуск/зупинка таймера
  timeLog() - відображення текущего значення таймера
  */
  console.error('Error');
  console.log('Просте інформаційне повідомлення');
  console.dir('Відображення елементів вигляді JS обектів');
  console.table('Відображення елементів у табличній формі');

  console.error(' *** Початок видображення типів даних *** ');

  console.table([
    {
      'Тип даних': 'number',
      Значення: 'ціле число, число з плаваючою точкою',
    },
    {
      'Тип даних': 'string',
      Значення: 'строчка з літери, числа, слів або словосполучень',
    },
    {
      'Тип даних': 'boolean',
      Значення:
        'Логічний тип даних, яке має два варіанта значення : true або false',
    },
    {
      'Тип даних': 'null',
      Значення:
        'Cпеціальне примітивне значення, яке використовується для позначення відсутності або навмисного очищення значення змінної, тобто змінна явно не має жодного значення.',
    },
    {
      'Тип даних': 'undefined',
      Значення:
        'Якщо змінна була оголошена, але їй не було присвено жодного значення',
    },
    {
      'Тип даних': 'Object',
      Значення:
        "Складний тип даних, який використовується для зберігання колекцій структурованих данних у вигляді ключ-значення. Ключі - це рядки або символи, а значення - будь-які типи даних, включаючи інші об'єкти.",
    },
    {
      'Тип даних': 'Symbol',
      Значення:
        "Примітивний тип даних, який використовується для створення унікальних ідентифікаторів, гарантуеться, що кожне створене значення Symbol є унікальним, навіть якщо вони мають однакові описи. Їх часто використовують як ключі в об'єктах для уникнення конфліктів імен.",
    },
    {
      'Тип даних': 'BigInt',
      Значення:
        'Примітивний тип даних, який використовується для роботи з цілими числами, більшими за ті, що можуть бути представлені типом Number. Він дозволяє працювати з дуже великими цілими числами без втрати точності.',
    },
  ]);
  // приклад Object;
  let userObject = {
    name: 'Ivan',
    age: 30,
  };

  console.log(userObject.name); // Виведе: Ivan

  // приклад 'Symbol';
  let id = Symbol('id');
  let user = {
    name: 'Ivan',
    [id]: 123,
  };

  console.log(user[id]); // Виведе: 123

  // приклад 'BigIn';

  let bigNumber = 1234567890123456789012345678901234567890;
  let anotherBigNumber = BigInt('1234567890123456789012345678901234567890');

  console.log(
    'Виводитьcя просто велике число в типу Number : ' +
      bigNumber +
      ' \n' +
      'Виводитьcя теж число, але оброблене за допомогою функції BigInt()  :' +
      anotherBigNumber
  ); // Виведе дуже велике число

  console.error('\n' + ' *** Кінець видображення типів даних *** ');

  console.error('\n' + ' *** Перетворення типів даних *** ');

  console.log('Як працювати з String');
  const stringDataType = 'Це строчка яка може буди завгодно якої довжини';
  console.info('Тип даних строка : ', typeof stringDataType);
  const numberToSting = 123;
  console.info('Число : ', numberToSting);
  console.info('Тип даних число: ', typeof numberToSting);
  let rezNumberToSting = String(numberToSting);
  console.info('Вивожу число я строку 123: ', rezNumberToSting); // число 123 перетворюється в строку "123"
  console.info(
    'Перетворення тип даних 123 воно є строчкой: ',
    typeof rezNumberToSting
  ); // число 123 перетворюється в строку "123"

  const otherNumberToSting = numberToSting.toString();

  console.info(
    'Інший спосіб перетворенння числа в строчку: ',
    otherNumberToSting
  ); // число 123 перетворюється в строку "123"
  console.info('Тип даних: ', typeof otherNumberToSting);

  console.log(' ');
  console.log('Як працювати з Number');
  const stringNamberDataType = '555';
  console.info('Вихідні дані: ', stringNamberDataType);
  console.info(
    'Я створив змінну з типом даних - число: ',
    typeof stringNamberDataType
  );
  const getstringNamberDataType = Number(stringNamberDataType);
  console.info('Перетворив строку в число : ', getstringNamberDataType);

  //Використання функції Number(), або parseInt() для цілих чисел, або parseFloat() для дробових.
  /**
   * Функція Number() використовується для перетворення значень різних типів в числа.
   *  Вона може перетворювати рядки, булеві значення, спеціальні значення, як null або undefined,
   *  і навіть об'єкти, які мають методи для перетворення в число.
   *  Number("123"); // 123
   *  Number("123.45");  // 123.45
   *
   *  Функція parseFloat() — це вбудована функція в JavaScript, яка використовується для перетворення рядка (string)
   *  в число з плаваючою комою (float). Вона аналізує рядок і повертає перше число з плаваючою комою, яке знайде.
   *  Якщо рядок не починається з числового значення, результатом буде NaN (Not-a-Number).
   *  parseFloat("123.45"); // 123.45
   *  parseFloat("3.14abc"); // 3.14
   *
   *  parseInt(string, radix);
   *  string: Рядок, який потрібно перетворити на ціле число.
   *  radix: Необов'язковий параметр. Основа системи числення (від 2 до 36).
   *  Наприклад, 2 для двійкової, 10 для десяткової, 16 для шістнадцяткової системи.
   *
   */

  console.info('Тип даних число : ', typeof getstringNamberDataType);
  console.log(' ');
  const strToNum = 'шість';
  console.info('Число шість літерами  : ', strToNum);
  console.info('Тип даних число : ', typeof strToNum);
  const getStrToNum = Number(strToNum);
  const getStr2Num = parseInt(strToNum);
  console.info('Результат  : ' + getStrToNum + ' ' + typeof getStrToNum);
  console.info('Результат  : ' + getStr2Num + ' ' + typeof getStr2Num);

  console.log(' ');

  console.log('Як працювати з Boolean');
  const booleanDataType = true;
  console.info('Змінна :', booleanDataType);
  console.info('Тип даних логічний :', typeof booleanDataType);

  console.log(' ');

  console.log('Як працювати з Null');
  const nullDataType = null; // Не існує способу явного перетворення в null. Це значення призначається вручну.
  console.info('Зміна :', nullDataType);
  console.info('Тип даних nullDataType :', typeof nullDataType);

  console.log(' ');

  console.log('Як працювати з Undefined');
  const undefinedDataType = undefined; // Немає явного перетворення. Змінній присвоюється значення undefined, якщо вона не була ініціалізована.
  console.info('Зміна :', undefinedDataType);
  console.info('Тип даних undefinedDataType :', typeof undefinedDataType);

  console.log(' ');

  console.log('Як працювати з Object');
  const obgectDataType = {};
  console.info('Зміна :', obgectDataType);
  console.info('Тип даних obgectDataType :', typeof obgectDataType);
  const str = 'Hello';
  const obj = Object(str); // Створить об'єкт-обгортку для рядка Явне: Використання конструктора Object()

  console.log(' ');

  console.log('Як працювати з Symbol');
  console.log('Зміна :', Symbol('description')); //Символи не можуть бути автоматично перетворені в інші типи. Щоб створити символ, використовується функція Symbol().
  console.log('Тип даних symbol :', typeof Symbol('description'));

  console.log(' ');

  console.log('Як працювати з BigInt');
  const numToBigint = 123;
  console.info('Зміна :', numToBigint);
  console.info('Тип даних зміній :', typeof numToBigint);
  const getNumToBigint = BigInt(numToBigint);
  console.info('Нова зміна :', getNumToBigint);
  console.info('Тип даних зміній після перетворення :', typeof getNumToBigint);

  /**
   */

  console.error('\n' + ' **** Оператори в JS *** ');

  console.info('Унарний тип оператора - :', -29);

  console.info('Унарний тип оператора + :', +29);
  console.info('Тип даних число з унанрним оператором - :', typeof -29);
  console.info('Тип даних число з унанрним оператором + :', typeof +29);
  console.log(' ');
  console.info('Арифметичні оператори :');
  console.log(' ');
  console.info('Бінарний тип оператора + ( 4 + 6 = ) :', 4 + 6);
  console.info('Бінарний тип оператора - ( 4 - 6 = ) :', 4 - 6);
  console.info('Бінарний тип оператора * ( 4 * 6 = ) :', 4 * 6);
  console.info('Бінарний тип оператора / ( 4 / 6 = ) :', 4 / 6);
  console.info('Бінарний тип оператора ** ( 4 ** 6 = ) :', 4 ** 6);
  console.info('Бінарний тип оператора % ( 4 % 2 = ) :', 4 % 2);
  console.info('Бінарний тип оператора % ( 35 % 2 = ) :', 35 % 2);
  console.log(' ');
  const ageTer = 19;
  console.info(
    'Тернарний тип оператора ( const age >= 18 ? "adult" : "child") :',
    ageTer >= 18 ? 'adult' : 'child'
  );
  /*
 ! оператори по назначению
* Арифметические оператори       +(сложение)
* Оператори присваивания         =(присваивание значения)
* Оператори сравнения            >(больше)
* Логические оператори           && (логическое И)
* Битовие оператори              >> (cдвиг вправо)
* Специальние оператори          typeof(типи данних)
* Приоритет опрераторов как в математике
* унарний + главнее чем бинарний
*/
  console.error(
    '\n' + ' **** Скорочений розгорнутий запис оператора присвоєння *** '
  );
  console.info('Простое присваивание const yyy = 14; ');

  let xxx = 3;
  let yyy = 14;

  console.info(`Перша змінна - ${xxx}, друга змінна - ${yyy} `);

  xxx = xxx + yyy;

  console.info(
    'Простe присвоення зі складанням X = X + Y ; ' +
      `  ${xxx} = ${xxx} + ${yyy}; ` +
      xxx
  );

  xxx += yyy;
  console.info(
    'Простe присвоення зі складанням X += Y ; ' + ` ${xxx} += ${yyy}  ; ` + xxx
  );
  console.log(' ');

  xxx = xxx - yyy;
  console.info(
    'Простe присвоення з відніманням X = X - Y ; ' +
      `   ${xxx} = ${xxx} - ${yyy} ; ` +
      xxx
  );

  xxx -= yyy;
  console.info(
    'Простe присвоення з відніманням X = X - Y ; ' + ` ${xxx} -= ${yyy}; ` + xxx
  );
  console.log(' ');
  xxx = xxx * yyy;
  console.info(
    'Простe присвоення з множенням X = X * Y ; ' +
      `   ${xxx} = ${xxx} * ${yyy}; ` +
      xxx
  );

  xxx *= yyy;
  console.info(
    'Простe присвоення з множенням X *= Y ; ' + ` ${xxx} *= ${yyy};  ` + xxx
  );
  console.log(' ');
  xxx = xxx / yyy;
  console.info(
    'Простe присвоення з діленням X = Х / Y ; ' +
      ` ${xxx} = ${xxx} / ${yyy} ` +
      xxx
  );

  xxx /= yyy;
  console.info(
    'Простe присвоення з діленням X /= Y ; ' + ` ${xxx} /= ${yyy} ` + xxx
  );

  console.log(' ');
  xxx = xxx % yyy;
  console.info(
    'Простe присвоення з діленням з залишком X = X % Y ; ' +
      ` ${xxx} = ${xxx} % ${yyy} ` +
      xxx
  );

  xxx %= yyy;

  console.info(
    'Простe присвоення з діленням з залишком X %= Y ; ' +
      `  ${xxx} %= ${yyy} ` +
      xxx
  );

  let ter = 14;
  let terDo = 2;
  ter %= terDo;
  console.info(
    'Простe присвоення з діленням з залишком ter %= terDo ; ' +
      `  14 %= ${terDo} ` +
      ` відповідь ` +
      ter
  );

  let terOne = 15;
  let terDoOne = 2;
  terOne %= terDoOne;
  console.info(
    'Простe присвоення з діленням з залишком ter %= terDo ; ' +
      `  15 %= ${terDoOne} ` +
      ` відповідь ` +
      terOne
  );

  // ! Оператори присваивания       Сокращенная    развернутая запись       =(присваивание значения)
  // приходить значення в Х та Y після дії результат становиться новим значенням в результаті математичної дії.
  //  Простое присваивание                X = Y             X = Y
  //  Присваивание со сложением           X += Y            X = Х + Y
  //  Присваивание с вичитанием           X -= Y            X = Х - Y
  //  Присваивание с умножением           X *= Y            X = Х * Y
  //  Присваивание с делением             X '/'= Y          X = Х / Y
  //  Присваивание со взятием остатка     X %= Y            X = Х % Y

  console.error('\n' + ' **** Кінець оператори в JS *** ');
  console.log(' ');
  console.error('\n' + ' **** Як працювати з префіксним інкрементом в JS *** ');
  console.log(' ');

  let resIncrem = 4;
  console.log('Крок 0. Стартове значення resIncrem', resIncrem);
  console.log(' ');
  resIncrem = resIncrem++;
  console.log(`Крок 1. Результат інкремента ${resIncrem} `, resIncrem);
  resIncrem = ++resIncrem;
  console.log(`Крок 2. Результат інкремента ${resIncrem} `, resIncrem);
  resIncrem = ++resIncrem;
  console.log(`Крок 3. Результат інкремента ${resIncrem} `, resIncrem);
  resIncrem = ++resIncrem;
  console.log(`результат інкремента ${resIncrem} `, resIncrem);

  console.log(' ');

  console.error('\n' + ' **** Як працювати з префіксним дескреентом в JS *** ');
  console.log(' ');
  /**В JavaScript префіксний декремент (--variable) використовується для зменшення значення змінної на одиницю перед тим, як це значення буде використане в подальшому виразі. */
  let preffDeskr = 18;
  console.log('Крок 0. Стартове значення preffDeskr', preffDeskr);
  console.log(' ');
  preffDeskr = --preffDeskr;
  console.log('Крок 1. Результат дескремента ', preffDeskr);
  preffDeskr = --preffDeskr;
  console.log('Крок 2. Результат дескремента ', preffDeskr);
  preffDeskr = --preffDeskr;
  console.log('Крок 3. Результат дескремента ', preffDeskr);
  preffDeskr = --preffDeskr;
  console.log('Крок 4. Результат дескремента ', preffDeskr);
  console.log(' ');
  console.error(
    '\n' + ' **** Як працювати з постфіксним інкрементом в JS *** '
  );
  console.log(' ');
  let postfixIncrement = 14;
  console.log('Крок 0. Стартове значення postfixIncrement', postfixIncrement);
  postfixIncrement = postfixIncrement++;
  console.log(
    'Крок 1. Результат постфіксного інкремента postfixIncrement',
    postfixIncrement
  );
  postfixIncrement = postfixIncrement++;
  console.log(
    'Крок 2. Результат постфіксного інкремента postfixIncrement',
    postfixIncrement
  );

  console.log(' ');
  console.error(
    '\n' + ' **** Як працювати з постфіксним Дескрементом в JS *** '
  );
  console.log(' ');
  let postfixDescrem = 14;
  console.log('Крок 0. Стартове значення postfixDescrem', postfixDescrem);
  postfixDescrem = postfixDescrem--;
  console.log(
    'Крок 1. Результат постфіксного інкремента postfixDescrem',
    postfixDescrem
  );
  postfixDescrem = postfixDescrem--;
  console.log(
    'Крок 2. Результат постфіксного інкремента postfixDescrem',
    postfixDescrem
  );
  console.error(
    '\n' +
      ' **** Як працювати з префіксним декрементом в циклі віл 5 до 0 в бік зменшення в JS *** '
  );
  for (let i = 5; i > 0; --i) {
    console.log(i);
  }

  console.log(' ');

  console.error(
    '\n' +
      ' **** Як працювати з постфіксним декрементом в циклі віл 5 до 0 в бік зменшення в JS *** '
  );
  for (let i = 5; i > 0; i--) {
    console.log(i);
  }
  console.log(' ');

  console.error(
    '\n' +
      ' **** Як працювати з префіксним інкрементом в циклі від 0 до 9 в бік збільшення в JS *** '
  );
  for (let i = 0; i < 9; ++i) {
    console.log(i);
  }
  console.log(' ');

  console.error(
    '\n' +
      ' **** Як працювати з постфіксним інкрементом в циклі від 0 до 9 в бік збільшення в JS *** '
  );
  for (let i = 0; i < 9; i++) {
    console.log(i);
  }
  /**
   * ! Инкремент и декремент
   * Инкремент (++)
   * Декремент (--)
   * Инкремент та Декремент мають дві форми запису:
   * префіксную опрератор іде перед переменной приклад, ++count
   * постфиксную опрератор іде після переменно приклад, count--
   *
   * У циклі for між використанням ++i та i++ немає різниці в результаті.
   * Обидва цикли виконають однакову кількість ітерацій і виведуть однакові значення.
   * Різниця між префіксним і постфіксним інкрементами в такому випадку не має значення,
   * оскільки інкрементація відбувається після кожної ітерації, і жоден із варіантів не впливає на виконання тіла циклу.
   *
   * Якщо ж різниця між ++i і i++ використовується в інших контекстах, то порядок виконання інкрементації може мати значення.
   *
   */

  console.info(' **** Логічне перетворення усіх типів даних **** ');
  console.log(' ');
  console.info('Отримати число із рядка 40 ');
  const numbToString = '40';
  console.log(typeof numbToString);
  console.log(Number(numbToString));
  console.log(typeof Number(numbToString));
  console.log(' ');
  console.info('Отримати число із рядка сорок');
  const numbToStringLine = 'сорок';
  console.log(typeof numbToStringLine);
  console.log(Number(numbToStringLine));
  console.log(typeof Number(numbToStringLine));
  console.log(' ');

  const trueToNumber = true;
  console.log('Отримати число із true - 1 ');
  console.log(Number(trueToNumber));

  console.log('Отримати число з false - 0 ');
  console.log(Number(false));

  console.log('Отримати число з null - 0 ');
  console.log(Number(null));

  console.log('Отримати число з undefined - NaN ');
  console.log(Number(undefined));

  console.log('Отримати число з BigInt - число ');
  console.log(Number(getNumToBigint));

  console.log('Отримати число з undefined - NaN ');
  console.log(Number(undefined));

  console.log('Отримати число з рядка рядок - NaN ');
  console.log(Number('рядок'));

  console.log('Отримати число з пустого рядка - 0 ');
  console.log(Number(''));

  console.log('Отримати рядка з числа 30 - 30 ');
  console.log(String(30));
  console.log(typeof String(30));

  console.log('Отримати рядок з логічного типу true - true ');
  console.log(String(true));
  console.log(typeof String(true));

  console.log('Отримати рядок з логічного типу null - null ');
  console.log(String(null));
  console.log(typeof String(null));

  console.log('Отримати рядок з логічного типу undefined - undefined ');
  console.log(String(undefined));
  console.log(typeof String(undefined));

  console.log('Логічне значення із числа 30 - true ');
  console.log(Boolean(40));
  console.log(typeof Boolean(40));

  console.log('Логічне значення із числа 0 - true ');
  console.log(Boolean(0));
  console.log(typeof Boolean(0));

  console.log('Логічне значення із числа -30 - true ');
  console.log(Boolean(-30));
  console.log(typeof Boolean(-30));

  console.log('Логічне значення із рядка "-30" - true ');
  console.log(Boolean('-30'));
  console.log(typeof Boolean('-30'));

  console.log('Логічне значення із рядка "рядок" - true ');
  console.log(Boolean('рядок'));
  console.log(typeof Boolean('рядок'));

  console.log('Логічне значення із рядка "" - false ');
  console.log(Boolean(''));
  console.log(typeof Boolean(''));

  console.log('Логічне значення із рядка " " - true ');
  console.log(Boolean(' '));
  console.log(typeof Boolean(' '));

  console.log('Логічне значення із null - false ');
  console.log(Boolean(null));
  console.log(typeof Boolean(null));

  console.log('Логічне значення із undefined - false ');
  console.log(Boolean(undefined));
  console.log(typeof Boolean(undefined));

  console.warn('Автоматичне перетворення типів');
  const numOne = 10;
  const logicOne = true;
  const divideOne = numOne / logicOne;
  console.log(
    `divideOne = numOne / logicOne : (${numOne} / ${logicOne} ) = ${divideOne} `
  );

  const numTwo = 20;
  const logicTwo = true;
  const logicFalse = false;
  const divideTwo = numTwo / logicTwo;
  const divideTwoFalse = numTwo / logicFalse;
  console.log(
    `divideTwo = numTwo / logicTwo : (${numTwo} / ${logicTwo} ) = ${divideTwo} `
  );
  console.log(' ');
  console.log(
    `divideTwoFalse = numTwo / logicFalse : (${numTwo} / ${logicFalse} ) = ${divideTwoFalse} `
  );
  console.log(' Ділити на нуль неможливо. В JS результат - Infinity  ');
  console.log(
    `divideTwoFalse = numTwo / 0 : (${numTwo} / 0 ) = ${divideTwoFalse} `
  );

  /**
   * Автоматично перетворюеться рядок в число.
   * Якщо число набрано не літерами, а цифрами, воно перед и після числа обмежене лапками
   * а перед рядком проставлений знак математичної дії, який може інтепретуватися однолзначно.
   * + знак " плюс " однозначно трактуеться як сумувати або конкантенувати, тобто автоматичене перетворення типів не можливе.
   * Якщо між двух чисел стоїть один знак +, викомується дія сумування.
   * Якщо між двух чисел стоїть один знак +, у одного числа тип number, а у другого числа - string, викон викомується дія конкатенація
   */

  console.log(' ');
  console.log('Конкатенація / сумування');
  console.log(' ');

  console.log(`3417 = 34 + '17' Результат дії : `, 34 + '17');
  console.log(`51 = 34 + 17 Результат дії : `, 34 + 17);

  let testRez = 1 / 0;
  console.warn('Домашне завдання №1 ', testRez);

  console.warn('Домашне завдання №2 : String(testRez) : ', String(testRez));

  console.warn('Домашне завдання №3 : Boolean(testRez) : ', Boolean(testRez));

  console.warn('Домашне завдання №4 : true - 1 = ', true - 1);
  console.warn('Домашне завдання №5 : true + 4 = ', true + 4);

  console.warn('Домашне завдання №6 : 9 + false = ', 9 + false);
  console.warn('Домашне завдання №7 : 9 "/ false = ', 9 / false);

  console.warn('Домашне завдання №8 : null * 2 = ', null * 2);
  console.warn('Домашне завдання №9 : undefined = ', typeof undefined);

  console.warn('Домашне завдання №10 : undefined = ', +undefined);
  console.warn('Домашне завдання №11 : undefined = ', Number(undefined));

  console.warn('Домашне завдання №12 : 11 + +"12" = ', 11 + +'12');

  console.log(' **** Операторы: співставлення ****  ');

  console.warn(`Оператор більше: 5 > 4 - true : Підтверження `, 5 > 4);
  console.warn(
    `Оператор більше або дорівнює : 5 >=6 - false : Підтверження `,
    5 >= 6
  );
  console.warn(`Оператор меньше : 5 < 6 - true : Підтверження `, 5 < 6);

  console.warn(
    `Оператор меньше або дорівнює : 5 <=4 - false : Підтверження `,
    5 <= 4
  );

  console.warn(`Не строге порівняння : 5 == 5  - true : Підтверження `, 5 == 5);
  console.warn(
    `Не строге порівняння : 5 == "5"  - true : Підтверження `,
    5 == '5'
  );
  console.warn(`Cтроге порівняння : 5 === 5  - true : Підтверження `, 5 === 5);
  console.warn(
    `Cтроге порівняння : 5 === "5"  - false : Підтверження `,
    5 === '5'
  );
  console.warn(
    `Cтроге порівняння : 5 === "25"  - false : Підтверження `,
    5 === '25'
  );
  console.warn(
    `Cтроге порівняння : 5 === "gnm"  - false : Підтверження `,
    5 === 'gnm'
  );

  console.warn(
    `Cтроге порівняння : "пять" === "чотири"  - false : Підтверження `,
    'пять' === 'чотири'
  );

  console.warn(`Не cтроге нерівно :   5 != 6  - true : Підтверження `, 5 != 6);
  console.warn(`Не cтроге нерівно :   5 != 5  - false : Підтверження `, 5 != 5);
  console.warn(
    `Не cтроге нерівно :   5 != "5"  - false : Підтверження `,
    5 != '5'
  );

  console.warn(
    `Cтроге нерівно :   5 !== "5"  - true : Підтверження `,
    5 !== '5'
  );

  console.warn(
    `Cтроге нерівно :   5 !== "25"  - true : Підтверження `,
    5 !== 25
  );
  /**
   * Співставлення рядків відбуівається співставленням UTF кодів кожного символу за порядком його розміщення в рядку,
   * довша строшка є більшою за коротшу строчку
   * більша літера є меньше, ніж меньша літера
   * str1.codePointAtPosition(0) => str1.codePointAt(0))
   *
   */
  const str1 = 'Перемога';
  console.log(
    "Цей код виведе код Unicode символу на першій позиції ('П') у рядку 'Перемога' : ",
    str1.codePointAt(0)
  );
  console.log(
    "Цей код виведе код Unicode символу на 7-мій позиції ('г') у рядку 'Перемога' : ",
    str1.codePointAt(6)
  );

  console.log(' **** Cпівставлення різних типів **** ');

  console.log(' 5 > true ', 5 > true);
  console.log(' 2== {} ({} => NaN) ', 2 == {});
  console.log(' null ==  0  : ', null == 0); // не рівно , тому що значення і число не співставні тому false
  console.log(' null ===  0 : ', null === 0); // не рівно , тому що значення і число не співставні тому false
  console.log(' null == undefined : ', null == undefined); // null == undefined, тому що false == false
  console.log(' null === undefined : ', null === undefined); // null === undefined, відповідь false тому що типи однокові, значення різні
  // ! null віддає false
  // ! undefined віддає false

  console.info(' ');
  console.info('**** Як правильно використовувати логічні оператори **** ');
  console.info(' ');
  console.info(' || або ');
  console.info(' ');

  /** перший логічний оператор або (или, or)
   *
   * || - логічне або
   * операнди перевіряються на true / false зліва на право
   * оператор || повертає істинне значення (true), якщо хоча б один з операндів є істинним,
   * іншими словами
   * повертається перший операнд, що віддає true
   * якщо всі операнди є хибними (false), то результат операції буде false.
   * якщо всі операнди є правдивими (true), то результат операції буде true.
   * якщо жоден операнд не повертає true, повертає останій операнд не дивлячись що він віддає
   *
   * ! Логіка роботи оператора ||:
   *
   * перевірка значень зліва направо: Оператор || перевіряє операнди зліва направо.
   * він повертає перше істинне значення, яке знайде, ігноруючи всі наступні.
   * якщо всі операнди хибні:
   * якщо всі операнди хибні, то оператор повертає останнє хибне значення.
   *
   * приведення до булевого типу:
   * якщо операнд не є булевим типом, він приводиться до булевого значення за допомогою внутрішньої функції Boolean
   *
   */

  let x = 0;
  let y = 'Hello';
  let z = null;

  let result = x || y || z; // result буде 'Hello', оскільки це перше істинне значення

  console.log('result = x || y || z :', (result = x || y || z)); // Hello
  console.log('0 || "Hello" || null', 0 || 'Hello' || null); // Hello

  console.log('4 < 1 || 5 == 3 || 5 > 4', 4 < 1 || 5 == 3 || 5 > 4); // 5 > 4
  console.log('null || undefined || false', null || undefined || false); // false

  console.log('Задача 1. false || true : ', false || true); // true
  console.log('Задача 2. true || false  : ', true || false); // true
  console.log('Задача 3. true || true || false  : ', true || false || true); // true
  console.log('Задача 4. false || false  : ', false || false); // false
  console.log('Задача 5. 2 || 3  : ', 2 || 3); // 2

  console.log('Задача 5.1. "2" || 3  : ', '2' || 3); // 2
  console.log('Задача 5.2. "2&&?" || 3  : ', '2&&?' || 3); // 2&&?
  console.log('Задача 5.3. " " || 3  : ', ' ' || 3); // пробел
  console.log('Задача 5.4. 0 || 3  : ', 0 || 3); // 3
  console.log('Задача 5.5. "Єто строка" || 3  : ', 'Єто строка' || 3); // "Єто строка"

  console.log('Задача 6. 0 || 3 || 3 || 4  : ', 0 || 3 || 3 || 4); // 3
  console.log('Задача 7. 10 || 3 || 3 || 4  : ', 10 || 3 || 3 || 4); // 10
  console.log('Задача 8. 0 || 0 || 0 || 1  : ', 0 || 0 || 0 || 1); // 1
  console.log('Задача 9. 0 || 0 || 0 || 0  : ', 0 || 0 || 0 || 0); // 0
  console.log('Задача 10. "0" || 0 || 0 || 0  : ', '0' || 0 || 0 || 0); // 0
  console.log(
    'Задача 11. "" || "" || "" || " " || 0  : ',
    '' || '' || '' || ' ' || 0
  ); // " "
  console.log(
    'Задача 12. "" || "" || "" || " " || 1  : ',
    '' || '' || '' || '' || 1
  ); // 1

  console.log(
    'Задача 13. null || undefined || false  : ',
    null || undefined || false
  ); // false

  console.log(
    'Задача 13. null || false || undefined : ',
    null || false || undefined
  ); // undefined

  console.log(
    'Задача 14. false || undefined || null : ',
    false || undefined || null
  ); // null

  console.log(
    'Задача 15. false || undefined || null || 54 : ',
    false || undefined || null || 54
  ); // 54

  console.log(
    'Задача 16. false || undefined || 45 || null || 54 : ',
    false || undefined || 45 || null || 54
  ); // 45

  /**
   *
   * !Логічні таблиці:
   *
   * | Вираз 1 | Вираз 2 |   Результат (||) |
   * |---------|---------|------------------|
   * | false   | false   | => alse          |
   * |---------|---------|------------------|
   * | false   | true    | => true          |
   * |---------|---------|------------------|
   * | true    | false   | => true          |
   * |---------|---------|------------------|
   * | true    | true    | => true          |
   * |---------|---------|------------------|
   *
   * Таким чином, логічний оператор || використовується для перевірки
   * декількох умов та вибору першого істинного значення в JavaScript.
   *
   */

  console.info(' ');
  console.info(' &&  і  ');
  console.info(' ');

  /** Логічний оператор і (и, and) використовується для виконання логічної операції "і"
   * Симвод логічного оператора &&
   *
   * Цей оператор повертає істинне значення (true), лише якщо всі операнди є істинними.
   * Якщо хоча б один з операндів є хибним, результат операції буде false.
   *
   * Операнди перевіряються на true / false зліва на право
   * повертається перший операнд, що віддає false
   * якщо усі операнди повертають true, повертається останє true
   * якщо усі операнди повертають false, повертається останє false
   *
   *  ! Логіка роботи оператора &&:
   *
   * перевірка значень зліва направо:
   * оператор && перевіряє операнди зліва направо.
   * він повертає перше хибне значення, яке знайде, ігноруючи всі наступні операнди.
   * якщо всі операнди істинні:
   *
   * якщо всі операнди істинні, оператор повертає останнє істинне значення.
   *
   * приведення до булевого типу:
   * якщо операнд не є булевим типом, він приводиться до булевого значення за допомогою внутрішньої функції Boolean.
   *
   *  ! Ліниве обчислення:
   *
   *  Оператор && також використовує ліниве обчислення, тобто він не обчислює правий операнд, якщо лівий вже є хибним.
   *
   */

  // Возвращается первий ложний  опренд
  console.log('Задача 1. false && true : ', false && true); // false
  console.log('Задача 2. true && false : ', true && false); // false
  console.log('Задача 3. true && true : ', true && true); // true
  console.log('Задача 4. false && false : ', false && false); // false

  // Вcе значения истинни, возвращается последнее
  console.log('Задача 5. 2 && 4 : ', 2 && 4); // 4

  // Возвращается первий ложний операнд
  console.log(
    'Задача 6. null && undefined && false : ',
    null && undefined && false
  ); // null

  // Возвращается первий ложний операнд
  console.log(
    'Задача 7. 4 && null && undefined && false : ',
    4 && null && undefined && false
  ); // null

  // Возвращается первий ложний операнд
  console.log(
    'Задача 8. null && 78  && undefined && false : ',
    null && 78 && undefined && false
  ); // null
  // Возвращается первий ложний операнд
  console.log(
    'Задача 9. undefined && null && false : ',
    undefined && null && false
  ); //  undefined

  console.log(
    'Задача 10. 0 && 10 && undefined && " " && null && false : ',
    0 && 10 && undefined && ' ' && null && false
  ); //  0
  console.log(
    'Задача 11. 4 < 1 && 5 == 3 && 5 > 4 : ',
    4 < 1 && 5 == 3 && 5 > 4
  ); // 4 < 1
  console.log(
    'Задача 12. 4 >= 1 && 5 > 3 && 5 > 4 : ',
    4 >= 1 && 5 > 3 && 5 > 4
  ); // 4 < 1

  console.info(' ');
  console.info(' !  не ');
  console.info(' ');

  /**
   * Логічні таблиці:
   *
   * | Вираз 1 | Вираз 2 |   Результат (&&) |
   * |---------|---------|------------------|
   * | false   | 	false  | 	false           |
   * |---------|---------|------------------|
   * | false	 |  true	 |  false           |
   * |---------|---------|------------------|
   * | true    | 	false  | 	false           |
   * |---------|---------|------------------|
   * | true    | 	true   |	true            |
   * |---------|---------|------------------|
   *
   * ! Ліниве обчислення:
   *
   *  Оператор && також використовує ліниве обчислення,
   *  тобто він не обчислює правий операнд, якщо лівий вже є хибним.
   *
   * Таким чином, логічний оператор && використовується для перевірки кількох умов,
   * які повинні всі бути істинними, і дозволяє уникати помилок, коли не всі умови повинні бути перевірені.
   *
   */

  /**
   * ! логічний оператор НЕ (NOT).
   *
   * Якщо оператор NOT застовується до булевого значення то повертає протилежне значення.
   * Тобто якщо до true - поверне false, якщо до false - true.
   * Якщо застосовується до не булевого значення то спочатку переводить в булове значення, а потім повертає протилежне.
   *
   * !true // false
   * !null // true
   * ! має найвищий пріоритет
   *
   * ! Логіка роботи оператора ! :
   *
   * Відбуіається приведення до булевого типу
   * перед тим, як інвертувати значення, оператор ! приводить операнд до булевого типу.
   * це означає, що будь-яке значення буде спочатку перетворено в true або false за допомогою внутрішньої функції Boolean.
   * інверсія:
   * після приведення до булевого типу оператор !
   * змінює це значення на протилежне:
   * true стає false,
   * а false стає true.
   *
   * ! Значення, що приводяться до true і false:
   *
   * Ложні значення (Falsy): Усі наступні значення приводяться до false:
   *
   * false
   * 0
   * -0
   * "" (порожній рядок)
   * null
   * undefined
   * NaN (нечислове значення)
   *
   * Істинні значення (Truthy):
   *
   * Усі інші значення, які не є вищезгаданими, приводяться до true.
   *
   */

  console.log('Задача 1 !false : ', !false); // true
  console.log('Задача 2 !true : ', !true); // false
  console.log('Задача 3 !200 : ', !200); // false
  console.log('Задача 4 !0 : ', !0); // true
  console.log('Задача 5 !"isne" : ', !'isne'); // false
  console.log('Задача 6 !null : ', !null); // true
  console.log('Задача 7 !undefined : ', !undefined); // true
  console.log('Задача 8 !NaN : ', !NaN); // true
  console.log('Задача 9 !null : ', !null); // true
  console.log('Задача 10 !!null : ', !!null); // false
  console.log('Задача 10 !!200 : ', !!200); // true
  console.info(' ');

  /**
   * ! Логічні таблиці:
   *
   * | Вхідне значення | Приведене до булевого  |   Результат ( ! ) |
   * |-----------------|------------------------|-------------------|
   * |   true	         |        true            |   	 false        |
   * |-----------------|------------------------|-------------------|
   * |   false         |       	false	          |      true         |
   * |-----------------|------------------------|-------------------|
   * |   0             |       	false           |      true         |
   * |-----------------|------------------------|-------------------|
   * |   1             |      	true	          |      false        |
   * |-----------------|------------------------|-------------------|
   * |   ""            |       	false           |    	 true         |
   * |-----------------|------------------------|-------------------|
   * |   "text"        |       	true            |	     false        |
   * |-----------------|------------------------|-------------------|
   * |    null         |     	  false           |      true         |
   * |-----------------|------------------------|-------------------|
   * |    undefined    |       	false	          |      true         |
   * |-----------------|------------------------|-------------------|
   * |    NaN          |    	  false           |      true         |
   * |-----------------|------------------------|-------------------|
   *
   */

  console.info(' ');
  console.info(' ?? Оператор нульового злиття ');
  console.info(' ');

  /**
   * ?? Оператор нульового злиття
   * Оператор Нулевого злиття повертає перше визначене значення
   * яке НЕ Є null або undefined
   *
   * якщо значення усіх операндів не визначенно, повертає значення останього
   * його часто використовують для надання значення за замовчуванням у випадках,
   * коли змінна або вираз може бути null або undefined.
   *
   * ! Порівняння з оператором ||
   *
   * Часто оператор нульового злиття порівнюють з логічним оператором ||,
   * який теж використовується для надання значення за замовчуванням
   *
   * Таким чином, оператор нульового злиття зручний,
   * коли ви хочете точно обробляти випадки null і undefined,
   * але не інші falsy-значення, як false, 0, або порожній рядок.
   *
   */

  console.log('Задача 1. null ?? 1 : ', null ?? 1); // 1
  console.log('Задача 2. null ?? 3431 : ', null ?? 3431); // 3431
  console.log('Задача 3. undefined ?? 3431 : ', undefined ?? 3431); // 3431
  console.log(
    'Задача 3. null ?? "Alex" ?? "anonym" : ',
    null ?? 'Alex' ?? 'anonym'
  ); // Alex

  console.log('Задача 4. undefined ?? null ?? 0 : ', undefined ?? null ?? 0); // 0
  console.log('Задача 5. undefined ?? null  : ', undefined ?? null); // null
  console.log('Задача 6. null ?? undefined : ', null ?? undefined); // undefined

  let name;
  console.log(name ?? 'anonym');
  console.log('Задача 7. name ?? "anonym" : ', name ?? 'anonym'); // 'anonym'
  console.log('Задача 8. name ?? undefined ?? 0 : ', name ?? undefined ?? 0); // 0

  console.info(' ');

  let tooltheme = {
    theme: 'темна',
    font: null,
  };

  let chaiceTheme = tooltheme.theme ?? 'світла';
  let chaiceFont = tooltheme.font ?? 'Arial';

  console.info('Обрана тема', chaiceTheme); // Виведе "темна"
  console.info('Обраний шрифт', chaiceFont); // Виведе "Arial"

  function setToolSite(param) {
    let lang = param.lang ?? 'українська';
    let theme = param.theme ?? 'світла';

    console.log(`Мова: ${lang}, Тема: ${theme}`);
  }

  console.info('Робота функції  setToolSite  ');

  console.info(' ');

  setToolSite({ lang: 'англійська' }); // Виведе "Мова: англійська, Тема: світла"

  setToolSite({}); // Виведе "Мова: українська, Тема: світла"

  /**
   *
   *  Назва                              Оператор              примери
   *
   *  ИЛИ                                ||                  false || true
   *  И                                  &&                  false && true
   *  НЕ                                 !                   !true
   *  Нулевое слияние                    ??                  null ?? 0
   *  Логическое присваивание ИЛИ        ||=                 null ||= 1
   *  Логическое присваивание И          &&=                 null &&= 1
   *  Нулевое присваивание               ??=                 null ??= 1
   *
   *  https://xn--80adth0aefm3i.xn--j1amh/
   *
   */

  console.info(' ');
  console.info(' ||=  Оператор логічого присвоення ');
  console.info(' ');

  /**
   *
   * оператор логічного присвоєння (||=) — це спрощений спосіб присвоїти значення змінній лише тоді,
   * коли ця змінна має false значення,
   * тобто значення, яке інтерпретується як false в логічному контексті.
   *
   * операнди конвертуються в логічне значення true / false зліва на право
   * якщо отримане значення false, лівому операнду присвоюється значення правого операнда
   *
   * ! Як це працює
   *
   * якщо змінна має false-значення
   * !(наприклад, false, null, undefined, 0, NaN, або порожній рядок ""),
   * їй присвоюється нове значення.
   *
   * якщо змінна вже віддає true (тобто значення, яке не є false), її значення залишається незмінним.
   *
   */

  let ageLogPriYly = null;
  ageLogPriYly ||= 18;
  console.log(
    'Задача 1. Працює оператор логічного присвоення ageLogPriYly ||= 18 : ',
    ageLogPriYly
  ); // 18

  let ageLogPriYlyOne = null;
  ageLogPriYlyOne ||= null;
  console.log(
    'Задача 2. Працює оператор логічного присвоення ageLogPriYlyOne ||= 18 : ',
    ageLogPriYlyOne
  ); // null

  let ageLogPriYlyTwo = null;
  ageLogPriYlyTwo ||= undefined;
  console.log(
    'Задача 3. Працює оператор логічного присвоення ageLogPriYlyTwo ||= undefined : ',
    ageLogPriYlyTwo
  ); // undefined

  let ageLogPriYlyThree = null;
  ageLogPriYlyThree ||= 'lines';
  console.log(
    'Задача 4. Працює оператор логічного присвоення ageLogPriYlyThree ||= "lines" : ',
    ageLogPriYlyThree
  ); // lines

  let ageLogPriYlyFoure = undefined;
  ageLogPriYlyFoure ||= 3 * 4;
  console.log(
    'Задача 5. Працює оператор логічного присвоення ageLogPriYlyFoure ||= 3*4 : ',
    ageLogPriYlyFoure
  ); // lines
  console.info(' ');
  let nameUse = '';
  nameUse ||= 'Анонім';

  console.log('Імя користувача :', nameUse); // Виведе "Анонім"

  let nameUseTwo = 'Оля';
  nameUseTwo ||= 'Анонім';

  console.log('Імя користувача :', nameUseTwo); // Виведе "Оля"

  let quantity = 0;
  quantity ||= 10;

  console.log('Кількість людей: ', quantity); // Виведе 10

  let nameUseTRee = '';
  nameUseTRee = nameUseTRee || 'Анонім';

  console.log('Імя користувача', nameUseTRee); // Виведе "Анонім"
  console.info(' ');

  /**
   *  ! Основні моменти
   *
   * Простота: Оператор ||= дозволяє уникнути повторного написання змінної і робить код коротшим.
   * false значення:
   * він спрацьовує лише тоді, коли змінна має одне з false-значень,
   * ! таких як false, null, undefined, 0, NaN, або "".
   *
   * Універсальність:
   * цей оператор корисний у багатьох ситуаціях,
   * коли потрібно надати значення за замовчуванням змінній,
   * яка може бути не визначена або порожня.
   */
  console.info(' ');
  console.info(' &&= Оператор логічного происвоення ');
  console.info(' ');

  /**
   * Логічне присвоення і &&=
   * лівий операнд false ний ему не присваивается з начение правого опреранда
   * левий операнд ПРАВДИВИЙ  ему не присваивается з начение правого опреранда
   *
   * оператор логічного присвоєння &&= дозволяє скорочено записувати операцію
   * присвоєння значення змінній, якщо ця змінна вже має true значення
   * (тобто значення, яке в логічному контексті інтерпретується як true).
   *
   * ! Як це працює
   *
   * якщо змінна має true значення (наприклад, будь-яке значення,
   * ! крім false, null, undefined, 0, NaN, або порожнього рядка ""
   * їй буде присвоєно нове значення.
   *
   * якщо змінна має false значення, її значення залишиться незмінним.
   *
   */

  let ageLogPriAnd = null;
  ageLogPriAnd &&= 3 * 4;
  console.log(
    'Задача 1. Працює оператор логічного присвоення ageLogPriAnd &&= 3*4 : ',
    ageLogPriAnd
  ); // null

  let ageLogPriAndOne = undefined;
  ageLogPriAndOne &&= 13 * 4;
  console.log(
    'Задача 2. Працює оператор логічного присвоення ageLogPriAndOne &&= 13 * 4 : ',
    ageLogPriAndOne
  ); // null

  let ageLogPriAndTree = '';
  ageLogPriAndTree &&= 15 * 4;
  console.log(
    'Задача 3. Працює оператор логічного присвоення ageLogPriAndTree &&= 15 * 4 : ',
    ageLogPriAndTree
  ); // ''

  let ageLogPriAndFoure = 'Пробел';
  ageLogPriAndFoure &&= 15 * 4;
  console.log(
    'Задача 4. Працює оператор логічного присвоення ageLogPriAndFoure &&= 15 * 4 : ',
    ageLogPriAndFoure
  ); // 60

  /**
   *
   * ! Основні моменти:
   *
   * Простота: Оператор &&= дозволяє уникнути повторного написання змінної, спрощуючи код.
   * True-значення: Він спрацьовує лише тоді,
   * коли змінна має true-значення, тобто будь-яке значення, яке не є
   * ! false, null, undefined, 0, NaN, або "".
   *
   * Універсальність: Цей оператор корисний у ситуаціях,
   * коли потрібно змінити значення змінної лише за умови,
   * що вона вже містить певне (truthy) значення.
   *
   * Використання оператора &&= допомагає зробити код коротшим і зрозумілішим,
   *  особливо в умовах, де важливо враховувати наявність
   * або відсутність значення в змінній перед її оновленням.
   *
   */

  console.info(' ');
  console.info(' ??= Оператор нульового происвоення ');
  console.info(' ');
  /**
   * Оператор нульового присвоення ??=
   * лівий операнд не визначений(null)
   * йому присвоюється значення правого опреранда
   *
   * оператор нульового присвоєння (??=) дозволяє скорочено
   * записувати операцію присвоєння значення змінній лише в тому випадку,
   * якщо ця змінна є null або undefined.
   *
   * Цей оператор поєднує в собі перевірку на наявність нульових значень
   * і присвоєння значення змінній, що робить код більш лаконічним.
   *
   * ! Як це працює
   *
   * Якщо змінна має значення null або undefined, їй присвоюється нове значення.
   * Якщо змінна має будь-яке інше значення
   * ! (true або false, але не null і не undefined),
   * її значення залишається незмінним.
   *
   */

  let ageNullPris = null;
  ageNullPris ??= 78 * 4;
  console.log(
    'Задача 1. Працює оператор нульового присвоення ageNullPris ??= 78 * 4 : ',
    ageNullPris
  ); // 312

  // приоретет операторов
  let height;
  let width;
  let area = (height ??= 20) * (width ??= 34);

  console.log(
    `Задача 2. Працює оператор нульового присвоення (height ??= 20) * (width ??= 34) : ${area} `
  );

  /**
   *
   *  ! Основні моменти:
   *
   * Простота: Оператор ??= дозволяє уникнути повторного написання змінної,
   * що робить код коротшим і легшим для читання.
   * Нульові значення: Він спрацьовує лише тоді, коли змінна має значення
   * ! null або undefined, тобто саме ці два значення вважаються "нульовими".
   *
   * Універсальність: Цей оператор корисний у ситуаціях,
   * коли потрібно задати значення змінній,
   * яка може бути не визначена або мати значення null.
   *
   * Використання оператора ??= дозволяє ефективно обробляти випадки,
   * коли змінна може бути null або undefined,
   * забезпечуючи простий спосіб присвоєння значення за замовчуванням.
   *
   */
  console.warn('Початок не систематизованої інформації з JS');

  // уроків 73 роліків
  // const lessonsJs = 73;
  // Уроки Javascript
  // Андрій Кльон 73 уроків
  //! JavaScript: Базовый курс для фронтенд-разработчиков. Введение: 8:31
  //! JavaScript: Базовый курс для фронтенд-разработчиков. Введение - Домашнее задание 1:16
  //! JavaScript: Базовый курс для фронтенд-разработчиков. Урок 01 - Введение в JavaScript 21:24
  /*
  clear() - очистка консолі
  error() - отобржение сообщения об ошибке
  warn() - отображение сообщения с предупреждением
  log(), info() - отображение информационного сообщения
  dir() - обображение елементів в вигляді JS обектів
  table() - відображення даних у таблічній формі
  time()/timeEnd() - запуск/зупинка таймера
  timeLog() - відображення текущего значення таймера
  */
  //! JavaScript: Базовый курс для фронтенд-разработчиков. Урок 01 - Домашнее задание - Вмію
  // console.warn('Урок 01 - Домашнее задание - Вмію');
  // ! JavaScript: Базовый курс для фронтенд-разработчиков. Урок 02 - Основы работы с JavaScript
  /*
  console.warn('Урок 02 - Основы работы с JavaScript - Вмію');
   перевірка роботи суворого режиму
  let b = 0;
  console.log(b);

  console.warn(
    'Щоденний ітог навчання!!! 29.07.2024 Продивився 5 роліків /' + lessonsJs
  );*/
  // ! JavaScript: Базовый курс для фронтенд-разработчиков. Урок 02 - Домашнее задание
  // ! JavaScript: Базовый курс для фронтенд-разработчиков. Урок 03 - Переменные - вмію
  /*
    let chancgePerem
    const unChancgePerem

    Змінні не повинні починатися з цифри, включати зарезервовані слова JS чи бути створені тільки з зарезервованих слів,
    константи не змінюють значення

    Якщо змінній нічого не присвоїти, змінна віддає undefined
    var - доступні зв пределами блока, можливе повторне обявлення, становляться обектами глобольного середовища windows

  */
  /*
  let user1 = 'Pete',
    user2 = 'Mary',
    user3 = 'Dan';
  console.log('Names users: ', user1, user2, user3);

  var am = 40;
  let bee = 34;
  console.log('window am: ', window.am); // Должно вернуть 40// Это вернёт 40
  console.log('window bee: ', window.bee); // Это вернёт undefined
*/
  // ! JavaScript: Базовый курс для фронтенд-разработчиков. Урок 03 - Домашнее задание - вмію
  // !JavaScript: Базовый курс для фронтенд-разработчиков. Урок 04 - Типы данных
  /**
   * number - целочисление и с плавающей точкой
   * Infinity - 45/0 результат ділення на  ноль
   * NaN - результат помилкових обрахунків, коли отримати результат в числовому виразі не можливо
   * bigint тип великих цілочисельних даних, що відповідає числам більше +/- 2<sup>53</sup>-1
   *
   * Strig  "", '' `березені ${2024-1975} років`
   * Екранування \"
   * https://www.youtube.com/watch?v=ykeLHn4RYW0&list=PLvcCyIZOok9JiXExkbCTGTduUXtrkorkS&index=9
   */
  // let bigInt = 567890n;
  // let bigInt2 = 124578905n;
  /*
   \\
   \n
   \t
   \u00A9
   */
  // Boolean - логічний тип даних
  // спеціальне значення null значення змінної пусто або невідомо
  // спеціальне значення undefined змінній нічого не присвоено
  // символическое знвачення symbol - символьний тип даних використовується для створенння уникальних ідентифікаторів в обектах
  // object - сберігає колекції і більш складні структури даних
  //   оператор typeof повертає тип даних що вказані в якості араметра
  /*
  let a = 'frffdf';
  console.log(typeof a);
  console.log(typeof a);
  console.log(typeof null);*/
  //помилка typeof null - показуе як object
  // результатом виклика typeof стосовно function (різновид обекта) є function
  // ! JavaScript: Базовый курс для фронтенд-разработчиков. Урок 04 - Домашнее задание Знаю
  //! JavaScript: Базовый курс для фронтенд-разработчиков. Урок 05 - Преобразование типов
  //число из строки
  // console.log(Number(40));
  //число из true - 1
  // console.log(Number(true));
  //число из null - 0
  // console.log(Number(null));
  //число из undefined NaN
  //console.log(Number(undefined));
  //число из сторки NaN
  // const string = 'string';
  // console.log(Number(string));
  //строка из числа "30"
  /*console.log(String(30));
  //строка из true - true
  console.log(String(true));
  //строка из null - null
  console.log(String(null));
  //строка из undefined
  console.log(String(undefined));

  //Логическое значение из числа - true
  console.log(Boolean(40));

  //Логическое значение из не пустой строки - true
  console.log(Boolean(40));

  //Логическое значение из null - false
  console.log(Boolean(null));

  //Логическое значение из undefined - false
  console.log(Boolean(false));
  console.warn('Автоматическое преобразование типов');
  const num = 10;
  const logic = true;
  const divide = num / logic;
  console.log('divide = ', divide);
  */
  // автоматтом преобразует строку в число, если число прописано не буквами, и перед или перед єтим числом стоит знак математического действия, которий может интепритироватья однозначно. + может троктоваться как сумировать и конкантенировать а значит автоматическое преобразование типов не возможно. Если между двумя числами стоит + и одно число является строкой - идет конкатенирование строк а не сумирование
  // !JavaScript: Базовый курс для фронтенд-разработчиков. Урок 05 - Домашнее задание
  /*console.warn('Домашне завданння 05');
  let test = 1 / 0;
  console.warn(test);
  console.warn('test = String(test)');
  // test = String(test);
  test = String(test);
  console.log(test);
  console.warn('test = Boolean(test)');
  test = Boolean(test);
  console.log(test);
  console.warn('true - 1');
  console.log(true - 1);

  console.log('9 + false');
  console.log(9 + false);
  console.log('null * 2');
  console.log(null * 2);
*/
  // ! JavaScript: Базовый курс для фронтенд-разработчиков. Урок 06 - Операторы. Арифметические операторы
  // ! Оператор в порграмировании - команда, обозначающая определеннное математическое, логическое или иное действие, виполняемое с данними (операндами)
  //  левий операнд     оператор     правий операнд
  //    2                    *         3
  //тип оператора      коліч операндов    примери
  //  унарний               1               -2, typeof "string"
  //  бинарний              2               5/2,   8%2
  //  тернарний              3               age >= 18 ? "adult" : "child"
  //! оператори по назначению
  // Арифметические оператори       +(сложение)
  // Оператори присваивания         =(присваивание значения)
  // Оператори сравнения            >(больше)
  // Логические оператори           && (логическое И)
  // Битовие оператори              >> (cдвиг вправо)
  // Специальние оператори          typeof(типи данних)
  //! Арифметические оператори       +(сложение)
  // Сложение                   +         2 + 3
  // Вічитание                  -         5 - 3
  // Множення                   *         5 * 3
  // Ділення                    '/'         8 / 3
  // Взятіе остатка от ділення  %         7 % 3
  // Возведение в степень       **        2 ** 4
  // Строчний оператор конкатениции
  // 2 + "5" = 25
  // Изменение знака числа унаррним мінусом
  //let numBerMinus = -numBerMinus;
  // Изменение знака числа унаррним плюсом
  //let numBerPlus = +numBerPlus;
  // Приоритет опрераторов как в математике
  // унарний + главнее чем бинарний
  /*
  const strOne = '4';
  const strTwo = '64';
  const strThree = '64';
  console.log('+strOne + +strTwo + -strThree');
  console.log(+strOne + +strTwo + -strThree);
*/
  // ! Оператори присваивания       Сокращенная    развернутая запись       =(присваивание значения)
  // приходить значення в Х та Y після дії результат становиться новим значенням в результаті математичної дії.
  //  Простое присваивание                X = Y             X = Y
  //  Присваивание со сложением           X += Y            X = Х + Y
  //  Присваивание с вичитанием           X -= Y            X = Х - Y
  //  Присваивание с умножением           X *= Y            X = Х * Y
  //  Присваивание с делением             X '/'= Y          X = Х / Y
  //  Присваивание со взятием остатка     X %= Y            X = Х % Y
  // ! Оператори присваивания
  /*
  let numBase = 54;
  console.log(numBase);
  let numBaseSum = 4;
  numBaseSum += numBaseSum;
  let numBaseMinus = 40;
  numBaseSum -= numBaseMinus;
  let numBaseMyl = 5;
  numBaseMyl *= numBaseMyl;
  let numBaseDeide = 4;
  numBaseDeide /= numBaseDeide;
  let numBaseVzZalishok = 37;
  console.log('numBaseVzZalishok = numBaseVzZalishok % 2');
  console.log('numBaseVzZalishok %= 2');
  numBaseVzZalishok %= 2;
  */
  // ! Инкремент и декремент
  // Инкремент (++)
  // Декремент (--)
  // Инкремент та Декремент мають дві форми запису:
  // префіксную опрератор іде перед переменной приклад, ++count
  // постфиксную опрератор іде після переменно приклад, count--
  //! Різниця між префіксним та постфіксним інкрементом
  /*
  let countIncrement = 1;
  console.log('++countIncrement'); // префікс відбувається інкрементуваня, виводиться нове значення
  console.log(++countIncrement);
  console.log('countIncrement++'); // постфікс, вивід старого значення, потім відбувається інкрементуваня, виводиться нове значення
  console.log(countIncrement++);
  */
  // !  JavaScript: Базовый курс для фронтенд-разработчиков. Урок 06 - Домашнее задание
  //!  JavaScript: Базовый курс для фронтенд-разработчиков. Урок 07 - Операторы: сравнение и логика
  //  Назва              Оператор          Приклад
  //  больше                >               5 > 4
  //  Больше или равно      >=              5 >= 5
  //  Меньше                <               2 < 5
  //  Меньше или равно      <=              5 <= 5
  //  Нестроге равно        ==              5 == 5
  //  Строге равно          ===             '5' === 5
  //  Нестрогое неравно     !=              5 != 6
  //  Cтрогое неравно       !==             5 !== "5"
  // Співставлення строчок - відбуівається співсатвлення UTF код кожного символа за порядком його розміщення в строчці, довша строшка є більшою за коротшу строчку
  // більша літера є меньше, ніж меньша літера
  // str1.codePointAtPosition(0)
  // сравнение разних типов
  // 5 > true  5 > 1
  // 2== {}    {} - NuN
  // null == 0 не равно тому що значення і число не співставні тому false
  // null == undefined  false == false
  // null віддае false
  // undefined false

  // Логіческие оператори
  //  Назва                              Оператор              примери
  //    ИЛИ                                ||                  false || true
  //    И                                  &&                  false && true
  //    НЕ                                 !                   !true
  //    Нулевое слияние                    ??                  null ?? 0
  //    Логическое присваивание ИЛИ        ||=                 null ||= 1
  //    Логическое присваивание И          &&=                 null &&= 1
  //    Нулевое присваивание               ??=                 null ??= 1
  // Возвращается первий истинний опренд
  /*console.log(false || true); // true
  // Возвращается истинное значение опренда
  console.log(2 || 3); // 2
  // Все опренди ложни, возвращается последний
  console.log(null || undefined || false); // false

  console.log('логические оператори');
  console.log('false || true');
  console.log(false || true);
  console.log('2 || 3');
  console.log(2 || 3);
  console.log('4 < 1 || 5 == 3 || 5 > 4');
  console.log(4 < 1 || 5 == 3 || 5 > 4);
  console.log('null || undefined || false');
  console.log(null || undefined || false);

  // Возвращается первий ложний  опренд
  console.log(false && true); // false
  // Вcе значения истинни, возвращается последнее
  console.log(2 && 3); // 3
  // Возвращается первий ложний операнд
  console.log(null && undefined && false); // null

  console.log(false && true); // false
  console.log(2 && 3); // 3
  console.log(4 < 1 && 5 == 3 && 5 > 4); // 4<1 тому що false
  console.log(null && undefined && false); // null
*/
  //Значення операнда логічного типу
  // повертаеться противоположное значение
  // !true // false
  // !null // true
  /*
  console.log(!200); // найвисший приоретет
  console.log(!'ckjdj');
  console.log(!null);
  console.log(!undefined);
  console.log(!NuN);
  console.log(!true);
  console.log(!false);
*/
  // Оператор Нулевого слияния (??) возвращает первое определенное значение(тоесть оно не равно null или undefined)
  // если значение  всех операндов не определени, возвращает значение последнего
  //console.log(null ?? 1); // 1
  // console.log(null ?? 'Alex' ?? 'anonym'); // Alex
  // console.log(null ?? undefined); // undefined
  // Оператор нулевого слияния
  //let name;
  //console.log(name ?? 'anonym');
  //console.log(null ?? 'Alex' ?? 'anonym');
  /**
   * оператор логического присваивания или ||=
   * слева на право
   * конвертирует операнд в логическое значение
   * если получение значение ложно false присваивает левому операнду значение правого операнда
   */
  // let ageLogPriYly = null;
  // ageLogPriYly ||= 18;
  // console.log(ageLogPriYly);
  /**
   * Логическое присваивание и &&=
   * левий операнд ложний ему не присваивается з начение правого опреранда
   * левий операнд ПРАВДИВИЙ  ему не присваивается з начение правого опреранда
   */
  /*let ageLogPriAnd = null;
  ageLogPriAnd &&= 2218;
  console.log(ageLogPriAnd); // null
  */
  /**
   * Оператор нулевого присваивания ??=
   * левий операнд не определен(null) ему присваивается значение правого опреранда
   */
  /* let ageNullPris = null;
  ageNullPris ??= 25;
  console.log(ageNullPris); // 25

  // приоретет операторов
  let height;
  let width;
  let area = (height ??= 20) * (width ??= 34);
  console.log(area);
  */
  //! JavaScript: Базовый курс для фронтенд-разработчиков. Урок 07 - Домашнее задание
  //! JavaScript: Базовый курс для фронтенд-разработчиков. Урок 08 - Условное ветвление
  // Условное ветвление
  /*if (age < 18) {
    console.log('Дитина');
  } else if (age > 70) {
    console.log('Старий');
  } else {
    console.log('Дорослий');
  }
  const srtString = 'Hello';

  if (srtString == 'hello') console.log('Hello');
  else console.log('By!');
  // тернаорний оператор
  const logicy = true;
  console.log(logicy ? true : false);
  // несколько условних операторов
  console.log(
    num < 10 ? ' num < 10 ' : num == 10 ? ' num == 10 ' : ' num > 10 '
  );
*/
  // ! Инструкция Switch
  /*
  const fruit = 'apple';
  switch (fruit) {
    case 'orange':
      console.log('orange');
      break;
    case 'pear':
      console.log('pear');
      break;
    case 'apple':
      console.log('apple');
      break;
    case 'nut':
      console.log('nut');
      break;
    default:
      console.log('unknow fruit');
  }

  const numCheck = 4;
  switch (numCheck) {
    case 2:
    case 4:
    case 6:
    case 8:
    case 10:
      console.log('Четное');
      break;
    case 1:
    case 3:
    case 5:
    case 7:
    case 9:
      console.log('Не четное');
      break;
    default:
      console.log('Не известно');
  }

  if (
    numCheck == 2 ||
    numCheck == 4 ||
    numCheck == 6 ||
    numCheck == 8 ||
    numCheck == 10
  ) {
    console.log('Четное');
  } else if (
    numCheck == 1 ||
    numCheck == 3 ||
    numCheck == 5 ||
    numCheck == 7 ||
    numCheck == 9
  ) {
    console.log('Не четное');
  } else {
    console.log('Неизвестно');
  }
*/
  //! JavaScript: Базовый курс для фронтенд-разработчиков. Урок 08 - Домашнее задание
  // ! JavaScript: Базовый курс для фронтенд-разработчиков. Урок 09 - Циклы
  // цикл с параметром
  /*for (let i = 0; i < 10; i++) {
    console.log(i);
  }
  let ii = 0;
  for (; ii < 10; ) {
    console.log(ii);
    ii++;
  }
  // цикл с предусловием
  let pp = 0;
  while (pp < 10) {
    console.log(pp);
    pp++;
  }
  ppp = 100;
  while (ppp > 10) {
    console.log(ppp);
    ppp--;
  }
*/
  // цикл с послеусловием
  /*
  let tt = 1;

  do {
    console.log(tt < 0);
    tt++;
  } while (tt < 0);

  // переход к следующей итерации
  for (let i = 0; i < 10; i++) {
    if (i % 2 == 1) continue;
    console.log(i);
  }
  // преривание цикла
  let e = 0;
  while (e < 7) {
    if (s == 2) break;
    console.log(s);
    s++;
  }
  //использование меток в цикле
  outer: for (let i = 0; i < 10; i++) {
    for (let j = 0; j < 10; j++) {
      if (j == 4) break outer;
      console.log(j);
    }
  }
  // бесконечний цикл
  //   let infinity = 0;
  //while (infinity < 1) {
  //console.log(infinity);
  //infinity++ // забили єту строку и всегда умова true
  // }

  // Форма инкремента имеет значение
  // префиксная форма интемента в цикле
  let postfix = 0;
  while (++postfix < 4) {
    console.log(postfix);
  }

  // постфиксная форма интемента в цикле
  while (postfix++ < 4) {
    console.log(postfix);
  }
*/
  /**префиксная форма инктемента
   * итерация   ++prefix     (++prefix < 4)   console.log
   *    1           1         1 < 4(true)      1
   *    2           2         2 < 4(true)      2
   *    3           3         3 < 4(true)      3
   *    4           4         4 < 4(false)     -
   *
   */
  /**пщстфиксная форма инктемента
   * итерация   prefix++     (prefix++ < 4)   console.log
   *    1           1         0 < 4(true)      1
   *    2           2         1 < 4(true)      2
   *    3           3         2 < 4(true)      3
   *    4           4         3 < 4(true)      4
   *    5           -         4 < 4(false)     -
   *
   */
  // ! JavaScript: Базовый курс для фронтенд-разработчиков. Урок 09 - Домашнее задание
  /**
   * 1 скрипт виводящий в консоль числа в интервале от 1 до 10 включительно которие делятся на 3 без остатка
   * 2 скрипт в кооторм модальное окно prompt c cообщением Введите і-е число суми, виводятся 3 раза, после чего в модальном окне
   * виводится сумма трех чисел введених пользователем
   *
   */
  // ! JavaScript: Базовый курс для фронтенд-разработчиков. Урок 10 - Функции: назначение и структура
  // Cкрипт без функций
  /*let sum1 = 0;
  for (let i = 4; i <= 6; i++) {
    sum1 += i;
  }
  let sum2 = 0;
  for (let i = 3; i <= 7; i++) {
    sum2 += i;
  }

  // Скрипт с функцией
  function calcSumbetween(num1, num2) {
    let sum = 0;
    for (let i = num1; i <= num2; i++) {
      sum += i;
    }
    return sum;
  }
  let sum3 = calcSumbetween(4, 6);
  let sum4 = calcSumbetween(3, 7);
  */
  /**
   * get - возвращают значение
   * calc - производят вичисления
   * show - отображают дание
   * create - содают что-то
   * check - виполняют проверку
   */
  // инструкция return функция
  // возращает результат своей работи
  //function calcArea(height, width) {
  // return height * width;
  //}
  // результат работи функции
  // присваивается переменной
  //let areaSq = calcArea(4, 1);
  //console.log(areaSq);
  // якщо в функції нема return вона все одно повертає undefined
  // фунуія с 2 return
  //function checkParity(num) {
  // if (num % 2 == 0) return 'Четное';
  // return 'Нечетное';
  //}
  //function showMassage(text = 'Пусте повідомлення') {
  // return `Сообщение: ${text}`;
  //}
  //console.log(showMassage());
  // краще не використовувати зовнішні змінні
  //  не правильно
  // let userMane = 'Piter';
  // function showname() {
  //   console.log(`Show, ${userMane}`);
  // }
  // showname();
  // Правильно
  // function showUserName(userMane) {
  //   console.log(`Show, ${userMane}`);
  // }
  // showUserName('Piter');
  // JavaScript: Базовый курс для фронтенд-разработчиков. Урок 10 - Домашнее задание
  /**
   * функция возвращает строку а и b равни, если а = b
   * функция возвращает строку а больше b равни, если а > b
   * функция возвращает строку а меньше b равни, если а < b
   *
   * checkPass коьторая сопоставляет переданий аргумент с паролем пользователя user-password
   */
  // ! JavaScript: Базовый курс для фронтенд-разработчиков. Урок 11 - Функциональные выражения
  // function Declsration - используется ключевое слово function указивается параметри, в скобках прописивается тело функции
  // function Declsration может визиатья до или после обьявления
  // function Expression - функция присваивается переменное, все кроме єтого и не использование имени функции повторяет способ function Declsration, в конце кода проставляется  ;
  // function Expression могут біть визвани только после их обьявления
  // Arrow function Expression - function не используется , параметри и тело фугнції розділяються стрілкою. якщо тіло функції состоит из одного виразу, тіло функції не обертається фігурними скобками, і воно автоматично стає возвращаемим виразом, если в функції присутній один параметр його не огортають скобками.
  //const showHelloUser3 = name => console.log(`Hello, ${name}`);
  // showHelloUser3(Piter);
  // https://www.youtube.com/watch?v=2Vuz_qvwnqo&list=PLvcCyIZOok9JiXExkbCTGTduUXtrkorkS&index=23 7
  //!Нoisting всплитие механизм в JS при котором перемение через слово var и функции как Function Declaration,инициализуруются перед виполнением кода скрипта
  // переменние инициализируемие через var инициализируются со значением undefined
  // функции инициализируются со значением тоесть с телом, которое било определено при обявлении функции
  // вспливают пепемение но не присвоение ей функции
  // визвать / использовать переменую через var
  // присвоить переменной значение без ее обьявления
  // визвать повторно / использовать переменую через var -
  // обьявить переменнную через var без присвоения ей значения
  // console.log('var до обьявления до присвоения значения :', nummmm);
  // nummmm = 254;
  //console.log('var до обьявления после присвоения значения :', nummmm);
  //var nummmm;
  //! Немедленно визіваемая функция( immediatly invoked function Expression IIFE)
  //круглие скобки вокруг функции
  // !   (function () {.....})();
  //круглие скобки вокруг всего виражения
  // !   (function () {.....}());
  //  вирпажение начинается с догического оператора НЕ
  // !    !function () {.....}();
  //  вирпажение начинается с унарного плюса +
  // !    +function () {.....}();
  // ! Сallback function (обратний визов) єто функция переданная в другую функцию в качестве аргумента, которая затем визивается по завершению какого-то действия
  // приписиваю callback функцию
  //function callBackFunk() {
  // console.log('Hello from Callback Function');
  // console.log(true);
  //}
  // приписіваю функцию в которой будет визиватья callback
  //function getResult(expr, callback) {
  /// если правда виполни функцию
  // if (expr) callback();
  //}
  //getResult(2 > 1, callBackFunk);
  // ! JavaScript: Базовый курс для фронтенд-разработчиков. Урок 11 - Домашнее задание
  /**
   * 1 FE создать функцию getCar(county) которая принимает 3 знкачения USA Germany Japan
   * и возхвращает в зависимости от такие значения Tesla Mersedes Toyota пример getCar('Japan') Tayota
   *
   * 2 Af checkNumber(x) в зависимсолти  от переданого аргумента х возвращает фразу четное число или нечетное число
   * 3 AF calcExponent(x,y) которая возвращает число х возведеную в степень y
   * Пример  calcExponent(2,3) резльтат 8
   *
   *
   */
  // ! JavaScript: Базовый курс для фронтенд-разработчиков. Урок 12 - Объекты (основы)
  /**
   * Обьект тип данних со сложной структурой, которой позволдяет хранить множество раздичніх значений
   *
   */
  /*
  const user = {
    // ключ : значение
    name: 'Alex',
    age: 23,
    adress: {
      'zip-code': 'jklj',
      city: 'New-York',
      street: '5 Avenu',
      building: 233,
    },
  };
  console.log(user);
  console.log(user.age); // если свойсвто состоит из одного слова
  console.log(user['age']); // если свойсвто состоит из одного слова или из нескольких слов

  console.log('Создание пустого обекта и добавления свойств');

  const companyName = {};
  companyName.name = 'Dream company';
  companyName['foudation year'] = 2021;

  console.log(companyName);
  console.log('Изменение свойств обьекта');
  companyName.name = 'Target company';
  console.log(companyName);

  console.log('Удаление свойств обьекта');
  delete companyName['foudation year'];
  console.log(companyName);
*/
  // Проверка существавания свойств
  //console / log('name' in user); //true
  //console / log('education' in user); //false
  //console / log(user.education); //undefined
  // перебор свойст обекта
  //for (let key in user) {
  //  console.log(`${key} : ${user[key]}`);
  //}
  // методи обекта
  /*
  const cat = {
    name: 'Kity',
    'born year': 2024,
    sayHello: function () {
      console.log('мґу');
    },
    sayHalo() {
      console.log('вуф');
    },
  };
  cat.sayHello();
  */
  /** методи обектов функции записаннии в качестве значений свойств обекта и совершающие с ним какие то действия
   * https://www.youtube.com/watch?v=n4Fp-WzWMB4&list=PLvcCyIZOok9JiXExkbCTGTduUXtrkorkS&index=25
   * потрібно буде розібратися якщо буде потрібно   *
   */
  // !JavaScript: Базовый курс для фронтенд-разработчиков. Урок 12 - Домашнее задание
  // https://www.youtube.com/watch?v=N5afvPPX6fw&list=PLvcCyIZOok9JiXExkbCTGTduUXtrkorkS&index=26
  /** зробити якщо зрорзумію */
  // !  JavaScript: Базовый курс для фронтенд-разработчиков. Урок 13 - DOM API: Объектная модель документа
  // структура мтодов обекта HTML-елементи, текстовие узли, комментарии
  /**
   * DOM обектная модель документа, которая представляет все содержимое веб страници в виде обектов
   * совокупность єтих обекто которіе назіваются узлами, образуют DOM дерево: HTML елементи с переносами, текстовие узли, комментарии
   *
   * верхние елементи дерева
   * console.log(document.Element) document точка входа в  DOM
   * HEAD
   * console.log(document.head)
   * BODY
   * console.log(document.body)
   *
   * ! Cвойства доступа к узлам
   * fistChild - первий дочерний
   * lastChild - последний дочерний
   * childNodes - все дочерние
   * parentNode - родительский
   * nextSibling - следующий соседний
   * previousSibling - предидущий соседний
   */
  /**
   * ! дочерние узли
   *
   * body.firstChild
   * body.lastChild
   * body.childNodes
   *
   * ! родительский узел
   *
   * body.parentNodoe
   *
   * ! соседние узли
   *
   * body.nextSibling
   * body.previousSibling
   *
   * ! Коллекция узлов
   */
  /*
  const bodyChildNodes = body.childNodes;
  console.log(bodyChildNodes[0]);
  console.log(bodyChildNodes.length);
  for (let node of bodyChildNodes) {
    console.log('body Child Nodes: ', node);
  }
  */
  /**
   * ! Свойства доступа к елементам
   *
   * fistElementChild первий джечерний
   * lastElementChild - последний дочерний
   * children   все дочерние
   * parentElement родительский
   * nextElementSibling следующий соседний
   * previousElementSibling предідущий соседний
   *
   */
  // ! Свойства доступа к елементам без текстових узлов HTML коллекции
  // ! Дочерний елемент
  /*
  console.log('body fist Element Child: ', bode.fistElementChild);
  console.log('body fist Element Child: ', bode.lastElementChild);
  console.log('body fist Element Child: ', bode.children);
  console.log('body fist Element Child: ', bode.parentElement);
  console.log('body fist Element Child: ', bode.nextElementSibling);
  console.log('body fist Element Child: ', bode.previousElementSibling);
*/
  // ! JavaScript: Базовый курс для фронтенд-разработчиков. Урок 13 - Домашнее задание
  /**
   * побегать по узлам вивести их в консоль
   */
  // ! JavaScript: Базовый курс для фронтенд-разработчиков. Урок 14. DOM API: Методы поиска элементов
  /**
   * querySelector() - вибирает статическую коллекцию елементов которая не обновляется при изменениии елементов на странице
   * querySelectorAll()
   * getElementById() - вибирает динамическую коллекцию елементов которая обновляется при изменениии елементов на странице
   * getElementsByName()
   * getElementsByTagName()
   * getElementsByClassName()
   */
  /**
   * ! Дополнительние методи обекта Element
   *
   * closest(selector) - ищет ближайшего предка которий соответсвует CSS cелектору selector,
   * contains(elem) - проверяет содеоржит ли елемент другой елемент elem Возвращает true false
   * matches(selector) - проверяет удовлетворяет ли елемент CSS селектору selector Возвращает true false
   *
   */
  //  closest
  /*
  const card0Text = card[0].querySelector('.card-text');
  console.log(card0Text.closest('.card'));
  console.log(heading1.matches('.py-3'));
  console.log(heading1.matches('[disabled]'));
*/
  // !JavaScript: Базовый курс для фронтенд-разработчиков. Урок 14 - Домашнее задание
  /**
   * вібрати заголовок Homework-14 блока вивести його в консоль проверитоь что каждий елемент списка имеет класс list-group-item если какой-то
   * елемент не имеет такого класса в консоль вивести соолщение номер елемента не имеет класс list-group-item
   *
   * для всех елементов списка проверить что кардий из них имеет родителя с классом list-group
   *
   */
  // ! JavaScript: Базовый курс для фронтенд-разработчиков. Урок 15. DOM API: Свойства узлов, атрибуты
  /**
   * div id="card" class="card"
   * const card = document.querySelector('.card');
   * работа с обектом card
   * concole.log(typeof card)
   * concole.log(card.nodeType)
   * concole.log('nodeType' in card)
   * все типи DOM узлов предсатвляют собой обекти поєтому с ними можно работаь так же как и с другими обектами JS
   *
   *
   * const emailWrapper = document.querySelectorAll('form .mb-3')[0];
   * const emailInput = document.getElementById('email');
   * const emailLabelText = emailWrapper.querySelector('[for="email"]').fistChild;
   *
   *   console.log(DOM-узли - єто обьекти);
   *
   *   console.log(typeof emailInput);
   *   console.log(emailInput.nodeType);// повертає числовий код типу вузла
   *   console.log('nodeType' in emailInput);
   *   console.log(emailInput);
   *   console.dir(emailInput);
   *
   *   console.log(TextNode свойства);
   *
   *   console.log(emailLabelTex.nodeValue);
   *   console.log(emailLabelTex.length);
   *
   *   console.log(***Element свойства);
   *
   *   console.log(emaiWrapper.tagName);
   *   console.log(emaiWrapper.innerHTML);
   *   console.log(emaiWrapper.outerHTML);
   *   console.log(emaiWrapper.innerText);
   *
   */
  /**
   * ! Общие свойства узлов
   *
   * fistChild/lastChild/childNodes              дочерние узли
   * parentNode/parentElement                    родительский узел/елемент
   * nextSibling/previousSibling                 соседние вузлі
   * nextElementSibling/previousElementSibling   соседние елементи
   * nodeType                                    тип узла(числовой код)
   * nodeName                                    название узла
   * textContent                                 текстовое содержимое узла
   *
   * ! Общие свойства текстових узлов
   *
   * nodeValue     содержимое текстового вузла
   * data          содержимое текстового вузла
   * wholeText     текст усіх смежних текстових вузлів, що звязані з вказаним вузлом
   * lenght        довжина строчки
   *
   * ! Общие свойства вузлів-елементів
   *
   * tagName     назва тега елемента
   * innerHTML   HTML содержимое елемента
   * outerHTML   HTML содержимое та сам елемент
   * innerText   текст елемениту
   *
   * ! Cвойства, соответсующие глобальним арибутам
   *
   * іd               текст елемениту
   * hidden           видимість елементу
   * title            інформація про елемент
   * tabindex         таб-індекс елементу
   * style            інлайн-стиль елементу
   * className        класс елементу
   * dataset          набор data-атрибутов
   *
   * ! Cвойства, соответсующие глобальним арибутам
   *
   * іd               текст елемениту
   * hidden           видимість елементу
   * title            інформація про елемент
   * tabindex         таб-індекс елементу
   * style            інлайн-стиль елементу
   * className        класс елементу
   * dataset          набор data-атрибутов
   *
   * console.log(***Свойства-атрибути);
   *
   *   console.log(emailInpit.id);
   *   console.log(emailInpit.name);
   *   console.log(emailInpit.title);
   *   console.log(emailInpit.className);
   *   console.log(emailInpit.type);// only for input
   *
   * console.log(***Методи доступа к HTML атрибутам);
   *
   * getAttribute(name)          отримує значення атрибуту
   * setAttribute(name, value)   встановлює значення атрибуту
   * hasAttribute(name)          перевіряє наявність атрибуту
   * removeAttribute(name)       видаляє атрибут
   *
   * console.log(***Доступ до HTML атрибутам);
   *
   * console.log(emailInpit.hasAttribute('title'));
   * console.log(emailInpit.getAttribute('title'));
   * console.log(emailInpit.setAttribute('title','Email'));
   *
   * Перебор атрибутов
   * const emailInputAttributes = emailInput.attributes;
   * for( let attr of emailInputAttributes ) {
   * console.log(`${ attr.name } : ${ attr.value }`)
   * }
   *
   * console.log(****data-атрибути***));
   *
   * const emailInputDataSet = emailInput.dataset;
   *
   * console.log('data-status ', emailInputDataSet.status);
   *
   *
   * console.log(**** Синхронизация атрибутов и свойств ***));
   *
   * emailInput.name = 'new email'; // сменяю на новое имя
   * console.log('Name property ', emailInput.name);
   * console.log('Name attribute ', emailInput.getAttribute('name');
   *
   * emailInput.setAttribute('value','email');
   * emailInput.value('new-email');
   * console.log('Value property ', emailInput.value);
   * console.log('Value attribute ', emailInput.getAttribute('value');
   */
  // ! JavaScript: Базовый курс для фронтенд-разработчиков. Урок 15 - Домашнее задание
  /**
   *прочитать свойства блока Homework-15, class id поменять title текстовое наповнення
   */
  // ! JavaScript: Базовый курс для фронтенд-разработчиков. Урок 16. DOM API: Стили и классы элементов
  /**
   * ! style property
   * single declaration
   * const titleT = document.querySelector('.title-t')
   * titleT.style.marginTop='50px'
   *
   * multiple declaration
   * const sintanceT = document.querySelector('p:nth-of-type(2)')
   *
   * sintanceT.style.cssText= `
   *  border:1px solid #121212;
   * border-radius:3px;
   *                       `
   * sintanceT.style.cssText += `
   *   border-color:'#212121';
   *   background-color:'#212121';
   *                            `
   * sintanceT.style.cssText += `
   *         background-color:''; // видалити свойство
   *                            `
   * Отримання правдивого значення css свойства background-color для елементу sintanceT
   * console.log(getComputedStyle(sintanceT).backgroundColor);
   *
   * console.log(***getComputedStyle метод ****);
   * const fistAlert = document.querySelectorAll('.alert)[0];
   * console.log('1st alert background color(style property): ', fistAlert.style.backgroundColor);
   * console.log('1st alert background color(getComputedStyle method): ', getComputedStyle(fistAlert).backgroundColor);
   *
   * className - содржит названия всех классов, примененних к елементу и записаних в атрибуте class
   * свойсво classList позволяет добавлять или удалять отдельние класси елементи
   *
   * список классов хранящихся в обьекте сволйства classList можно перебрать при помощи цикла for... of
   *
   * const card = querySelector('.card')
   * console.log(card.className) список классов
   * card.classList.add('card-prrimary')
   *
   * add(class) - -добавляет класс
   * remove(class) - видаляє клас
   * toggle(class) - переключає клас добавляє клас якщо його немає видаляе - якщо є
   * cantains(class) перевіряє наявність класу
   *
   * const secondAlert = querySelectorAll('.alert')[1];
   * secondAlert.classList.remove('.alert-s');
   * secondAlert.classList.add('.alert-se');
   * secondAlert.classList.contains('.alert-se');
   *
   *  перебор класса елементу secondAlert
   * for(let className of secondAlert.classList) {
   * console.log('class list of 2nd alert: ' , classname);
   * }
   *
   */
  // !  JavaScript: Базовый курс для фронтенд-разработчиков. Урок 16 - Домашнее задание
  /**
  проработать добавление классов и инлайна

  */
  // ! JavaScript: Базовый курс для фронтенд-разработчиков. Урок 17. DOM API: Изменение документа
  /**
   * створення вузлів
   * const div = document.createElement('div');
   * const textNode = document.createTextDode('text');
   * const textNode = document.createTextDode('text');
   * const comment = document.createComment('comment');
   *
   * батьківський елемент
   * const row = document.querySelector('.row');
   *
   * створення вузлів
   * const cardWrapper = document.createElement('div');
   *cardWrapper.className = 'col-4';
   * const card1Content = document.createTextNode('Текст которий я бажаю вставити в тег');
   * const comment = document.createComment('New comment');
   *
   * ! Методи обекта Element для вставки вузлів
   * insertAdjacentText(where, text) - добавить текстовий узел в положение where относительно елемента
   * insertAdjacentElement(where, el) -  добавить елемент в положение where относительно елемента
   * insertAdjacentHTML(where, html) -  добавить HTML-разметку html d положение where относительно елемента
   *
   * where:
   * beforebegin - перед елементом
   * afterbegin - начало елемента
   * beforeend - конец елемент
   * afterend - после елемента
   *
   * Вставка вузлів
   * row.insertAdjacentElement('afterbegin',card1Wrapper);
   * card1Wrapper.insertAdjacentElement('afterbegin', card1);
   * card1.insertAdjacentText('afterbegin', card1Content.textContent);
   *
   * ! сокращенние методи вставки узлов
   *
   * before(node) - перед елементу
   * prepend(node) - начало елементу
   * append(node) - конец елементу
   * after(node) - после елемента
   * replase(node) - в середину елементу з зміною старого содержимого
   *
   * Сокращенная методи вставки вузлів
   *
   * const card2Wrapper = document.createElement('div');
   *card2Wrapper.className = 'col-4';

   * const card2 = document.createelement('div');
   * card2.className = 'alert alert-warning';
   * card2.innerText = 'Cart';

   * const comment1 = document.createComment('New comment');

   * card2Wrapper.append(card2);
   * row.append(card2Wrapper);
   * row.prepend(comment2);
   *
   * метод клонирования
   *
   * const cart3 = document.querySelector('.card');
   * const cart4 = cart3.cloneNode(true);
   *
   * cart4.innerText = 'Сфеклдл';
   *
   *
   *
   * card3Wrapper.insertAdjacentHTML('afterend', `
   * <div class="suc"> Content </div>
   * `)
   *
   * Обект DocumentFragment
   * const fragment = new DocumentFragment();
   * const ul = document.createElement('ul')
   * ul.className = 'col-4 list-group'
   *
   * for(let i=1; i<=3; i++) {
   * let li = document.createElement('li')
   * li.className = 'liast-style';
   * li.innerText = `Iner text ${i}`;
   * fragment.append(li);
   * }
   * ul.append(fragment);
   * document.querySelector('.container').append(ul)
   *
   *  Видалення вузлів
   *
   * document.querySelector('span').remove();
   * ul.innerHTML = '';
   *
   */
  //  ! JavaScript: Базовый курс для фронтенд-разработчиков. Урок 17 - Домашнее задание
  /** створити копію елементів і декулькох вузлів */
  // ! JavaScript: Базовый курс для фронтенд-разработчиков. Урок 18. DOM API: Браузерные события
  // назначение обработчсиков собитий
  // три обработчсика собитий
  // onclick HTML атрибут
  // свойства DOM обькта
  // метод DOM обькта addEventListener() ; removeEventListener()
  /*
  const btnSecondary = document.querySelector('.btn-secondary');
  btnSecondary.onclick = seyHallooo;
  function seyHallooo() {
    console.log('Привети, МИр');
  }

  const btnSuccess = querySelector('.btn-success');
  function getBtnSuccess() {
    console.log('jjkkh h');
  }
  btnSuccess.addEventListener('click', getBtnSuccess);
  btnSuccess.addEventListener('click', () => {
    console.log('this in Event handle :', this); // виводе ко кнопки
  });

  const btnDanger = querySelector('.btn-danger');

  function btnDangerhandler(event) {
    console.log('Hello from Danger button!');
    console.log('Event type! :', event.type);
    console.log('Event currentTarget! :', event.currentTarget);
  }

  btnDanger.addEventListener('click', btnDangerhandler);
  */
  /** Щоб відмігнити роботу кнопки форми або лінка потрібно використовувати в початкау функції
   *   const btn = querySelector('.btn');
   *  btn.addEventListener('click', btn);
   *  function btnDangerhandler(event) {
   *     event.preventDefault();
   * }
   *
   * або
   *
   *  btn.onclick = function (event) {
   *      console.log('Link is blocked');
   *      console.log('Default prevented :', event.defaultPrevented);
   *     return false; // відміна роботи кнопки за замовчуванням
   * }
   *
   */
  // Метод preventDefault()
  /*
  const btnSubmit = document.querySelector("[type='submit']");
  function btnShandler(e) {
    e.preventDefault();
    console.log('Form submit is blocked');
    console.log('Default prevented :', e.defaultPrevented);
  }
*/
  //  btnSubmit.addEventListener('click', btnShandler);
  // !  JavaScript: Базовый курс для фронтенд-разработчиков. Урок 19. DOM API: Погружение-всплытие событий
  // свойство обекта HTMLTableElement(соответсвует тегу <table>);
  /** Свойства елементіа таблиці
   *  свойство                 опис
   * row                коллекция строк <tr> таблиці
   * caption            ссилка на название таблици <caption>
   * tHead              ссилка на заголовок таблици <thead>
   * tBodies            силка на коллекцию елементів <tbody> их может бить несколько
   * tFoot              ссилка на подвал таблици <thead>
   *
   *  DOM Обект                    HTML-теги           Свойство                опис
   * HTMLTableSectionElement  <thead> <tfoot> <tbody>     rows              колкекція строк секйції таблиці
   * HTMLTableRowElement      <tr>                        cells             колкекція ячеек таблиці (<th>, <td>), що знаходяться внутристроки
   * HTMLTableRowElement      <tr>                        sectionRowInbox   номер строки в текущей секції
   * HTMLTableRowElement      <tr>                        rowIndex          номер строки в таблиці (враховется усі строки)
   * HTMLTableCellElement     <th>, <td>                  cellIndex         номер ячейки в строці
   *
   */
  //  const table1 = document.getElementById('table-1');
  // const btnPrimary = document.querySelector('.btn-primary');
  //const btnSecondariy = document.querySelector('.btn-secondary');
  /*
  btnPrimary.onclick = function () {
    alert(table1.caption.innerText);
  };

  btnSecondariy.onclick = function () {
    alert(table1.tHead.innerHTML);
  };
  */
  //Фази жизненого цикла собития
  // перемение для текущих елементів ячейки та строки
  //let currentCell;
  //let currentRow;
  // Стадия обробки собития
  // false - bubble
  // true - capture занурення
  //const eventPhase = true;
  // Зупинка всплиття(занурення)
  //const stopPropagation = true;
  // Добавление обработчиков сторкам і ячейкам таблици
  // const table1Body = table1.tBodies[0];
  /*
  for (let tr of table1Body.rows) {
    tr.addEventListener('click', trClickHendler, eventPhase);
    for (let cell of table1Body.cells) {
      cell.addEventListener('click', cellClickHendler, eventPhase);
    }
  }
  // Добавление обработчика собития таблице
  table1.addEventListener('click', table1ClickHandler);

  function trClickHendler(e) {
    console.log(`click on row^ : ${this.sectionRowIndex + 1}`);
    console.log(`Event phase : ${e.eventPhase}`);
    if (currentRow) currentRow.classList.remove('border-secodary');
    currentRow = this;
    currentRow.classList.add('border-secodary');
  }

  function cellClickHendler(e) {
    console.log(`click on cell^ : ${this.cellIndex + 1}`);
    console.log(`Event phase : ${e.eventPhase}`);
    if (currentCell) currentCell.classList.remove('bg-secodary', 'text-white');
    currentCell = this;
    currentCell.classList.add('bg-secodary', 'text-white');
  }

  function table1ClickHandler(e) {
    console.log(' click on table 1 ');
    console.log(`Event phase : ${e.target.innerText}`);
    if (stopPropagation) e.stopPropagation();
  }
  */
  /**
   * Фази собития
   * існує 3 фази життевого циклу собития
   * capture phase - фаза погружения(от корневого елемента к целевому)
   * target phase - фаза достижени я целевого елемента
   * bubble phase - фаза всплития(от целевого елементв к корневого)
   *
   * при наступлении собития самим глубоко вложенний елемент на котоорм оно произошло помечается как целевой (target)
   * const btn = document.getElementById('btn');
   * btn.onclick = function(e) {
   * ! Event target
   * console.log(e.target);
   * ! Event phase code
   * console.log(e.eventPhase);
   *
   * Свойства обекта Event
   * Свойства            Опис
   * target                 самий глубокий елемент, на якому відбулося собитие
   * currentTarget(this)    текущий елемент, на якому спрацював обробник
   * eventPhase             фаза спрацювання обробник сибирия(1 - погружение, 2 - фаза цели, 3 - всплиття)
   *
   * }
   */
  /**
   * Делегування собитий - прием ротзработки, когда вместо установки обработчиков собития множеству елементов их общему предку устанавливается один общищй обработчик
   *
   */
  // ! Делегування собитий
  /*
  const table2 = document.getElementById('table-2');
  //table2.addEventListener('click', table2ClickHandler);
  function table2ClickHandler(e) {
    console.log(' click on table 2 ');
    console.log(`Event phase : ${e.eventPhase}`);
    console.log(`Event target text : ${e.target.innerText}`);

    let cell = e.target;
    let row = cell.closest('tr');

    console.log(`Click on cell : ${cell.cellIndex + 1}`);
    if (currentCell) currentCell.classList.remove('bg-secondary', 'text-white');
    currentCell = cell;
    currentCell.classList.add('bg-secondary', 'text-white');

    console.log(`Click on row : ${row.sectionRowIndex + 1}`);
    if (currentRow) currentRow.classList.remove('border-secondary');
    currentRow = row;
    currentRow.classList.add('border-secondary');
  }
*/
  // Видалення / додання обробника собтий
  // const btnTrack = document.querySelector('.btn-success');
  //  btnTrack.addEventListener('click', btnTrackhandler);
  /*
  function btnTrackhandler() {
    if (this.classList.contains('btn-success')) {
      table2.addEventListener('click', table2ClickHandler);
      this.classList.remove('btn-success');
      this.classList.add('btn-danger');
      this.innerText = 'Disable tracking';
    } else {
      table2.removeEventListener('click', table2ClickHandler);
      this.classList.remove('btn-danger');
      this.classList.add('btn-success');
      this.innerText = 'Enable tracking';
    }
  }
*/
  // ! JavaScript: Базовый курс для фронтенд-разработчиков. Урок 19 - Домашнее задание
  /**
   * На родительский елемент карточки с класом card навесить загальний оброботчик собитий
   * которое при клке на любом внутреннем елементі картки модальним окном alert виводит назву елементу та списолк его классов
   *
   */
  // ! JavaScript: Базовый курс для фронтенд-разработчиков. Урок 20. DOM API: События мыши и клавиатуры
  /**
   * Собития миши
   *
   * собития                    опис
   *
   * mousedown/mouseup          Нажатие/отпускание кнопок миши
   * mouseover/mouseout         Наведение/уход курсора миши (с учетом перехода на
   * mouseenter/mouseleave      дочерние елементи и без него
   * mousemove                  рух миші
   * click                      щелчок миши левой кнопкой
   * dbclick                    Двойной щелчок левой кнопкой миши
   * contextmenu                Виклик контексного меню при нажатии правой кнопки
   *                            миши(может викликатися клавишами клавитури)
   */
  // собития миши, связанние с климок
  /*
  const buttonPrimary = document.querySelector('.btn-primary');
  const list1Items = document.querySelectorAll('#list-1 .list-group-item');

  buttonPrimary.onmousedoun = function (e) {
    console.log(` Event type : ${e.type} \n Mouse button : ${e.button} `);
    switch (e.button) {
      case 0:
        list1Items[0].classList.toggle('bg-primary-subtle');
        break;
      case 1:
        list1Items[1].classList.toggle('bg-primary-subtle');
        break;
      case 2:
        list1Items[2].classList.toggle('bg-primary-subtle');
        break;
      case 3:
        list1Items[3].classList.toggle('bg-primary-subtle');
        break;
      case 4:
        list1Items[4].classList.toggle('bg-primary-subtle');
        break;
    }
  };

  buttonPrimary.onmouseup = function (e) {
    console.log(`Event type : ${e.type} \n Mouse button : ${e.button}`);
  };

  buttonPrimary.onclick = function (e) {
    console.log(`Event type : ${e.type} \n Mouse button : ${e.button}`);
  };

  buttonPrimary.ondbclick = function (e) {
    console.log(`Event type : ${e.type} \n Mouse button : ${e.button}`);
  };

  buttonPrimary.oncontextmenu = function (e) {
    console.log(`Event type : ${e.type} \n Mouse button : ${e.button}`);
  };
*/
  // Собиитя, возникшие при нажатии кнопки миши с класиешй модификатоорм
  /*
  const btnSec = document.querySelector('btn-secondary');

  btnSec.onclick = function (e) {
    if (e.shiftKey) {
      console.log(`Event shift key : ${e.shiftKeytype} \n `);
    }
  };
  */
  // Cобития миши, связание с перемещением курсора
  // mouseover/mouseout
  /* list2 = document.querySelector('#list-2');
  list2.onmouseover = function (e) {
    if (e.target.closest('ul').id == 'list-2') {
      e.target.classList.add('bg-primary', 'text-white');
    }
  };

  list2.onmouseout = function (e) {
    if (e.target.closest('ul').id == 'list-2') {
      e.target.classList.remove('bg-primary', 'text-white');
    }
  };
*/
  // mouseenter/mouseleave
  /*
  list2.onmouseenter = function (e) {
    console.log(`Inside list`);
    console.log(`Event target tag : ${e.target.tagName} \n `);
    console.log(`Event relatedTarget tag : ${e.relatedTarget.tagName} \n `);
  };

  list2.onmouseleave = function (e) {
    console.log(`Inside list`);
    console.log(`Event target tag : ${e.target.tagName} \n `);
    console.log(`Event relatedTarget tag : ${e.relatedTarget.tagName} \n `);
  };
*/
  // натискання кнопок клавиатури
  /*
  document.addEventListener('keydown', function (e) {
    if (e.code == 'KeyZ') {
      console.log(`Event key : ${e.key} \n Event code ${e.code} `);
    }
  });
*/
  /**
   * ТИпи собитий указателя
   *
   * собитие указателя          аналог собития миши
   *
   * pointerdown                  mousedown
   * pointerup                    mouseup
   * pointermove                  mousemove
   * pointerover                  mouseover
   * pointerout                   mouseout
   * pointerenter                 mouseenter
   * pointerleave                 mouseleave
   * pointerconcel                -
   * gotpointercapture            -
   * lostpointercapture           -
   *
   */
  // собітия указателя
  /*
  const list3 = document.getElementById('list-3');
  const list3Items = list3.getElementsByClassName('list-group-item');
  const nextBtn = document.querySelector('btn-success');
  const prevBtn = document.querySelector('btn-warning');

  let currentIndex = 0;
  nextBtn.addEventListener('pointerup', nextBtnHandler);
  prevBtn.addEventListener('pointerup', prevBtnHandler);

  function nextBtnHandler(e) {
    list3Items[currentIndex].classList.remove('bg-success-subtitle');
    console.log(`Event pointer type : ${e.pointerType} `);
    if (++currentIndex > 4) currentIndex = 0;
    list3Items[currentIndex].classList.add('bg-success-subtitle');
  }

  function prevBtnHandler(e) {
    list3Items[currentIndex].classList.remove('bg-success-subtitle');
    console.log(`Event pointer type : ${e.pointerType} `);
    if (--currentIndex < 0) currentIndex = 4;
    list3Items[currentIndex].classList.add('bg-success-subtitle');
  }
  */
  // !  JavaScript: Базовый курс для фронтенд-разработчиков. Урок 20 - Домашнее задание
  /**  при двойном клике на елементе списка добавляет ему класс bg-sec-subtitle при єтом елементу которий бил вибран при прошлом двойном клике
   * класс bg-sec-subtitle должен биьт удален
   */
  //! JavaScript: Базовый курс для фронтенд-разработчиков. Урок 21. DOM API: Работа с формами
  /**
   * Працюю з формами <form> </form>
   *
   * https://www.youtube.com/watch?v=ONBEkWkJWK4&list=PLvcCyIZOok9JiXExkbCTGTduUXtrkorkS&index=43
   *
   */
  // !JavaScript: Базовый курс для фронтенд-разработчиков. Урок 21 - Домашнее задание
  /**
   *
   */
  // ! JavaScript: Базовый курс для фронтенд-разработчиков. Урок 22. CSSOM API: Координаты и размеры
  /**
   *
   * https://www.youtube.com/watch?v=5qlWVlnKA2A&list=PLvcCyIZOok9JiXExkbCTGTduUXtrkorkS&index=44
   *
   */
  //! JavaScript: Базовый курс для фронтенд-разработчиков. Урок 22 - Домашнее задание
  /**
   *
   */
  //! JavaScript: Базовый курс для фронтенд-разработчиков. Урок 23. CSSOM API: Прокрутка страницы
  /**
   *
   *https://www.youtube.com/watch?v=ulvj7Oo1HS0&list=PLvcCyIZOok9JiXExkbCTGTduUXtrkorkS&index=46

   */
  // ! JavaScript: Базовый курс для фронтенд-разработчиков. Урок 23 - Домашнее задание
  /**
   *
   *
   */
  // ! JavaScript: Базовый курс для фронтенд-разработчиков. Урок 24. BOM API: Observers (наблюдатели)
  /**
   *https://www.youtube.com/watch?v=0fRvqBrHDZ4&list=PLvcCyIZOok9JiXExkbCTGTduUXtrkorkS&index=48
   *
   */
  // ! JavaScript: Базовый курс для фронтенд-разработчиков. Урок 24 - Домашнее задание
  // ! JavaScript: Базовый курс для фронтенд-разработчиков. Урок 25. DOM API: Drag and Drop
  /**
   *https://www.youtube.com/watch?v=t7h7Lt0u95s&list=PLvcCyIZOok9JiXExkbCTGTduUXtrkorkS&index=50
   *
   */
  //! JavaScript: Базовый курс для фронтенд-разработчиков. Урок 25 - Домашнее задание
  /**
   *
   */
  //! JavaScript: Базовый курс для фронтенд-разработчиков. Урок 26. JS Core: Работа с числами
  /**
   * https://www.youtube.com/watch?v=W13ahaUz8Bs&list=PLvcCyIZOok9JiXExkbCTGTduUXtrkorkS&index=52
   *
   *
   */
  // ! JavaScript: Базовый курс для фронтенд-разработчиков. Урок 26 - Домашнее задание
  /**
   *
   *
   */
  // ! JavaScript: Базовый курс для фронтенд-разработчиков. Урок 27. JS Core: Работа со строками
  /**
   *
   *
   */
  // ! JavaScript: Базовый курс для фронтенд-разработчиков. Урок 27 - Домашнее задание
  /**
   *
   *
   */
  // ! JavaScript: Базовый курс для фронтенд-разработчиков. Урок 28. JS Core: Строковый формат данных JSON
  /**
   *
   * https://www.youtube.com/watch?v=HWEShEHXWKA&list=PLvcCyIZOok9JiXExkbCTGTduUXtrkorkS&index=56
   *
   */
  // ! JavaScript: Базовый курс для фронтенд-разработчиков. Урок 28 - Домашнее задание
  /**
   *
   */
  // JavaScript: Базовый курс для фронтенд-разработчиков. Урок 29. JS Core: Массивы
  /**
   * https://www.youtube.com/watch?v=257UVdcOdLo&list=PLvcCyIZOok9JiXExkbCTGTduUXtrkorkS&index=58
   *
   */
  // ! JavaScript: Базовый курс для фронтенд-разработчиков. Урок 29 - Домашнее задание
  /**
   *
   *
   */
  // ! Базовый курс для фронтенд-разработчиков. Урок 30. JS Core: Свойства объектов
  /**
   *https://www.youtube.com/watch?v=8N2PpZ70drw&list=PLvcCyIZOok9JiXExkbCTGTduUXtrkorkS&index=60

   */
  // ! JavaScript: Базовый курс для фронтенд-разработчиков. Урок 30 - Домашнее задание
  /**
   *
   * https://www.youtube.com/watch?v=PkwLITS8Exg&list=PLvcCyIZOok9JiXExkbCTGTduUXtrkorkS&index=61
   *
   */
  // ! JavaScript: Базовый курс для фронтенд-разработчиков. Урок 31. JS Core: Свойства объектов - 2
  /**
   * https://www.youtube.com/watch?v=aPmUBuqkN0w&list=PLvcCyIZOok9JiXExkbCTGTduUXtrkorkS&index=62
   *
   */
  // ! JavaScript: Базовый курс для фронтенд-разработчиков. Урок 31 - Домашнее задание
  /**
   *
   */
  // ! JavaScript: Базовый курс для фронтенд-разработчиков. Урок 32. JS Core: Свойства объектов - 3
  /**
   *
   */
  // ! JavaScript: Базовый курс для фронтенд-разработчиков. Урок 32 - Домашнее задание
  /**
   *
   */
  // ! JavaScript: Базовый курс для фронтенд-разработчиков. Урок 33. JS Core: Деструктуризация объекта
  /**
   *
   */
  // ! JavaScript: Базовый курс для фронтенд-разработчиков. Урок 33 - Домашнее задание
  /**
   *
   */
  //! JavaScript: Базовый курс для фронтенд-разработчиков. Урок 34. JS Core: Коллекции данных Map / Set
  /**
   * https://www.youtube.com/watch?v=LX8nkw17NIQ&list=PLvcCyIZOok9JiXExkbCTGTduUXtrkorkS&index=68
   */
  // ! JavaScript: Базовый курс для фронтенд-разработчиков. Урок 34 - Домашнее задание
  /**
   *
   */
  // ! JavaScript: Базовый курс для фронтенд-разработчиков. Урок 35. JS Core: Коллекции WeakMap/WeakSet
  /**
   * https://www.youtube.com/watch?v=mPtVXzn38Jg&list=PLvcCyIZOok9JiXExkbCTGTduUXtrkorkS&index=70
   */
  // ! JavaScript: Базовый курс для фронтенд-разработчиков. Урок 35 - Домашнее задание
  /** */
  // ! JavaScript: Базовый курс для фронтенд-разработчиков. Урок 36. JS Core: Дата и время
  /**
   * https://www.youtube.com/watch?v=RgRmsrgINkU&list=PLvcCyIZOok9JiXExkbCTGTduUXtrkorkS&index=72
   */
  // ! JavaScript: Базовый курс для фронтенд-разработчиков. Урок 36 - Домашнее задание
  /**
   *
   */
  // ! JavaScript: Базовый курс для фронтенд-разработчиков. Урок 37. JS Core: Основы функционального стиля
  /**
   * https://www.youtube.com/watch?v=oKyBYQdkM90&list=PLvcCyIZOok9JiXExkbCTGTduUXtrkorkS&index=74
   */
  // ! JavaScript: Базовый курс для фронтенд-разработчиков. Урок 37 - Домашнее задание
  /**
   *
   */
  // ! JavaScript: Базовый курс для фронтенд-разработчиков. Урок 38. JS Core: Лексическое окружение
  /**
   * лексическое окружение и контекст виполнения
   * область видимости переменних
   * лексическое окружение
   * контекст виполнения
   * стек визовов
   * замикание
   * приаязка контекста
   *
   * https://www.youtube.com/watch?v=lk0oqTIDB-s&list=PLvcCyIZOok9JiXExkbCTGTduUXtrkorkS&index=76
   */
  // ! JavaScript: Базовый курс для фронтенд-разработчиков. Урок 38 - Домашнее задание
  /**
   *
   *
   */
  // ! https://www.youtube.com/watch?v=zxZ20V1mjgc
  // ! https://www.youtube.com/watch?v=_Jxe-WacgUs
  // ! https://www.youtube.com/watch?v=hOo538RtG1U
  // ! https://www.youtube.com/watch?v=klyjImfgfC8
  console.warn('Кінець не систематизованої інформації з JS');
});
