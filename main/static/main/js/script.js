import * as constants from './constants.js';

const headElem = document.getElementById("head");
const buttonsElem = document.getElementById("buttons");
const pagesElem = document.getElementById("pages");

//Класс, который представляет сам тест
class Quiz
{
	constructor(type, questions, results)
	{
		//Тип теста: 1 - классический тест с правильными ответами, 2 - тест без правильных ответов
		this.type = type;

		//Массив с вопросами
		this.questions = questions;

		//Массив с возможными результатами
		this.results = results;

		//Количество набранных очков
		this.score = 0;

		//Номер результата из массива
		//this.result = 0;

		//Номер текущего вопроса
		this.current = 0;
	}

	Click(index)
	{
		//Добавляем очки
		let value = this.questions[this.current].Click(index);
		this.score += value;

		let correct = -1;

		//Если было добавлено хотя одно очко, то считаем, что ответ верный
		if(value >= 1)
		{
			correct = index;
		}
		else
		{
			//Иначе ищем, какой ответ может быть правильным
			for(let i = 0; i < this.questions[this.current].answers.length; i++)
			{
				if(this.questions[this.current].answers[i].value >= 1)
				{
					correct = i;
					break;
				}
			}
		}

		//this.Next();

		return correct;
	}

	//Переход к следующему вопросу
	Next()
	{
		this.current++;

		if(this.current >= this.questions.length)
		{
			this.End();
		}
	}

	//Если вопросы кончились, этот метод проверит, какой результат получил пользователь
	End()
	{
		for(let i = 0; i < this.results.length; i++)
		{
			if(this.results[i].Check(this.score))
			{
				this.result = i;
			}
		}
	}
}

//Класс, представляющий результат
class Result
{
	constructor(text, value)
	{
		this.text = text;
		this.value = value;
	}

	//Этот метод проверяет, достаточно ли очков набрал пользователь
	Check(value)
	{
		if(this.value <= value)
		{
			return true;
		}
		else
		{
			return false;
		}
	}
}

//Массив с результатами
const results =
[
    new Result("Процент правильных ответов: 0%", 0),
	new Result("Процент правильных ответов: 10%", 1),
	new Result("Процент правильных ответов: 20%", 2),
	new Result("Процент правильных ответов: 30%", 3),
	new Result("Процент правильных ответов: 40%", 4),
	new Result("Процент правильных ответов: 50%", 5),
	new Result("Процент правильных ответов: 60%", 6),
	new Result("Процент правильных ответов: 70%", 7),
	new Result("Процент правильных ответов: 80%", 8),
	new Result("Процент правильных ответов: 90%", 9),
	new Result("Процент правильных ответов: 100%", 10)
];


const test_results_fields = {
    1: "test1",
    2: "test2",
    3: "test3",
    4: "test4",
    5: "test5",
    6: "test6",
    7: "test7",
    8: "test8",
    9: "test9",
    10: "test10",
    11: "test11",
    12: "test12",
    13: "test13",
    14: "test14",
    15: "test15",
}
const practice_results_fields = {
    1: "practice1",
    2: "practice2",
    3: "practice3",
    4: "practice4",
    5: "practice5",
    6: "practice6",
    7: "practice7",
    8: "practice8",
    9: "practice9",
    10: "practice10",
    11: "practice11",
    12: "practice12",
    13: "practice13",
    14: "practice14",
    15: "practice15",
}
const lesson_results_fields = {
    1: "lesson1",
    2: "lesson2",
    3: "lesson3",
    4: "lesson4",
    5: "lesson5",
    6: "lesson6",
    7: "lesson7",
    8: "lesson8",
    9: "lesson9",
    10: "lesson10",
    11: "lesson11",
    12: "lesson12",
    13: "lesson13",
    14: "lesson14",
    15: "lesson15",
}

//Класс, представляющий вопрос

const questionsArray = [constants.questions1, constants.questions2, constants.questions3, constants.questions4, constants.questions5, constants.questions6,
                        constants.questions7, constants.questions8, constants.questions9, constants.questions10, constants.questions11, constants.questions12,
                        constants.questions13, constants.questions14, constants.questions15];

