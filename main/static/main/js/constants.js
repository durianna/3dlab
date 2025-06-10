class Question
{
	constructor(text, answers, type)
	{
		this.text = text;
		this.answers = answers;
        this.type = type;
	}

	Click(index)
	{
		return this.answers[index].value;
	}
}

//Класс, представляющий ответ
class Answer
{
	constructor(text, value)
	{
		this.text = text;
		this.value = value;
	}
}

export const questions1 =
[
	new Question(gettext("Вопрос №1. Какое окно отображает трехмерную сцену в Blender?"),
	[
		new Answer("Timeline", 0),
		new Answer("3D Viewport", 1),
		new Answer("Outliner", 0),
		new Answer("Properties", 0)
	], 1),

	new Question(gettext("2. Какое окно в Blender используется для управления слоями и объектами на сцене?"),
	[
		new Answer("Shader Editor", 0),
		new Answer("Timeline", 0),
		new Answer("Outliner", 1),
		new Answer("UV Editor", 0)
	], 1),

	new Question(gettext("3. Какая комбинация клавиш в Blender позволяет увеличить или уменьшить масштаб в 3D Viewport?"),
	[
		new Answer("Shift + R", 0),
		new Answer("Ctrl + Tab", 0),
		new Answer("Shift + F", 0),
		new Answer(gettext("Колесо мыши"), 1)
	], 1),

	new Question(gettext("4. Где можно изменить настройки материала для объекта в Blender?"),
	[
		new Answer("3D Viewport", 0),
		new Answer("Properties", 1),
		new Answer("Outliner", 0),
		new Answer("Timeline", 0)
	], 1),

	new Question(gettext("5. Какое окно позволяет просматривать и редактировать анимационные ключи?"),
	[
		new Answer("Properties", 0),
		new Answer("Timeline", 1),
		new Answer("Shader Editor", 0),
		new Answer("3D Viewport", 0)
	], 1),

	new Question(gettext("6. Какой инструмент используется для перемещения объектов на сцене в Blender?"),
	[
		new Answer("Scale", 0),
		new Answer("Rotate", 0),
		new Answer("Grab", 1),
		new Answer("Extrude", 0)
	], 1),

	new Question(gettext("7. Какой элемент интерфейса отвечает за рендеринг сцены в Blender?"),
	[
		new Answer("Properties", 0),
		new Answer("3D Viewport", 0),
		new Answer("Render", 1),
		new Answer("Outliner", 0)
	], 1),

	new Question(gettext("8. Как вызвать контекстное меню в 3D Viewport?"),
	[
		new Answer(gettext("Левой кнопкой мыши"), 0),
		new Answer(gettext("Правой кнопкой мыши"), 1),
		new Answer(gettext("Клавишей Tab"), 0),
		new Answer(gettext("Средней кнопкой мыши"), 0)
	], 1),

	new Question(gettext("9. В каком окне можно настроить шейдеры для объектов?"),
	[
		new Answer("Outliner", 0),
		new Answer("3D Viewport", 0),
		new Answer("Shader Editor", 1),
		new Answer("UV Editor", 0)
	], 1),

	new Question(gettext("10. Какая клавиша переключает между объектным и режимом редактирования?"),
	[
		new Answer("Tab", 1),
		new Answer("Ctrl + E", 0),
		new Answer("Shift + A", 0),
		new Answer("X", 0)
	], 1)
];


export const questions2 =
[
    new Question(gettext("1. Какая кнопка мыши используется для выделения объектов по умолчанию в Blender?"),
    [
        new Answer(gettext("Левая кнопка мыши"), 1),
        new Answer(gettext("Правая кнопка мыши"), 0),
        new Answer(gettext("Средняя кнопка мыши"), 0),
        new Answer(gettext("Колесико мыши"), 0)
    ], 1),

    new Question(gettext("2. Что происходит при сочетании клавиш Shift + ЛКМ в Blender?"),
    [
        new Answer(gettext("Удаление объекта"), 0),
        new Answer(gettext("Множественное выделение объектов"), 1),
        new Answer(gettext("Перемещение объекта"), 0),
        new Answer(gettext("Сброс выделения"), 0)
    ], 1),

    new Question(gettext("3. Какой клавишей вызывается рамочное выделение (Box Select)?"),
    [
        new Answer("B", 1),
        new Answer("C", 0),
        new Answer("Shift", 0),
        new Answer("Ctrl", 0)
    ], 1),

    new Question(gettext("4. Как активировать круговое выделение (Circle Select)?"),
    [
        new Answer("Alt + B", 0),
        new Answer("C", 1),
        new Answer("Ctrl + ЛКМ", 0),
        new Answer("Shift + B", 0)
    ], 1),

    new Question(gettext("5. Как активировать лассо-выделение?"),
    [
        new Answer("Alt + ЛКМ", 0),
        new Answer("Ctrl + ПКМ", 1),
        new Answer("Shift + ПКМ", 0),
        new Answer("Shift + C", 0)
    ], 1),

    new Question(gettext("6. Какая комбинация используется для установки 3D-курсора в сцену (в последних версиях Blender)?"),
    [
        new Answer("Shift + ПКМ", 0),
        new Answer("Ctrl + ЛКМ", 0),
        new Answer("Shift + ЛКМ", 1),
        new Answer("Alt + ЛКМ", 0)
    ], 1),

    new Question(gettext("7. Где можно вручную задать координаты 3D-курсора?"),
    [
        new Answer("Outliner", 0),
        new Answer("Shader Editor", 0),
        new Answer("View → 3D Cursor (в N-панели)", 1),
        new Answer("Render Properties", 0)
    ], 1),

    new Question(gettext("8. Что позволяет сделать команда Snap → Selection to Cursor?"),
    [
        new Answer(gettext("Привязать объекты к 3D-курcору"), 1),
        new Answer(gettext("Отменить последнее действие"), 0),
        new Answer(gettext("Создать новую коллекцию"), 0),
        new Answer(gettext("Выделить объекты рамкой"), 0)
    ], 1),

    new Question(gettext("9. Какие действия можно выполнять с помощью гизмо трансформации? (два правильных ответа)"),
    [
        new Answer(gettext("Масштабировать объекты"), 1),
        new Answer(gettext("Создавать текстуры"), 0),
        new Answer(gettext("Перемещать объекты"), 1),
        new Answer(gettext("Рендерить сцену"), 0)
    ], 2),

    new Question(gettext("10. Какой режим Pivot Point позволяет вращать каждый объект вокруг собственной оси?"),
    [
        new Answer("Active Element", 0),
        new Answer("Individual Origins", 1),
        new Answer("Median Point", 0),
        new Answer("3D Cursor", 0)
    ], 1)
];



