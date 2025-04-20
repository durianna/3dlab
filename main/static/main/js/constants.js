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
	new Question("Вопрос №1. Какое окно отображает трехмерную сцену в Blender?",
	[
		new Answer("Timeline", 0),
		new Answer("3D Viewport", 1),
		new Answer("Outliner", 0),
		new Answer("Properties", 0)
	], 1),

	new Question("2. Какое окно в Blender используется для управления слоями и объектами на сцене?",
	[
		new Answer("Shader Editor", 0),
		new Answer("Timeline", 0),
		new Answer("Outliner", 1),
		new Answer("UV Editor", 0)
	], 1),

	new Question("3. Какая комбинация клавиш в Blender позволяет увеличить или уменьшить масштаб в 3D Viewport?",
	[
		new Answer("Shift + R", 0),
		new Answer("Ctrl + Tab", 0),
		new Answer("Shift + F", 0),
		new Answer("Колесо мыши", 1)
	], 1),

	new Question("4. Где можно изменить настройки материала для объекта в Blender?",
	[
		new Answer("3D Viewport", 0),
		new Answer("Properties", 1),
		new Answer("Outliner", 0),
		new Answer("Timeline", 0)
	], 1),

	new Question("5. Какое окно позволяет просматривать и редактировать анимационные ключи?",
	[
		new Answer("Properties", 0),
		new Answer("Timeline", 1),
		new Answer("Shader Editor", 0),
		new Answer("3D Viewport", 0)
	], 1),

	new Question("6. Какой инструмент используется для перемещения объектов на сцене в Blender?",
	[
		new Answer("Scale", 0),
		new Answer("Rotate", 0),
		new Answer("Grab", 1),
		new Answer("Extrude", 0)
	], 1),

	new Question("7. Какой элемент интерфейса отвечает за рендеринг сцены в Blender?",
	[
		new Answer("Properties", 0),
		new Answer("3D Viewport", 0),
		new Answer("Render", 1),
		new Answer("Outliner", 0)
	], 1),

	new Question("8. Как вызвать контекстное меню в 3D Viewport?",
	[
		new Answer("Левой кнопкой мыши", 0),
		new Answer("Правой кнопкой мыши", 1),
		new Answer("Клавишей Tab", 0),
		new Answer("Средней кнопкой мыши", 0)
	], 1),

	new Question("9. В каком окне можно настроить шейдеры для объектов?",
	[
		new Answer("Outliner", 0),
		new Answer("3D Viewport", 0),
		new Answer("Shader Editor", 1),
		new Answer("UV Editor", 0)
	], 1),

	new Question("10. Какая клавиша переключает между объектным и режимом редактирования?",
	[
		new Answer("Tab", 1),
		new Answer("Ctrl + E", 0),
		new Answer("Shift + A", 0),
		new Answer("X", 0)
	], 1)
];


export const questions2 =
[
	new Question("1. Какое окно используется для основной работы с трехмерными объектами в Blender?",
	[
		new Answer("Text Editor", 0),
		new Answer("Properties", 0),
		new Answer("3D View", 1),
		new Answer("Timeline", 0)
	], 1),

	new Question("2. Что позволяет делать инструмент Gizmo в Blender?",
	[
		new Answer("Настраивать цвет объектов", 0),
		new Answer("Управлять навигацией и трансформацией объектов", 1),
		new Answer("Добавлять новые окна", 0),
		new Answer("Настраивать горячие клавиши", 0)
	], 1),

	new Question("3. Как разделить окно в интерфейсе Blender?",
	[
		new Answer("Щелкнуть по названию окна", 0),
		new Answer("Перетащить край окна", 1),
		new Answer("Нажать Ctrl + R", 0),
		new Answer("Двойной клик мышью", 0)
	], 1),

	new Question("4. Как вызвать круговое меню (Pie Menu)?",
	[
		new Answer("Клавиша W", 0),
		new Answer("Клавиша Tab, Z или ~", 1),
		new Answer("Правая кнопка мыши", 0),
		new Answer("Клавиша F", 0)
	], 1),

	new Question("5. Какой элемент интерфейса Blender позволяет вращать объект вокруг центра ограничивающего прямоугольника?",
	[
		new Answer("Active Element", 0),
		new Answer("3D Cursor", 0),
		new Answer("Bounding Box Center", 1),
		new Answer("Individual Origins", 0)
	], 1),

	new Question("6. Какая горячая клавиша используется для переключения между перспективным и ортографическим видом?",
	[
		new Answer("0", 0),
		new Answer("5", 1),
		new Answer(". (точка)", 0),
		new Answer("Ctrl + 1", 0)
	], 1),

	new Question("7. Что делает комбинация клавиш Ctrl + A в Object Mode?",
	[
		new Answer("Добавляет новый объект", 0),
		new Answer("Применяет трансформации", 1),
		new Answer("Переключает режим отображения", 0),
		new Answer("Отменяет последнее действие", 0)
	], 1),

	new Question("8. Какой способ ввода используется для точного рисования и скульптинга в Blender?",
	[
		new Answer("Клавиатура", 0),
		new Answer("Мышь", 0),
		new Answer("Графический планшет", 1),
		new Answer("Сенсорный экран", 0)
	], 1),

	new Question("9. Какая комбинация клавиш выполняет рендеринг текущего кадра?",
	[
		new Answer("Ctrl + F12", 0),
		new Answer("F11", 0),
		new Answer("F12", 1),
		new Answer("Alt + R", 0)
	], 1),

	new Question("10. Какой горячей клавишей вызывается режим редактирования (Edit Mode)?",
	[
		new Answer("Tab", 1),
		new Answer("Shift + E", 0),
		new Answer("Ctrl + E", 0),
		new Answer("Enter", 0)
	], 1)
];


