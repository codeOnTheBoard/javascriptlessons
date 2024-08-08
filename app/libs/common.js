'use strict';

document.addEventListener('DOMContentLoaded', () => {
  // уроків 73 роліків
  const lessonsJs = 73;
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
  console.warn('Урок 01 - Домашнее задание - Вмію');
  // ! JavaScript: Базовый курс для фронтенд-разработчиков. Урок 02 - Основы работы с JavaScript
  console.warn('Урок 02 - Основы работы с JavaScript - Вмію');
  // перевірка роботи суворого режиму
  let b = 0;
  console.log(b);

  console.warn(
    'Щоденний ітог навчання!!! 29.07.2024 Продивився 5 роліків /' + lessonsJs
  );
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
  let user1 = 'Pete',
    user2 = 'Mary',
    user3 = 'Dan';
  console.log('Names users: ', user1, user2, user3);

  var am = 40;
  let bee = 34;
  console.log('window am: ', window.am); // Должно вернуть 40// Это вернёт 40
  console.log('window bee: ', window.bee); // Это вернёт undefined

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
  let a = 'frffdf';
  console.log(typeof a);
  console.log(typeof a);
  console.log(typeof null);
  //помилка typeof null - показуе як object
  // результатом виклика typeof стосовно function (різновид обекта) є function

  // ! JavaScript: Базовый курс для фронтенд-разработчиков. Урок 04 - Домашнее задание Знаю
  //! JavaScript: Базовый курс для фронтенд-разработчиков. Урок 05 - Преобразование типов

  //число из строки
  console.log(Number(40));
  //число из true - 1
  console.log(Number(true));
  //число из null - 0
  console.log(Number(null));
  //число из undefined NaN
  console.log(Number(undefined));
  //число из сторки NaN
  const string = 'string';
  console.log(Number(string));

  //строка из числа "30"
  console.log(String(30));
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
  // автоматтом преобразует строку в число, если число прописано не буквами, и перед или перед єтим числом стоит знак математического действия, которий может интепритироватья однозначно. + может троктоваться как сумировать и конкантенировать а значит автоматическое преобразование типов не возможно. Если между двумя числами стоит + и одно число является строкой - идет конкатенирование строк а не сумирование
  // !JavaScript: Базовый курс для фронтенд-разработчиков. Урок 05 - Домашнее задание
  console.warn('Домашне завданння 05');
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
  let numBerMinus = -numBerMinus;
  // Изменение знака числа унаррним плюсом
  let numBerPlus = +numBerPlus;

  // Приоритет опрераторов как в математике
  // унарний + главнее чем бинарний

  const strOne = '4';
  const strTwo = '64';
  const strThree = '64';
  console.log('+strOne + +strTwo + -strThree');
  console.log(+strOne + +strTwo + -strThree);

  // ! Оператори присваивания       Сокращенная    развернутая запись       =(присваивание значения)
  // приходить значення в Х та Y після дії результат становиться новим значенням в результаті математичної дії.
  //  Простое присваивание                X = Y             X = Y
  //  Присваивание со сложением           X += Y            X = Х + Y
  //  Присваивание с вичитанием           X -= Y            X = Х - Y
  //  Присваивание с умножением           X *= Y            X = Х * Y
  //  Присваивание с делением             X '/'= Y          X = Х / Y
  //  Присваивание со взятием остатка     X %= Y            X = Х % Y

  // ! Оператори присваивания

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
  // ! Инкремент и декремент
  // Инкремент (++)
  // Декремент (--)
  // Инкремент та Декремент мають дві форми запису:
  // префіксную опрератор іде перед переменной приклад, ++count
  // постфиксную опрератор іде після переменно приклад, count--
  //! Різниця між префіксним та постфіксним інкрементом

  let countIncrement = 1;
  console.log('++countIncrement'); // префікс відбувається інкрементуваня, виводиться нове значення
  console.log(++countIncrement);
  console.log('countIncrement++'); // постфікс, вивід старого значення, потім відбувається інкрементуваня, виводиться нове значення
  console.log(countIncrement++);
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
  console.log(false || true); // true
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

  //Значення операнда логічного типу
  // повертаеться противоположное значение
  // !true // false
  // !null // true
  console.log(!200); // найвисший приоретет
  console.log(!'ckjdj');
  console.log(!null);
  console.log(!undefined);
  console.log(!NuN);
  console.log(!true);
  console.log(!false);

  // Оператор Нулевого слияния (??) возвращает первое определенное значение(тоесть оно не равно null или undefined)
  // если значение  всех операндов не определени, возвращает значение последнего
  console.log(null ?? 1); // 1
  console.log(null ?? 'Alex' ?? 'anonym'); // Alex
  console.log(null ?? undefined); // undefined

  // Оператор нулевого слияния
  let name;
  console.log(name ?? 'anonym');
  console.log(null ?? 'Alex' ?? 'anonym');
  /**
   * оператор логического присваивания или ||=
   * слева на право
   * конвертирует операнд в логическое значение
   * если получение значение ложно false присваивает левому операнду значение правого операнда
   */
  let ageLogPriYly = null;
  ageLogPriYly ||= 18;
  console.log(ageLogPriYly);
  /**
   * Логическое присваивание и &&=
   * левий операнд ложний ему не присваивается з начение правого опреранда
   * левий операнд ПРАВДИВИЙ  ему не присваивается з начение правого опреранда
   */
  let ageLogPriAnd = null;
  ageLogPriAnd &&= 2218;
  console.log(ageLogPriAnd); // null
  /**
   * Оператор нулевого присваивания ??=
   * левий операнд не определен(null) ему присваивается значение правого опреранда
   */
  let ageNullPris = null;
  ageNullPris ??= 25;
  console.log(ageNullPris); // 25

  // приоретет операторов
  let height;
  let width;
  let area = (height ??= 20) * (width ??= 34);
  console.log(area);
  //! JavaScript: Базовый курс для фронтенд-разработчиков. Урок 07 - Домашнее задание

  //! JavaScript: Базовый курс для фронтенд-разработчиков. Урок 08 - Условное ветвление

  // Условное ветвление
  if (age < 18) {
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

  // ! Инструкция Switch

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

  //! JavaScript: Базовый курс для фронтенд-разработчиков. Урок 08 - Домашнее задание

  // ! JavaScript: Базовый курс для фронтенд-разработчиков. Урок 09 - Циклы

  // цикл с параметром
  for (let i = 0; i < 10; i++) {
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

  // цикл с послеусловием

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
  let sum1 = 0;
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
  /**
   * get - возвращают значение
   * calc - производят вичисления
   * show - отображают дание
   * create - содают что-то
   * check - виполняют проверку
   */
  // инструкция return функция
  // возращает результат своей работи
  function calcArea(height, width) {
    return height * width;
  }
  // результат работи функции
  // присваивается переменной
  let areaSq = calcArea(4, 1);
  console.log(areaSq);
  // якщо в функції нема return вона все одно повертає undefined
  // фунуія с 2 return
  function checkParity(num) {
    if (num % 2 == 0) return 'Четное';
    return 'Нечетное';
  }
  function showMassage(text = 'Пусте повідомлення') {
    return `Сообщение: ${text}`;
  }
  console.log(showMassage());

  // краще не використовувати зовнішні змінні
  //  не правильно
  let userMane = 'Piter';
  function showname() {
    console.log(`Show, ${userMane}`);
  }
  showname();

  // Правильно
  function showUserName(userMane) {
    console.log(`Show, ${userMane}`);
  }
  showUserName('Piter');

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
  const showHelloUser3 = name => console.log(`Hello, ${name}`);
  showHelloUser3(Piter);
  // https://www.youtube.com/watch?v=2Vuz_qvwnqo&list=PLvcCyIZOok9JiXExkbCTGTduUXtrkorkS&index=23 7

  // ! https://www.youtube.com/watch?v=_Jxe-WacgUs
  // ! https://www.youtube.com/watch?v=hOo538RtG1U
  // ! https://www.youtube.com/watch?v=klyjImfgfC8
});
