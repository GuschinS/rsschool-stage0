import _ from 'lodash';
// import { showTime } from './js/time'
import { sessionStorageFunction } from './js/storage';
// import { selectedLanguage } from './js/greeting';

import './css/style.css'
import './css/owfont-regular.css'
import './js/time'
import './js/greeting'
import './js/slider'
import './js/weather'
import './js/quotes'
import './js/player'
import './js/volume'
import './js/settings'
import './js/rapidapi'
import './js/change-settings'
import './js/translate-settings'
import './js/todo'

const exec = `1. Часы и календарь +15\n
2. Приветствие +10\n
3. Смена фонового изображения +20\n
4. Виджет погоды +15\n
5. Виджет цитата дня +10\n
6. Аудиоплеер +15\n
7. Продвинутый аудиоплеер (реализуется без использования библиотек) +20\n
8. Перевод приложения на два языка (en/ru или en/be) +15\n
9. Получение фонового изображения от API +10\n
10. Настройки приложения +20\n
11. Дополнительный функционал на выбор +10\n
ИТОГО: 160`

console.log(exec);

sessionStorageFunction()