export const questions3 =
[
    new Question("1. Какая клавиша на NumPad переключает вид спереди в Blender?",
    [
        new Answer("3", 0),
        new Answer("1", 1),
        new Answer("7", 0),
        new Answer("0", 0)
    ], 1),

    new Question("2. Какая комбинация клавиш позволяет увидеть объект сзади?",
    [
        new Answer("Ctrl + 3", 0),
        new Answer("Ctrl + 1", 1),
        new Answer("Alt + 1", 0),
        new Answer("Shift + 1", 0)
    ], 1),

    new Question("3. Как переключить вид на ортографический режим?",
    [
        new Answer("5", 1),
        new Answer("0", 0),
        new Answer("Ctrl + 5", 0),
        new Answer("Alt + 5", 0)
    ], 1),

    new Question("4. Какое сочетание клавиш открывает вид из камеры?",
    [
        new Answer("7", 0),
        new Answer("1", 0),
        new Answer("0", 1),
        new Answer("5", 0)
    ], 1),

    new Question("5. Как можно вращать вид вокруг объекта с помощью NumPad?",
    [
        new Answer("Клавишами 2, 4, 6, 8", 1),
        new Answer("Клавишами 1, 3, 7", 0),
        new Answer("Только колесиком мыши", 0),
        new Answer("Клавишами Shift + стрелки", 0)
    ], 1),

    new Question("6. Как с помощью клавиши на NumPad быстро центрировать вид на выделенном объекте?",
    [
        new Answer("Клавиша 5", 0),
        new Answer("Клавиша . (точка)", 1),
        new Answer("Клавиша 0", 0),
        new Answer("Клавиша Enter", 0)
    ], 1),

    new Question("7. Что нужно сделать, чтобы разделить окно в Blender?",
    [
        new Answer("Щелкнуть правой кнопкой мыши и выбрать Split Area", 0),
        new Answer("Нажать на угол окна и перетащить", 1),
        new Answer("Нажать Ctrl + Shift + S", 0),
        new Answer("Нажать Tab", 0)
    ], 1),

    new Question("8. Где находится кнопка для смены типа окна (редактора)?",
    [
        new Answer("В правом верхнем углу окна", 0),
        new Answer("В левом верхнем углу окна", 1),
        new Answer("Внизу окна", 0),
        new Answer("На панели Properties", 0)
    ], 1),

    new Question("9. Что можно сделать после разделения окон? (два правильных ответа)",
    [
        new Answer("Выбрать разный тип редактора в каждом окне", 1),
        new Answer("Создать отдельные сцены в каждом окне", 0),
        new Answer("Изменить вид в каждом окне", 1),
        new Answer("Запустить два рендера одновременно", 0)
    ], 2),

    new Question("10. Как объединить два окна обратно в одно?",
    [
        new Answer("Перетащить угол одного окна на другое", 1),
        new Answer("Нажать Alt + M", 0),
        new Answer("Нажать Tab", 0),
        new Answer("Закрыть Blender и открыть заново", 0)
    ], 1)
];

export const questions4 =
[
    new Question("1. Что такое рендеринг в Blender?",
    [
        new Answer("Процесс добавления текстур к объектам", 0),
        new Answer("Процесс генерации окончательного изображения из 3D-сцены", 1),
        new Answer("Процесс скульптинга объектов", 0),
        new Answer("Процесс перемещения объектов", 0)
    ], 1),

    new Question("2. Какой рендер-движок в Blender подходит для быстрого рендеринга в реальном времени?",
    [
        new Answer("Cycles", 0),
        new Answer("Eevee", 1),
        new Answer("Workbench", 0),
        new Answer("Octane", 0)
    ], 1),

    new Question("3. Какой рендер-движок в Blender обеспечивает более фотореалистичное изображение?",
    [
        new Answer("Workbench", 0),
        new Answer("Eevee", 0),
        new Answer("Cycles", 1),
        new Answer("Grease Pencil", 0)
    ], 1),

    new Question("4. Какая клавиша переключает вид камеры в Blender?",
    [
        new Answer("5", 0),
        new Answer("0", 1),
        new Answer("7", 0),
        new Answer("Ctrl + 0", 0)
    ], 1),

    new Question("5. Какие параметры необходимо настроить перед рендерингом? (два правильных ответа)",
    [
        new Answer("Разрешение изображения", 1),
        new Answer("Количество выделенных объектов", 0),
        new Answer("Путь сохранения файлов", 1),
        new Answer("Размер сетки (Grid Size)", 0)
    ], 2),

    new Question("6. Какой горячей клавишей запускается рендеринг изображения?",
    [
        new Answer("Ctrl + F12", 0),
        new Answer("F12", 1),
        new Answer("F11", 0),
        new Answer("Alt + R", 0)
    ], 1),

    new Question("7. Где изменить движок рендеринга (между Eevee и Cycles)?",
    [
        new Answer("В Render Properties", 1),
        new Answer("В Output Properties", 0),
        new Answer("В Shader Editor", 0),
        new Answer("В Outliner", 0)
    ], 1),

    new Question("8. Как сохранить результат рендеринга после завершения?",
    [
        new Answer("Файл → Экспорт", 0),
        new Answer("Image → Save As…", 1),
        new Answer("Ctrl + S", 0),
        new Answer("Render → Save Viewport", 0)
    ], 1),

    new Question("9. Что учитывается в режиме Rendered Viewport Shading? (два правильных ответа)",
    [
        new Answer("Источники света", 1),
        new Answer("Количество объектов в сцене", 0),
        new Answer("Материалы и текстуры", 1),
        new Answer("История изменений (Undo History)", 0)
    ], 2),

    new Question("10. Как включить режим Rendered Viewport Shading?",
    [
        new Answer("Выбрать Rendered в меню Z", 1),
        new Answer("Нажать Shift + R", 0),
        new Answer("Перейти в Shader Editor", 0),
        new Answer("Нажать Tab", 0)
    ], 1)
];

