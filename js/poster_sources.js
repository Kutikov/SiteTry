const posters = [
    {
        "title": "НАСЛІДКИ ПІЗНЬОЇ ДІАГНОСТИКИ СИНДРОМУ ФРЕДЕРІКА", 
        "authors": "Іванова  К. О.", 
        "affiliation": "Харківський національний медичний університет імені В.Н. Каразіна, медичний факультет, кафедра внутрішньої медицини, Харків, Україна", 
        "supervisor": "Дерієнко Т. А. к. мед. н, асистент<br/> Главатських Т. С., асистент", 
        "image_name": "Ivanova.jpg"
    },
    {
        "title": "ФУНКЦІЯ НИРОК У ПАЦІЄНТІВ З ХРОНІЧНИМ ОБСТРУКТИВНИМ ЗАХВОРЮВАННЯМ ЛЕГЕНЬ",
        "authors": "Бойко О. О., Родіонова В. В.",
        "affiliation": "Державний заклад «Дніпропетровська медична академія Міністерства охорони здоров'я України», кафедра професійних хвороб та клінічної імунології, Дніпро, Україна",
        "supervisor": "Родіонова В. В., д. мед. н., професор",
        "image_name": "Bojko.jpg"
    },
    {
        "title": "ВИЗНАЧЕННЯ ІРІСІНУ У ХВОРИХ НА ГОСТРИЙ ІНФАРКТ МІОКАРДА ІЗ СУПУТНІМ ОЖИРІННЯМ",
        "authors": "Котелюх М.Ю., Глєбова О.В., Залізняк О.В., Цівенко В.М.",
        "affiliation": "Харківський національний медичний університет, кафедра внутрішньої медицини №2, клінічної імунології і алергології імені академіка Л.Т.Малої, Харків, Україна",
        "supervisor": "Кравчун П. Г., д. мед. н., професор, завідувач кафедри внутрішньої медицини №2, клінічної імунології і алергології імені академіка Л.Т.Малої",
        "image_name": "Koteluh.jpg"
    },
    {
        "title": "ВИКОРИСТАННЯ СПЕЦІАЛЬНО РОЗРОБЛЕННОЇ КАРТИ «ЧЕК-ЛИСТ» ДЛЯ ВИЗНАЧЕННЯ ДЖЕРЕЛА ХРОНІЧНОГО БОЛЮ У НЕВЕРБАЛЬНИХ ДІТЕЙ З ПАРАЛІТИЧНИМИ СИНДРОМАМИ",
        "authors": "Орлова Н.В.",
        "affiliation": "Харківський національний медичний університет, кафедра педіатрії №1 та неонатології, Харків, Україна",
        "supervisor": "Ріга О. О., д. мед. н., професор",
        "image_name": "Orlova.jpg"
    },
    {
        "title": "КЛІНІКО-ПАТОМОРФОЛОГІЧНЕ ТА ЕКОНОМІЧНЕ ОБҐРУНТУВАННЯ ВИКОРИСТАННЯ ЦЕНТРАЛЬНОГО ВЕНОЗНОГО КАТЕТЕРУ, ЩО ІМПЛАНТУЄТЬСЯ ПЕРИФЕРИЧНО",
        "authors": "Кізюріна Ю.В., Кутіков Д.О.",
        "affiliation": "Харківський національний університет імені В. Н. Каразіна, медичний факультет, кафедра загальної та клінічної патології, Харків, Україна",
        "supervisor": "Козлова Т. В., к. мед. н., доцент<br/>Шаповал О. В., к. мед. н., доцент",
        "image_name": "Kizurina.jpg"
    },
    {
        "title": "ГІСТОЛОГІЧНА БУДОВА ШКІРИ. АТОПІЧНИЙ ДЕРМАТИТ ЯК ПРИКЛАД ПОРУШЕННЯ НОРМАЛЬНОГО СТАНУ ШКІРНИХ ПОКРИВІВ",
        "authors": "Дорофеєва В.Р.",
        "affiliation": "Харківський національний університет імені В. Н. Каразіна, медичний факультет, кафедра загальної та клінічної патології, Харків, Україна",
        "supervisor": "Шаповал О. В., к. мед. н., доцент",
        "image_name": "Dorofeeva.jpg"
    },
    {
        "title": "ВПЛИВ МЕДИКО-СОЦІАЛЬНИХ ЧИННИКІВ НА ЗДОРОВ’Я ТА ЗДОРОВ’Я ОРІЄНТОВАНУ ПОВЕДІНКУ ШКОЛЯРІВ",
        "authors": "Голубнича Г. І., Пересипкіна Т. В., Голубнича О. О.",
        "affiliation": "Харківський національний університет імені В. Н. Каразіна, медичний факультет, кафедра гігієни та соціальної медицини, Харків, Україна<br>ДУ «Інститут охорони здоров’я дітей та підлітків НАМН України»",
        "supervisor": "-",
        "image_name": "Holubnycha.jpg"
    },
    {
        "title": "ЛЕТАЛЬНИЙ НАСЛІДОК ТРОПІЧНОЇ МАЛЯРІЇ. ОПИС КЛІНИЧНОГО ВИПАДКУ",
        "authors": "Катагіра М.М.",
        "affiliation": "Харківський національний університет імені В. Н. Каразіна, медичний факультет, кафедра загальної та клінічної імунології та алергології, Харків, Україна",
        "supervisor": "Гололобова О .В., к. мед. н., доцент",
        "image_name": "null.jpg"
    },
    {
        "title": "ПІДШЛУНКОВА ЗАЛОЗА: ЕМБРІОГЕНЕЗ, СТРУКТУРНА ОРГАНІЗАЦІЯ ТА ПРИКЛАДИ ПАТОЛОГІЧНИХ СТАНІВ",
        "authors": "Шевченко Т. Т.",
        "affiliation": "Харківський національний університет імені В. Н. Каразіна, медичний факультет, кафедра загальної та клінічної патології, Харків, Україна",
        "supervisor": "Шаповал О. В., к. мед. н., доцент<br>Чертенко Т. Н., к. мед. н., асистент<br>Проценко О. С., д. мед. н., професор, завідувач кафедри загальної та клінічної патології",
        "image_name": "Shevchenko.jpg"
    },
    {
        "title": "МОРФОЛОГІЧНА БУДОВА ОКА ТА МЕТОДИКИ ВІДНОВЛЕННЯ ЗОРУ",
        "authors": "Фоменко К. М.",
        "affiliation": "Харківський національний університет імені В. Н. Каразіна, медичний факультет, кафедра загальної та клінічної патології, Харків, Україна",
        "supervisor": "Шаповал О. В., к. мед. н., доцент",
        "image_name": "Fomenko.jpg"
    },
    {
        "title": "БІОЛОГІЧНІ РАНОВІ ПОКРИТТЯ ТА БІОПРИНТИНГ ЯК СКЛАДОВІ АЛГОРИТМУ ВІДНОВЛЕННЯ ПОШКОДЖЕНОГО ШКІРНОГО ПОКРИВУ",
        "authors": "Родіонов М. О., Єлецький М. С.",
        "affiliation": "Харківський національний університет імені В. Н. Каразіна, медичний факультет, кафедра загальної та клінічної патології, Харків, Україна",
        "supervisor": "Проценко О. С., д.мед.н., професор, завідувач кафедри загальної та клінічної патології<br/>Шаповал О.В., к.мед.н., доцент",
        "image_name": "Rodionov.jpg"
    },
    {
        "title": "МОРФОЛОГІЧНА ХАРАКТЕРИСТИКА АОРТИ В НОРМІ ТА ПРИ ПАТОЛОГІЧНИХ СТАНАХ",
        "authors": "Гурова П., Мягка Д., Муравенко А. А.",
        "affiliation": "Харківський національний університет імені В. Н. Каразіна, медичний факультет, кафедра загальної та клінічної патології, Харків, Україна",
        "supervisor": "Проценко О. С., д. мед. н., професор, завідувач кафедри загальної та клінічної патології<br/>Шаповал О.В., к.мед.н., доцент",
        "image_name": "Gurova.jpg"
    },
    {
        "title": "ВИЗНАЧЕННЯ СТАНУ ВЕЛИКОГО ДУОДЕНАЛЬНОГО СОСКА У ХВОРИХ НА ПОСТХОЛЕЦИСТЕКТОМІЧНИЙ СИНДРОМ ЗА ДАНИМИ ПРИСТІНКОВОЇ ІМПЕДАНСОМЕТРІЇ",
        "authors": "Алексанян К. А., Комарчук Є. В., Комарчук В. В.",
        "affiliation": "Харківська медична академія післядипломної освіти, кафедра торакоабдомінальної хірургії, Харків, Україна",
        "supervisor": "Велигоцький М. М., д. мед. н., професор, завідувач кафедри торакоабдомінальної хірургії",
        "image_name": "Alexanjan.jpg"
    },
    {
        "title": "МОРФОФУНКЦІОНАЛЬНА ХАРАКТЕРИСТИКА ЖИРОВОЇ ТКАНИНИ",
        "authors": "Сазонова Т. М., Хомякова М. Ю.",
        "affiliation": "Харківський національний університет імені В. Н. Каразіна, медичний факультет, кафедра загальної та клінічної патології, Харків, Україна",
        "supervisor": "Шаповал О. В., к.мед.н., доцент<br>Проценко О. С., д. мед. н., професор, завідувач кафедри загальної та клінічної патології",
        "image_name": "Sazonova.jpg"
    },
    {
        "title": "ВІЗУАЛЬНЕ ВИЗНАЧЕННЯ КЛІНІЧНИХ ОЗНАК ЗАХВОРЮВАНЬ",
        "authors": "Неляпіна М. М.",
        "affiliation": "Харківський національний університет імені В. Н. Каразіна, медичний факультет, кафедра загальної та клінічної патології, Харків, Україна",
        "supervisor": "Шаповал О. В., к. мед. н., доцент",
        "image_name": "Neljapina.jpg"
    },
    {
        "title": "ГРАНУЛЯЦІЙНА ТКАНИНА ЯК КЛІНІЧНО ВАЖЛИВИЙ МОРФОЛОГІЧНИЙ СУБСТРАТ",
        "authors": "Вощилін Б. Р., Шнейдерман С. І.",
        "affiliation": "Харківський національний університет імені В. Н. Каразіна, медичний факультет, кафедра загальної та клінічної патології, Харків, Україна",
        "supervisor": "Шаповал О. В., к.мед.н., доцент<br>Проценко О. С., д. мед. н., професор, завідувач кафедри загальної та клінічної патології",
        "image_name": "Voshchilin.jpg"
    },
    {
        "title": "ЗАСТОСУВАННЯ ПОВЕРХНЕВОЇ БІОПСІЇ ЯК МЕТОДУ ОЦІНКИ СТАНУ ТКАНИН ОПІКОВОЇ РАНИ",
        "authors": "Шаповал О.В, Кравцов О.В., Тесленко Г.О.",
        "affiliation": "Харківський національний університет імені В. Н. Каразіна, медичний факультет, кафедра загальної та клінічної патології, Харків, Україна<br/>Відділення опіків ДУ «Інститут загальної та невідкладної хірургії ім.В.Т.Зайцева НАМН України», Харків, Україна",
        "supervisor": "Проценко О. С., д. мед. н., професор, завідувач кафедри загальної та клінічної патології",
        "image_name": "Shapoval.jpg"
    }
];
const imagesList = [ "null.jpg", "Alexanjan.jpg", "Bojko.jpg", "Dorofeeva.jpg", "Fomenko.jpg", "Gurova.jpg", "Holubnycha.jpg", "Ivanova.jpg", "Kizurina.jpg", "Koteluh.jpg", "Neljapina.jpg", "Orlova.jpg", "Rodionov.jpg", "Sazonova.jpg", "Shapoval.jpg", "Shevchenko.jpg", "Voshchilin.jpg" ];