document.addEventListener('DOMContentLoaded', function() {
    // Проверяем наличие необходимых элементов
    const quizElem = document.getElementById('quiz');
    const errorMessage = document.getElementById('error-message');
    const requirementsList = document.querySelector('.requirements-list[data-type]');
    const testId = requirementsList ? parseInt(requirementsList.id) : null;
    const contentType = requirementsList.dataset.type;  // 'lesson' или 'test'
    const contentId = parseInt(requirementsList.id);

    function getCookie(name) {
        let cookieValue = null;
        if (document.cookie && document.cookie !== '') {
            const cookies = document.cookie.split(';');
            for (let i = 0; i < cookies.length; i++) {
                const cookie = cookies[i].trim();
                if (cookie.substring(0, name.length + 1) === (name + '=')) {
                    cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                    break;
                }
            }
        }
        return cookieValue;
    }

    if (quizElem) {
        const testElement = quizElem.firstElementChild;
        if (testElement){
            let btns;
            let isPressed = false;
            let isPressedNextButton = false;
            // Если элементы найдены, инициализируем тест
            const quiz = new Quiz(1, questionsArray[testElement.id-1], results);

            function Update() {
                // Проверяем, есть ли ещё вопросы
                if (quiz.current < quiz.questions.length)
                {
                    // Если есть, меняем вопрос в заголовке
                    headElem.innerHTML = quiz.questions[quiz.current].text;

                    // Удаляем старые варианты ответов
                    buttonsElem.innerHTML = "";

                    // Создаём кнопки для новых вариантов ответов
                    for (let i = 0; i < quiz.questions[quiz.current].answers.length; i++) {
                        let btn = document.createElement("button");
                        btn.className = "button";

                        btn.innerHTML = quiz.questions[quiz.current].answers[i].text;

                        btn.setAttribute("index", i);

                        buttonsElem.appendChild(btn);
                    }

                    // Выводим номер текущего вопроса
                    pagesElem.innerHTML = (quiz.current + 1) + " / " + quiz.questions.length;
                    if(quiz.questions[quiz.current].type == 1 && isPressed)
                    {
                        isPressed = false;
                    }

                    // Вызываем функцию, которая прикрепит события к новым кнопкам
                    Init();
                } else {
                    // Если это конец, то выводим результат
                    buttonsElem.innerHTML = "";
                    headElem.innerHTML = quiz.results[quiz.result].text;
                    pagesElem.innerHTML = "";
                    nextButton.style.visibility = "hidden";

                    const submitButton = document.getElementById("submitButton");
                    if (submitButton) {
                        submitButton.style.display = "inline-block";
                    }
                }
            }

                function Init()
            {
                //Находим все кнопки
                btns = document.getElementsByClassName("button");

                for(let i = 0; i < btns.length; i++)
                {
                    //Прикрепляем событие для каждой отдельной кнопки
                    //При нажатии на кнопку будет вызываться функция Click()
                    btns[i].addEventListener("click", function (e) { Click(e.target.getAttribute("index")); });
                }
            }

            function Click(index)
            {
                //Находим все кнопки
                let btns = document.getElementsByClassName("button");

                //Если это тест с правильными ответами, то мы подсвечиваем правильный ответ зелёным, а неправильный - красным
                if(quiz.questions[quiz.current].type == 1)
                {
                    if(!isPressed)
                    {
                        isPressed = true;
                        //Получаем номер правильного ответа
                        let correct = quiz.Click(index);

                        //Делаем кнопки серыми
                        for(let i = 0; i < btns.length; i++)
                        {
                            btns[i].className = "button button_passive";
                        }

                        if(correct >= 0)
                        {
                            btns[correct].className = "button button_correct";
                        }

                        if(index != correct)
                        {
                            btns[index].className = "button button_wrong";
                        }
                    }
                }
                else if(quiz.questions[quiz.current].type == 2)
                {
                    if(btns[index].className != "button button_select")
                    {
                        btns[index].className = "button button_select";
                    }
                    else
                    {
                        btns[index].className = "button";
                    }
                }
                else
                {
                    //Иначе просто подсвечиваем зелёным ответ пользователя
                    btns[index].className = "button button_correct";
                }
            }
            // Вызов функции обновления
            Update();

            nextButton.addEventListener("click", () => {
                if(quiz.questions[quiz.current].type == 1)
                {
                    const selectedAnswer = document.querySelectorAll('.button.button_correct');

                    if(selectedAnswer.length == 0)
                    {
                        errorMessage.textContent = "Select your answer options";
                    }
                    else
                    {
                        errorMessage.textContent = "";

                        quiz.Next();
                        Update();
                    }
                }
                else if(quiz.questions[quiz.current].type == 2)
                {
                    let isCorrect = true;

                    if(!isPressedNextButton)
                    {
                        for (let i = 0; i < btns.length; i++)
                        {
                            if(btns[i].className == "button button_select" && quiz.questions[quiz.current].answers[i].value != 1)
                            {
                                isCorrect = false;
                            }
                        }
                    }
                    else
                    {
                        isCorrect = false;
                    }

                    if(isCorrect)
                    {
                        quiz.score += 1;
                        console.log("Correct");
                    }

                    const selectedButtons = document.querySelectorAll('.button.button_select');

                    if(selectedButtons.length == 0 && !isPressedNextButton)
                    {
                        errorMessage.textContent = "Select your answer options";
                    }
                    else
                    {
                        if(!isPressedNextButton)
                        {
                            for (let i = 0; i < btns.length; i++)
                            {
                                btns[i].disabled = true;

                                if(btns[i].className = "button button_select")
                                {
                                    btns[i].className = "button";
                                }

                                if(quiz.questions[quiz.current].answers[i].value == 1)
                                {
                                    btns[i].className = "button button_correct";
                                }
                            }

                            isPressedNextButton = true;
                        }
                        else
                        {
                            errorMessage.textContent = "";
                            quiz.Next();
                            Update();

                            isPressedNextButton = false;
                        }

                    }

                }
            });




             if (!requirementsList) return;

                const contentType = requirementsList.dataset.type;  // 'lesson' или 'test'
                const contentId = requirementsList ? parseInt(requirementsList.id) : null;
                const csrfToken = getCookie('csrftoken');

                if (contentType === 'test') {
                    const submitButton = document.getElementById('submitButton');
                    if (submitButton) {
                        submitButton.addEventListener('click', () => {
                            fetch('/submit_result/', {
                                method: 'POST',
                                headers: {
                                    'Content-Type': 'application/json',
                                    'X-CSRFToken': csrfToken
                                },
                                body: JSON.stringify({
                                    type: 'test',
                                    test_id: contentId,
                                    score: quiz.score
                                })
                            })
                            .then(response => response.json())
                            .then(data => {
                                console.log('Тест отправлен:', data.message);
                                document.getElementById('submitMessage').textContent = 'Ответ отправлен!';
                            })
                            .catch(error => {
                                console.error('Ошибка отправки теста:', error);
                                document.getElementById('submitMessage').textContent = 'Ошибка при отправке!';
                                document.getElementById('submitMessage').style.color = 'red';
                            });
                        });
                    }
                }
        }


    }

    if (contentType === 'lesson') {
        const csrfToken = getCookie('csrftoken');
        const completeButton = document.getElementById('markLessonComplete');
        if (completeButton) {
            completeButton.addEventListener('click', () => {
                fetch('/submit_result/', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'X-CSRFToken': csrfToken
                    },
                    body: JSON.stringify({
                        type: 'lesson',
                        lesson_id: contentId
                    })
                })
                .then(response => response.json())
                .then(data => {
                    console.log('Урок отмечен:', data.message);
                    document.getElementById('lessonMessage').textContent = 'Урок отмечен!';
                })
                .catch(error => {
                    console.error('Ошибка отправки урока:', error);
                    document.getElementById('lessonMessage').textContent = 'Ошибка при отправке!';
                    document.getElementById('lessonMessage').style.color = 'red';
                });
            });
        }
    }


});