export const questions5 =
[
    new Question("1. Что такое меш (Mesh) в Blender?",
    [
        new Answer("Набор текстур объекта", 0),
        new Answer("Каркас модели, состоящий из вершин, рёбер и граней", 1),
        new Answer("Массив данных материалов", 0),
        new Answer("Карта освещения сцены", 0)
    ], 1),

    new Question("2. Из каких базовых элементов состоит меш? (два правильных ответа)",
    [
        new Answer("Вершины", 1),
        new Answer("Тени", 0),
        new Answer("Рёбра", 1),
        new Answer("Камеры", 0)
    ], 2),

    new Question("3. Что происходит при соединении двух вершин?",
    [
        new Answer("Создаётся текстура", 0),
        new Answer("Создаётся грань", 0),
        new Answer("Создаётся ребро", 1),
        new Answer("Создаётся нормаль", 0)
    ], 1),

    new Question("4. Как называется замкнутая поверхность, образованная рёбрами?",
    [
        new Answer("Нормаль", 0),
        new Answer("Грань", 1),
        new Answer("Сетка", 0),
        new Answer("Каркас", 0)
    ], 1),

    new Question("5. Что такое нормали в Blender?",
    [
        new Answer("Вектор, определяющий направление поверхности", 1),
        new Answer("Тип освещения сцены", 0),
        new Answer("Материал объекта", 0),
        new Answer("Элемент текстурирования", 0)
    ], 1),

    new Question("6. Как называется структура соединения вершин, рёбер и граней в меше?",
    [
        new Answer("Топология", 1),
        new Answer("Скелет", 0),
        new Answer("Геометрия", 0),
        new Answer("Освещение", 0)
    ], 1),

    new Question("7. Какая топология считается более удобной для анимации?",
    [
        new Answer("Нерегулярная", 0),
        new Answer("С равномерно распределёнными вершинами и гранями", 1),
        new Answer("С большим числом треугольников", 0),
        new Answer("С минимальным количеством рёбер", 0)
    ], 1),

    new Question("8. Какие типы граней чаще всего используются в 3D-моделировании? (два правильных ответа)",
    [
        new Answer("Треугольные", 1),
        new Answer("Шестиугольные", 0),
        new Answer("Квадратные", 1),
        new Answer("Пятиугольные", 0)
    ], 2),

    new Question("9. Что делает команда Object > Apply > All Transforms?",
    [
        new Answer("Сохраняет все трансформации объекта", 1),
        new Answer("Удаляет все материалы", 0),
        new Answer("Создаёт копию объекта", 0),
        new Answer("Объединяет несколько объектов в один", 0)
    ], 1),

    new Question("10. В каком режиме редактируются вершины, рёбра и грани?",
    [
        new Answer("Object Mode", 0),
        new Answer("Edit Mode", 1),
        new Answer("Sculpt Mode", 0),
        new Answer("Pose Mode", 0)
    ], 1)
];


export const questions6 =
[
    new Question("1. Что делает инструмент Extrude в Blender?",
    [
        new Answer("Удаляет грань", 0),
        new Answer("Создаёт новые элементы, продолжая геометрию", 1),
        new Answer("Изменяет цвет объекта", 0),
        new Answer("Соединяет два объекта", 0)
    ], 1),

    new Question("2. В каком режиме выполняется операция Extrude?",
    [
        new Answer("Object Mode", 0),
        new Answer("Edit Mode", 1),
        new Answer("Sculpt Mode", 0),
        new Answer("Pose Mode", 0)
    ], 1),

    new Question("3. Какая горячая клавиша активирует инструмент Extrude?",
    [
        new Answer("E", 1),
        new Answer("X", 0),
        new Answer("Ctrl + E", 0),
        new Answer("Shift + E", 0)
    ], 1),

    new Question("4. Что произойдет после нажатия E → Z → 2 в режиме редактирования?",
    [
        new Answer("Объект повернётся вокруг оси Z", 0),
        new Answer("Произойдёт выдавливание вверх на 2 единицы по оси Z", 1),
        new Answer("Удалится грань по оси Z", 0),
        new Answer("Переключится вид сверху", 0)
    ], 1),

    new Question("5. Какие компоненты можно выдавливать с помощью Extrude? (два правильных ответа)",
    [
        new Answer("Грани", 1),
        new Answer("Нормали", 0),
        new Answer("Вершины", 1),
        new Answer("Материалы", 0)
    ], 2),

    new Question("6. Что делает инструмент Inset Faces (горячая клавиша I)?",
    [
        new Answer("Создаёт внутреннюю рамку или углубление на выбранной поверхности", 1),
        new Answer("Удаляет грань", 0),
        new Answer("Соединяет две вершины", 0),
        new Answer("Добавляет источник света", 0)
    ], 1),

    new Question("7. Для чего используется сочетание клавиш Ctrl + R в Blender?",
    [
        new Answer("Добавление кольцевого разреза (Loop Cut)", 1),
        new Answer("Перемещение объекта", 0),
        new Answer("Сохранение файла", 0),
        new Answer("Выделение объекта", 0)
    ], 1),

    new Question("8. Что происходит после первого клика мыши при использовании Loop Cut?",
    [
        new Answer("Создаётся вершина", 0),
        new Answer("Подтверждается разрез", 1),
        new Answer("Удаляется грань", 0),
        new Answer("Меняется режим работы", 0)
    ], 1),

    new Question("9. Какие операции можно выполнить после использования Inset Faces? (два правильных ответа)",
    [
        new Answer("Выдавить внутреннюю грань с помощью Extrude", 1),
        new Answer("Закруглить полученную грань", 1),
        new Answer("Добавить камеру в сцену", 0),
        new Answer("Сменить движок рендера", 0)
    ], 2),

    new Question("10. Что отображается при наведении инструмента Loop Cut на объект до клика мышью?",
    [
        new Answer("Зелёная линия", 0),
        new Answer("Жёлтая линия", 1),
        new Answer("Красная точка", 0),
        new Answer("Фиолетовая сетка", 0)
    ], 1)
];

