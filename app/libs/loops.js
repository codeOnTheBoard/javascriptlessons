'use strict';

document.addEventListener('DOMContentLoaded', () => {
  console.info(' ');
  console.info(' *** Усі цикли Javascript *** ');
  console.info(' ');

  console.info(' *** Цикли с параметрами *** ');

  for (let i = 0; i < 10; i++) {
    console.log(i);
  }

  console.info('Змінна іі окремо від самого цикла ');
  let ii = 0;
  for (; ii < 10; ) {
    console.log(ii);
    ii++;
  }
  console.info(' ');
  console.info(' Цикл із передумовою / цикл с предусловием ');

  let pp = 0;

  while (pp < 10) {
    console.log(pp);
    pp++;
  }
  console.info(' ');

  let ppp = 100;
  while (ppp > 10) {
    console.log(ppp);
    ppp--;
  }

  console.info(' ');
  console.info(' Цикл із післяумовою / цикл с послеусловием ');
  console.info(' ');

  console.info(
    'Змінна дорівнює 1, поки змінна меньше 0, інкременація постфіксна  '
  );
  let tt = 1;

  do {
    console.log(tt < 0);
    tt++;
  } while (tt < 0);

  console.info(' ');
  console.info(
    '*** Перехід до наступної ітерації / переход к следующей итерации ***'
  );
  console.info(
    '*** Якщо змінну ділять на 2 и в залишку віддає 1 крок пропускається ***'
  );

  for (let i = 0; i < 10; i++) {
    if (i % 2 == 1) continue;
    console.log(i);
  }

  console.info(' ');
  console.info(' Переривання циклу / преривание цикла ');

  console.info(
    ' Якщо задана змінна задана 2 , цикл закінчити та вийти з циклу '
  );
  let e = 0;
  let s = 2;
  while (e < 7) {
    if (s == 2) break;
    console.log(s);
    s++;
  }

  console.info(' ');
  console.info(' Використання міток у циклі / использование меток в цикле ');

  outer: for (let i = 0; i < 10; i++) {
    for (let j = 0; j < 10; j++) {
      if (j == 4) break outer;
      console.log(j);
    }
  }
  /**
   *
   *  ! бескінечний цикл
   *
   * let infinity = 0;
   *
   * while (infinity < 1) {
   * console.log(infinity);
   * infinity++ // забули прописати цей рядок і цикл віддає завжди true
   * }
   */

  console.info('Форма інкремента має значення');
  console.log(' Використання префиксної форми інкремента в циклі');
  console.info(' ');
  let postfix = 0;
  while (++postfix < 4) {
    console.log('Вивожу змінну postfix в цикле : ', postfix);
  }

  console.info(' ');

  console.info(' *** Використання постфіксної формі інкременту в циклі *** ');

  while (postfix++ < 4) {
    console.log(postfix);
  }

  /**префіксна форма інкремента
   * ітерация   ++prefix     (++prefix < 4)   console.log
   *    1           1         1 < 4(true)      1
   *    2           2         2 < 4(true)      2
   *    3           3         3 < 4(true)      3
   *    4           4         4 < 4(false)     -
   *
   */
  /**постфіксна форма інкремента
   * ітерация   prefix++     (prefix++ < 4)   console.log
   *    1           1         0 < 4(true)      1
   *    2           2         1 < 4(true)      2
   *    3           3         2 < 4(true)      3
   *    4           4         3 < 4(true)      4
   *    5           -         4 < 4(false)     -
   *
   */
  console.info(' ');
});