document.querySelectorAll('.dropdown > a').forEach(item => {
    let parent = item.parentElement; // Родительский элемент
    let dropdownContent = parent.querySelector('.dropdown-content'); // Содержимое выпадающего списка
    let dropdownId = `dropdown-${parent.dataset.id}`; // Уникальный ключ для localStorage

    // Устанавливаем начальное состояние max-height в 0
    dropdownContent.style.maxHeight = 0;

    // Проверяем, было ли состояние раскрытия сохранено
    let isOpen = localStorage.getItem(dropdownId) === 'true';

    if (isOpen) {
        parent.classList.add('open');
        dropdownContent.style.transition = "none"; // Отключаем анимацию при загрузке
        dropdownContent.style.maxHeight = dropdownContent.scrollHeight + "px"; // Устанавливаем точную высоту
        setTimeout(() => {
            dropdownContent.style.transition = "max-height 0.5s ease-out"; // Возвращаем анимацию после инициализации
        }, 10);
    }

    // Добавляем обработчик клика
    item.addEventListener('click', function (e) {
        e.preventDefault();

        if (parent.classList.contains('open')) {
            // Если открыт, закрываем
            dropdownContent.style.maxHeight = dropdownContent.scrollHeight + "px"; // Устанавливаем текущую высоту для плавного закрытия
            parent.classList.remove('open');
            setTimeout(() => {
                dropdownContent.style.maxHeight = 0; // Закрываем с анимацией
            }, 10);
            localStorage.setItem(dropdownId, 'false');
        } else {
            // Если закрыт, открываем
            parent.classList.add('open');
            dropdownContent.style.maxHeight = dropdownContent.scrollHeight + "px"; // Плавное открытие
            localStorage.setItem(dropdownId, 'true');
        }
    });
});