export const questions3 =
[
	new Question("1. Какой элемент структуры меша представляет собой точку в 3D-пространстве с координатами X, Y и Z?",
	[
		new Answer("Рёбра", 0),
		new Answer("Вершины", 1),
		new Answer("Грани", 0),
		new Answer("Нормали", 0)
	], 1),

	new Question("2. Что представляют собой рёбра в Blender?",
	[
		new Answer("Полигоны, ограниченные рёбрами", 0),
		new Answer("Линии, соединяющие две вершины", 1),
		new Answer("Точки в 3D-пространстве", 0),
		new Answer("Вектора, определяющие освещение", 0)
	], 1),

	new Question("3. Какие элементы образуют поверхность объекта в Blender?",
	[
		new Answer("Вершины", 0),
		new Answer("Нормали", 0),
		new Answer("Грани", 1),
		new Answer("Рёбра", 0)
	], 1),

	new Question("4. Что такое нормали в Blender?",
	[
		new Answer("Точки на поверхности объекта", 0),
		new Answer("Линии, соединяющие рёбра", 0),
		new Answer("Вектора, определяющие направление поверхности объекта", 1),
		new Answer("Полигоны, ограниченные рёбрами", 0)
	], 1),

	new Question("5. Какое количество рёбер имеет куб в Blender?",
	[
		new Answer("8", 0),
		new Answer("6", 0),
		new Answer("12", 1),
		new Answer("4", 0)
	], 1),

	new Question("6. Что происходит при применении трансформаций к объекту в Blender?",
	[
		new Answer("Трансформации отменяются", 0),
		new Answer("Изменения становятся частью геометрии объекта", 1),
		new Answer("Объект возвращается в исходное положение", 0),
		new Answer("Объект теряет все изменения", 0)
	], 1),

	new Question("7. Что такое чистая топология в 3D-моделировании?",
	[
		new Answer("Топология с нерегулярным распределением рёбер", 0),
		new Answer("Топология с равномерно распределёнными вершинами, рёбрами и гранями", 1),
		new Answer("Топология с избыточными вершинами", 0),
		new Answer("Топология, где используются только треугольные грани", 0)
	], 1),

	new Question("8. Какие проблемы могут возникать при использовании нечистой топологии?",
	[
		new Answer("Нерегулярные или кривые рёбра", 1),
		new Answer("Лёгкость в редактировании", 0),
		new Answer("Единство структуры", 0),
		new Answer("Простота анимации", 0)
	], 1),

	new Question("9. Какие грани используются в треугольной топологии?",
	[
		new Answer("Четырёхугольные", 0),
		new Answer("Треугольные", 1),
		new Answer("Квадратные", 0),
		new Answer("Полигональные", 0)
	], 1),

	new Question("10. В каком режиме Blender можно редактировать элементы меша, такие как вершины, рёбра и грани?",
	[
		new Answer("Object Mode", 0),
		new Answer("Edit Mode", 1),
		new Answer("Sculpt Mode", 0),
		new Answer("Render Mode", 0)
	], 1)
];


export const questions4 = [
    new Question("1. Какой модификатор в Blender используется для сглаживания объектов и увеличения детализации модели?",
        [
            new Answer("Mirror", 0),
            new Answer("Subdivision Surface", 1),
            new Answer("Array", 0),
            new Answer("Solidify", 0)
        ], 1),

    new Question("2. Какой модификатор используется для создания зеркального отображения объекта по одной или нескольким осям?",
        [
            new Answer("Boolean", 0),
            new Answer("Mirror", 1),
            new Answer("Bevel", 0),
            new Answer("Decimate", 0)
        ], 1),

    new Question("3. Что делает модификатор Array в Blender?",
        [
            new Answer("Создаёт копии объекта в заданном порядке", 1),
            new Answer("Добавляет толщину объектам", 0),
            new Answer("Выполняет булевы операции с объектами", 0),
            new Answer("Сглаживает объект", 0)
        ], 1),

    new Question("4. Какую операцию выполняет модификатор Boolean в Blender?",
        [
            new Answer("Добавляет толщину", 0),
            new Answer("Выполняет булевы операции между объектами", 1),
            new Answer("Создаёт копии объекта", 0),
            new Answer("Сглаживает углы объекта", 0)
        ], 1),

    new Question("5. Какую задачу решает модификатор Solidify в Blender?",
        [
            new Answer("Добавляет толщину объектам с плоской геометрией", 1),
            new Answer("Сглаживает поверхности", 0),
            new Answer("Скругляет углы объекта", 0),
            new Answer("Создаёт зеркальное отражение объекта", 0)
        ], 1),

    new Question("6. Какую функцию выполняет модификатор Decimate?",
        [
            new Answer("Уменьшает количество полигонов, сохраняя форму объекта", 1),
            new Answer("Добавляет фаски на края объекта", 0),
            new Answer("Создаёт копии объекта", 0),
            new Answer("Изменяет геометрию объекта", 0)
        ], 1),

    new Question("7. Что делает модификатор Bevel в Blender?",
        [
            new Answer("Добавляет фаски на края объекта", 1),
            new Answer("Добавляет толщину объекту", 0),
            new Answer("Сглаживает поверхность объекта", 0),
            new Answer("Выполняет булеву операцию", 0)
        ], 1),

    new Question("8. Что такое модификатор Subdivision Surface?",
        [
            new Answer("Модификатор, который создаёт зеркальное отображение объекта", 0),
            new Answer("Модификатор, который добавляет толщину объектам", 0),
            new Answer("Модификатор, который добавляет дополнительные полигоны для сглаживания", 1),
            new Answer("Модификатор, который выполняет булеву операцию", 0)
        ], 1),

    new Question("9. Как можно использовать модификатор Mirror для симметричного моделирования?",
        [
            new Answer("Для зеркального отображения объекта по одной или нескольким осям", 1),
            new Answer("Для уменьшения полигонов на объекте", 0),
            new Answer("Для добавления толщины объекту", 0),
            new Answer("Для сглаживания объектов", 0)
        ], 1),

    new Question("10. Какой модификатор помогает создать сложные геометрические формы путем выполнения булевых операций?",
        [
            new Answer("Array", 0),
            new Answer("Boolean", 1),
            new Answer("Decimate", 0),
            new Answer("Solidify", 0)
        ], 1)
];

