// Первое задание
// думаю что правильнее было бы объявить переменную и положить в нее содержимое блока
// в самом начале а потом использовать в обоих фукнциях, но для понимания думаю тоже правильно
function showModal(){
    let block = document.querySelector('#modal');
    block.style.display = 'block';       // прописываем действие по срабатыванию функции - прописывание свойства block для отображения        
};

function hiddenModal() {
    let block = document.querySelector('#modal');
    block.style.display = 'none';      // данное свойство скроет элемент со странице прописав ему свойство display: none;
};

function widerModal() {
    let block = document.querySelector('#modal');
    block.style.width = '200px';      // сделал для эксперимента чтобы понять как работать с числами
};

function tightModal() {
    let block = document.querySelector('#modal');
    block.style.width = '50px';      // аналогично вышесказанному
};


let showBtn = document.querySelector('#showBlock'); // присваиваем переменным соответствующие кнопки
let hiddenBtn = document.querySelector('#hiddenBlock');
let widerBtn = document.querySelector('#wider');
let tightBtn = document.querySelector('#tight'); 

showBtn.onclick = showModal; //присваиваем действие по клику на кнопке
hiddenBtn.onclick = hiddenModal;
widerBtn.onclick = widerModal;
tightBtn.onclick = tightModal;

// Второе задание 

let sumBtn = document.querySelector('#sumNumber');

function sumOtherNumber() {
    let resultSum = document.querySelector('#result');
    resultSum.innerHTML = 34 + 45; // вывод в блок параграфа результат сложения
};

sumBtn.onclick = sumOtherNumber; // запуск функции сложения

// Третье задание

let alertBtn = document.querySelector('#alertText');

function sayHello() {
    alert('Приветствую тебя на странице третьего домашнего задания!!!'); // вывод приветствия через alert
};

alertBtn.onclick = sayHello;

// Четвертое задание

let doFunc = document.querySelector('#doOtherFunc');

function otherFunc() {
    widerModal(); // функция увеличивающая ширину блока
    sumOtherNumber(); // функция подсчета суммы чисел
};

doFunc.onclick = otherFunc;

// Пятое задание

let selfBtn = document.querySelector('#selfHidden');

function selfHiddenFunc(){
    selfBtn.hidden = true; // ставим методу скрытия кнопки значение истина
};

selfBtn.onclick = selfHiddenFunc;

//Шестое задание 

let pushBtn = document.querySelector('#doPushMe');

function pushMe() {
    pushBtn.innerHTML = 'Не нажимать!!'; // замена текста на кнопке по нажатию
};

pushBtn.onclick = pushMe;