document.addEventListener("DOMContentLoaded", function () {
    const menu = document.getElementById("menu");

    // Восстанавливаем позицию прокрутки из localStorage
    const savedScrollTop = localStorage.getItem("menuScrollTop");
    if (savedScrollTop) {
        menu.scrollTop = parseInt(savedScrollTop, 10); // Применяем сохраненную позицию
    }

    // Сохраняем позицию прокрутки при прокручивании меню
    menu.addEventListener("scroll", function () {
        localStorage.setItem("menuScrollTop", menu.scrollTop);
    });
});



// Получаем все кнопки аккордеона
const accordionButtons = document.querySelectorAll('.accordion-button');

// Добавляем обработчик события на клик для каждой кнопки
accordionButtons.forEach(button => {
    button.addEventListener('click', function() {
        const target = document.querySelector(button.getAttribute('data-bs-target'));

        // Если элемент уже раскрыт, скрываем его
        if (target.classList.contains('show')) {
            target.classList.remove('show');
            button.classList.add('collapsed');
        } else {
            // Если элемент скрыт, показываем его
            target.classList.add('show');
            button.classList.remove('collapsed');
        }
    });
});

function confirmLogout(event) {
    // Отменяем стандартное поведение кнопки
    event.preventDefault();

    // Показываем окно подтверждения
    if (confirm("Вы точно хотите выйти?")) {
        // Если пользователь нажал "OK", отправляем форму
        document.getElementById('logout-form').submit();
    }
}

document.addEventListener('DOMContentLoaded', function () {
    const container = document.querySelector('.practice-carousel-container');
    const totalSteps = parseInt(container.dataset.steps, 10);

    let currentStep = 1;

    function showStep(step) {
        for (let i = 1; i <= totalSteps; i++) {
            const el = document.getElementById(`step-${i}`);
            if (el) el.style.display = (i === step ? 'block' : 'none');
        }

        const indicator = container.querySelector('[data-indicator]');
            if (indicator) {
                indicator.innerText = `${step} / ${totalSteps}`;
            }
    }

    function nextStep() {
        if (currentStep < totalSteps) {
            currentStep++;
            showStep(currentStep);
        }
    }

    function prevStep() {
        if (currentStep > 1) {
            currentStep--;
            showStep(currentStep);
        }
    }

    window.nextStep = nextStep;
    window.prevStep = prevStep;

    showStep(currentStep);
});