export const questions5 = [
    new Question("1. Что делает инструмент Extrude в Blender?",
        [
            new Answer("Удаляет выбранные элементы", 0),
            new Answer("Объединяет несколько объектов", 0),
            new Answer("Создаёт новые элементы из выбранных, соединяя их с оригиналом", 1),
            new Answer("Перекрашивает объект", 0)
        ], 1),

    new Question("2. В каком режиме работает инструмент Extrude?",
        [
            new Answer("Object Mode", 0),
            new Answer("Render Mode", 0),
            new Answer("Edit Mode", 1),
            new Answer("Sculpt Mode", 0)
        ], 1),

    new Question("3. Какая горячая клавиша активирует инструмент Extrude?",
        [
            new Answer("G", 0),
            new Answer("E", 1),
            new Answer("R", 0),
            new Answer("S", 0)
        ], 1),

    new Question("4. Что произойдёт при нажатии клавиши Z после Extrude?",
        [
            new Answer("Выдавливание будет заблокировано", 0),
            new Answer("Выдавливание произойдёт вдоль оси Z", 1),
            new Answer("Объект повернётся по оси Z", 0),
            new Answer("Объект будет удалён", 0)
        ], 1),

    new Question("5. Как добавить куб в сцену Blender?",
        [
            new Answer("Shift + A → Mesh → Cube", 1),
            new Answer("Ctrl + A → Object → Cube", 0),
            new Answer("Alt + C → Add Cube", 0),
            new Answer("Tab → Add → Cube", 0)
        ], 1),

    new Question("6. Что произойдёт, если нажать Esc во время Extrude?",
        [
            new Answer("Применяется трансформация", 0),
            new Answer("Открывается меню настроек", 0),
            new Answer("Операция Extrude отменяется", 1),
            new Answer("Сохраняется сцена", 0)
        ], 1),

    new Question("7. Как ограничить выдавливание по оси X?",
        [
            new Answer("E → X", 1),
            new Answer("E → Y", 0),
            new Answer("S → X", 0),
            new Answer("G → X", 0)
        ], 1),

    new Question("8. Что делает сочетание Extrude + Scale?",
        [
            new Answer("Удаляет часть объекта", 0),
            new Answer("Сглаживает объект", 0),
            new Answer("Позволяет выдавить элемент и изменить его размер", 1),
            new Answer("Дублирует объект", 0)
        ], 1),

    new Question("9. Какие компоненты можно выдавливать с помощью Extrude?",
        [
            new Answer("Только вершины", 0),
            new Answer("Только рёбра", 0),
            new Answer("Только грани", 0),
            new Answer("Вершины, рёбра и грани", 1)
        ], 1),

    new Question("10. Где может быть полезен инструмент Extrude в архитектурном моделировании?",
        [
            new Answer("Для создания материалов", 0),
            new Answer("Для моделирования окон, лестниц, выступов", 1),
            new Answer("Для анимации", 0),
            new Answer("Для настройки камеры", 0)
        ], 1)
];


//Тест скопирован с пятого, ПОМЕНЯЙ

export const questions6 = [
    new Question("1. Какой инструмент используется для добавления внутренней грани?",
        [
            new Answer("Knife Tool", 0),
            new Answer("Loop Cut and Slide", 0),
            new Answer("Inset Faces", 1),
            new Answer("Merge", 0)
        ], 1),

    new Question("2. Какой инструмент используется для добавления разрезов вдоль кольца рёбер?",
        [
            new Answer("Bevel", 0),
            new Answer("Loop Cut and Slide", 1),
            new Answer("Knife Tool", 0),
            new Answer("Merge", 0)
        ], 1),

    new Question("3. Какую задачу решает инструмент Knife Tool?",
        [
            new Answer("Разделяет объект на части по кольцевым рёбрам", 0),
            new Answer("Создаёт вручную разрез по произвольной траектории", 1),
            new Answer("Соединяет вершины", 0),
            new Answer("Убирает лишние вершины", 0)
        ], 1),

    new Question("4. Какая горячая клавиша активирует инструмент Inset Faces?",
        [
            new Answer("Ctrl + R", 0),
            new Answer("I", 1),
            new Answer("K", 0),
            new Answer("M", 0)
        ], 1),

    new Question("5. Какой инструмент позволяет объединить несколько вершин в одну?",
        [
            new Answer("Bevel", 0),
            new Answer("Knife Tool", 0),
            new Answer("Merge", 1),
            new Answer("Inset Faces", 0)
        ], 1),

    new Question("6. Какая горячая клавиша активирует инструмент Bevel?",
        [
            new Answer("Ctrl + B", 1),
            new Answer("Ctrl + R", 0),
            new Answer("I", 0),
            new Answer("M", 0)
        ], 1),

    new Question("7. Какой инструмент позволяет создавать скосы на вершинах и рёбрах?",
        [
            new Answer("Loop Cut and Slide", 0),
            new Answer("Knife Tool", 0),
            new Answer("Merge", 0),
            new Answer("Bevel", 1)
        ], 1),

    new Question("8. Для чего в основном используется инструмент Loop Cut and Slide?",
        [
            new Answer("Для объединения вершин", 0),
            new Answer("Для создания скосов", 0),
            new Answer("Для добавления разрезов по кольцу граней", 1),
            new Answer("Для создания отверстий в модели", 0)
        ], 1),

    new Question("9. Какой инструмент используется для создания отверстий и нестандартных форм?",
        [
            new Answer("Merge", 0),
            new Answer("Knife Tool", 1),
            new Answer("Inset Faces", 0),
            new Answer("Bevel", 0)
        ], 1),

    new Question("10. Какой инструмент используется для добавления деталей и углублений, например, для создания панелей или рамок?",
        [
            new Answer("Knife Tool", 0),
            new Answer("Merge", 0),
            new Answer("Inset Faces", 1),
            new Answer("Loop Cut and Slide", 0)
        ], 1)
];





