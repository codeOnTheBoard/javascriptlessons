'use strict';
/* eslint-disable no-console */
document.addEventListener('DOMContentLoaded', () => {
  console.info('Програма вивчення JS ');

  console.info('Програма вивчення JS ');

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
  function printBorder(title = '', length = 130) {
    const line = '─'.repeat(length);

    if (title) {
      console.log(
        ` %c ${line} %c ${title}  %c ${line}`,
        'color: #3b82f6; font-weight: bold;',
        'background: #3b82f6; color: #fff;margin:10px 0;font-size:22px;letter-spacing:4px; font-weight: bold; padding: 5px 6px; border-radius: 4px;',
        'color: #3b82f6; font-weight: bold;'
      );
    } else {
      console.log(`%c${line}`, 'color: #3b82f6; font-weight: bold;');
    }
  }
  // Оголошуем стилі для блоків
  const pNumber = 1054;
  const userName = 'Олексій';
  const styleHeader =
    'background: #2b2d42; font-size:24px; color: #0369a1;  font-weight: bold; padding: 4px 8px; border-radius: 4px;';
  const styleOutput =
    'background: #e0f2fe; color: #0369a1; padding: 2px 6px; border-left: 4px solid #0284c7; font-family: monospace;';
  const styleError =
    'background: #fee2e2; color: #991b1b; padding: 2px 6px; border-left: 4px solid #dc2626;';
  printBorder('БЛОК 0: Тестування розділення блоків', 30);
  // Приклад використання:
  console.log(
    `%c Обробка даних користувача: ID ${pNumber} | Ім'я: ${userName} `,
    styleHeader
  );
  console.log('%c Результат: { id: 42, status: "active" } ', styleOutput);
  console.log('%c Результат: { id: 42, status: "active" } ', styleError);

  const logger = {
    block: title =>
      console.log(
        `%c🚀 ${title}`,
        'background: #4A5568; color: #FFF; padding: 3px 6px; font-weight: bold; border-radius: 3px;'
      ),
    result: data =>
      console.log('%cOUT ➔', 'color: #38A169; font-weight: bold;', data),
    info: msg => console.log('%cINFO', 'color: #3182CE;', msg),
  };

  // Використання:
  logger.block('Завантаження модулів');
  logger.info("З'єднання з сервером...");
  logger.result({ status: 200, data: 'OK' });

  const fSling =
    'background: #F5F5DC; font-size:20px; color: #0284c7; padding: 4px 8px; border-radius: 4px 0 0 4px; font-weight: bold;';
  const sSlink =
    'background: #0284c7; font-size:20px; color: #fff; padding: 4px 8px; border-radius: 0 4px 4px 0; font-weight: bold;';

  console.log(
    `%c Я Виводжу нову строчку з результатом  %c № ${pNumber} `,
    fSling,
    sSlink
  );
  const ikhkh =
    'background: #f5f5dc; font-size:20px; color: #0284c7; padding: 4px 8px; border-radius: 4px 0 0 4px; font-weight: bold;';
  const tuuyy =
    'background: #0284c7; font-size:20px; color: #f5f5dc; padding: 4px 8px; border-radius: 0 4px 4px 0; font-weight: bold;';

  console.log(`%c Нове вводне %c № ${878} `, ikhkh, tuuyy);
  const uiu =
    'background: #f5f5dc; font-size:20px; color: #0284c7; padding: 4px 8px; border-radius: 4px 0 0 4px; font-weight: bold;';
  const uiu222 =
    'background: #0284c7; font-size:20px; color: #f5f5dc; padding: 4px 8px; border-radius: 0 4px 4px 0; font-weight: bold;';
  const uiu223 =
    'background: #0c4967; font-size:20px; color: #f5f5dc; margin-left:3px; padding: 4px 8px; border-radius: 4px 4px 4px 4px; font-weight: bold;';

  console.log(`%c Обробка даних користувача: %c № ${76666} `, uiu, uiu222);
  console.log(
    `%c Обробка даних користувача: %c Користувач - ${76666} %c Користувач2 - ${74455} `,
    uiu,
    uiu222,
    uiu223
  );

  printBorder('БЛОК 0: Кінець', 30);
  printBorder('', 190);
});
