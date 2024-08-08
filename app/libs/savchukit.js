document.addEventListener('DOMContentLoaded', () => {
  // тестирую. код
  console.log('Тестирую код');
  // Основи JavaScript. Вступ: 21:59
  // Основи JavaScript. Змінні: 16:07

  var myZminnaVar;
  let myZminnaLet;
  const myZminnaConst = 0;

  // не можна використовуватися зарезервовані слова в Javascript
  // Основи JavaScript. Типи даних: 48:13
  console.log('String');
  console.log('Number');
  console.log('Boolean');
  console.log('null'); // значенння яке присвоюється змінній навмисно початкове значення яке в подальшому буде змінено
  console.log('undefined'); //не відбувається присвоення або переприсвоєння значення перемінній, відсутність значення в перемінній
  const obj = {}; // обьект, колекція інформації
  const Symbol = 4000; // для унікальних ключів обьектів
  //  const bigInt = 9999999999999999999999999n;
  // Основи JavaScript. Умовні оператори: 16:18
  // if else oparator
  const isUseLiggedIn = true;
  if (isUseLiggedIn) {
    console.info('You are logged in');
  }
  const isUseLiggedInTwo = false;

  if (isUseLiggedInTwo) {
    console.info('You are logged in');
  } else {
    console.info('You are not logged in');
  }
  // тernary oparator

  isUseLiggedInThree = true;

  isUseLiggedInThree
    ? console.info('You are logged in')
    : console.info('You are not logged in');

  const age = 30;
  switch (age) {
    case 10:
      console.info('Happy birsday, give me a kiss');
      break;
    case 20:
      console.info('Happy birsday, give me a hug');
      break;
    case 30:
      console.info('Happy birsday, give me grandchildren');
      break;
    default:
      console.info('Happy birsday, give me your lagacy');
  }

  const name = 'Igor';
  switch (name) {
    case 'Igor':
      console.info('You are best man');
      break;
    case 'Vitaly':
      console.info('Sounds so-so');
      break;
    case 'Andrey':
      console.info('You are not better, then Igor');
      break;
    default:
      console.info('Sort intrestine fine names');
  }
  //Основи JavaScript. Детальніше про оператори в JS 23:25
  const numOne = 10;
  const numTwo = 2;
  console.info(numOne + numTwo);
  console.info(numOne - numTwo);
  console.info(numOne * numTwo);
  console.info(numOne / numTwo);
  console.info(numOne % numTwo);

  let num3 = 40;
  num3 += 30;
  num3 -= 30;
  num3 /= 30;
  num3 *= 30;
  //порівняння
  if (name === 'Vitaly') {
    console.log('your name is not best');
  }
  if (age >= 17 || age <= 0) {
    console.log('your age is not best');
  }
  if (age !== 21) {
    console.log('your age is not best');
  }
  if (age === 18 && name === 'Vitaly' && !isUseLiggedIn) {
    console.log('congratulate');
  }
  //Основи JavaScript. Приведення / конвертація типів 23:14
  //0, -0, NaN, undefined, null, '', false  - false
  // все інше - true
  // = присвоення, == порівння за значенням, === за значенням та типом
  // != не рівно за значенням   !== не рівно за значенням та типом

  // >Основи JavaScript. 7 - Функції 44:00

  const userName = 'Vitaly';
  function sayHello(name) {
    console.log('Привет, користувач {name}');
  }

  sayHello(userName);

  function createUserName() {
    return 'Igor';
  }

  const userNameSe = createUserName();

  console.log(userNameSe);

  const userNamen = 'Igor';
  function doUserNme(name) {
    const result = name.toUpperCase();
    return result;
  }
  console.info(doUserNme(userNamen));

  const visualName = doUserNme(userNamen);
  console.info(visualName);

  //Function decraratin
  doUserNme(userNamen);
  // Function Expretion
  const myVariant = function (pr) {
    console.log(pr);
  };
  console.info('/***/');
  console.log('\n');
  console.log(' ');
  myVariant('Привет');
  myVariant('РОблю спроби');
  myVariant('Ще одна спроба');

  function returnSmth() {
    return 'поверни мене';
  }

  const test = returnSmth();

  myVariant('Шукаю помилку 1');
  console.log(test); // виводить строчку поверни мене
  //якщо функція не повертає ніякого значення, return функція відддає undefined
  // в перемінну падає те, що іде після return

  // UNIT 1. ФУНКЦИИ. FUNCTION DECLARATION. ЗАПУСК ФУНКЦИЙ
  // функція - блок кода на javascript, який визнаается один раз, викликається
  // багаторазово
  function useNumberFun() {
    //тіло функції;
    const x = 3;
    const y = 103;
    const w = x + y;
    console.log(w);
  }
  // Функція визначаеться в любому місці файла, викликається до, після визначення функції або в тілі іншій функції. Якщо створити 2 функції з одною назвою, спрацює пілька та, яка була визначена останьою Усі перемінні в тілі функції створюються заново кожного разу, коли функція запусається. Якщо за межами тіла функції - переміна переписується.

  function hello() {
    console.log('тестуюю работу функції');
    useNumberFun();
  }

  function testF() {
    function t3() {
      console.log('Працює функція t3');
    }
    t3();
    console.log('Тестую работу строчки яка іде після функції t3');
  }

  // testF();
  // кінець функції testF()
  function unixTime() {
    let time = Math.floor(new Date().getTime());
    console.log(time);
  }
  // unixTime();
  // кінець функції unixTime()

  function randomInt() {
    const min = Math.ceil(1);
    const max = Math.floor(100);
    let rand = Math.floor(Math.random() * (max - min + 1)) + min;
    console.log(rand);
  }
  // запуск функції
  randomInt();

  const mіnі = 100;
  const maxі = 400;
  function rand() {
    let rand = Math.floor(mіnі + Math.random() * (maxі + 1 - mіnі));
    console.log(rand);
  }

  rand();

  // let minі = 40,
  // maxі = 80; // видає помилку
  // rand();
  // формальні аргументи функції

  // sum3(34, e); //функція запускається на відпрацьовання до її прописування
  // функція викликає помилку бо запускати її потрібно після обвлення
  function sum3(z, s) {
    console.log(z + s);
  }
  sum3(23, 2);
  sum3(232, 11);
  const z = 34232;
  const e = 232;
  sum3(z, e);
  sum3(34, e);

  sum3(34);

  function sum33(z, s = 20) {
    console.log(z + s);
  }

  //  складніша задача
  function showInDiv(element, zer, myZminnaLet) {
    document.querySelector(element).textContent = zer + myZminnaLet;
  }

  showInDiv('.out-1', 343, 23);
  showInDiv('.out-2', 45, 123);
  showInDiv('.out-3', 45, 123);

  function showInDiz(element, zer, myZminnaLet) {
    element.textContent = zer + myZminnaLet;
  }
  showInDiz(document.querySelector('.out-5'), 45, 123);

  const ere = document.querySelector('.out-2').textContent;
  console.log('Цікаво де виведе');
  showInDiz(ere, 90, 13);
  // якщо парамерти потрібно пропустити, їх задавати в перечні аргументів в кінці

  function showWithArguments() {
    console.log(arguments); // дається доступ до аргументів функції
    arguments[2].textContent = arguments[0] + arguments[1];
  }
  showWithArguments(document.querySelector('.out-3'), 45, 123);

  function showSumAll() {
    console.log(arguments);
    let sum = 0;
    for (let i = 0; i < arguments.length; i++) {
      sum += arguments[i];
    }
    console.log(sum);
  }
  showSumAll(25.12, 8789, 7798);

  function showSumAll1() {
    console.log(arguments);
    let sum = Array.from(arguments).reduce((accum, item) => (accum += item));
    console.log(sum);
  }
  showSumAll1(25.12, 8789, 7798);

  function showSumAll2(...args) {
    console.log(args);
    let sum = args.reduce((accum, item) => (accum += item));
    console.log(sum);
  }
  showSumAll2(25.12, 8789, 7798);

  // функція як аргумент
  function showAlll(rez) {
    document.querySelector('.out-4').innerHTML = `${rez}`;
  }
  function showS(drowFunction, num) {
    // если цифр много нужно установить рес параметр : ...num
    drowFunction(num);
  }
  showS(showAlll, 98);

  // return в Функції вчимося повертати значенння функції
  // return дозволяє використовувати математичний результат в якості результата роботи функції в вигляді цифрового значення. До строчки return Х можуть іти багато формул, ввідних, але одне число = одни результат = один return
  // якщо рішення передбачає знаходження результата шляхом складних дій і знаходження проміжних результатів, які можуть використовуються для вирішення декількох задач, потрібно використовувати декілька функцій.
  // вивід куди завгодно
  // використовувати в математичних виразах в якості аргумента
  document.querySelector('.class-b').addEventListener('click', clickFun);
  function clickFun() {
    const s = document.querySelector('.class-i').value;
    document.querySelector('.get-p').textContent = clearText(s);
  }
  function clearText(d) {
    d.trim().toLowerCase();
    return d;
  }
  //I tested return

  const firstNumber = document.querySelector('.out-6').textContent;
  const secondNumber = document.querySelector('.out-7').textContent;
  const tyxButton = document.querySelector('.tyx');
  tyxButton.style.paddingLeft = '12px';
  tyxButton.style.paddingRight = '12px';
  tyxButton.addEventListener('click', allSum('все', firstNumber, secondNumber));

  function getFSUm(f, s) {
    const sum = (f + s) * 2;
    return sum;
  }
  function stopDya() {
    tyxButton.innerHTML = 'Не клікай';
  }
  function allSum(r, one, two) {
    console.log(firstNumber);
    console.log(secondNumber);
    if (firstNumber && secondNumber) {
      tyxButton.style.padding = '12px 34px 12px 34px';
      document.querySelector('.out-8').innerHTML =
        `${r} : ${one} * ${two} = ` + one * two;
      stopDya();
    } else if (!firstNumber) {
      document.querySelector('.out-6').textContent =
        'Вcтавьте значение в єто поле ';
    } else if (!secondNumber) {
      document.querySelector('.out-7').textContent =
        'Вcтавьте значение в єто поле ';
    }
  }
  // нова функція на return
  const clickNa = document.querySelector('.clic-na');
  clickNa.addEventListener('click', getClickNa);
  function getClickNa() {
    const inputClickNa = document.querySelector('.input-click-na').value;
    document.querySelector('.out-10').innerHTML =
      'Привет' + clearText(inputClickNa);
  }
  function clearText(d) {
    return d.trim().toLowerCase();
  }
  // преривание функции
  const arr = [11, 22, 33, 44, 55, 66];
  const num = 55;
  function indexEmul(arr, num) {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === num) {
        return i;
      }
    }
    return -1;
  }

  let rerult = indexEmul(arr, num);
  document.querySelector('.out-11').innerHTML =
    `<span style="display:inline-block; padding:10px 20px">  ${rerult} </span>`;

  // з перевіркою
  document.querySelector('.out-12b').addEventListener('click', function () {
    let year = +document.querySelector('.out-12').textContent;
    if (isNaN(year))
      return (document.querySelector('.out-13').innerHTML = 'не число');
    if (year <= 0 || year > 120)
      return (document.querySelector('.out-13').innerHTML =
        'ще не народжений або занадто старий');
    document.querySelector('.out-13').innerHTML = 2024 - year;
  });

  console.group('урок 1');
  const arr3 = [
    [3, 4, 2],
    [23, 2, 11],
  ];

  function mainF() {
    let s = 0;
    for (let i = 0; i < arr3.length; i++) {
      s += secondF(arr3[i]);
    }
    return s;
  }

  function secondF(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
      sum += arr[i];
    }
    return sum;
  }

  document.querySelector('.out-15').innerHTML = mainF();
  console.groupEnd;

  console.group('урок 2');
  const arrr4 = [
    [3.2, 1, 3],
    [22, 12, 122],
    [22, 12, 212],
    [321, 76, 43],
    [987, 43, 77],
  ];

  const eee = arrr4.filter(function (item) {
    return secondF(item) % 2 === 0;
  });
  document.querySelector('.out-16').innerHTML = eee;
  console.groupEnd;
  // стрілкові функції - короткий варіант запису анонімних функцій

  function sumNum(e, w, r) {
    const rez = e + w - r;
    return rez;
  }
  function giveNewSize() {
    const size = document.querySelector('.out-18');
    size.style.padding = '20px 30px';
    size.style.fontSize = '1.520rem';

    giveButtSize();
  }
  function giveButtSize() {
    const size = document.querySelector('.out-17');
    size.style.padding = '10px 15px';
    size.style.fontSize = '1.1rem';
    size.style.color = '#343221';
    size.innerHTML = 'кнопка';
  }
  document.querySelector('.out-17').addEventListener('click', () => {
    let rez = sumNum(2334, 23, 23);
    giveNewSize();
    document.querySelector('.out-18').innerHTML = rez;
  });

  const ae2 = [4.32, 23, 22, 44, 22, 33];
  const rest1 = ae2.map(function (a) {
    return a * 2;
  });
  document.querySelector('.out-19').innerHTML = rest1;

  const rest2 = ae2.map(a => a * 2);
  document.querySelector('.out-20').innerHTML = rest2;

  // кінець функціям

  // початок вивчення масивів
  // що таке масив в JS
  //

  const userArr = new Array('user1', 'user2', 'user3');
  const userArray = []; // пустий масив
  let arrayObj = [
    {
      name: 'user1',
      age: 21,
      profession: 'programer',
    },
    {
      name: 'user2',
      age: 24,
      profession: 'soccer',
    },
    {
      name: 'user3',
      age: 27,
      profession: 'maneger',
    },
  ]; // масив обектів

  console.log('Весь масив');
  console.log(arrayObj);
  console.log('Масив з індексом 0');
  console.log(arrayObj[0]);
  console.log('Масив з індексом 1');
  console.log(arrayObj[1]);
  console.log('Масив з індексом 2');
  console.log(arrayObj[2]);
  console.log('Масив з індексом 3');
  console.log(arrayObj[3]);
  console.log('Масив з індексом 4');
  console.log(arrayObj[4]);

  const getSubscriber = true;
  if (getSubscriber) {
    arrayObj.push({
      // додати в кінець масиву
      name: 'user4',
      age: 57,
      profession: 'worker',
    });
  }
  //вивести новий список масиву
  console.log(arrayObj);
  //   arrayObj.push({}) - дадати елемент в кінець масиву
  //   arrayObj.unshift({}) - дадати елемент на початок масиву
  //   arrayObj.pop() - видалити останій елемент
  //   arrayObj.shift() - видалити елемент з початку масиву
  //   arrayObj.splice(0, 1, 'Новий елемент') - видалити елемент 1 елемент що разміщений на 0 місці в масиві, і замість нього вписати елемент з назвою 'Новий елемент'
  //   arrayObj.splice(5, 1, 'Новий елемент')
  //   arrayObj.splice(6, 4) - просто почати видаляти емементи масиву починаючи з 6 і всього видалити 4 елемента масиву
  //   arrayObj.splice(0, 3) - просто почати видаляти емементи масиву починаючи з 0 і всього видалити 3 елемента масиву і нічого не вставляти

  // !написати функцію виводу кількості підписників и привітання якщо їх більше ста

  // кінець вивчення масивів

  // !Початок Основи JavaScript. 09 ЦИКЛИ
  // JS loops - for

  const sub = [
    { name: 'Andrey', isCloseFriend: true },
    { name: 'Den', isCloseFriend: false },
    { name: 'Oksana', isCloseFriend: false },
    { name: 'Mira', isCloseFriend: false },
    { name: 'Olena', isCloseFriend: true },
    { name: 'Boris', isCloseFriend: false },
    { name: 'Volodimir', isCloseFriend: true },
    { name: 'Ekaterina', isCloseFriend: true },
    { name: 'Elena', isCloseFriend: true },
  ];
  // вивід всіх підписників як масива
  console.log(sub);

  // вивід i-того підписника з масиву
  for (let i = 0; i < sub.length; i++) {
    console.log(sub[i]);
  }
  // JS loops - for of спрощений цикл for пробігтися по циклу
  for (const item of sub) {
    console.log(item);
  }

  // JS loops - for in пробігатися по ключам обекта
  for (const key in sub) {
    console.log(key);
  }
  const obb = {
    name: 'kjuj',
    age: 12,
    sex: 'male',
    national: 'Ukraine',
    hobby: 'Game',
  };
  for (const key in obb) {
    console.log(key);
  }
  for (const key in obb) {
    console.log(key + ' : ' + obb[key]);
  }
  // JS loops - while
  i = 0;
  while (i < obb.length) {
    console.log(obb[i]);
    i++;
  }
  // JS loops - do while
  do {
    console.log(
      'Виконає один раз те, що запрограмував, без перевірки умови!!!!!!!!!' +
        obb[i]
    );
    i++;
  } while (i < obb.length);
  // написати функцію яка проходить по масиву чисел і кожне число підносить до квадрату кожне з них

  // Кінець Основи JavaScript. 09 ЦИКЛИ

  //!Початок Основи JavaScript. 10 Область видимості / Scope

  // Область видимості / Scope окрема частина області виконання кода в якій визначається її доступ до змінних
  // глобальна область видимості - в найвищій іерархії файла
  // локальна область видимості  - функції в межах блоку

  // в локальній області видимості змінна із глобальної області може бути використана
  // із глобальної області змінна із локальної області НЕ може бути використана
  // блочна область видимості з let и  const

  //Кінець Основи JavaScript. 10 Область видимості / Scope

  // !Початок Основи JavaScript. 11 - DOM 40: 47
  // функція яка передается аргументом в іншу функцію і буде викликана в певний мемент
  document.getElementById('dom-one').addEventListener('clsck', function () {
    console.log('теститую работу колбек функції');
    document.querySelector('.dom-one').style.display = 'inline-block';
    document.querySelector('.dom-one').disabled = true;
  });
  // Кінець Основи JavaScript. 11 - DOM 40: 47

  // !початок 12 - Замикання функція та її здатність оперувати всіма змінними в лексичному середовищі, де вони були створені
  const fName = 'My name';
  //lexicalEnvironment - лексичне середовище існування фугкції
  // lexicalEnvironment: {
  // fName :'My name'  variable
  // parentScope: null
  // }
  function sayHello() {
    const lastName = 'Shevchenko';
    //lexicalEnvironment - лексичне середовище існування фугкції
    // lexicalEnvironment: {
    // lastName :'Shevchenko'  variable
    // parentScope: global scope
    // }
    return function () {
      console.log(fName);
      console.log(lastName);
      //lexicalEnvironment - лексичне середовище існування фугкції
      // lexicalEnvironment: {
      // variable: null
      // parentScope: sayHello
      // }
    };
  }
  sayHello()();

  const say = sayHello();
  say();
  // тестирую
  let fiestName = 'Андрей';

  function pushFiestname() {
    console.log(fiestName);
  }

  fiestName = 'Кирилл';

  pushFiestname();

  // кінець 12 - Замикання функція

  // !початок 13 - Hoisting
  // кінець 13 - Hoisting Підняття - це механізм в JavaScript, в якому змінні та обявленні функції переміщються в верхню частину области видимості перед тем, як код буде виконанний.
  //якщо змінну через var і викликати перед обявленням, змінна віддасть undefined
  // якщо змінну через let const - виникне помилка
  //тимчасово мертка зона в документі знаходитья з місця створення змінної до області в документі, де їй присвоюється значення.
  //тимчасово мертка зона в документі знаходитья з першого рядка документа до області в документі, де їй присвоюється значення.
  // якщо змінні та функції обьявляютья в межах батьківської функції підняття змінних та функцій буде відбуватися в межах даної батьківської функції.

  const numberN = [3.2, 23, 1, 4, 45, 5, 67, 7, 8, 5, 454.3, 4, 5, 89, 9, 9];
  const numb = 2;
  const numbTwo = 5;

  function getRepetitionofNum(numArr, number) {
    let caunter = 0;
    for (item of numArr) {
      if (item === number) {
        caunter++;
      }
    }
    return caunter > 0 ? caunter : 'Даного числа в масиві не спостерігається';
  }
  document.querySelector('.get-hoisting-one').textContent = getRepetitionofNum(
    numberN,
    numb
  );
  document.querySelector('.get-hoisti-twong').textContent = getRepetitionofNum(
    numberN,
    1
  );
  document.querySelector('.get-hoisti-three').textContent = getRepetitionofNum(
    numberN,
    numbTwo
  );
  // !початок 14 - Методи масивів  filter, map, reduce і так далі
  // кінець 14 - Методи масивів  filter, map, reduce і так далі

  // !початок 15 - Cтрілкові функції
  //створення стрілкової функції
  const arrowFun = () => {
    console.log('стрілкова функція');
  };
  //Запуск стрілкової функції
  arrowFun();
  //створення стрілкової функції
  const arrowFunArgum = name => {
    console.log('стрілкова функція' + name);
  };
  //Запуск стрілкової функції
  arrowFunArgum('Виктор');
  //створення стрілкової функції
  const arrowFunTwiceArgum = (name, age) => {
    console.log('стрілкова функція' + name + ' Їй років ' + age);
  };

  //Запуск стрілкової функції
  arrowFunTwiceArgum('Виктор', 12);

  // Новий код
  function summmm(a, b) {
    return a + b;
  }
  function multy(a, b) {
    return a * b;
  }
  document.querySelector('.class-bi').addEventListener('click', () => {
    let res = summmm(34, 123);
    let ress = multy(34, 123);
    console.log(res + ' ' + ress);
    document.querySelector('.class-rez').textContent = res + ' ' + ress;
  });

  const aw = [4, 5, 6, 7, 8, 9];
  const awMult = 4;
  // map - пройтись по масиву і взяти почергово кожний елемент масиву
  const rezAw = aw.map(i => i ** awMult);
  document.querySelector('.class-rez1').textContent = rezAw;
  // кінець 15 - Cтрілкові функції

  //створення стрілкової функції
  const arrowFunSum = (num, nam) => {
    const x = num + nam;
    return x;
  };
  //Запуск стрілкової функції
  arrowFunSum(23, 12);

  //створення стрілкової функції
  const arrowFunSume = (num, nam) => num + nam;
  //Запуск стрілкової функції
  arrowFunSume(25, 3525);

  //створення стрілкової функції
  const arrowFunSumee = num => num + 545;

  arrowFunSumee(25);

  const arrr2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];
  // filter передае 2 значення item - значення,  index - індекс

  const rezArrr2 = arrr2.filter((item, index) => {
    if (item % 2 === 0) {
      return true;
    }
    // if (index % 2 !== 0) {
    //   return true;
    // }
  });

  document.querySelector('.class-rez2').textContent = rezArrr2;
  document.querySelector('.class-rez3').textContent = arrr2[item];
  // document.querySelector('.class-rez4').textContent = rezArrr2[index];

  // аргументи в стрілочній функції
  const f1 = (...arg) => {
    console.log(arg);
    console.log('не працює просто аргументи arguments');
  };
  f1();

  // !  функції callback - зрозуміти матеріал
  const arr5 = [7, 4, 5, 6, 8];

  const outPuttOne = document.querySelector('.out-put-1');
  const outPuttTwo = document.querySelector('.out-put-2');
  const outPuttThree = document.querySelector('.out-put-3');
  const outPuttFoure = document.querySelector('.out-put-4');

  const outPuttFive = document.querySelector('.out-put-5');
  const outPuttSix = document.querySelector('.out-put-6');

  function f2() {
    arr5[3] = arr5[3] * 2;
    outPuttOne.innerHTML = arr5;
    outPuttTwo.innerHTML = arr5[3];
    showFun(arr5, outPuttThree);
    showFun(arr5, outPuttFoure);
  }
  f2();

  function f3() {
    out = '';
    for (let i = 0; i < arr5.length; i++) {
      out += arr5[i] * 2;
    }
    showFun(out, outPuttFive);
  }
  //  f3();

  function showFun(array, outer) {
    let out = '';
    for (let i = 0; i < array.length; i++) {
      out += arr5[i] + ' ; ';
    }
    outer.innerHTML = out;
  }

  function sq(i) {
    return i ** 2;
  }
  const c = arr5.map(sq);
  outPuttFive.innerHTML = arr5;
  outPuttSix.innerHTML = c;
  // ! Контекст и функції Заміна контексту
  // область видимості змінних та змінна this(посилання на об`ект, який викликає код в даний момент )

  // !початок 16 - Створення базового To-Do List

  // кінець 16 - Створення базового To-Do List

  // !початок 17 - Обекти Примітиви 36:30

  // кінець 17 - Обекти Примітиви
});