export const questions7 =
[
	new Question("1. Что такое текстура в 3D-графике?",
	[
		new Answer("3D-изображение, которое используется для создания объектов", 0),
		new Answer("2D-изображение, которое используется для детализации поверхности 3D-объектов", 1),
		new Answer("Программа, создающая рельеф на поверхности объекта", 0),
		new Answer("Шейдер для изменения внешнего вида объекта", 0)
	], 1),

	new Question("2. Что такое UV-развёртка?",
	[
		new Answer("Процесс создания текстуры для объекта", 0),
		new Answer("Процесс связывания точек текстуры с точками 3D-объекта", 1),
		new Answer("Процесс создания 3D-объекта на основе текстуры", 0),
		new Answer("Процесс выделения объектов для рендеринга", 0)
	], 1),

	new Question("3. Какая текстура определяет основной цвет объекта в 3D-графике?",
	[
		new Answer("Спекулярная текстура", 0),
		new Answer("Карта нормалей", 0),
		new Answer("Диффузная текстура (Albedo)", 1),
		new Answer("Карта высот", 0)
	], 1),

	new Question("4. Для чего используется карта нормалей (Normal Map)?",
	[
		new Answer("Для изменения формы объекта", 0),
		new Answer("Для создания эффекта рельефа без добавления полигонов", 1),
		new Answer("Для создания прозрачных участков на объекте", 0),
		new Answer("Для создания цвета и узора объекта", 0)
	], 1),

	new Question("5. Какая текстура используется для изменения геометрии объекта, создавая возвышенности и углубления?",
	[
		new Answer("Диффузная текстура", 0),
		new Answer("Карта высот (Height Map)", 1),
		new Answer("Спекулярная текстура", 0),
		new Answer("Карта прозрачности", 0)
	], 1),

	new Question("6. Какой шейдер отвечает за определение цвета каждого пикселя на поверхности объекта?",
	[
		new Answer("Вершинный шейдер", 0),
		new Answer("Фрагментный шейдер", 1),
		new Answer("Геометрический шейдер", 0),
		new Answer("Тесселяционный шейдер", 0)
	], 1),

	new Question("7. Какой шейдер используется для управления положением вершин 3D-объекта на экране?",
	[
		new Answer("Фрагментный шейдер", 0),
		new Answer("Вершинный шейдер", 1),
		new Answer("Геометрический шейдер", 0),
		new Answer("Тесселяционный шейдер", 0)
	], 1),

	new Question("8. Какой параметр материала влияет на его способность отражать свет?",
	[
		new Answer("Преломление", 0),
		new Answer("Шероховатость", 0),
		new Answer("Отражение", 1),
		new Answer("Цвет", 0)
	], 1),

	new Question("9. Что такое материал в 3D-графике?",
	[
		new Answer("Процесс наложения текстур на объект", 0),
		new Answer("Совокупность свойств, определяющих взаимодействие объекта с освещением, текстурами и шейдерами", 1),
		new Answer("Тип шейдера, используемый для создания материала", 0),
		new Answer("Графический процессор, который обрабатывает материалы", 0)
	], 1),

	new Question("10. Какой параметр материала отвечает за его гладкость и создание зеркальных отражений?",
	[
		new Answer("Шероховатость", 1),
		new Answer("Цвет", 0),
		new Answer("Преломление", 0),
		new Answer("Отражение", 0)
	], 1)
];

