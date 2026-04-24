'use strict';
/* ================================================================
   DARUL HADIS PRO -- app.js
   SM-2 spaced repetition, full بين يديك content, premium UX
   ================================================================ */

/* ===== CONTENT: بين يديك ====================================== */
const BOOKS = [
  {
    id: 'byy',
    ar: 'بين يديك',
    title: 'Аль-Арабия бейна ядейк',
    subtitle: 'Арабский между твоих рук',
    available: true,
    parts: [
      /* ---- ЧАСТЬ 1 ---- */
      {
        id: 'byy-p1', num: 1, title: 'Часть 1', available: true,
        units: [
          {
            id: 'byy-p1-u1', num: 1, name: 'Приветствие и знакомство',
            words: [
              ['اَلسَّلَامُ عَلَيْكُمْ','Мир вам'], ['وَعَلَيْكُمُ السَّلَامُ','И вам мир'],
              ['مَرْحَبًا','Привет / Добро пожаловать'], ['أَهْلًا وَسَهْلًا','Добро пожаловать'],
              ['صَبَاحُ الْخَيْرِ','Доброе утро'], ['صَبَاحُ النُّورِ','Доброе утро (ответ)'],
              ['مَسَاءُ الْخَيْرِ','Добрый вечер'], ['مَسَاءُ النُّورِ','Добрый вечер (ответ)'],
              ['كَيْفَ حَالُكَ؟','Как дела? (муж.)'], ['كَيْفَ حَالُكِ؟','Как дела? (жен.)'],
              ['بِخَيْرٍ، شُكْرًا','Хорошо, спасибо'], ['الْحَمْدُ لِلَّهِ','Хвала Аллаху'],
              ['مَا اسْمُكَ؟','Как тебя зовут? (муж.)'], ['مَا اسْمُكِ؟','Как тебя зовут? (жен.)'],
              ['اِسْمِي','Меня зовут'], ['مِنْ أَيْنَ أَنْتَ؟','Откуда ты? (муж.)'],
              ['مِنْ أَيْنَ أَنْتِ؟','Откуда ты? (жен.)'], ['أَنَا مِنَ السُّعُودِيَّةِ','Я из Саудовской Аравии'],
              ['أَنَا','Я'], ['أَنْتَ','Ты (муж.)'], ['أَنْتِ','Ты (жен.)'],
              ['هُوَ','Он'], ['هِيَ','Она'], ['نَعَمْ','Да'],
              ['لَا','Нет'], ['شُكْرًا','Спасибо'], ['عَفْوًا','Пожалуйста / Не за что'],
              ['مَعَ السَّلَامَةِ','До свидания'], ['إِلَى اللِّقَاءِ','До встречи'],
              ['طَالِبٌ','Студент'], ['طَالِبَةٌ','Студентка'],
              ['مُدَرِّسٌ','Учитель'], ['مُدَرِّسَةٌ','Учительница'],
              ['جِنْسِيَّةٌ','Национальность'], ['مِنْ','Из'],
            ]
          },
          {
            id: 'byy-p1-u2', num: 2, name: 'Семья',
            words: [
              ['أَبٌ','Отец'], ['أُمٌّ','Мать'], ['أَخٌ','Брат'], ['أُخْتٌ','Сестра'],
              ['اِبْنٌ','Сын'], ['اِبْنَةٌ','Дочь'], ['جَدٌّ','Дедушка'], ['جَدَّةٌ','Бабушка'],
              ['عَمٌّ','Дядя (по отцу)'], ['عَمَّةٌ','Тётя (по отцу)'],
              ['خَالٌ','Дядя (по матери)'], ['خَالَةٌ','Тётя (по матери)'],
              ['زَوْجٌ','Муж'], ['زَوْجَةٌ','Жена'],
              ['أَوْلَادٌ','Дети'], ['بِنْتٌ','Девочка / Дочь'],
              ['وَلَدٌ','Мальчик / Сын'], ['أُسْرَةٌ','Семья'],
              ['وَالِدٌ','Отец'], ['وَالِدَةٌ','Мать'],
              ['كَبِيرٌ','Старший / большой'], ['صَغِيرٌ','Младший / маленький'],
              ['هٰذَا','Это (муж.)'], ['هٰذِهِ','Это (жен.)'],
              ['وَ','И'], ['مَنْ؟','Кто?'],
            ]
          },
          {
            id: 'byy-p1-u3', num: 3, name: 'Школа и принадлежности',
            words: [
              ['كِتَابٌ','Книга'], ['دَفْتَرٌ','Тетрадь'], ['قَلَمٌ','Ручка / Карандаш'],
              ['مِسْطَرَةٌ','Линейка'], ['مِمْحَاةٌ','Ластик'], ['حَقِيبَةٌ','Сумка / Портфель'],
              ['مَدْرَسَةٌ','Школа'], ['فَصْلٌ','Класс'], ['سَبُّورَةٌ','Доска'],
              ['مَكْتَبٌ','Стол / Парта'], ['كُرْسِيٌّ','Стул'],
              ['بَابٌ','Дверь'], ['نَافِذَةٌ','Окно'],
              ['مُعَلِّمٌ','Учитель'], ['مُعَلِّمَةٌ','Учительница'],
              ['عَلَى','На (поверхность)'], ['فِي','В'], ['تَحْتَ','Под'],
              ['أَيْنَ؟','Где?'], ['هُنَا','Здесь'], ['هُنَاكَ','Там'],
              ['مَا هٰذَا؟','Что это?'], ['هٰذَا كِتَابٌ','Это книга'],
            ]
          },
          {
            id: 'byy-p1-u4', num: 4, name: 'Дом и комнаты',
            words: [
              ['بَيْتٌ','Дом'], ['غُرْفَةٌ','Комната'], ['غُرْفَةُ النَّوْمِ','Спальня'],
              ['غُرْفَةُ الْجُلُوسِ','Гостиная'], ['الْمَطْبَخُ','Кухня'],
              ['الْحَمَّامُ','Ванная'], ['الصَّالَةُ','Коридор / Зал'],
              ['بَابٌ','Дверь'], ['نَافِذَةٌ','Окно'], ['جِدَارٌ','Стена'],
              ['سَقْفٌ','Потолок'], ['أَرْضٌ','Пол'], ['سُلَّمٌ','Лестница'],
              ['مَطْبَخٌ','Кухня'], ['ثَلَّاجَةٌ','Холодильник'],
              ['سَرِيرٌ','Кровать'], ['طَاوِلَةٌ','Стол'],
              ['تِلِفِزْيُونٌ','Телевизор'], ['هَاتِفٌ','Телефон'],
              ['كَبِيرٌ','Большой'], ['صَغِيرٌ','Маленький'],
              ['جَمِيلٌ','Красивый'], ['قَدِيمٌ','Старый'], ['جَدِيدٌ','Новый'],
            ]
          },
          {
            id: 'byy-p1-u5', num: 5, name: 'Числа и счёт',
            words: [
              ['وَاحِدٌ','Один'], ['اِثْنَانِ','Два'], ['ثَلَاثَةٌ','Три'],
              ['أَرْبَعَةٌ','Четыре'], ['خَمْسَةٌ','Пять'], ['سِتَّةٌ','Шесть'],
              ['سَبْعَةٌ','Семь'], ['ثَمَانِيَةٌ','Восемь'], ['تِسْعَةٌ','Девять'],
              ['عَشَرَةٌ','Десять'], ['أَحَدَ عَشَرَ','Одиннадцать'], ['اِثْنَا عَشَرَ','Двенадцать'],
              ['عِشْرُونَ','Двадцать'], ['ثَلَاثُونَ','Тридцать'],
              ['أَرْبَعُونَ','Сорок'], ['خَمْسُونَ','Пятьдесят'],
              ['مِئَةٌ','Сто'], ['أَلْفٌ','Тысяча'],
              ['كَمْ؟','Сколько?'], ['عُمْرٌ','Возраст'],
              ['سَنَةٌ','Год'], ['شَهْرٌ','Месяц'], ['يَوْمٌ','День'],
              ['أُسْبُوعٌ','Неделя'],
            ]
          },
          {
            id: 'byy-p1-u6', num: 6, name: 'Цвета',
            words: [
              ['أَحْمَرُ','Красный'], ['أَزْرَقُ','Синий'], ['أَخْضَرُ','Зелёный'],
              ['أَصْفَرُ','Жёлтый'], ['أَبْيَضُ','Белый'], ['أَسْوَدُ','Чёрный'],
              ['بُنِّيٌّ','Коричневый'], ['بُرْتُقَالِيٌّ','Оранжевый'],
              ['وَرْدِيٌّ','Розовый'], ['رَمَادِيٌّ','Серый'], ['بَنَفْسَجِيٌّ','Фиолетовый'],
              ['فَاتِحٌ','Светлый'], ['غَامِقٌ','Тёмный'],
              ['لَوْنٌ','Цвет'], ['مَا لَوْنُ هٰذَا؟','Какого цвета это?'],
              ['جَمِيلٌ','Красивый'], ['قَبِيحٌ','Некрасивый'],
            ]
          },
          {
            id: 'byy-p1-u7', num: 7, name: 'Еда и напитки',
            words: [
              ['طَعَامٌ','Еда'], ['شَرَابٌ','Напиток'], ['مَاءٌ','Вода'],
              ['عَصِيرٌ','Сок'], ['شَايٌ','Чай'], ['قَهْوَةٌ','Кофе'],
              ['حَلِيبٌ','Молоко'], ['خُبْزٌ','Хлеб'], ['أَرُزٌّ','Рис'],
              ['لَحْمٌ','Мясо'], ['دَجَاجٌ','Курица'], ['سَمَكٌ','Рыба'],
              ['خُضَرٌ','Овощи'], ['فَاكِهَةٌ','Фрукты'], ['تُفَّاحَةٌ','Яблоко'],
              ['مَوْزٌ','Банан'], ['تَمْرٌ','Финик'], ['حُلْوٌ','Сладкий'],
              ['مَالِحٌ','Солёный'], ['لَذِيذٌ','Вкусный'],
              ['أُرِيدُ','Я хочу'], ['مِنْ فَضْلِكَ','Пожалуйста'],
              ['الْفَاتِحَةُ','Аль-Фатиха (сура)'],
            ]
          },
          {
            id: 'byy-p1-u8', num: 8, name: 'Время и дни недели',
            words: [
              ['السَّاعَةُ','Час / Время'], ['الْآنَ','Сейчас'], ['الْيَوْمَ','Сегодня'],
              ['غَدًا','Завтра'], ['أَمْسِ','Вчера'], ['الصَّبَاحُ','Утро'],
              ['الظُّهْرُ','Полдень'], ['الْعَصْرُ','Послеполудень'], ['الْمَسَاءُ','Вечер'],
              ['اللَّيْلُ','Ночь'], ['الْيَوْمُ الْأَوَّلُ','Первый день'],
              ['الْأَحَدُ','Воскресенье'], ['الْاِثْنَيْنُ','Понедельник'],
              ['الثُّلَاثَاءُ','Вторник'], ['الْأَرْبِعَاءُ','Среда'],
              ['الْخَمِيسُ','Четверг'], ['الْجُمُعَةُ','Пятница'],
              ['السَّبْتُ','Суббота'],
              ['الصَّلَاةُ','Молитва'], ['الْفَجْرُ','Фаджр (утренняя молитва)'],
              ['الظُّهْرُ','Зухр (полуденная молитва)'], ['الْعِشَاءُ','Иша (ночная молитва)'],
              ['رَمَضَانُ','Рамадан'], ['الْجُمُعَةُ','Пятница (джума)'],
            ]
          },
        ]
      },

      /* ---- ЧАСТЬ 2 ---- */
      {
        id: 'byy-p2', num: 2, title: 'Часть 2', available: true,
        units: [
          {
            id: 'byy-p2-u1', num: 1, name: 'Профессии и занятия',
            words: [
              ['طَبِيبٌ','Врач (муж.)'], ['طَبِيبَةٌ','Врач (жен.)'],
              ['مُهَنْدِسٌ','Инженер'], ['مُحَاسِبٌ','Бухгалтер'],
              ['مُحَامٍ','Адвокат'], ['تَاجِرٌ','Торговец'],
              ['مُوَظَّفٌ','Служащий'], ['فَلَّاحٌ','Фермер'],
              ['شُرْطِيٌّ','Полицейский'], ['جُنْدِيٌّ','Солдат'],
              ['طَبَّاخٌ','Повар'], ['سَائِقٌ','Водитель'],
              ['مِمَرِّضٌ','Медбрат'], ['مُمَرِّضَةٌ','Медсестра'],
              ['مَاذَا تَعْمَلُ؟','Кем ты работаешь? (муж.)'],
              ['مَاذَا تَعْمَلِينَ؟','Кем ты работаешь? (жен.)'],
              ['أَعْمَلُ طَبِيبًا','Я работаю врачом'],
              ['عَمَلٌ','Работа / Дело'],
            ]
          },
          {
            id: 'byy-p2-u2', num: 2, name: 'В городе',
            words: [
              ['مَدِينَةٌ','Город'], ['شَارِعٌ','Улица'], ['بَيْتٌ','Дом'],
              ['مَسْجِدٌ','Мечеть'], ['دُكَّانٌ','Магазин'], ['سُوقٌ','Рынок'],
              ['مَطْعَمٌ','Ресторан'], ['مُسْتَشْفًى','Больница'],
              ['مَدْرَسَةٌ','Школа'], ['جَامِعَةٌ','Университет'],
              ['مَكْتَبَةٌ','Библиотека / Книжный магазин'],
              ['مَطَارٌ','Аэропорт'], ['مَحَطَّةٌ','Станция'],
              ['بَنْكٌ','Банк'], ['صَيْدَلِيَّةٌ','Аптека'],
              ['قَرِيبٌ','Близко'], ['بَعِيدٌ','Далеко'],
              ['عَلَى الْيَمِينِ','Направо'], ['عَلَى الْيَسَارِ','Налево'],
              ['أَمَامَ','Перед'], ['خَلْفَ','За / Сзади'],
            ]
          },
          {
            id: 'byy-p2-u3', num: 3, name: 'Транспорт',
            words: [
              ['سَيَّارَةٌ','Машина'], ['حَافِلَةٌ','Автобус'],
              ['قِطَارٌ','Поезд'], ['طَائِرَةٌ','Самолёт'],
              ['سَفِينَةٌ','Корабль'], ['دَرَّاجَةٌ','Велосипед'],
              ['تَاكْسِي','Такси'], ['مِتْرُو','Метро'],
              ['ذَهَبَ','Пошёл / Поехал'], ['رَجَعَ','Вернулся'],
              ['رَكِبَ','Сел (в транспорт)'], ['نَزَلَ','Вышел (из транспорта)'],
              ['أَيْنَ الْمَحَطَّةُ؟','Где станция?'],
              ['كَمِ الْأُجْرَةُ؟','Сколько стоит проезд?'],
              ['هَلْ هٰذَا الطَّرِيقُ إِلَى...؟','Это дорога до...?'],
              ['مُبَاشَرَةً','Прямо'], ['يَسَارًا','Налево'], ['يَمِينًا','Направо'],
            ]
          },
          {
            id: 'byy-p2-u4', num: 4, name: 'Тело и здоровье',
            words: [
              ['رَأْسٌ','Голова'], ['وَجْهٌ','Лицо'], ['عَيْنٌ','Глаз'],
              ['أُذُنٌ','Ухо'], ['أَنْفٌ','Нос'], ['فَمٌ','Рот'],
              ['يَدٌ','Рука'], ['رِجْلٌ','Нога'], ['قَلْبٌ','Сердце'],
              ['بَطْنٌ','Живот'], ['ظَهْرٌ','Спина'],
              ['مَرِيضٌ','Больной'], ['صَحِيحٌ','Здоровый'],
              ['أَلَمٌ','Боль'], ['عِنْدِي أَلَمٌ','У меня болит'],
              ['دَوَاءٌ','Лекарство'], ['طَبِيبٌ','Врач'],
              ['مُسْتَشْفًى','Больница'], ['حُمَّى','Жар / Температура'],
              ['صُدَاعٌ','Головная боль'],
            ]
          },
          {
            id: 'byy-p2-u5', num: 5, name: 'Природа и погода',
            words: [
              ['شَمْسٌ','Солнце'], ['قَمَرٌ','Луна'], ['نَجْمٌ','Звезда'],
              ['سَمَاءٌ','Небо'], ['غَيْمَةٌ','Облако'], ['مَطَرٌ','Дождь'],
              ['ثَلْجٌ','Снег'], ['رِيحٌ','Ветер'], ['بَحْرٌ','Море'],
              ['نَهْرٌ','Река'], ['جَبَلٌ','Гора'], ['صَحْرَاءُ','Пустыня'],
              ['شَجَرَةٌ','Дерево'], ['زَهْرَةٌ','Цветок'], ['عُشْبٌ','Трава'],
              ['حَارٌّ','Жаркий'], ['بَارِدٌ','Холодный'],
              ['الطَّقْسُ جَمِيلٌ','Погода хорошая'],
              ['كَيْفَ الطَّقْسُ؟','Какая погода?'],
            ]
          },
          {
            id: 'byy-p2-u6', num: 6, name: 'Покупки и рынок',
            words: [
              ['سُوقٌ','Рынок / Базар'], ['دُكَّانٌ','Магазин'],
              ['بَائِعٌ','Продавец'], ['مُشْتَرٍ','Покупатель'],
              ['ثَمَنٌ','Цена'], ['غَالٍ','Дорогой'], ['رَخِيصٌ','Дешёвый'],
              ['كَمْ؟','Сколько?'], ['بِكَمْ هٰذَا؟','Сколько это стоит?'],
              ['أُرِيدُ','Я хочу'], ['أَشْتَرِي','Я покупаю'],
              ['دَفَعَ','Заплатил'], ['حِسَابٌ','Счёт'],
              ['نُقُودٌ','Деньги'], ['رِيَالٌ','Риял'],
              ['هَلْ عِنْدَكَ...؟','Есть ли у тебя...?'],
              ['لَيْسَ عِنْدِي','У меня нет'],
            ]
          },
          {
            id: 'byy-p2-u7', num: 7, name: 'Хобби и свободное время',
            words: [
              ['هِوَايَةٌ','Хобби'], ['قَرَأَ','Читал'], ['كَتَبَ','Писал'],
              ['لَعِبَ','Играл'], ['سَبَحَ','Плавал'], ['رَكَضَ','Бегал'],
              ['سَافَرَ','Путешествовал'], ['طَبَخَ','Готовил'],
              ['رَسَمَ','Рисовал'], ['غَنَّى','Пел'],
              ['كُرَةُ الْقَدَمِ','Футбол'], ['كُرَةُ السَّلَّةِ','Баскетбол'],
              ['سِبَاحَةٌ','Плавание'], ['قِرَاءَةٌ','Чтение'],
              ['أُحِبُّ','Я люблю'], ['لَا أُحِبُّ','Я не люблю'],
              ['مُفَضَّلٌ','Любимый'], ['مُمْتِعٌ','Интересный / Весёлый'],
            ]
          },
          {
            id: 'byy-p2-u8', num: 8, name: 'Ислам и поклонение',
            words: [
              ['الصَّلَاةُ','Молитва'], ['الصَّوْمُ','Пост'], ['الزَّكَاةُ','Закят'],
              ['الْحَجُّ','Хадж'], ['الشَّهَادَةُ','Свидетельство / Шахада'],
              ['اَللَّهُ أَكْبَرُ','Аллах Велик'], ['سُبْحَانَ اللَّهِ','Слава Аллаху'],
              ['اَلْحَمْدُ لِلَّهِ','Хвала Аллаху'], ['لَا إِلَهَ إِلَّا اللَّهُ','Нет бога кроме Аллаха'],
              ['بِسْمِ اللَّهِ','С именем Аллаха'], ['إِنْ شَاءَ اللَّهُ','Если пожелает Аллах'],
              ['مَا شَاءَ اللَّهُ','Как пожелал Аллах'], ['جَزَاكَ اللَّهُ خَيْرًا','Да воздаст тебе Аллах благом'],
              ['أَعُوذُ بِاللَّهِ','Прибегаю к защите Аллаха'],
              ['الْقُرْآنُ','Коран'], ['السُّنَّةُ','Сунна'],
              ['الْمَسْجِدُ','Мечеть'], ['الْإِمَامُ','Имам'],
              ['الْوُضُوءُ','Омовение (вуду)'], ['الصِّيَامُ','Пост'],
            ]
          },
        ]
      },

      /* ---- ЧАСТЬ 3 ---- */
      {
        id: 'byy-p3', num: 3, title: 'Часть 3', available: true,
        units: [
          {
            id: 'byy-p3-u1', num: 1, name: 'Описание людей',
            words: [
              ['طَوِيلٌ','Высокий'], ['قَصِيرٌ','Низкий / Короткий'],
              ['سَمِينٌ','Толстый'], ['نَحِيفٌ','Худой'],
              ['جَمِيلٌ','Красивый'], ['وَسِيمٌ','Красивый (о муж.)'],
              ['شَابٌّ','Молодой'], ['عَجُوزٌ','Старый / Пожилой'],
              ['ذَكِيٌّ','Умный'], ['غَبِيٌّ','Глупый'],
              ['كَرِيمٌ','Щедрый'], ['بَخِيلٌ','Жадный'],
              ['صَادِقٌ','Честный'], ['كَاذِبٌ','Лжец'],
              ['شُجَاعٌ','Смелый'], ['جَبَانٌ','Трусливый'],
              ['مُجْتَهِدٌ','Прилежный / Старательный'],
              ['كَسُولٌ','Ленивый'],
              ['لَطِيفٌ','Любезный / Мягкий'], ['قَاسٍ','Жёсткий / Суровый'],
            ]
          },
          {
            id: 'byy-p3-u2', num: 2, name: 'Глаголы движения',
            words: [
              ['ذَهَبَ','Пошёл'], ['جَاءَ','Пришёл'], ['رَجَعَ','Вернулся'],
              ['دَخَلَ','Вошёл'], ['خَرَجَ','Вышел'], ['صَعِدَ','Поднялся'],
              ['نَزَلَ','Спустился'], ['وَقَفَ','Остановился'],
              ['جَلَسَ','Сел'], ['قَامَ','Встал'], ['مَشَى','Шёл пешком'],
              ['رَكَضَ','Побежал'], ['سَبَحَ','Поплыл'],
              ['طَارَ','Полетел'], ['فَتَحَ','Открыл'], ['أَغْلَقَ','Закрыл'],
            ]
          },
          {
            id: 'byy-p3-u3', num: 3, name: 'Глаголы речи и мышления',
            words: [
              ['قَالَ','Сказал'], ['سَأَلَ','Спросил'], ['أَجَابَ','Ответил'],
              ['فَهِمَ','Понял'], ['عَرَفَ','Знал / Узнал'],
              ['فَكَّرَ','Думал'], ['ذَكَرَ','Упомянул / Вспомнил'],
              ['نَسِيَ','Забыл'], ['عَلَّمَ','Учил (кого-то)'],
              ['تَعَلَّمَ','Учился'], ['دَرَسَ','Учился / Изучал'],
              ['قَرَأَ','Читал'], ['كَتَبَ','Писал'],
              ['شَرَحَ','Объяснил'], ['فَسَّرَ','Истолковал'],
            ]
          },
          {
            id: 'byy-p3-u4', num: 4, name: 'Прилагательные и антонимы',
            words: [
              ['كَبِيرٌ','Большой'], ['صَغِيرٌ','Маленький'],
              ['طَوِيلٌ','Длинный / Высокий'], ['قَصِيرٌ','Короткий / Низкий'],
              ['ثَقِيلٌ','Тяжёлый'], ['خَفِيفٌ','Лёгкий'],
              ['سَرِيعٌ','Быстрый'], ['بَطِيءٌ','Медленный'],
              ['جَدِيدٌ','Новый'], ['قَدِيمٌ','Старый'],
              ['صَعْبٌ','Трудный'], ['سَهْلٌ','Лёгкий / Простой'],
              ['بَعِيدٌ','Далёкий'], ['قَرِيبٌ','Близкий'],
              ['غَالٍ','Дорогой'], ['رَخِيصٌ','Дешёвый'],
              ['نَظِيفٌ','Чистый'], ['وَسِخٌ','Грязный'],
              ['حَارٌّ','Горячий'], ['بَارِدٌ','Холодный'],
            ]
          },
          {
            id: 'byy-p3-u5', num: 5, name: 'Предлоги и наречия',
            words: [
              ['فِي','В'], ['عَلَى','На'], ['مِنْ','Из / От'],
              ['إِلَى','К / До'], ['مَعَ','С / Вместе с'],
              ['عَنْ','О / Про / От'], ['بِ','С / При помощи'],
              ['لِ','Для / Ради'], ['بَيْنَ','Между'],
              ['أَمَامَ','Перед'], ['خَلْفَ','За / Сзади'],
              ['فَوْقَ','Над'], ['تَحْتَ','Под'],
              ['يَمِينَ','Справа'], ['يَسَارَ','Слева'],
              ['هُنَا','Здесь'], ['هُنَاكَ','Там'],
              ['الْآنَ','Сейчас'], ['غَدًا','Завтра'],
              ['أَمْسِ','Вчера'],
            ]
          },
          {
            id: 'byy-p3-u6', num: 6, name: 'Вопросительные слова',
            words: [
              ['مَنْ؟','Кто?'], ['مَا؟','Что?'], ['مَاذَا؟','Что? (в действии)'],
              ['أَيْنَ؟','Где?'], ['مِنْ أَيْنَ؟','Откуда?'],
              ['إِلَى أَيْنَ؟','Куда?'], ['مَتَى؟','Когда?'],
              ['كَيْفَ؟','Как?'], ['لِمَاذَا؟','Почему?'],
              ['لِأَنَّ','Потому что'], ['كَمْ؟','Сколько?'],
              ['أَيُّ؟','Какой?'], ['هَلْ؟','Ли? (вопрос)'],
              ['أَ؟','Ли? (вопрос)'],
            ]
          },
          {
            id: 'byy-p3-u7', num: 7, name: 'Прошедшее время',
            words: [
              ['أَكَلَ','Ел'], ['شَرِبَ','Пил'], ['نَامَ','Спал'],
              ['صَلَّى','Молился'], ['صَامَ','Постился'], ['دَعَا','Молился / Звал'],
              ['عَمِلَ','Работал'], ['تَكَلَّمَ','Разговаривал'],
              ['لَبِسَ','Надел / Оделся'], ['خَلَعَ','Снял (одежду)'],
              ['شَاهَدَ','Смотрел'], ['سَمِعَ','Слышал'],
              ['لَمَسَ','Трогал'], ['شَمَّ','Чувствовал запах'],
              ['اِشْتَرَى','Купил'], ['بَاعَ','Продал'],
            ]
          },
          {
            id: 'byy-p3-u8', num: 8, name: 'Настоящее и будущее время',
            words: [
              ['يَأْكُلُ','Ест'], ['يَشْرَبُ','Пьёт'], ['يَنَامُ','Спит'],
              ['يُصَلِّي','Молится'], ['يَعْمَلُ','Работает'],
              ['يَتَكَلَّمُ','Разговаривает'], ['يَدْرُسُ','Учится'],
              ['يَقْرَأُ','Читает'], ['يَكْتُبُ','Пишет'],
              ['سَيَذْهَبُ','Пойдёт'], ['سَيَجِيءُ','Придёт'],
              ['سَأَشْتَرِي','Я куплю'], ['سَوْفَ','Будет (маркер будущего)'],
              ['يُرِيدُ','Хочет'], ['يُحِبُّ','Любит'],
              ['يَسْتَطِيعُ','Может / Способен'],
            ]
          },
        ]
      },

      /* ---- ЧАСТЬ 4 ---- */
      {
        id: 'byy-p4', num: 4, title: 'Часть 4', available: true,
        units: [
          {
            id: 'byy-p4-u1', num: 1, name: 'В ресторане', locked: false,
            words: [
              ['مَطْعَمٌ','Ресторан'], ['قَائِمَةُ الطَّعَامِ','Меню'],
              ['طَلَبَ','Заказал'], ['نَادِلٌ','Официант'],
              ['طَبَقٌ','Блюдо'], ['شُورَبَةٌ','Суп'],
              ['سَلَطَةٌ','Салат'], ['عَصِيرٌ طَازَجٌ','Свежий сок'],
              ['الْحِسَابَ مِنْ فَضْلِكَ','Счёт, пожалуйста'],
              ['لَذِيذٌ','Вкусный'], ['مَا شَهِيَّتُكَ؟','Что тебе нравится?'],
              ['أَنَا جَائِعٌ','Я голоден'], ['أَنَا عَطْشَانٌ','Я хочу пить'],
              ['كَافِيَةٌ','Достаточно'], ['شُكْرًا جَزِيلًا','Большое спасибо'],
            ]
          },
          {
            id: 'byy-p4-u2', num: 2, name: 'В магазине одежды',
            words: [
              ['مَلَابِسُ','Одежда'], ['قَمِيصٌ','Рубашка'],
              ['بَنْطَلُونٌ','Брюки'], ['فُسْتَانٌ','Платье'],
              ['جَاكِيتٌ','Куртка / Пиджак'], ['حِذَاءٌ','Туфли / Обувь'],
              ['جَوْرَبٌ','Носки'], ['قُبَّعَةٌ','Шапка / Шляпа'],
              ['مِقَاسٌ','Размер'], ['لَوْنٌ','Цвет'],
              ['أُرِيدُ أَنْ أُجَرِّبَ','Я хочу примерить'],
              ['يُنَاسِبُنِي','Мне подходит'], ['لَا يُنَاسِبُنِي','Мне не подходит'],
              ['كَبِيرٌ','Большой (о размере)'], ['صَغِيرٌ','Маленький (о размере)'],
            ]
          },
          {
            id: 'byy-p4-u3', num: 3, name: 'Путешествие и отель',
            words: [
              ['فُنْدُقٌ','Отель'], ['غُرْفَةٌ','Номер / Комната'],
              ['حَجَزَ','Забронировал'], ['وَصَلَ','Прибыл'],
              ['غَادَرَ','Уехал'], ['مِفْتَاحٌ','Ключ'],
              ['جَوَازُ السَّفَرِ','Паспорт'], ['تَأْشِيرَةٌ','Виза'],
              ['رِحْلَةٌ','Поездка / Путешествие'],
              ['مَتَى يَقْلَعُ الطَّائِرَةُ؟','Когда вылетает самолёт?'],
              ['تَذْكِرَةٌ','Билет'], ['حَقِيبَةٌ','Чемодан / Сумка'],
              ['مَطَارٌ','Аэропорт'], ['سَفَارَةٌ','Посольство'],
            ]
          },
          {
            id: 'byy-p4-u4', num: 4, name: 'Образование',
            words: [
              ['جَامِعَةٌ','Университет'], ['كُلِّيَّةٌ','Факультет / Колледж'],
              ['طَالِبٌ','Студент'], ['أُسْتَاذٌ','Профессор'],
              ['دَرَسَ','Изучал'], ['تَخَصَّصَ','Специализировался'],
              ['شَهَادَةٌ','Диплом / Свидетельство'],
              ['اِمْتِحَانٌ','Экзамен'], ['نَجَحَ','Прошёл (экзамен)'],
              ['رَسَبَ','Провалился (экзамен)'],
              ['دَرَجَةٌ','Оценка / Степень'],
              ['تَخَرَّجَ','Окончил учёбу'],
              ['مَادَّةٌ','Предмет'], ['وَاجِبٌ','Домашнее задание'],
              ['مَكْتَبَةٌ','Библиотека'],
            ]
          },
          {
            id: 'byy-p4-u5', num: 5, name: 'СМИ и технологии', locked: false,
            words: [
              ['حَاسُوبٌ','Компьютер'], ['هَاتِفٌ ذَكِيٌّ','Смартфон'],
              ['إِنْتَرْنِتٌ','Интернет'], ['بَرِيدٌ إِلِكْتْرُونِيٌّ','Электронная почта'],
              ['مَوْقِعٌ إِلِكْتْرُونِيٌّ','Сайт'], ['تَلَفِزْيُونٌ','Телевизор'],
              ['رَادْيُو','Радио'], ['جَرِيدَةٌ','Газета'],
              ['مَجَلَّةٌ','Журнал'], ['خَبَرٌ','Новость'],
              ['بَثَّ مُبَاشِرًا','Прямая трансляция'],
              ['صُورَةٌ','Фотография'], ['فِيدْيُو','Видео'],
              ['طَبَعَ','Напечатал'], ['أَرْسَلَ','Отправил'],
            ]
          },
          {
            id: 'byy-p4-u6', num: 6, name: 'Работа и деловой этикет',
            words: [
              ['اِجْتِمَاعٌ','Встреча / Совещание'], ['مَكْتَبٌ','Офис'],
              ['مَشْرُوعٌ','Проект'], ['عَقْدٌ','Контракт / Договор'],
              ['رَاتِبٌ','Зарплата'], ['مَوْعِدٌ','Встреча / Назначенное время'],
              ['زَمِيلٌ','Коллега'], ['مُدِيرٌ','Директор / Начальник'],
              ['مَسْؤُولٌ','Ответственный'], ['اِسْتَقَالَ','Подал в отставку'],
              ['وَظِيفَةٌ','Должность / Работа'],
              ['خِبْرَةٌ','Опыт'], ['مَهَارَةٌ','Навык'],
              ['أَدَاءٌ','Производительность'], ['تَرَقِّيَةٌ','Повышение по службе'],
            ]
          },
          {
            id: 'byy-p4-u7', num: 7, name: 'Арабская культура', locked: false,
            words: [
              ['ثَقَافَةٌ','Культура'], ['تَارِيخٌ','История'],
              ['حَضَارَةٌ','Цивилизация'], ['تُرَاثٌ','Наследие'],
              ['عَادَةٌ','Обычай / Привычка'], ['تَقْلِيدٌ','Традиция'],
              ['فَنٌّ','Искусство'], ['شِعْرٌ','Поэзия'],
              ['أَدَبٌ','Литература'], ['مُوسِيقَى','Музыка'],
              ['رَقْصٌ','Танец'], ['طَبَخٌ','Кулинария'],
              ['ضِيَافَةٌ','Гостеприимство'], ['كَرَمٌ','Щедрость'],
              ['شَرَفٌ','Честь'], ['قَبِيلَةٌ','Племя'],
            ]
          },
          {
            id: 'byy-p4-u8', num: 8, name: 'Дополнительная лексика', locked: false,
            words: [
              ['رَبَّمَا','Возможно'], ['دَائِمًا','Всегда'],
              ['أَحْيَانًا','Иногда'], ['نَادِرًا','Редко'],
              ['أَبَدًا','Никогда'], ['فَقَطْ','Только'],
              ['أَيْضًا','Тоже / Также'], ['حَتَّى','Даже / До'],
              ['لَكِنَّ','Но'], ['أَوْ','Или'],
              ['إِذَا','Если'], ['عِنْدَمَا','Когда'],
              ['لِأَنَّ','Потому что'], ['حَتَّى','Чтобы / Пока'],
              ['قَبْلَ','До / Перед'], ['بَعْدَ','После'],
            ]
          },
        ]
      },

      /* ---- ЧАСТИ 5–8 (структура) ---- */
      ...[5,6,7,8].map(n => ({
        id: `byy-p${n}`, num: n, title: `Часть ${n}`, locked: true,
        units: [1,2,3,4,5,6,7,8].map(u => ({
          id: `byy-p${n}-u${u}`, num: u, name: `Вахьда ${u}`, locked: true, words: []
        }))
      }))
    ]
  },
  { id: 'bina', ar: 'البِنَاء', title: 'Аль-Бина', locked: true, parts: [] },
  { id: 'ajur', ar: 'الآجرومية', title: 'Аль-Аджуррумия', locked: true, parts: [] },
  { id: 'nav40', ar: 'الأربعون النووية', title: '40 хадисов ан-Навави', locked: true, parts: [] },
];