export const questions7 =
[
    new Question("1. Что делает инструмент Inset Faces в Blender?",
    [
        new Answer("Создаёт скос углов", 0),
        new Answer("Создаёт внутреннюю грань внутри выбранной", 1),
        new Answer("Удаляет вершины", 0),
        new Answer("Режет объект по траектории", 0)
    ], 1),

    new Question("2. Какая горячая клавиша активирует инструмент Inset Faces?",
    [
        new Answer("I", 1),
        new Answer("E", 0),
        new Answer("Ctrl + R", 0),
        new Answer("K", 0)
    ], 1),

    new Question("3. Для чего используется инструмент Loop Cut and Slide?",
    [
        new Answer("Для создания отверстий в модели", 0),
        new Answer("Для добавления кольцевых разрезов", 1),
        new Answer("Для удаления граней", 0),
        new Answer("Для автоматического сглаживания объекта", 0)
    ], 1),

    new Question("4. Как активировать инструмент Loop Cut and Slide?",
    [
        new Answer("K", 0),
        new Answer("Ctrl + B", 0),
        new Answer("Ctrl + R", 1),
        new Answer("M", 0)
    ], 1),

    new Question("5. Какую линию показывает Blender при наведении Loop Cut на объект?",
    [
        new Answer("Красную", 0),
        new Answer("Жёлтую", 1),
        new Answer("Зелёную", 0),
        new Answer("Синюю", 0)
    ], 1),

    new Question("6. Что делает инструмент Knife Tool в Blender?",
    [
        new Answer("Создаёт внутреннюю рамку", 0),
        new Answer("Разрезает меш по произвольной траектории", 1),
        new Answer("Смещает вершины вдоль осей", 0),
        new Answer("Добавляет источник света", 0)
    ], 1),

    new Question("7. Как завершить работу Knife Tool после нанесения разрезов?",
    [
        new Answer("Нажать Esc", 0),
        new Answer("Нажать Enter", 1),
        new Answer("Нажать Space", 0),
        new Answer("Нажать Ctrl", 0)
    ], 1),

    new Question("8. Что позволяет сделать инструмент Merge (M)? (два правильных ответа)",
    [
        new Answer("Объединить несколько вершин в одну", 1),
        new Answer("Добавить новые материалы", 0),
        new Answer("Очистить лишние вершины", 1),
        new Answer("Создать новый объект", 0)
    ], 2),

    new Question("9. Что происходит при использовании Bevel (Ctrl + B)?",
    [
        new Answer("Удаляются рёбра", 0),
        new Answer("Создаётся скос на рёбрах или вершинах", 1),
        new Answer("Перемещается выделенный объект", 0),
        new Answer("Добавляется новый разрез", 0)
    ], 1),

    new Question("10. Чем можно управлять при использовании Bevel?",
    [
        new Answer("Частотой анимации", 0),
        new Answer("Количество сегментов через колесо мыши", 1),
        new Answer("Рендер-движком", 0),
        new Answer("Режимом камеры", 0)
    ], 1)
];


export const questions8 =
[
    new Question("1. Что делает инструмент Subdivide в Blender?",
    [
        new Answer("Удаляет выбранные грани", 0),
        new Answer("Разделяет выбранные элементы сетки на более мелкие", 1),
        new Answer("Объединяет вершины", 0),
        new Answer("Создаёт материалы", 0)
    ], 1),

    new Question("2. Где находится команда Subdivide в режиме редактирования?",
    [
        new Answer("В верхнем меню File", 0),
        new Answer("По правому клику мыши в Edit Mode", 1),
        new Answer("В панели Outliner", 0),
        new Answer("В настройках рендера", 0)
    ], 1),

    new Question("3. Какой параметр отвечает за количество разрезов при использовании Subdivide?",
    [
        new Answer("Smoothness", 0),
        new Answer("Number of Cuts", 1),
        new Answer("Fractal", 0),
        new Answer("Along Normal", 0)
    ], 1),

    new Question("4. Что делает параметр Fractal в настройках Subdivide?",
    [
        new Answer("Сохраняет текущую сетку", 0),
        new Answer("Добавляет случайное смещение вершинам", 1),
        new Answer("Объединяет вершины", 0),
        new Answer("Сглаживает углы", 0)
    ], 1),

    new Question("5. Как включить пропорциональное редактирование (Proportional Editing)? (два правильных ответа)",
    [
        new Answer("Нажать клавишу O", 1),
        new Answer("Нажать клавишу G", 0),
        new Answer("Кликнуть на значок круга в 3D Viewport", 1),
        new Answer("Нажать F9", 0)
    ], 2),

    new Question("6. Что происходит при использовании пропорционального редактирования?",
    [
        new Answer("Только одна вершина изменяется", 0),
        new Answer("Изменяется выделенная вершина и её окружение", 1),
        new Answer("Удаляются соседние вершины", 0),
        new Answer("Создаются новые материалы", 0)
    ], 1),

    new Question("7. Какая клавиша используется для перемещения вершин после включения пропорционального редактирования?",
    [
        new Answer("S", 0),
        new Answer("G", 1),
        new Answer("R", 0),
        new Answer("E", 0)
    ], 1),

    new Question("8. Как изменить радиус влияния в режиме пропорционального редактирования?",
    [
        new Answer("Нажать клавишу X", 0),
        new Answer("Прокручивать колесо мыши", 1),
        new Answer("Нажать клавишу Enter", 0),
        new Answer("Нажать Shift + O", 0)
    ], 1),

    new Question("9. Какие элементы сетки можно разделить с помощью Subdivide? (два правильных ответа)",
    [
        new Answer("Рёбра", 1),
        new Answer("Грани", 1),
        new Answer("Материалы", 0),
        new Answer("Источники света", 0)
    ], 2),

    new Question("10. Что происходит после применения Subdivide к граням объекта?",
    [
        new Answer("Удаляются вершины", 0),
        new Answer("Появляется больше вершин, рёбер и граней", 1),
        new Answer("Происходит скос краёв", 0),
        new Answer("Создаётся новая сцена", 0)
    ], 1)
];