export const questions8 = [
	new Question("1. Какой тип света в Blender равномерно освещает всю сцену, независимо от расстояния до объектов?", [
		new Answer("Точечный свет", 0),
		new Answer("Солнечный свет", 1),
		new Answer("Spot Light", 0),
		new Answer("Эмиссивный материал", 0)
	], 1),

	new Question("2. Какой тип источника света имитирует лампочку без абажура, излучающую свет во все стороны?", [
		new Answer("Солнечный свет", 0),
		new Answer("Плоскостной свет", 0),
		new Answer("Точечный свет", 1),
		new Answer("Глобальное освещение", 0)
	], 1),

	new Question("3. Что произойдет в Blender, если удалить все источники света из сцены?", [
		new Answer("Сцена будет отображаться как обычно", 0),
		new Answer("Сцена станет черной и объекты не будут видны", 1),
		new Answer("Blender автоматически добавит свет", 0),
		new Answer("Объекты станут прозрачными", 0)
	], 1),

	new Question("4. Какой источник света используется для создания фокусированного пучка с заданным углом рассеивания?", [
		new Answer("Spot Light", 1),
		new Answer("Point Light", 0),
		new Answer("Sun Light", 0),
		new Answer("Area Light", 0)
	], 1),

	new Question("5. Какой параметр Point Light влияет на мягкость теней и яркость?", [
		new Answer("Direction", 0),
		new Answer("Strength", 0),
		new Answer("Radius", 1),
		new Answer("Angle", 0)
	], 1),

	new Question("6. Какой источник света в Blender позволяет использовать HDRI для создания реалистичного освещения?", [
		new Answer("Point Light", 0),
		new Answer("Area Light", 0),
		new Answer("Sun Light", 0),
		new Answer("Глобальное освещение (Environment Lighting)", 1)
	], 1),

	new Question("7. Что происходит, если установить отрицательное значение мощности у Point Light?", [
		new Answer("Источник света будет светить ярче", 0),
		new Answer("Свет будет светить только вверх", 0),
		new Answer("Источник будет поглощать свет, создавая затемнение", 1),
		new Answer("Свет исчезнет полностью", 0)
	], 1),

	new Question("8. Какой тип света исходит с поверхности объекта и создается при помощи материала?", [
		new Answer("Point Light", 0),
		new Answer("Sun Light", 0),
		new Answer("Spot Light", 0),
		new Answer("Эмиссивный материал", 1)
	], 1),

	new Question("9. Какой источник света подходит для создания реалистичных отражений и мягких теней благодаря своей форме и размеру?", [
		new Answer("Point Light", 0),
		new Answer("Area Light", 1),
		new Answer("Sun Light", 0),
		new Answer("Spot Light", 0)
	], 1),

	new Question("10. Какой режим отображения в Blender позволяет увидеть влияние освещения при редактировании сцены?", [
		new Answer("Материал", 0),
		new Answer("Рендер (Z → 8)", 1),
		new Answer("Wireframe", 0),
		new Answer("Солид", 0)
	], 1)
];




//НИЖЕ ТЕСТЫ СКОПИРОЛВАНЫ С 8, ПОМЕНЯТЬ НА ОРИГИНАЛЬНЫЕ

export const questions9 = [
	new Question("1. Какой тип света в Blender равномерно освещает всю сцену, независимо от расстояния до объектов?", [
		new Answer("Точечный свет", 0),
		new Answer("Солнечный свет", 1),
		new Answer("Spot Light", 0),
		new Answer("Эмиссивный материал", 0)
	], 1),

	new Question("2. Какой тип источника света имитирует лампочку без абажура, излучающую свет во все стороны?", [
		new Answer("Солнечный свет", 0),
		new Answer("Плоскостной свет", 0),
		new Answer("Точечный свет", 1),
		new Answer("Глобальное освещение", 0)
	], 1),

	new Question("3. Что произойдет в Blender, если удалить все источники света из сцены?", [
		new Answer("Сцена будет отображаться как обычно", 0),
		new Answer("Сцена станет черной и объекты не будут видны", 1),
		new Answer("Blender автоматически добавит свет", 0),
		new Answer("Объекты станут прозрачными", 0)
	], 1),

	new Question("4. Какой источник света используется для создания фокусированного пучка с заданным углом рассеивания?", [
		new Answer("Spot Light", 1),
		new Answer("Point Light", 0),
		new Answer("Sun Light", 0),
		new Answer("Area Light", 0)
	], 1),

	new Question("5. Какой параметр Point Light влияет на мягкость теней и яркость?", [
		new Answer("Direction", 0),
		new Answer("Strength", 0),
		new Answer("Radius", 1),
		new Answer("Angle", 0)
	], 1),

	new Question("6. Какой источник света в Blender позволяет использовать HDRI для создания реалистичного освещения?", [
		new Answer("Point Light", 0),
		new Answer("Area Light", 0),
		new Answer("Sun Light", 0),
		new Answer("Глобальное освещение (Environment Lighting)", 1)
	], 1),

	new Question("7. Что происходит, если установить отрицательное значение мощности у Point Light?", [
		new Answer("Источник света будет светить ярче", 0),
		new Answer("Свет будет светить только вверх", 0),
		new Answer("Источник будет поглощать свет, создавая затемнение", 1),
		new Answer("Свет исчезнет полностью", 0)
	], 1),

	new Question("8. Какой тип света исходит с поверхности объекта и создается при помощи материала?", [
		new Answer("Point Light", 0),
		new Answer("Sun Light", 0),
		new Answer("Spot Light", 0),
		new Answer("Эмиссивный материал", 1)
	], 1),

	new Question("9. Какой источник света подходит для создания реалистичных отражений и мягких теней благодаря своей форме и размеру?", [
		new Answer("Point Light", 0),
		new Answer("Area Light", 1),
		new Answer("Sun Light", 0),
		new Answer("Spot Light", 0)
	], 1),

	new Question("10. Какой режим отображения в Blender позволяет увидеть влияние освещения при редактировании сцены?", [
		new Answer("Материал", 0),
		new Answer("Рендер (Z → 8)", 1),
		new Answer("Wireframe", 0),
		new Answer("Солид", 0)
	], 1)
];

