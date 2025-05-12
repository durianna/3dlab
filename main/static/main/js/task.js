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