export const questions9 =
[
    new Question("1. Что делают модификаторы в Blender?",
    [
        new Answer("Постоянно изменяют исходную геометрию объекта", 0),
        new Answer("Работают как неразрушающие фильтры для объектов", 1),
        new Answer("Удаляют все материалы у объекта", 0),
        new Answer("Сохраняют рендеры", 0)
    ], 1),

    new Question("2. К какой категории относятся модификаторы, изменяющие форму без изменения топологии?",
    [
        new Answer("Edit", 0),
        new Answer("Generate", 0),
        new Answer("Deform", 1),
        new Answer("Physics", 0)
    ], 1),

    new Question("3. Какие модификаторы в Blender относятся к симуляции физических процессов?",
    [
        new Answer("Deform", 0),
        new Answer("Physics", 1),
        new Answer("Generate", 0),
        new Answer("Edit", 0)
    ], 1),

    new Question("4. Что делает модификатор Boolean?",
    [
        new Answer("Добавляет текстуры к объекту", 0),
        new Answer("Создаёт булевы операции между двумя объектами", 1),
        new Answer("Применяет материалы", 0),
        new Answer("Анимирует движения объекта", 0)
    ], 1),

    new Question("5. Какие операции можно выполнить с помощью модификатора Boolean? (два правильных ответа)",
    [
        new Answer("Объединение (Union)", 1),
        new Answer("Выделение граней", 0),
        new Answer("Вычитание (Difference)", 1),
        new Answer("Создание камеры", 0)
    ], 2),

    new Question("6. Чем отличается операция Union в модификаторе Boolean?",
    [
        new Answer("Вырезает один объект из другого", 0),
        new Answer("Объединяет два объекта в один", 1),
        new Answer("Удаляет вершины объекта", 0),
        new Answer("Создаёт копию объекта", 0)
    ], 1),

    new Question("7. Что происходит при использовании операции Difference?",
    [
        new Answer("Соединяются два объекта", 0),
        new Answer("Создаётся копия объекта", 0),
        new Answer("Из первого объекта вырезается форма второго", 1),
        new Answer("Добавляется материал", 0)
    ], 1),

    new Question("8. Где находится панель добавления модификаторов?",
    [
        new Answer("В редакторе UV Editing", 0),
        new Answer("На вкладке Modifiers (иконка гаечного ключа)", 1),
        new Answer("В редакторе Animation", 0),
        new Answer("В меню Object Mode", 0)
    ], 1),

    new Question("9. Что нужно сделать после настройки модификатора Boolean, чтобы окончательно применить изменения?",
    [
        new Answer("Нажать кнопку Apply", 1),
        new Answer("Нажать Ctrl + A", 0),
        new Answer("Переключиться в Sculpt Mode", 0),
        new Answer("Сохранить файл", 0)
    ], 1),

    new Question("10. Чем булевская операция отличается от простого объединения объектов через Ctrl + J?",
    [
        new Answer("Булевская операция сохраняет пересекающиеся полигоны", 0),
        new Answer("Булевская операция удаляет пересекающиеся элементы и создаёт чистую геометрию", 1),
        new Answer("Обе операции делают одно и то же", 0),
        new Answer("Ctrl + J удаляет все материалы", 0)
    ], 1)
];