export const questions10 = [
	new Question("1. Какой тип света в Blender равномерно освещает всю сцену, независимо от расстояния до объектов?", [
		new Answer("Точечный свет", 0),
		new Answer("Солнечный свет", 1),
		new Answer("Spot Light", 0),
		new Answer("Эмиссивный материал", 0)
	], 1),

	new Question("2. Какой тип источника света имитирует лампочку без абажура, излучающую свет во все стороны?", [
		new Answer("Солнечный свет", 0),
		new Answer("Плоскостной свет", 0),
		new Answer("Точечный свет", 1),
		new Answer("Глобальное освещение", 0)
	], 1),

	new Question("3. Что произойдет в Blender, если удалить все источники света из сцены?", [
		new Answer("Сцена будет отображаться как обычно", 0),
		new Answer("Сцена станет черной и объекты не будут видны", 1),
		new Answer("Blender автоматически добавит свет", 0),
		new Answer("Объекты станут прозрачными", 0)
	], 1),

	new Question("4. Какой источник света используется для создания фокусированного пучка с заданным углом рассеивания?", [
		new Answer("Spot Light", 1),
		new Answer("Point Light", 0),
		new Answer("Sun Light", 0),
		new Answer("Area Light", 0)
	], 1),

	new Question("5. Какой параметр Point Light влияет на мягкость теней и яркость?", [
		new Answer("Direction", 0),
		new Answer("Strength", 0),
		new Answer("Radius", 1),
		new Answer("Angle", 0)
	], 1),

	new Question("6. Какой источник света в Blender позволяет использовать HDRI для создания реалистичного освещения?", [
		new Answer("Point Light", 0),
		new Answer("Area Light", 0),
		new Answer("Sun Light", 0),
		new Answer("Глобальное освещение (Environment Lighting)", 1)
	], 1),

	new Question("7. Что происходит, если установить отрицательное значение мощности у Point Light?", [
		new Answer("Источник света будет светить ярче", 0),
		new Answer("Свет будет светить только вверх", 0),
		new Answer("Источник будет поглощать свет, создавая затемнение", 1),
		new Answer("Свет исчезнет полностью", 0)
	], 1),

	new Question("8. Какой тип света исходит с поверхности объекта и создается при помощи материала?", [
		new Answer("Point Light", 0),
		new Answer("Sun Light", 0),
		new Answer("Spot Light", 0),
		new Answer("Эмиссивный материал", 1)
	], 1),

	new Question("9. Какой источник света подходит для создания реалистичных отражений и мягких теней благодаря своей форме и размеру?", [
		new Answer("Point Light", 0),
		new Answer("Area Light", 1),
		new Answer("Sun Light", 0),
		new Answer("Spot Light", 0)
	], 1),

	new Question("10. Какой режим отображения в Blender позволяет увидеть влияние освещения при редактировании сцены?", [
		new Answer("Материал", 0),
		new Answer("Рендер (Z → 8)", 1),
		new Answer("Wireframe", 0),
		new Answer("Солид", 0)
	], 1)
];

export const questions11 = [
	new Question("1. Какой тип света в Blender равномерно освещает всю сцену, независимо от расстояния до объектов?", [
		new Answer("Точечный свет", 0),
		new Answer("Солнечный свет", 1),
		new Answer("Spot Light", 0),
		new Answer("Эмиссивный материал", 0)
	], 1),

	new Question("2. Какой тип источника света имитирует лампочку без абажура, излучающую свет во все стороны?", [
		new Answer("Солнечный свет", 0),
		new Answer("Плоскостной свет", 0),
		new Answer("Точечный свет", 1),
		new Answer("Глобальное освещение", 0)
	], 1),

	new Question("3. Что произойдет в Blender, если удалить все источники света из сцены?", [
		new Answer("Сцена будет отображаться как обычно", 0),
		new Answer("Сцена станет черной и объекты не будут видны", 1),
		new Answer("Blender автоматически добавит свет", 0),
		new Answer("Объекты станут прозрачными", 0)
	], 1),

	new Question("4. Какой источник света используется для создания фокусированного пучка с заданным углом рассеивания?", [
		new Answer("Spot Light", 1),
		new Answer("Point Light", 0),
		new Answer("Sun Light", 0),
		new Answer("Area Light", 0)
	], 1),

	new Question("5. Какой параметр Point Light влияет на мягкость теней и яркость?", [
		new Answer("Direction", 0),
		new Answer("Strength", 0),
		new Answer("Radius", 1),
		new Answer("Angle", 0)
	], 1),

	new Question("6. Какой источник света в Blender позволяет использовать HDRI для создания реалистичного освещения?", [
		new Answer("Point Light", 0),
		new Answer("Area Light", 0),
		new Answer("Sun Light", 0),
		new Answer("Глобальное освещение (Environment Lighting)", 1)
	], 1),

	new Question("7. Что происходит, если установить отрицательное значение мощности у Point Light?", [
		new Answer("Источник света будет светить ярче", 0),
		new Answer("Свет будет светить только вверх", 0),
		new Answer("Источник будет поглощать свет, создавая затемнение", 1),
		new Answer("Свет исчезнет полностью", 0)
	], 1),

	new Question("8. Какой тип света исходит с поверхности объекта и создается при помощи материала?", [
		new Answer("Point Light", 0),
		new Answer("Sun Light", 0),
		new Answer("Spot Light", 0),
		new Answer("Эмиссивный материал", 1)
	], 1),

	new Question("9. Какой источник света подходит для создания реалистичных отражений и мягких теней благодаря своей форме и размеру?", [
		new Answer("Point Light", 0),
		new Answer("Area Light", 1),
		new Answer("Sun Light", 0),
		new Answer("Spot Light", 0)
	], 1),

	new Question("10. Какой режим отображения в Blender позволяет увидеть влияние освещения при редактировании сцены?", [
		new Answer("Материал", 0),
		new Answer("Рендер (Z → 8)", 1),
		new Answer("Wireframe", 0),
		new Answer("Солид", 0)
	], 1)
];