const toggleBtn = document.getElementById('toggleMenu');
const closeBtn = document.getElementById('closeMenu');

const sidebarStrip = document.getElementById('sidebarStrip');
const menu = document.getElementById('menu');

toggleBtn.addEventListener('click', () => {
    menu.classList.toggle('active');

    toggleBtn.style.visibility = 'hidden';
    sidebarStrip.style.visibility = 'hidden';

    setTimeout(() => {
        toggleBtn.classList.remove('visible');
        sidebarStrip.classList.remove('visible');
    }, 0);
});

closeBtn.addEventListener('click', () => {
    menu.classList.toggle('active');

    setTimeout(() => {
        toggleBtn.classList.add('visible');
        sidebarStrip.classList.add('visible');
    }, 150);
});


const leftList = document.getElementById('left-list');
const rightList = document.getElementById('right-list');
const svgLines = document.getElementById('svg-lines');
const submitBtn = document.getElementById('submit-btn');
const resultDiv = document.getElementById('result');

let selectedLeft = null;
let connections = [];
const maxConnections = 3; // Максимальное количество связей

// Функция для получения центра элемента с учетом прокрутки и отступов
function getElementCenter(element) {
    const rect = element.getBoundingClientRect();
    const svgRect = svgLines.getBoundingClientRect();

    return {
        x: rect.left + rect.width / 2 - svgRect.left,  // учитываем отступы SVG
        y: rect.top + rect.height / 2 - svgRect.top,   // учитываем отступы SVG
    };
}

// Выбор элемента из левого списка
leftList.addEventListener('click', (e) => {
    if (e.target.dataset.id) {
        selectedLeft = e.target;
        // Сброс предыдущего выбора
        Array.from(leftList.children).forEach(item => item.classList.remove('selected'));
        e.target.classList.add('selected');
    }
});

// Выбор элемента из правого списка
rightList.addEventListener('click', (e) => {
    if (e.target.dataset.id && selectedLeft) {
        const selectedRight = e.target;

        // Отрисовка линии
        drawLine(selectedLeft, selectedRight);

        // Сброс выбора
        selectedLeft.classList.remove('selected');
        selectedLeft = null;
    }
});

// Функция для отрисовки линии
function drawLine(leftElement, rightElement) {
    const leftCenter = getElementCenter(leftElement);
    const rightCenter = getElementCenter(rightElement);
    const line = document.createElementNS('http://www.w3.org/2000/svg', 'line');
    line.setAttribute("id", leftElement.dataset.id);
    line.setAttribute("right-id", rightElement.dataset.id);
    line.setAttribute('x1', leftCenter.x);
    line.setAttribute('y1', leftCenter.y);
    line.setAttribute('x2', rightCenter.x);
    line.setAttribute('y2', rightCenter.y);
    line.setAttribute('stroke', 'black');
    line.setAttribute('stroke-width', '2');

    svgLines.appendChild(line);
    connections.push(line);

    const foundIndex = connections.findIndex(item => item.id === line.id);
    if (foundIndex !== -1 && connections[foundIndex] !== line)
    {
        svgLines.removeChild(connections[foundIndex]);
        connections.splice(foundIndex, 1);
    }
}

// Проверка результата
submitBtn.addEventListener('click', () => {

    if(connections.length >= maxConnections)
    {
        let isCorrect = true;

        connections.forEach(connection => {
            if (connection.id !== connection.getAttribute("right-id")) {
                isCorrect = false;
            }
        });

        if (isCorrect)
        {
            resultDiv.textContent = 'Все соответствия верны!';
            resultDiv.style.color = 'green';
        }
        else
        {
            resultDiv.textContent = 'Есть ошибки в соответствиях!';
            resultDiv.style.color = 'red';
        }
    }
    else
    {
        resultDiv.textContent = 'Не все варианты отмечены';
        resultDiv.style.color = 'red';
    }
});