export const questions10 =
[
    new Question("1. Для чего используется модификатор Subdivision Surface в Blender?",
    [
        new Answer("Для применения материалов", 0),
        new Answer("Для автоматического сглаживания и повышения детализации объектов", 1),
        new Answer("Для удаления лишних вершин", 0),
        new Answer("Для анимации объектов", 0)
    ], 1),

    new Question("2. Как работает модификатор Subdivision Surface до момента его применения?",
    [
        new Answer("Навсегда изменяет сетку", 0),
        new Answer("Не изменяет исходную сетку до применения", 1),
        new Answer("Удаляет половину полигонов", 0),
        new Answer("Сохраняет копию объекта", 0)
    ], 1),

    new Question("3. Какая горячая клавиша быстро добавляет модификатор Subdivision Surface?",
    [
        new Answer("Ctrl + S", 0),
        new Answer("Ctrl + 1", 1),
        new Answer("Ctrl + E", 0),
        new Answer("Shift + 1", 0)
    ], 1),

    new Question("4. За что отвечает параметр Levels Viewport в настройках Subdivision Surface?",
    [
        new Answer("Определяет количество уровней сглаживания при рендеринге", 0),
        new Answer("Определяет количество уровней сглаживания в окне просмотра", 1),
        new Answer("Определяет скорость анимации", 0),
        new Answer("Изменяет цвет объекта", 0)
    ], 1),

    new Question("5. Какие алгоритмы деления доступны в Subdivision Surface? (два правильных ответа)",
    [
        new Answer("Catmull-Clark", 1),
        new Answer("Bevel", 0),
        new Answer("Simple", 1),
        new Answer("Array", 0)
    ], 2),

    new Question("6. Чем отличается алгоритм Catmull-Clark?",
    [
        new Answer("Создаёт острые края", 0),
        new Answer("Создаёт плавные округлые формы", 1),
        new Answer("Удаляет пересекающиеся грани", 0),
        new Answer("Применяет текстуры", 0)
    ], 1),

    new Question("7. Какой алгоритм Subdivision Surface используется для технических моделей без сглаживания формы?",
    [
        new Answer("Simple", 1),
        new Answer("Catmull-Clark", 0),
        new Answer("Boolean", 0),
        new Answer("Mirror", 0)
    ], 1),

    new Question("8. Где находится панель добавления модификаторов в Blender?",
    [
        new Answer("В Timeline", 0),
        new Answer("В Outliner", 0),
        new Answer("В Modifiers (иконка гаечного ключа)", 1),
        new Answer("В меню Viewport Shading", 0)
    ], 1),

    new Question("9. Что происходит при увеличении параметра Levels Render?",
    [
        new Answer("Повышается детализация на финальном рендере", 1),
        new Answer("Снижается качество модели", 0),
        new Answer("Удаляются лишние полигоны", 0),
        new Answer("Отключается сглаживание", 0)
    ], 1),

    new Question("10. Какие рекомендации обычно даются по уровням Subdivision Surface для комфортной работы? (два правильных ответа)",
    [
        new Answer("1–2 уровня для редактора", 1),
        new Answer("2–4 уровня для рендера", 1),
        new Answer("5–6 уровней для редактора", 0),
        new Answer("0 уровней для всех операций", 0)
    ], 2)
];

export const questions11 =
[
    new Question("1. Что делает модификатор Mirror в Blender?",
    [
        new Answer("Создаёт анимацию объекта", 0),
        new Answer("Отражает геометрию объекта по выбранным осям", 1),
        new Answer("Удаляет половину объекта", 0),
        new Answer("Применяет текстуры к объекту", 0)
    ], 1),

    new Question("2. Чем отличается модификатор Mirror от простого зеркалирования через Ctrl + M?",
    [
        new Answer("Модификатор Mirror только перемещает объект", 0),
        new Answer("Модификатор Mirror строит вторую половину объекта динамически", 1),
        new Answer("Оба способа работают одинаково", 0),
        new Answer("Модификатор Mirror применяет текстуры", 0)
    ], 1),

    new Question("3. Через какую вкладку добавляется модификатор Mirror?",
    [
        new Answer("Render Properties", 0),
        new Answer("Modifiers (иконка гаечного ключа)", 1),
        new Answer("Shader Editor", 0),
        new Answer("Timeline", 0)
    ], 1),

    new Question("4. Что происходит при включении опции Clipping в модификаторе Mirror?",
    [
        new Answer("Увеличивается радиус отражения", 0),
        new Answer("Вершины склеиваются в центре и не могут расходиться", 1),
        new Answer("Все оси отключаются", 0),
        new Answer("Происходит автоматическое объединение объектов", 0)
    ], 1),

    new Question("5. Какие оси можно выбрать для отражения в модификаторе Mirror? (два правильных ответа)",
    [
        new Answer("Ось X", 1),
        new Answer("Ось R", 0),
        new Answer("Ось Y", 1),
        new Answer("Ось W", 0)
    ], 2),

    new Question("6. Что произойдет при включении отражения по осям X и Y одновременно?",
    [
        new Answer("Создастся четыре копии объекта", 1),
        new Answer("Удалится половина объекта", 0),
        new Answer("Произойдёт поворот объекта", 0),
        new Answer("Создастся материал объекта", 0)
    ], 1),

    new Question("7. Какой элемент определяет точку отражения объекта в модификаторе Mirror?",
    [
        new Answer("Курсор мыши", 0),
        new Answer("Origin объекта", 1),
        new Answer("Положение камеры", 0),
        new Answer("Точка освещения", 0)
    ], 1),

    new Question("8. Как переместить Origin объекта в нужную точку для правильного зеркалирования?",
    [
        new Answer("Object → Set Origin → Origin to 3D Cursor", 1),
        new Answer("Mesh → Merge → At Center", 0),
        new Answer("Shift + S → Selection to Cursor", 0),
        new Answer("Ctrl + A → Apply Location", 0)
    ], 1),

    new Question("9. Что делает параметр Mirror Object в модификаторе Mirror?",
    [
        new Answer("Меняет цвет объекта", 0),
        new Answer("Позволяет использовать другой объект для отражения", 1),
        new Answer("Создаёт новую копию объекта", 0),
        new Answer("Удаляет вершины объекта", 0)
    ], 1),

    new Question("10. Какие функции доступны в модификаторе Mirror для управления отражением? (два правильных ответа)",
    [
        new Answer("Bisect — отсечение части объекта", 1),
        new Answer("Flip — инвертирование направления отражения", 1),
        new Answer("Bake — выпекание текстур", 0),
        new Answer("Frame — создание анимации", 0)
    ], 2)
];