export const questions12 = [
	new Question("1. Какой тип света в Blender равномерно освещает всю сцену, независимо от расстояния до объектов?", [
		new Answer("Точечный свет", 0),
		new Answer("Солнечный свет", 1),
		new Answer("Spot Light", 0),
		new Answer("Эмиссивный материал", 0)
	], 1),

	new Question("2. Какой тип источника света имитирует лампочку без абажура, излучающую свет во все стороны?", [
		new Answer("Солнечный свет", 0),
		new Answer("Плоскостной свет", 0),
		new Answer("Точечный свет", 1),
		new Answer("Глобальное освещение", 0)
	], 1),

	new Question("3. Что произойдет в Blender, если удалить все источники света из сцены?", [
		new Answer("Сцена будет отображаться как обычно", 0),
		new Answer("Сцена станет черной и объекты не будут видны", 1),
		new Answer("Blender автоматически добавит свет", 0),
		new Answer("Объекты станут прозрачными", 0)
	], 1),

	new Question("4. Какой источник света используется для создания фокусированного пучка с заданным углом рассеивания?", [
		new Answer("Spot Light", 1),
		new Answer("Point Light", 0),
		new Answer("Sun Light", 0),
		new Answer("Area Light", 0)
	], 1),

	new Question("5. Какой параметр Point Light влияет на мягкость теней и яркость?", [
		new Answer("Direction", 0),
		new Answer("Strength", 0),
		new Answer("Radius", 1),
		new Answer("Angle", 0)
	], 1),

	new Question("6. Какой источник света в Blender позволяет использовать HDRI для создания реалистичного освещения?", [
		new Answer("Point Light", 0),
		new Answer("Area Light", 0),
		new Answer("Sun Light", 0),
		new Answer("Глобальное освещение (Environment Lighting)", 1)
	], 1),

	new Question("7. Что происходит, если установить отрицательное значение мощности у Point Light?", [
		new Answer("Источник света будет светить ярче", 0),
		new Answer("Свет будет светить только вверх", 0),
		new Answer("Источник будет поглощать свет, создавая затемнение", 1),
		new Answer("Свет исчезнет полностью", 0)
	], 1),

	new Question("8. Какой тип света исходит с поверхности объекта и создается при помощи материала?", [
		new Answer("Point Light", 0),
		new Answer("Sun Light", 0),
		new Answer("Spot Light", 0),
		new Answer("Эмиссивный материал", 1)
	], 1),

	new Question("9. Какой источник света подходит для создания реалистичных отражений и мягких теней благодаря своей форме и размеру?", [
		new Answer("Point Light", 0),
		new Answer("Area Light", 1),
		new Answer("Sun Light", 0),
		new Answer("Spot Light", 0)
	], 1),

	new Question("10. Какой режим отображения в Blender позволяет увидеть влияние освещения при редактировании сцены?", [
		new Answer("Материал", 0),
		new Answer("Рендер (Z → 8)", 1),
		new Answer("Wireframe", 0),
		new Answer("Солид", 0)
	], 1)
];

export const questions13 = [
	new Question("1. Какой тип света в Blender равномерно освещает всю сцену, независимо от расстояния до объектов?", [
		new Answer("Точечный свет", 0),
		new Answer("Солнечный свет", 1),
		new Answer("Spot Light", 0),
		new Answer("Эмиссивный материал", 0)
	], 1),

	new Question("2. Какой тип источника света имитирует лампочку без абажура, излучающую свет во все стороны?", [
		new Answer("Солнечный свет", 0),
		new Answer("Плоскостной свет", 0),
		new Answer("Точечный свет", 1),
		new Answer("Глобальное освещение", 0)
	], 1),

	new Question("3. Что произойдет в Blender, если удалить все источники света из сцены?", [
		new Answer("Сцена будет отображаться как обычно", 0),
		new Answer("Сцена станет черной и объекты не будут видны", 1),
		new Answer("Blender автоматически добавит свет", 0),
		new Answer("Объекты станут прозрачными", 0)
	], 1),

	new Question("4. Какой источник света используется для создания фокусированного пучка с заданным углом рассеивания?", [
		new Answer("Spot Light", 1),
		new Answer("Point Light", 0),
		new Answer("Sun Light", 0),
		new Answer("Area Light", 0)
	], 1),

	new Question("5. Какой параметр Point Light влияет на мягкость теней и яркость?", [
		new Answer("Direction", 0),
		new Answer("Strength", 0),
		new Answer("Radius", 1),
		new Answer("Angle", 0)
	], 1),

	new Question("6. Какой источник света в Blender позволяет использовать HDRI для создания реалистичного освещения?", [
		new Answer("Point Light", 0),
		new Answer("Area Light", 0),
		new Answer("Sun Light", 0),
		new Answer("Глобальное освещение (Environment Lighting)", 1)
	], 1),

	new Question("7. Что происходит, если установить отрицательное значение мощности у Point Light?", [
		new Answer("Источник света будет светить ярче", 0),
		new Answer("Свет будет светить только вверх", 0),
		new Answer("Источник будет поглощать свет, создавая затемнение", 1),
		new Answer("Свет исчезнет полностью", 0)
	], 1),

	new Question("8. Какой тип света исходит с поверхности объекта и создается при помощи материала?", [
		new Answer("Point Light", 0),
		new Answer("Sun Light", 0),
		new Answer("Spot Light", 0),
		new Answer("Эмиссивный материал", 1)
	], 1),

	new Question("9. Какой источник света подходит для создания реалистичных отражений и мягких теней благодаря своей форме и размеру?", [
		new Answer("Point Light", 0),
		new Answer("Area Light", 1),
		new Answer("Sun Light", 0),
		new Answer("Spot Light", 0)
	], 1),

	new Question("10. Какой режим отображения в Blender позволяет увидеть влияние освещения при редактировании сцены?", [
		new Answer("Материал", 0),
		new Answer("Рендер (Z → 8)", 1),
		new Answer("Wireframe", 0),
		new Answer("Солид", 0)
	], 1)
];