/* ===== UTILS ==================================================== */
const $ = (s, r = document) => r.querySelector(s);
const $$ = (s, r = document) => Array.from(r.querySelectorAll(s));
const esc = s => String(s).replace(/[&<>"']/g, m => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[m]));
const DAY = 86400000;
const now = () => Date.now();

const todayKey = (d = new Date()) => {
  const y = d.getFullYear();
  const m = String(d.getMonth() + 1).padStart(2, '0');
  const dd = String(d.getDate()).padStart(2, '0');
  return `${y}-${m}-${dd}`;
};

const daysBetween = (a, b) => {
  const A = new Date(a); A.setHours(0,0,0,0);
  const B = new Date(b); B.setHours(0,0,0,0);
  return Math.round((B - A) / DAY);
};

const clamp = (x, lo, hi) => Math.max(lo, Math.min(hi, x));

const shuffle = arr => {
  const a = arr.slice();
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
};

const fmtInterval = ms => {
  if (ms <= 0) return 'сейчас';
  const m = Math.round(ms / 60000);
  if (m < 60) return `~${m} мин`;
  const h = Math.round(m / 60);
  if (h < 24) return `~${h} ч`;
  return `~${Math.round(h / 24)} д`;
};

function keyOf(ar) {
  let h = 0;
  for (let i = 0; i < ar.length; i++) { h = ((h << 5) - h) + ar.charCodeAt(i); h |= 0; }
  return 'c' + Math.abs(h).toString(36);
}

/* ===== STORE ==================================================== */
const SK = 'dhp.v3';

function defaultState() {
  return {
    version: 3,
    createdAt: now(),
    settings: { theme: 'light' },
    cards: {},
    decks: {},
    totals: { reviewed: 0 },
    days: {},
    streak: { current: 0, best: 0, lastActive: null },
    lastSession: null,
  };
}

function blankCard(id, ar, ru) {
  return { id, ar, ru, ease: 2.5, interval: 0, due: 0, reps: 0, lapses: 0, last: 0, flags: { hard: false, fav: false, learned: false } };
}

function loadState() {
  try {
    const raw = localStorage.getItem(SK);
    if (raw) {
      const p = JSON.parse(raw);
      if (p && p.version >= 2) {
        p.version = 3;
        return p;
      }
    }
  } catch(e) {}
  const s = defaultState();
  saveStateSync(s);
  return s;
}

let STATE;
let SAVE_T = 0;
const saveState = (s = STATE) => {
  clearTimeout(SAVE_T);
  SAVE_T = setTimeout(() => saveStateSync(s), 80);
};
const saveStateSync = (s = STATE) => {
  try { localStorage.setItem(SK, JSON.stringify(s)); } catch(e) {}
};

STATE = loadState();

function ensureCard(ar, ru) {
  const id = keyOf(ar);
  if (!STATE.cards[id]) STATE.cards[id] = blankCard(id, ar, ru || '');
  else if (!STATE.cards[id].ru && ru) STATE.cards[id].ru = ru;
  return STATE.cards[id];
}

/* ===== SRS (SM-2 Lite) ========================================== */
/*
  hard:  interval=0, due=+10min, ease-=0.20, reps stays, lapses++
  ok:    reps==1→1d, reps==2→3d, else interval*ease; ease unchanged
  easy:  reps<=1→4d, else interval*ease*1.3; ease+=0.10
*/
function rate(cardId, kind) {
  const c = STATE.cards[cardId]; if (!c) return;
  const NOW = now();
  c.last = NOW;
  if (kind === 'hard') {
    c.ease = clamp((c.ease || 2.5) - 0.20, 1.3, 2.8);
    c.lapses = (c.lapses || 0) + 1;
    c.interval = 0;
    c.due = NOW + 10 * 60 * 1000;
    c.flags.hard = true;
    c.reps = Math.max(0, (c.reps || 0) - 1);
    c.flags.learned = false;
  } else if (kind === 'ok') {
    c.reps = (c.reps || 0) + 1;
    const iv = c.reps === 1 ? 1 : c.reps === 2 ? 3 : Math.max(1, Math.round((c.interval || 1) * (c.ease || 2.5)));
    c.interval = iv;
    c.due = NOW + iv * DAY;
    if (c.reps >= 2) c.flags.learned = true;
  } else if (kind === 'easy') {
    c.ease = clamp((c.ease || 2.5) + 0.10, 1.3, 3.2);
    c.reps = (c.reps || 0) + 1;
    const iv = c.reps <= 1 ? 4 : Math.max(1, Math.round((c.interval || 1) * (c.ease || 2.5) * 1.3));
    c.interval = iv;
    c.due = NOW + iv * DAY;
    c.flags.hard = false;
    c.flags.learned = true;
  }
  saveState();
}

function previewIntervals(cardId) {
  const c = STATE.cards[cardId] || blankCard('','','');
  const ease = c.ease || 2.5;
  const reps = c.reps || 0;
  const iv = c.interval || 0;
  const hard = fmtInterval(10 * 60 * 1000);
  const okDays = reps === 0 ? 1 : reps === 1 ? 3 : Math.max(1, Math.round((iv || 1) * ease));
  const easyDays = reps === 0 ? 4 : Math.max(1, Math.round((iv || 1) * ease * 1.3));
  return { hard, ok: fmtInterval(okDays * DAY), easy: fmtInterval(easyDays * DAY) };
}

/* ===== DAY / STREAK ============================================= */
function bumpDay(reviews = 0, correct = 0, newLearned = 0, ms = 0) {
  const k = todayKey();
  if (!STATE.days[k]) STATE.days[k] = { reviews: 0, correct: 0, new: 0, ms: 0 };
  const d = STATE.days[k];
  d.reviews += reviews; d.correct += correct; d.new += newLearned; d.ms += ms;
  const last = STATE.streak.lastActive;
  if (last !== k) {
    if (!last) STATE.streak.current = 1;
    else {
      const diff = daysBetween(last, new Date());
      if (diff === 1) STATE.streak.current += 1;
      else if (diff > 1) STATE.streak.current = 1;
    }
    STATE.streak.best = Math.max(STATE.streak.best, STATE.streak.current);
    STATE.streak.lastActive = k;
  }
  STATE.totals.reviewed += reviews;
  saveState();
}

function dueTodayCount() {
  const N = now();
  return Object.values(STATE.cards).filter(c => (c.due || 0) <= N).length;
}

/* ===== CONTENT HELPERS ========================================== */
function allUnitsFlat() {
  const out = [];
  BOOKS.forEach(b => (b.parts || []).forEach(p => (p.units || []).forEach(u => {
    if ((u.words || []).length > 0 && !u.locked) out.push({ book: b, part: p, unit: u });
  })));
  return out;
}

function allWords() {
  const seen = new Set(); const out = [];
  allUnitsFlat().forEach(({ unit }) => unit.words.forEach(w => {
    if (!seen.has(w[0])) { seen.add(w[0]); out.push({ ar: w[0], ru: w[1] }); }
  }));
  for (const id in STATE.decks) {
    STATE.decks[id].words.forEach(w => {
      if (!seen.has(w.ar)) { seen.add(w.ar); out.push({ ar: w.ar, ru: w.ru }); }
    });
  }
  for (const id in STATE.cards) {
    const c = STATE.cards[id];
    if (!seen.has(c.ar)) { seen.add(c.ar); out.push({ ar: c.ar, ru: c.ru }); }
  }
  return out;
}

function findUnit(uid) {
  for (const b of BOOKS) for (const p of (b.parts || [])) for (const u of (p.units || [])) {
    if (u.id === uid) return { book: b, part: p, unit: u };
  }
  return null;
}
const findBook = id => BOOKS.find(b => b.id === id);
const findPart = (bookId, partId) => {
  const b = findBook(bookId); if (!b) return null;
  return (b.parts || []).find(p => p.id === partId);
};

/* ===== SESSION ================================================== */
const session = {
  active: false, type: null, title: '', backScreen: 's-home',
  queue: [], seen: new Set(), current: null, revealed: false,
  stats: { reviewed: 0, correct: 0, newLearned: 0, startMs: 0, cardStartMs: 0 },
  plannedCount: 0,
};

function startSession({ type, title, words, backScreen = 's-home' }) {
  if (!words || !words.length) { toast('Нет слов для сессии'); return; }
  session.active = true; session.type = type; session.title = title; session.backScreen = backScreen;
  const ids = words.map(w => ensureCard(w.ar, w.ru || '').id);
  session.queue = shuffle(ids);
  session.seen = new Set(); session.current = null; session.revealed = false;
  session.stats = { reviewed: 0, correct: 0, newLearned: 0, startMs: now(), cardStartMs: now() };
  session.plannedCount = ids.length;
  STATE.lastSession = { type, title, backScreen };
  saveState();
  navigate('s-study');
  renderStudyHeader();
  renderNextCard();
}

const Q_STEPS = { hard: 6, ok: 14, easy: 40 };
function reinsert(cardId, kind) {
  const pos = Math.min(Q_STEPS[kind] || 10, session.queue.length);
  session.queue.splice(pos, 0, cardId);
}

function renderNextCard() {
  const fc = $('#flashcard');
  fc.classList.remove('revealed');
  $('#rate-row').style.visibility = 'hidden';
  $('#flip-btn').style.display = '';
  if (!session.queue.length) { finishSession(); return; }
  session.current = session.queue.shift();
  const c = STATE.cards[session.current]; if (!c) { renderNextCard(); return; }
  session.revealed = false; session.stats.cardStartMs = now();
  session.seen.add(c.id);
  $('#fc-arabic').textContent = c.ar || '--';
  $('#fc-translation').textContent = c.ru || '--';
  fc.classList.remove('swipe-left','swipe-right','swipe-up','enter');
  void fc.offsetWidth;
  fc.classList.add('enter');
  renderStudyHeader(); updateFavIcon(); updateRatePreview();
}

function renderStudyHeader() {
  const total = session.plannedCount || 1;
  const done = Math.min(total, session.seen.size);
  $('#study-count').textContent = `${done}/${total}`;
  $('#study-progress-bar').style.width = Math.round(done / total * 100) + '%';
  $('#study-screen-title').textContent = session.title || 'Учёба';
}

function updateRatePreview() {
  if (!session.current) return;
  const p = previewIntervals(session.current);
  $('#rb-hard-iv').textContent = p.hard;
  $('#rb-ok-iv').textContent = p.ok;
  $('#rb-easy-iv').textContent = p.easy;
}

function updateFavIcon() {
  const c = STATE.cards[session.current]; if (!c) return;
  const btn = $('#study-fav-btn');
  const isFav = c.flags.fav;
  btn.querySelector('svg').setAttribute('fill', isFav ? 'currentColor' : 'none');
  btn.style.color = isFav ? '#F59E0B' : '';
}

function revealCard() {
  if (!session.current || session.revealed) return;
  session.revealed = true;
  $('#flashcard').classList.add('revealed');
  $('#rate-row').style.visibility = 'visible';
  $('#flip-btn').style.display = 'none';
}

function rateCurrent(kind) {
  if (!session.current) return;
  if (!session.revealed) { revealCard(); return; }
  const c = STATE.cards[session.current];
  const cardId = session.current;
  const elapsed = now() - session.stats.cardStartMs;
  const wasNew = !c.flags.learned && (c.reps || 0) === 0;
  rate(cardId, kind);
  session.stats.reviewed += 1;
  if (kind !== 'hard') session.stats.correct += 1;
  if (wasNew && STATE.cards[cardId].flags.learned) session.stats.newLearned += 1;
  bumpDay(1, kind !== 'hard' ? 1 : 0, (wasNew && STATE.cards[cardId].flags.learned) ? 1 : 0, elapsed);
  const fc = $('#flashcard');
  const dir = kind === 'easy' ? 'swipe-right' : kind === 'hard' ? 'swipe-left' : 'swipe-up';
  fc.classList.add(dir);
  reinsert(cardId, kind);
  setTimeout(() => renderNextCard(), 260);
}

function finishSession() {
  session.active = false;
  const { reviewed, correct, newLearned, startMs } = session.stats;
  const mins = Math.max(0, Math.round((now() - startMs) / 60000));
  const acc = reviewed ? Math.round(correct / reviewed * 100) : 0;
  $('#sum-accuracy').textContent = acc + '%';
  $('#sum-reviewed').textContent = reviewed;
  $('#sum-time').textContent = mins + ' мин';
  $('#sum-new').textContent = newLearned;
  navigate('s-summary');
}

/* ===== TOAST ==================================================== */
let toastTimer = 0;
function toast(msg, ms = 1800) {
  const t = $('#toast'); t.textContent = msg; t.classList.add('on');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => t.classList.remove('on'), ms);
}

/* ===== SHEET ==================================================== */
let sheetOpen = false;
function openSheet(title, html, onMount) {
  $('#sheet-title').textContent = title;
  $('#sheet-body').innerHTML = html;
  $('#sheet').classList.add('on');
  $('#sheet-bg').classList.add('on');
  document.body.classList.add('sheet-open');
  sheetOpen = true;
  if (onMount) onMount($('#sheet-body'));
}
function closeSheet() {
  $('#sheet').classList.remove('on');
  $('#sheet-bg').classList.remove('on');
  document.body.classList.remove('sheet-open');
  sheetOpen = false;
}

/* ===== NAVIGATION =============================================== */
const NAV_STACK = [];
function navigate(screenId, { stack = true } = {}) {
  const cur = $$('.screen').find(s => !s.classList.contains('hidden'));
  if (cur && stack && cur.id !== screenId) NAV_STACK.push(cur.id);
  $$('.screen').forEach(s => s.classList.add('hidden'));
  const next = $('#' + screenId); if (!next) return;
  next.classList.remove('hidden');
  next.style.animation = 'none'; void next.offsetWidth; next.style.animation = '';
  const tabMap = {
    's-home': 'home', 's-learn': 'learn',
    's-books': 'learn', 's-parts': 'learn', 's-units': 'learn', 's-unit': 'learn',
    's-decks': 'learn', 's-deck': 'learn',
    's-hard': 'learn', 's-mix': 'learn', 's-search': 'learn',
    's-stats': 'stats', 's-settings': 'settings',
  };
  const tab = tabMap[screenId] || '';
  $$('.nav-btn').forEach(b => b.classList.toggle('active', b.dataset.tab === tab));
  runScreenRender(screenId);
  window.scrollTo({ top: 0, behavior: 'instant' });
}

function back() {
  const id = NAV_STACK.pop() || 's-home';
  navigate(id, { stack: false });
}

function currentScreen() {
  return $$('.screen').find(s => !s.classList.contains('hidden'));
}

/* ===== RENDERERS =============================================== */
function runScreenRender(id) {
  switch (id) {
    case 's-home': renderHome(); break;
    case 's-learn': renderLearn(); break;
    case 's-books': renderBooks(); break;
    case 's-parts': renderParts(); break;
    case 's-units': renderUnits(); break;
    case 's-unit': renderUnit(); break;
    case 's-decks': renderDecks(); break;
    case 's-deck': renderDeck(); break;
    case 's-hard': renderHard(); break;
    case 's-mix': renderMix(); break;
    case 's-search': renderSearch(); break;
    case 's-stats': renderStats(); break;
    case 's-settings': renderSettings(); break;
  }
}

/* HOME */
function renderHome() {
  const hour = new Date().getHours();
  const greet = hour < 5 ? 'Доброй ночи' : hour < 12 ? 'Доброе утро' : hour < 17 ? 'Добрый день' : 'Добрый вечер';
  $('#hero-greeting').textContent = greet + '!';
  const due = dueTodayCount();
  const today = STATE.days[todayKey()]?.reviews || 0;
  const streak = STATE.streak.current;
  $('#hero-due').textContent = due;
  $('#hero-today').textContent = today;
  $('#hero-streak').textContent = streak;
  $('#hero-subtitle').textContent = due > 0 ? `${due} слов ждут повторения` : 'На сегодня всё -- так держать!';

  // Library tiles
  const g = $('#home-library');
  g.innerHTML = BOOKS.slice(0, 4).map(b => {
    const locked = !!b.locked;
    const units = (b.parts || []).flatMap(p => p.units || []);
    const totalW = units.reduce((s, u) => s + (u.words?.length || 0), 0);
    const learnedW = units.flatMap(u => u.words || []).filter(w => STATE.cards[keyOf(w[0])]?.flags?.learned).length;
    const pct = totalW ? Math.round(learnedW / totalW * 100) : 0;
    return `
      <button type="button" class="tile ${locked ? 'locked' : ''}" data-act="open-book" data-book="${b.id}">
        ${locked ? `<span class="lock-badge"><svg viewBox="0 0 24 24"><rect x="5" y="11" width="14" height="10" rx="2"/><path d="M8 11V8a4 4 0 0 1 8 0v3"/></svg></span>` : ''}
        <div class="tile-icon ico-brand">
          <svg viewBox="0 0 24 24"><path d="M4 5a2 2 0 0 1 2-2h12v18H6a2 2 0 0 1-2-2zM8 3v18"/></svg>
        </div>
        <div style="direction:rtl;font-family:var(--font-ar);font-size:18px;font-weight:700;line-height:1.2">${esc(b.ar)}</div>
        <div class="tile-sub">${esc(b.title)}</div>
        ${!locked ? `
          <div class="progress thin" style="margin-top:6px"><i style="width:${pct}%"></i></div>
          <div class="tiny" style="margin-top:4px">${learnedW}/${totalW} · ${pct}%</div>
        ` : `<div class="tiny" style="margin-top:4px;color:var(--text-3)">Скоро</div>`}
      </button>
    `;
  }).join('');
}

/* LEARN HUB */
function renderLearn() {
  // Continue last
  const last = STATE.lastSession;
  const cont = $('#learn-continue');
  if (last && last.type) {
    cont.style.display = '';
    $('#lc-title').textContent = last.title || 'Последняя сессия';
    $('#lc-sub').textContent = ({ unit:'Вахьда', deck:'Колода', hard:'Трудные', mix:'Смешанное', due:'Повторение' })[last.type] || '';
  } else {
    cont.style.display = 'none';
  }
  // counters
  const due = dueTodayCount();
  const hardCount = Object.values(STATE.cards).filter(c => c.flags.hard).length;
  const deckCount = Object.keys(STATE.decks).length;
  const allCount = allWords().length;
  const newCount = allWords().filter(w => { const c = STATE.cards[keyOf(w.ar)]; return !c || (c.reps || 0) === 0; }).length;
  $('#learn-due-count').textContent = due;
  $('#learn-new-count').textContent = newCount;
  $('#learn-hard-count').textContent = hardCount;
  $('#learn-all-count').textContent = allCount;
  $('#learn-decks-count').textContent = deckCount;
}

/* BOOKS */
function renderBooks() {
  $('#books-list').innerHTML = BOOKS.map(b => {
    const locked = !!b.locked;
    return `
      <button type="button" class="list-item ${locked ? 'locked' : ''}" data-act="open-book" data-book="${b.id}">
        <div class="li-icon ico-brand" style="font-family:var(--font-ar);font-size:14px;font-weight:700;direction:rtl">${esc(b.ar.slice(0,3))}</div>
        <div class="li-body"><div class="li-title">${esc(b.title)}</div><div class="li-sub">${locked ? 'Скоро' : 'Открыть'}</div></div>
        <div class="li-trail">${locked ? `<svg viewBox="0 0 24 24"><rect x="5" y="11" width="14" height="10" rx="2"/><path d="M8 11V8a4 4 0 0 1 8 0v3"/></svg>` : `<svg viewBox="0 0 24 24"><path d="M9 6l6 6-6 6"/></svg>`}</div>
      </button>
    `;
  }).join('');
}

let BOOK_ID = null, PART_ID = null, UNIT_ID = null;

function openBook(id) {
  const b = findBook(id);
  if (!b || b.locked) { toast('Скоро будет доступна'); return; }
  BOOK_ID = id;
  navigate('s-parts');
}

function renderParts() {
  const b = findBook(BOOK_ID); if (!b) return;
  $('#parts-title').textContent = b.title;
  $('#parts-list').innerHTML = (b.parts || []).map(p => {
    const locked = !!p.locked;
    const total = (p.units || []).reduce((s, u) => s + (u.words?.length || 0), 0);
    const learned = (p.units || []).flatMap(u => u.words || []).filter(w => STATE.cards[keyOf(w[0])]?.flags?.learned).length;
    const pct = total ? Math.round(learned / total * 100) : 0;
    return `
      <button type="button" class="list-item ${locked ? 'locked' : ''}" data-act="open-part" data-part="${p.id}">
        <div class="li-icon ico-brand" style="font-weight:800;font-size:15px">${p.num}</div>
        <div class="li-body">
          <div class="li-title">${esc(p.title)}</div>
          <div class="li-sub">${locked ? 'Скоро' : `${(p.units||[]).length} вахьдатов · ${pct}%`}</div>
          ${!locked && total ? `<div class="progress thin" style="margin-top:5px"><i style="width:${pct}%"></i></div>` : ''}
        </div>
        <div class="li-trail"><svg viewBox="0 0 24 24"><path d="M9 6l6 6-6 6"/></svg></div>
      </button>
    `;
  }).join('');
}

function openPart(id) {
  const p = findPart(BOOK_ID, id);
  if (!p || p.locked) { toast('Скоро'); return; }
  PART_ID = id; navigate('s-units');
}

function renderUnits() {
  const b = findBook(BOOK_ID), p = findPart(BOOK_ID, PART_ID); if (!p) return;
  $('#units-title').textContent = `${b?.title || ''} · ${p.title}`;
  $('#units-list').innerHTML = (p.units || []).map(u => {
    const locked = !!u.locked || !(u.words || []).length;
    const total = (u.words || []).length;
    const learned = (u.words || []).filter(w => STATE.cards[keyOf(w[0])]?.flags?.learned).length;
    const pct = total ? Math.round(learned / total * 100) : 0;
    return `
      <button type="button" class="list-item ${locked ? 'locked' : ''}" data-act="open-unit" data-unit="${u.id}">
        <div class="li-icon ico-brand" style="font-weight:800;font-size:14px">${u.num}</div>
        <div class="li-body">
          <div class="li-title">${esc(u.name || `Вахьда ${u.num}`)}</div>
          <div class="li-sub">${locked ? 'Скоро' : `${learned}/${total} · ${pct}%`}</div>
          ${!locked ? `<div class="progress thin" style="margin-top:5px"><i style="width:${pct}%"></i></div>` : ''}
        </div>
        <div class="li-trail">${locked ? `<svg viewBox="0 0 24 24"><rect x="5" y="11" width="14" height="10" rx="2"/><path d="M8 11V8a4 4 0 0 1 8 0v3"/></svg>` : `<svg viewBox="0 0 24 24"><path d="M9 6l6 6-6 6"/></svg>`}</div>
      </button>
    `;
  }).join('');
}

function openUnit(id) {
  const f = findUnit(id);
  if (!f || f.unit.locked || !(f.unit.words || []).length) { toast('Скоро'); return; }
  UNIT_ID = id; UNIT_FILTER = 'all'; navigate('s-unit');
}

let UNIT_FILTER = 'all';
function renderUnit() {
  const f = findUnit(UNIT_ID); if (!f) return;
  const { book, part, unit } = f;
  $('#unit-title').textContent = `Вахьда ${unit.num}`;
  $('#unit-name').textContent = unit.name || '';
  $('#unit-eyebrow').textContent = `${book.title} · ${part.title}`;
  const total = (unit.words || []).length;
  const learned = (unit.words || []).filter(w => STATE.cards[keyOf(w[0])]?.flags?.learned).length;
  const pct = total ? Math.round(learned / total * 100) : 0;
  $('#unit-ring').style.setProperty('--val', pct);
  $('#unit-ring-n').textContent = pct + '%';
  $('#unit-meta').textContent = `${learned}/${total} выучено`;
  $$('#s-unit .chip[data-filter]').forEach(b => b.classList.toggle('on', b.dataset.filter === UNIT_FILTER));
  const words = (unit.words || []).filter(w => {
    const c = STATE.cards[keyOf(w[0])];
    if (UNIT_FILTER === 'new') return !c || (c.reps || 0) === 0;
    if (UNIT_FILTER === 'learning') return c && (c.reps || 0) > 0 && !c.flags.learned;
    if (UNIT_FILTER === 'fav') return c && c.flags.fav;
    return true;
  });
  const list = $('#unit-words');
  if (!words.length) {
    list.innerHTML = `<div class="empty-state"><div class="es-icon">·</div><div class="es-title">Пусто</div><div class="es-text">Нет слов в этом фильтре</div></div>`;
  } else {
    list.innerHTML = `<div class="words-group">${words.map(w => wordRowHTML(w[0], w[1])).join('')}</div>`;
  }
}

function wordRowHTML(ar, ru) {
  const c = STATE.cards[keyOf(ar)];
  const fav = c && c.flags.fav;
  return `
    <div class="word-row">
      <button type="button" class="wr-fav ${fav ? 'on' : ''}" data-act="toggle-fav" data-ar="${esc(ar)}" aria-label="Избранное">
        <svg viewBox="0 0 24 24"><path d="M12 3l2.9 6 6.6.9-4.8 4.7 1.1 6.4L12 17.8 6.2 21l1.1-6.4L2.5 9.9 9.1 9z"/></svg>
      </button>
      <div class="wr-ru">${esc(ru || '')}</div>
      <div class="wr-ar">${esc(ar)}</div>
    </div>
  `;
}

/* DECKS */
function renderDecks() {
  const ids = Object.keys(STATE.decks);
  if (!ids.length) {
    $('#decks-list').innerHTML = `<div class="empty-state"><div class="es-icon"><svg viewBox="0 0 24 24"><rect x="3" y="4" width="14" height="16" rx="2"/><path d="M7 4v16"/></svg></div><div class="es-title">Нет колод</div><div class="es-text">Создай первую колоду</div></div>`;
    return;
  }
  $('#decks-list').innerHTML = `<div class="list-group">${ids.map(id => {
    const d = STATE.decks[id];
    const total = d.words.length;
    const learned = d.words.filter(w => STATE.cards[keyOf(w.ar)]?.flags?.learned).length;
    const pct = total ? Math.round(learned / total * 100) : 0;
    return `
      <button type="button" class="list-item" data-act="open-deck" data-deck="${d.id}">
        <div class="li-icon ico-brand" style="font-weight:800;font-size:16px">${esc((d.name[0] || '·').toUpperCase())}</div>
        <div class="li-body">
          <div class="li-title">${esc(d.name)}</div>
          <div class="li-sub">${total} слов · ${pct}%</div>
          <div class="progress thin" style="margin-top:5px"><i style="width:${pct}%"></i></div>
        </div>
        <div class="li-trail"><svg viewBox="0 0 24 24"><path d="M9 6l6 6-6 6"/></svg></div>
      </button>
    `;
  }).join('')}</div>`;
}

let DECK_ID = null;
function openDeck(id) {
  if (!STATE.decks[id]) return;
  DECK_ID = id; navigate('s-deck');
}
function renderDeck() {
  const d = STATE.decks[DECK_ID]; if (!d) return;
  $('#deck-title').textContent = d.name;
  $('#deck-name').textContent = d.name;
  const total = d.words.length;
  const learned = d.words.filter(w => STATE.cards[keyOf(w.ar)]?.flags?.learned).length;
  const pct = total ? Math.round(learned / total * 100) : 0;
  $('#deck-meta').textContent = `${total} слов · ${learned} выучено`;
  $('#deck-ring').style.setProperty('--val', pct);
  $('#deck-ring-n').textContent = pct + '%';
  const list = $('#deck-words');
  if (!total) {
    list.innerHTML = `<div class="empty-state"><div class="es-icon">·</div><div class="es-title">Пусто</div></div>`;
    return;
  }
  list.innerHTML = `<div class="words-group">${d.words.map((w, i) => {
    const c = STATE.cards[keyOf(w.ar)];
    const fav = c && c.flags.fav;
    return `
      <div class="word-row">
        <button type="button" class="wr-fav ${fav ? 'on' : ''}" data-act="toggle-fav" data-ar="${esc(w.ar)}" aria-label="Избранное">
          <svg viewBox="0 0 24 24"><path d="M12 3l2.9 6 6.6.9-4.8 4.7 1.1 6.4L12 17.8 6.2 21l1.1-6.4L2.5 9.9 9.1 9z"/></svg>
        </button>
        <div class="wr-ru">${esc(w.ru || '')}</div>
        <div class="wr-ar">${esc(w.ar)}</div>
        <button type="button" class="icon-btn" data-act="edit-deck-word" data-idx="${i}" aria-label="Редактировать" style="width:32px;height:32px;background:none">
          <svg viewBox="0 0 24 24"><path d="M4 20h4L20 8l-4-4L4 16z"/></svg>
        </button>
      </div>
    `;
  }).join('')}</div>`;
}

/* HARD */
function renderHard() {
  const cards = Object.values(STATE.cards).filter(c => c.flags.hard);
  $('#hard-count').textContent = `${cards.length} слов`;
  const list = $('#hard-list');
  if (!cards.length) {
    list.innerHTML = `<div class="empty-state"><div class="es-icon">✓</div><div class="es-title">Отлично!</div><div class="es-text">Трудных слов нет</div></div>`;
    return;
  }
  list.innerHTML = `<div class="words-group">${cards.map(c => wordRowHTML(c.ar, c.ru)).join('')}</div>`;
}

/* MIX */
let MIX_SEL = { units: {}, decks: {} };
function renderMix() {
  const units = allUnitsFlat();
  $('#mix-units').innerHTML = units.length ? units.map(({ book, part, unit }) => {
    const on = !!MIX_SEL.units[unit.id];
    return `
      <button type="button" class="list-item ${on ? 'mix-on' : ''}" data-mix-src="unit" data-mix-id="${unit.id}" style="cursor:pointer">
        <div class="li-icon" style="background:${on ? 'var(--brand-100)' : 'var(--surface-2)'};color:${on ? 'var(--brand-600)' : 'var(--text-3)'};">
          <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" fill="${on ? 'currentColor' : 'none'}" stroke-width="2"><path d="M5 12l5 5 9-10"/></svg>
        </div>
        <div class="li-body">
          <div class="li-title">Вахьда ${unit.num} · ${esc(unit.name || '')}</div>
          <div class="li-sub">${esc(book.title)} · ${esc(part.title)} · ${(unit.words || []).length} слов</div>
        </div>
      </button>
    `;
  }).join('') : `<div class="empty-state"><div class="es-text">Нет вахьдатов</div></div>`;

  const dids = Object.keys(STATE.decks);
  $('#mix-decks').innerHTML = dids.length ? dids.map(id => {
    const d = STATE.decks[id]; const on = !!MIX_SEL.decks[id];
    return `
      <button type="button" class="list-item" data-mix-src="deck" data-mix-id="${id}" style="cursor:pointer">
        <div class="li-icon" style="background:${on ? 'var(--brand-100)' : 'var(--surface-2)'};color:${on ? 'var(--brand-600)' : 'var(--text-3)'};">
          <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" fill="${on ? 'currentColor' : 'none'}" stroke-width="2"><path d="M5 12l5 5 9-10"/></svg>
        </div>
        <div class="li-body"><div class="li-title">${esc(d.name)}</div><div class="li-sub">${d.words.length} слов</div></div>
      </button>
    `;
  }).join('') : `<div class="empty-state"><div class="es-text">Нет колод</div></div>`;

  updateMixCount();
}

function collectMix() {
  const seen = new Set(); const out = [];
  allUnitsFlat().forEach(({ unit }) => {
    if (MIX_SEL.units[unit.id]) unit.words.forEach(w => { if (!seen.has(w[0])) { seen.add(w[0]); out.push({ ar: w[0], ru: w[1] }); } });
  });
  for (const id in MIX_SEL.decks) {
    if (STATE.decks[id]) STATE.decks[id].words.forEach(w => { if (!seen.has(w.ar)) { seen.add(w.ar); out.push({ ar: w.ar, ru: w.ru }); } });
  }
  return out;
}
function updateMixCount() { $('#mix-count').textContent = `${collectMix().length} слов`; }

/* SEARCH */
let SEARCH_Q = '', SEARCH_FILTER = 'all';
function renderSearch() {
  $('#search-input').value = SEARCH_Q;
  $$('#s-search .seg').forEach(b => b.classList.toggle('on', b.dataset.sf === SEARCH_FILTER));
  const q = SEARCH_Q.trim().toLowerCase();
  const filtered = allWords().filter(w => {
    if (q && !(w.ar || '').toLowerCase().includes(q) && !(w.ru || '').toLowerCase().includes(q)) return false;
    const c = STATE.cards[keyOf(w.ar)];
    if (SEARCH_FILTER === 'new') return !c || (c.reps || 0) === 0;
    if (SEARCH_FILTER === 'learning') return c && (c.reps || 0) > 0 && !c.flags.learned;
    if (SEARCH_FILTER === 'fav') return c && c.flags.fav;
    return true;
  }).slice(0, 200);
  const list = $('#search-results');
  if (!filtered.length) {
    list.innerHTML = `<div class="empty-state"><div class="es-icon"><svg viewBox="0 0 24 24"><circle cx="11" cy="11" r="7"/><path d="M20 20l-3-3"/></svg></div><div class="es-title">Не найдено</div></div>`;
    return;
  }
  list.innerHTML = `<div class="words-group">${filtered.map(w => wordRowHTML(w.ar, w.ru)).join('')}</div>`;
}

/* STATS */
function renderStats() {
  const tk = todayKey();
  const today = STATE.days[tk] || { reviews: 0, correct: 0, new: 0 };
  $('#k-streak').textContent = STATE.streak.current;
  $('#k-streak-d').textContent = STATE.streak.current >= 1 ? `Лучшая: ${STATE.streak.best}` : 'Начни сегодня';
  $('#k-today').textContent = today.reviews;
  $('#k-today-d').textContent = today.new ? `+${today.new} новых` : 'повторений';
  const totalLearned = Object.values(STATE.cards).filter(c => c.flags.learned).length;
  $('#k-total').textContent = totalLearned;
  let r7 = 0, c7 = 0;
  for (let i = 0; i < 7; i++) {
    const d = new Date(); d.setDate(d.getDate() - i);
    const dd = STATE.days[todayKey(d)];
    if (dd) { r7 += dd.reviews; c7 += dd.correct; }
  }
  $('#k-acc').textContent = r7 ? Math.round(c7 / r7 * 100) + '%' : '--';
  // Heatmap
  const WEEKS = 13, DAYS = 7, total = WEEKS * DAYS;
  const today0 = new Date(); today0.setHours(0,0,0,0);
  let max = 0; const vals = [];
  for (let i = total - 1; i >= 0; i--) {
    const d = new Date(today0); d.setDate(d.getDate() - i);
    const v = STATE.days[todayKey(d)]?.reviews || 0;
    vals.push(v); if (v > max) max = v;
  }
  $('#heatmap').innerHTML = vals.map(v => {
    const l = !v ? 0 : max ? (v / max > .75 ? 4 : v / max > .5 ? 3 : v / max > .25 ? 2 : 1) : 0;
    return `<div class="hm-cell" data-l="${l}" title="${v} повт."></div>`;
  }).join('');
  let wk = 0;
  for (let i = 0; i < 7; i++) { const d = new Date(); d.setDate(d.getDate() - i); wk += (STATE.days[todayKey(d)]?.reviews || 0); }
  $('#k-week-total').textContent = `${wk} за неделю`;
  $('#k-vocab').textContent = allWords().length;
  $('#k-hard-n').textContent = Object.values(STATE.cards).filter(c => c.flags.hard).length;
}

/* SETTINGS */
function renderSettings() {
  const isDark = STATE.settings.theme === 'dark';
  $('#theme-toggle').classList.toggle('on', isDark);
  $('#theme-label').textContent = isDark ? 'Тёмная тема' : 'Светлая тема';
}

/* ===== THEME ==================================================== */
function applyTheme(t) {
  document.documentElement.setAttribute('data-theme', t);
  STATE.settings.theme = t;
  saveState();
}
function toggleTheme() {
  applyTheme(STATE.settings.theme === 'dark' ? 'light' : 'dark');
  renderSettings();
  toast(STATE.settings.theme === 'dark' ? 'Тёмная тема' : 'Светлая тема');
}

/* ===== FAV ====================================================== */
function toggleFav(ar) {
  const c = ensureCard(ar, '');
  c.flags.fav = !c.flags.fav;
  saveState();
  const s = currentScreen(); if (s) runScreenRender(s.id);
  if (session.active) updateFavIcon();
}

/* ===== DECK SHEETS ============================================== */
function sheetNewDeck() {
  openSheet('Новая колода', `
    <div class="field"><label>Название</label><input class="input" id="nd-name" placeholder="Например: Хадисы" maxlength="60" autocomplete="off"></div>
    <div class="btn-row" style="margin-top:8px">
      <button type="button" class="btn btn-secondary" data-act="close-sheet">Отмена</button>
      <button type="button" class="btn btn-primary" data-act="save-new-deck">Создать</button>
    </div>
  `, body => body.querySelector('#nd-name').focus());
}

function sheetEditDeck(id) {
  const d = STATE.decks[id]; if (!d) return;
  openSheet('Колода', `
    <div class="field"><label>Название</label><input class="input" id="ed-name" value="${esc(d.name)}" maxlength="60"></div>
    <div class="btn-row" style="margin-top:8px">
      <button type="button" class="btn btn-secondary" data-act="close-sheet">Отмена</button>
      <button type="button" class="btn btn-primary" data-act="save-deck-name" data-id="${d.id}">Сохранить</button>
    </div>
    <div style="height:10px"></div>
    <button type="button" class="btn btn-danger" data-act="delete-deck" data-id="${d.id}">Удалить колоду</button>
  `);
}

function sheetAddWord(deckId) {
  const d = STATE.decks[deckId]; if (!d) return;
  openSheet('Добавить слово', `
    <div class="field"><label>Арабское</label><input class="input ar" id="aw-ar" placeholder="قَلَمٌ" autocomplete="off"></div>
    <div class="field"><label>Перевод</label><input class="input" id="aw-ru" placeholder="Ручка" autocomplete="off"></div>
    <details style="margin:4px 0 12px"><summary class="muted" style="cursor:pointer;padding:4px">Массовое добавление (ar ; ru)</summary>
      <textarea class="textarea" id="aw-bulk" placeholder="قَلَمٌ ; Ручка&#10;كِتَابٌ ; Книга" style="margin-top:8px"></textarea>
    </details>
    <div class="btn-row">
      <button type="button" class="btn btn-secondary" data-act="close-sheet">Отмена</button>
      <button type="button" class="btn btn-primary" data-act="save-word" data-deck="${d.id}">Сохранить</button>
    </div>
  `, body => body.querySelector('#aw-ar').focus());
}

function sheetEditWord(deckId, idx) {
  const d = STATE.decks[deckId]; const w = d?.words[idx]; if (!w) return;
  openSheet('Редактировать', `
    <div class="field"><label>Арабское</label><input class="input ar" id="ew-ar" value="${esc(w.ar)}"></div>
    <div class="field"><label>Перевод</label><input class="input" id="ew-ru" value="${esc(w.ru||'')}"></div>
    <div class="btn-row" style="margin-top:8px">
      <button type="button" class="btn btn-danger" data-act="delete-word" data-deck="${deckId}" data-idx="${idx}">Удалить</button>
      <button type="button" class="btn btn-primary" data-act="update-word" data-deck="${deckId}" data-idx="${idx}">Сохранить</button>
    </div>
  `);
}

/* ===== EXPORT / IMPORT ========================================== */
function exportData() {
  try {
    const blob = new Blob([JSON.stringify(STATE, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url; a.download = `darul-hadis-${todayKey()}.json`;
    document.body.appendChild(a); a.click(); a.remove();
    setTimeout(() => URL.revokeObjectURL(url), 1000);
    toast('Экспортировано');
  } catch(e) { toast('Ошибка экспорта'); }
}

function importData() {
  const inp = document.createElement('input'); inp.type = 'file'; inp.accept = 'application/json';
  inp.onchange = () => {
    const f = inp.files?.[0]; if (!f) return;
    const r = new FileReader();
    r.onload = () => {
      try {
        const p = JSON.parse(r.result);
        if (!p || !p.version) throw new Error('bad');
        STATE = p; saveState(); applyTheme(STATE.settings?.theme || 'light');
        navigate('s-home', { stack: false }); renderHome(); toast('Импортировано');
      } catch(e) { toast('Неверный файл'); }
    };
    r.readAsText(f);
  };
  inp.click();
}

function resetData() {
  if (!confirm('Удалить весь прогресс? Это необратимо.')) return;
  [SK, 'dhp.v2', 'dhp_hard', 'dhp_decks', 'dhp_studied'].forEach(k => localStorage.removeItem(k));
  STATE = defaultState(); saveState(); applyTheme('light');
  navigate('s-home', { stack: false }); renderHome(); toast('Прогресс сброшен');
}

/* ===== EVENT DELEGATION ========================================= */
document.addEventListener('click', e => {
  const t = e.target.closest('[data-act],[data-go],[data-back],[data-rate],[data-filter],[data-sf],[data-mix-src]');
  if (!t) return;
  if (t.hasAttribute('data-back')) { back(); return; }
  const go = t.getAttribute('data-go');
  if (go) { navigate(go); return; }
  const rate = t.getAttribute('data-rate');
  if (rate) { rateCurrent(rate); return; }
  const filter = t.getAttribute('data-filter');
  if (filter) { UNIT_FILTER = filter; renderUnit(); return; }
  const sf = t.getAttribute('data-sf');
  if (sf) { SEARCH_FILTER = sf; renderSearch(); return; }
  const mixSrc = t.getAttribute('data-mix-src');
  if (mixSrc) {
    const id = t.dataset.mixId;
    if (mixSrc === 'unit') { if (MIX_SEL.units[id]) delete MIX_SEL.units[id]; else MIX_SEL.units[id] = true; }
    else { if (MIX_SEL.decks[id]) delete MIX_SEL.decks[id]; else MIX_SEL.decks[id] = true; }
    renderMix(); return;
  }
  const act = t.getAttribute('data-act');
  if (!act) return;
  switch (act) {
    case 'open-book': openBook(t.dataset.book); break;
    case 'open-part': openPart(t.dataset.part); break;
    case 'open-unit': openUnit(t.dataset.unit); break;
    case 'open-deck': openDeck(t.dataset.deck); break;
    case 'toggle-theme': toggleTheme(); break;
    case 'toggle-fav': toggleFav(t.dataset.ar); break;
    case 'close-sheet': closeSheet(); break;
    case 'flip': revealCard(); break;
    case 'export-data': exportData(); break;
    case 'import-data': importData(); break;
    case 'reset-data': resetData(); break;
    case 'new-deck': sheetNewDeck(); break;
    case 'deck-menu': sheetEditDeck(DECK_ID); break;
    case 'deck-add-word': sheetAddWord(DECK_ID); break;
    case 'edit-deck-word': sheetEditWord(DECK_ID, parseInt(t.dataset.idx, 10)); break;
    case 'save-new-deck': {
      const v = $('#nd-name')?.value?.trim();
      if (!v) { toast('Введи название'); return; }
      const id = 'd_' + Math.random().toString(36).slice(2, 9);
      STATE.decks[id] = { id, name: v, createdAt: now(), words: [] };
      saveState(); closeSheet(); renderDecks(); toast('Колода создана'); break;
    }
    case 'save-deck-name': {
      const id = t.dataset.id, v = $('#ed-name')?.value?.trim();
      if (v && STATE.decks[id]) { STATE.decks[id].name = v; saveState(); closeSheet(); renderDeck(); toast('Сохранено'); }
      break;
    }
    case 'delete-deck': {
      if (!confirm('Удалить колоду?')) break;
      delete STATE.decks[t.dataset.id]; saveState(); closeSheet(); DECK_ID = null; navigate('s-decks', { stack: false }); toast('Удалено'); break;
    }
    case 'save-word': {
      const deckId = t.dataset.deck; const d = STATE.decks[deckId]; if (!d) break;
      const ar = $('#aw-ar')?.value?.trim(), ru = $('#aw-ru')?.value?.trim();
      const bulk = $('#aw-bulk')?.value?.trim() || '';
      let added = 0;
      if (ar) { d.words.push({ ar, ru: ru || '' }); ensureCard(ar, ru || ''); added++; }
      bulk.split('\n').forEach(ln => { const [a, r] = ln.split(';').map(s => s.trim()); if (a) { d.words.push({ ar: a, ru: r || '' }); ensureCard(a, r || ''); added++; } });
      if (!added) { toast('Пусто'); break; }
      saveState(); closeSheet(); renderDeck(); toast(`Добавлено: ${added}`); break;
    }
    case 'update-word': {
      const d = STATE.decks[t.dataset.deck]; const idx = parseInt(t.dataset.idx, 10);
      const ar = $('#ew-ar')?.value?.trim(), ru = $('#ew-ru')?.value?.trim();
      if (!ar || !d) { toast('Пусто'); break; }
      d.words[idx] = { ar, ru: ru || '' }; ensureCard(ar, ru || '');
      saveState(); closeSheet(); renderDeck(); toast('Сохранено'); break;
    }
    case 'delete-word': {
      const d = STATE.decks[t.dataset.deck]; const idx = parseInt(t.dataset.idx, 10);
      if (!d) break;
      d.words.splice(idx, 1); saveState(); closeSheet(); renderDeck(); toast('Удалено'); break;
    }
    case 'start-review': {
      const due = Object.values(STATE.cards).filter(c => (c.due || 0) <= now());
      if (!due.length) { toast('Ничего не требует повтора'); return; }
      startSession({ type: 'due', title: 'Повторение', words: due.map(c => ({ ar: c.ar, ru: c.ru })), backScreen: 's-home' }); break;
    }
    case 'start-new': {
      const newW = allWords().filter(w => { const c = STATE.cards[keyOf(w.ar)]; return !c || (c.reps || 0) === 0; });
      if (!newW.length) { toast('Нет новых слов'); return; }
      startSession({ type: 'due', title: 'Новые слова', words: newW, backScreen: 's-learn' }); break;
    }
    case 'start-all': {
      const w = allWords();
      if (!w.length) { toast('Нет слов'); return; }
      startSession({ type: 'due', title: 'Все слова', words: w, backScreen: 's-learn' }); break;
    }
    case 'start-hard': {
      const words = Object.values(STATE.cards).filter(c => c.flags.hard).map(c => ({ ar: c.ar, ru: c.ru }));
      if (!words.length) { toast('Трудных слов нет'); return; }
      startSession({ type: 'hard', title: 'Трудные', words, backScreen: 's-learn' }); break;
    }
    case 'study-unit': {
      const f = findUnit(UNIT_ID); if (!f) return;
      startSession({ type: 'unit', title: `Вахьда ${f.unit.num}`, words: f.unit.words.map(w => ({ ar: w[0], ru: w[1] })), backScreen: 's-unit' }); break;
    }
    case 'study-unit-due': {
      const f = findUnit(UNIT_ID); if (!f) return;
      const words = f.unit.words.filter(w => { const c = STATE.cards[keyOf(w[0])]; return !c || (c.due || 0) <= now(); }).map(w => ({ ar: w[0], ru: w[1] }));
      if (!words.length) { toast('Ничего не требует повтора'); return; }
      startSession({ type: 'unit', title: `Повтор · Вахьда ${f.unit.num}`, words, backScreen: 's-unit' }); break;
    }
    case 'study-hard': {
      const words = Object.values(STATE.cards).filter(c => c.flags.hard).map(c => ({ ar: c.ar, ru: c.ru }));
      if (!words.length) { toast('Трудных слов нет'); return; }
      startSession({ type: 'hard', title: 'Трудные', words, backScreen: 's-hard' }); break;
    }
    case 'deck-study': {
      const d = STATE.decks[DECK_ID]; if (!d?.words.length) { toast('Колода пуста'); return; }
      startSession({ type: 'deck', title: d.name, words: d.words.map(w => ({ ar: w.ar, ru: w.ru })), backScreen: 's-deck' }); break;
    }
    case 'mix-start': {
      const words = collectMix();
      if (!words.length) { toast('Выбери источники'); return; }
      startSession({ type: 'mix', title: 'Смешанное', words, backScreen: 's-mix' }); break;
    }
    case 'study-exit': {
      if (!confirm('Прервать?')) break;
      session.active = false;
      navigate(session.backScreen || 's-home', { stack: false }); break;
    }
    case 'study-fav': {
      if (!session.current) break;
      const c = STATE.cards[session.current]; if (!c) break;
      c.flags.fav = !c.flags.fav; saveState(); updateFavIcon(); break;
    }
    case 'summary-home': navigate('s-home', { stack: false }); renderHome(); break;
    case 'summary-again': {
      const l = STATE.lastSession; if (!l) { navigate('s-home', { stack: false }); break; }
      // Simple restart: re-collect same type
      navigate('s-learn'); break;
    }
    case 'continue-session': {
      const l = STATE.lastSession; if (!l) break;
      if (l.type === 'hard') { const words = Object.values(STATE.cards).filter(c => c.flags.hard).map(c => ({ ar: c.ar, ru: c.ru })); if (words.length) { startSession({ type: 'hard', title: 'Трудные', words, backScreen: 's-learn' }); break; } }
      if (l.type === 'due') { const words = Object.values(STATE.cards).filter(c => (c.due || 0) <= now()).map(c => ({ ar: c.ar, ru: c.ru })); if (words.length) { startSession({ type: 'due', title: 'Повторение', words, backScreen: 's-home' }); break; } }
      toast('Нет данных для продолжения'); break;
    }
  }
});

/* Flashcard tap to flip */
$('#flashcard').addEventListener('click', () => { if (!session.revealed) revealCard(); });

/* Touch swipe on flashcard */
(function() {
  const fc = $('#flashcard');
  let x0 = 0, y0 = 0, t0 = 0, active = false;
  fc.addEventListener('touchstart', e => {
    if (!session.revealed) return;
    const t = e.touches[0]; x0 = t.clientX; y0 = t.clientY; t0 = now(); active = true;
  }, { passive: true });
  fc.addEventListener('touchend', e => {
    if (!active) return; active = false;
    const t = e.changedTouches[0];
    const dx = t.clientX - x0, dy = t.clientY - y0, dt = now() - t0;
    if (dt > 600) return;
    if (Math.abs(dx) > 70 && Math.abs(dx) > Math.abs(dy)) rateCurrent(dx > 0 ? 'easy' : 'hard');
    else if (-dy > 70 && Math.abs(dy) > Math.abs(dx)) rateCurrent('ok');
  });
})();

/* Close sheet on backdrop tap */
$('#sheet-bg').addEventListener('click', closeSheet);

/* Search input */
$('#search-input').addEventListener('input', e => { SEARCH_Q = e.target.value; renderSearch(); });

/* ===== INIT ===================================================== */
applyTheme(STATE.settings?.theme || 'light');
navigate('s-home', { stack: false });