export const questions12 =
[
    new Question("1. Что определяет материал в Blender?",
    [
        new Answer("Положение объекта в сцене", 0),
        new Answer("Способ взаимодействия поверхности объекта со светом", 1),
        new Answer("Тип рендеринга сцены", 0),
        new Answer("Форму объекта", 0)
    ], 1),

    new Question("2. Как создать новый материал для объекта?",
    [
        new Answer("Через вкладку World Properties", 0),
        new Answer("Перейти в Material Properties и нажать New", 1),
        new Answer("Добавить новый объект в сцену", 0),
        new Answer("Переключить режим в Sculpt Mode", 0)
    ], 1),

    new Question("3. Что настраивается через параметр Base Color материала?",
    [
        new Answer("Степень отражения", 0),
        new Answer("Основной цвет поверхности", 1),
        new Answer("Прозрачность объекта", 0),
        new Answer("Шероховатость отражения", 0)
    ], 1),

    new Question("4. Какой параметр делает поверхность объекта более металлической?",
    [
        new Answer("Specular", 0),
        new Answer("Roughness", 0),
        new Answer("Metallic", 1),
        new Answer("Transparency", 0)
    ], 1),

    new Question("5. Какие параметры влияют на реалистичность материала? (два правильных ответа)",
    [
        new Answer("Цвет поверхности", 1),
        new Answer("Положение камеры", 0),
        new Answer("Степень отражения света", 1),
        new Answer("Размер сцены", 0)
    ], 2),

    new Question("6. Где переключить отображение материалов в окне 3D Viewport?",
    [
        new Answer("В Shader Editor", 0),
        new Answer("Иконка Material Preview в правом верхнем углу 3D Viewport", 1),
        new Answer("В Outliner", 0),
        new Answer("Через меню Render Settings", 0)
    ], 1),

    new Question("7. Что определяет вкладка World Properties в Blender?",
    [
        new Answer("Материалы объектов", 0),
        new Answer("Глобальные настройки окружающей среды сцены", 1),
        new Answer("Свойства камер", 0),
        new Answer("Режим отображения сетки", 0)
    ], 1),

    new Question("8. Как изменить цвет фона сцены?",
    [
        new Answer("Перейти в World Properties и изменить параметр Color", 1),
        new Answer("Изменить Base Color материала", 0),
        new Answer("Выставить новый свет", 0),
        new Answer("Переключить рендер-движок", 0)
    ], 1),

    new Question("9. Какие параметры можно настроить для мира в Blender? (два правильных ответа)",
    [
        new Answer("Цвет фона", 1),
        new Answer("Шероховатость поверхности", 0),
        new Answer("Интенсивность фонового освещения", 1),
        new Answer("Фокусное расстояние камеры", 0)
    ], 2),

    new Question("10. Что такое HDRI?",
    [
        new Answer("Текстура высокого динамического диапазона для освещения сцены", 1),
        new Answer("Метод создания материалов", 0),
        new Answer("Способ ускорить рендеринг", 0),
        new Answer("Технология моделирования объектов", 0)
    ], 1),

];


export const questions13 =
[
    new Question("1. Что такое текстура в Blender?",
    [
        new Answer("Массив вершин объекта", 0),
        new Answer("2D-изображение или узор, применяемый к поверхности", 1),
        new Answer("Сетка граней объекта", 0),
        new Answer("Материал без цвета", 0)
    ], 1),

    new Question("2. Где обычно происходит настройка текстур в Blender?",
    [
        new Answer("В UV Editor", 0),
        new Answer("В Shader Editor", 1),
        new Answer("В Timeline", 0),
        new Answer("В Properties → Scene", 0)
    ], 1),

    new Question("3. Какая нода используется для подключения изображения в материал?",
    [
        new Answer("Noise Texture", 0),
        new Answer("Image Texture", 1),
        new Answer("Bump", 0),
        new Answer("ColorRamp", 0)
    ], 1),

    new Question("4. Как добавить ноду координат текстуры?",
    [
        new Answer("Shift + A → Input → Texture Coordinate", 1),
        new Answer("Shift + A → Shader → Texture Coordinate", 0),
        new Answer("Shift + S → UV Map", 0),
        new Answer("Ctrl + T → Texture Editor", 0)
    ], 1),

    new Question("5. Какие текстуры бывают в Blender? (два правильных ответа)",
    [
        new Answer("Image Textures", 1),
        new Answer("Procedural Textures", 1),
        new Answer("Animation Textures", 0),
        new Answer("Viewport Textures", 0)
    ], 2),

    new Question("6. Что такое UV-развёртка?",
    [
        new Answer("Создание материалов для рендера", 0),
        new Answer("Проекция 3D-объекта на 2D-плоскость для нанесения текстур", 1),
        new Answer("Процесс копирования объекта", 0),
        new Answer("Добавление света в сцену", 0)
    ], 1),

    new Question("7. Как вызвать меню UV Mapping в Edit Mode?",
    [
        new Answer("Клавиша M", 0),
        new Answer("Клавиша U", 1),
        new Answer("Клавиша V", 0),
        new Answer("Клавиша Shift + U", 0)
    ], 1),

    new Question("8. Какой способ автоматической UV-развёртки подходит для сложных моделей?",
    [
        new Answer("Cube Projection", 0),
        new Answer("Smart UV Project", 1),
        new Answer("Sphere Projection", 0),
        new Answer("Planar Projection", 0)
    ], 1),

    new Question("9. Как понять, что UV-развёртка сделана хорошо?",
    [
        new Answer("Квадраты на тестовой текстуре ровные и одинаковые", 1),
        new Answer("Текстура сильно растягивается", 0),
        new Answer("Текстура полностью белая", 0),
        new Answer("Объект становится прозрачным", 0)
    ], 1),

    new Question("10. Что происходит при подключении ноды Texture Coordinate к текстурной ноде?",
    [
        new Answer("Управляется наложение текстуры на объект", 1),
        new Answer("Удаляются все материалы объекта", 0),
        new Answer("Происходит автоматическая оптимизация сетки", 0),
        new Answer("Сохраняется UV-развёртка объекта", 0)
    ], 1)
];