export const questions14 = [
	new Question("1. Какой тип света в Blender равномерно освещает всю сцену, независимо от расстояния до объектов?", [
		new Answer("Точечный свет", 0),
		new Answer("Солнечный свет", 1),
		new Answer("Spot Light", 0),
		new Answer("Эмиссивный материал", 0)
	], 1),

	new Question("2. Какой тип источника света имитирует лампочку без абажура, излучающую свет во все стороны?", [
		new Answer("Солнечный свет", 0),
		new Answer("Плоскостной свет", 0),
		new Answer("Точечный свет", 1),
		new Answer("Глобальное освещение", 0)
	], 1),

	new Question("3. Что произойдет в Blender, если удалить все источники света из сцены?", [
		new Answer("Сцена будет отображаться как обычно", 0),
		new Answer("Сцена станет черной и объекты не будут видны", 1),
		new Answer("Blender автоматически добавит свет", 0),
		new Answer("Объекты станут прозрачными", 0)
	], 1),

	new Question("4. Какой источник света используется для создания фокусированного пучка с заданным углом рассеивания?", [
		new Answer("Spot Light", 1),
		new Answer("Point Light", 0),
		new Answer("Sun Light", 0),
		new Answer("Area Light", 0)
	], 1),

	new Question("5. Какой параметр Point Light влияет на мягкость теней и яркость?", [
		new Answer("Direction", 0),
		new Answer("Strength", 0),
		new Answer("Radius", 1),
		new Answer("Angle", 0)
	], 1),

	new Question("6. Какой источник света в Blender позволяет использовать HDRI для создания реалистичного освещения?", [
		new Answer("Point Light", 0),
		new Answer("Area Light", 0),
		new Answer("Sun Light", 0),
		new Answer("Глобальное освещение (Environment Lighting)", 1)
	], 1),

	new Question("7. Что происходит, если установить отрицательное значение мощности у Point Light?", [
		new Answer("Источник света будет светить ярче", 0),
		new Answer("Свет будет светить только вверх", 0),
		new Answer("Источник будет поглощать свет, создавая затемнение", 1),
		new Answer("Свет исчезнет полностью", 0)
	], 1),

	new Question("8. Какой тип света исходит с поверхности объекта и создается при помощи материала?", [
		new Answer("Point Light", 0),
		new Answer("Sun Light", 0),
		new Answer("Spot Light", 0),
		new Answer("Эмиссивный материал", 1)
	], 1),

	new Question("9. Какой источник света подходит для создания реалистичных отражений и мягких теней благодаря своей форме и размеру?", [
		new Answer("Point Light", 0),
		new Answer("Area Light", 1),
		new Answer("Sun Light", 0),
		new Answer("Spot Light", 0)
	], 1),

	new Question("10. Какой режим отображения в Blender позволяет увидеть влияние освещения при редактировании сцены?", [
		new Answer("Материал", 0),
		new Answer("Рендер (Z → 8)", 1),
		new Answer("Wireframe", 0),
		new Answer("Солид", 0)
	], 1)
];


export const questions15 = [
	new Question("1. Какой тип света в Blender равномерно освещает всю сцену, независимо от расстояния до объектов?", [
		new Answer("Точечный свет", 0),
		new Answer("Солнечный свет", 1),
		new Answer("Spot Light", 0),
		new Answer("Эмиссивный материал", 0)
	], 1),

	new Question("2. Какой тип источника света имитирует лампочку без абажура, излучающую свет во все стороны?", [
		new Answer("Солнечный свет", 0),
		new Answer("Плоскостной свет", 0),
		new Answer("Точечный свет", 1),
		new Answer("Глобальное освещение", 0)
	], 1),

	new Question("3. Что произойдет в Blender, если удалить все источники света из сцены?", [
		new Answer("Сцена будет отображаться как обычно", 0),
		new Answer("Сцена станет черной и объекты не будут видны", 1),
		new Answer("Blender автоматически добавит свет", 0),
		new Answer("Объекты станут прозрачными", 0)
	], 1),

	new Question("4. Какой источник света используется для создания фокусированного пучка с заданным углом рассеивания?", [
		new Answer("Spot Light", 1),
		new Answer("Point Light", 0),
		new Answer("Sun Light", 0),
		new Answer("Area Light", 0)
	], 1),

	new Question("5. Какой параметр Point Light влияет на мягкость теней и яркость?", [
		new Answer("Direction", 0),
		new Answer("Strength", 0),
		new Answer("Radius", 1),
		new Answer("Angle", 0)
	], 1),

	new Question("6. Какой источник света в Blender позволяет использовать HDRI для создания реалистичного освещения?", [
		new Answer("Point Light", 0),
		new Answer("Area Light", 0),
		new Answer("Sun Light", 0),
		new Answer("Глобальное освещение (Environment Lighting)", 1)
	], 1),

	new Question("7. Что происходит, если установить отрицательное значение мощности у Point Light?", [
		new Answer("Источник света будет светить ярче", 0),
		new Answer("Свет будет светить только вверх", 0),
		new Answer("Источник будет поглощать свет, создавая затемнение", 1),
		new Answer("Свет исчезнет полностью", 0)
	], 1),

	new Question("8. Какой тип света исходит с поверхности объекта и создается при помощи материала?", [
		new Answer("Point Light", 0),
		new Answer("Sun Light", 0),
		new Answer("Spot Light", 0),
		new Answer("Эмиссивный материал", 1)
	], 1),

	new Question("9. Какой источник света подходит для создания реалистичных отражений и мягких теней благодаря своей форме и размеру?", [
		new Answer("Point Light", 0),
		new Answer("Area Light", 1),
		new Answer("Sun Light", 0),
		new Answer("Spot Light", 0)
	], 1),

	new Question("10. Какой режим отображения в Blender позволяет увидеть влияние освещения при редактировании сцены?", [
		new Answer("Материал", 0),
		new Answer("Рендер (Z → 8)", 1),
		new Answer("Wireframe", 0),
		new Answer("Солид", 0)
	], 1)
];