export const questions14 =
[
    new Question("1. Что произойдёт при удалении всех источников света в сцене?",
    [
        new Answer("Сцена будет белой", 0),
        new Answer("На рендере будет чёрный экран", 1),
        new Answer("Сцена останется освещённой", 0),
        new Answer("Объекты исчезнут", 0)
    ], 1),

    new Question("2. Какой тип света имитирует лампочку и светит во все стороны?",
    [
        new Answer("Sun Light", 0),
        new Answer("Point Light", 1),
        new Answer("Spot Light", 0),
        new Answer("Area Light", 0)
    ], 1),

    new Question("3. Какой источник света создаёт параллельные лучи, как солнце?",
    [
        new Answer("Point Light", 0),
        new Answer("Spot Light", 0),
        new Answer("Sun Light", 1),
        new Answer("Area Light", 0)
    ], 1),

    new Question("4. Какой источник света излучает свет в форме конуса?",
    [
        new Answer("Area Light", 0),
        new Answer("Spot Light", 1),
        new Answer("Point Light", 0),
        new Answer("Sun Light", 0)
    ], 1),

    new Question("5. Какие параметры можно настроить для источников света? (два правильных ответа)",
    [
        new Answer("Power (мощность)", 1),
        new Answer("Количество граней объекта", 0),
        new Answer("Color (цвет освещения)", 1),
        new Answer("Размер сцены", 0)
    ], 2),

    new Question("6. Какой параметр у Spot Light задаёт угол распространения света?",
    [
        new Answer("Strength", 0),
        new Answer("Spot Size", 1),
        new Answer("Size", 0),
        new Answer("Power", 0)
    ], 1),

    new Question("7. Как добавить новый источник света в сцену?",
    [
        new Answer("Shift + A → Light", 1),
        new Answer("Shift + A → Mesh", 0),
        new Answer("Ctrl + L → Light", 0),
        new Answer("Shift + S → Light", 0)
    ], 1),

    new Question("8. Как сделать тени мягче при использовании источников света?",
    [
        new Answer("Увеличить мощность света", 0),
        new Answer("Уменьшить размер источника", 0),
        new Answer("Увеличить размер (Size/Radius) источника", 1),
        new Answer("Изменить цвет материала", 0)
    ], 1),

    new Question("9. Что задаёт World Settings в Blender? (два правильных ответа)",
    [
        new Answer("Цвет фона", 1),
        new Answer("Фокусное расстояние камеры", 0),
        new Answer("Общее фоновое освещение сцены", 1),
        new Answer("Количество полигонов объекта", 0)
    ], 2),

    new Question("10. Как добавить реалистичное освещение через фон сцены?",
    [
        new Answer("Добавить HDRI через Shader Editor → World", 1),
        new Answer("Установить новый материал", 0),
        new Answer("Переключить Render Engine", 0),
        new Answer("Добавить новый Point Light", 0)
    ], 1)
];



export const questions15 =
[
    new Question("1. На чём основана система анимации в Blender?",
    [
        new Answer("На добавлении новых материалов", 0),
        new Answer("На использовании ключевых кадров (Keyframes)", 1),
        new Answer("На создании новых сцен", 0),
        new Answer("На скульптинге объектов", 0)
    ], 1),

    new Question("2. Какая клавиша используется для установки ключевого кадра?",
    [
        new Answer("G", 0),
        new Answer("I", 1),
        new Answer("S", 0),
        new Answer("Shift + A", 0)
    ], 1),

    new Question("3. Какой тип ключевого кадра отвечает за изменение положения объекта?",
    [
        new Answer("Rotation", 0),
        new Answer("Location", 1),
        new Answer("Scale", 0),
        new Answer("Visibility", 0)
    ], 1),

    new Question("4. Как быстро воспроизвести анимацию в Blender?",
    [
        new Answer("Нажать пробел (Space)", 1),
        new Answer("Нажать Shift + A", 0),
        new Answer("Нажать Ctrl + R", 0),
        new Answer("Нажать F12", 0)
    ], 1),

    new Question("5. Какие свойства объекта можно анимировать в Blender? (два правильных ответа)",
    [
        new Answer("Положение (Location)", 1),
        new Answer("Параметры UV-развёртки", 0),
        new Answer("Вращение (Rotation)", 1),
        new Answer("Топологию меша", 0)
    ], 2),

    new Question("6. Как изменить длительность анимации в Blender?",
    [
        new Answer("Изменить значения Start и End на таймлайне", 1),
        new Answer("Изменить размер объекта", 0),
        new Answer("Поменять камеру сцены", 0),
        new Answer("Переключить Render Engine", 0)
    ], 1),

    new Question("7. Что произойдёт, если увеличить количество кадров между двумя ключевыми кадрами?",
    [
        new Answer("Анимация станет быстрее", 0),
        new Answer("Анимация станет медленнее", 1),
        new Answer("Объект исчезнет", 0),
        new Answer("Объект станет прозрачным", 0)
    ], 1),

    new Question("8. Где можно тонко редактировать плавность движения объекта?",
    [
        new Answer("В Graph Editor", 1),
        new Answer("В UV Editor", 0),
        new Answer("В Properties → Render Settings", 0),
        new Answer("В Material Properties", 0)
    ], 1),

    new Question("9. Какой инструмент помогает автоматически создавать ключевые кадры при изменении объекта?",
    [
        new Answer("Auto Keying (красный кружок на таймлайне)", 1),
        new Answer("Sculpt Mode", 0),
        new Answer("Mirror Modifier", 0),
        new Answer("Subdivision Surface", 0)
    ], 1),

    new Question("10. Как увеличить скорость анимации объекта в Blender?",
    [
        new Answer("Уменьшить количество кадров между ключевыми кадрами", 1),
        new Answer("Увеличить разрешение рендера", 0),
        new Answer("Добавить больше источников света", 0),
        new Answer("Изменить цвет материала", 0)
    ], 1)
];

