// Первое задание 
let year = 1982; // объявляем переменную и присваиваем переменной год рождения
let age = document.querySelector('#out'); // объявляем переменную и присваиваем ей содержимое элемента страницы с id = out
age.innerHTML = 2019 - year; // используем метод innerHTML для вывода результата разности текущего года и значением переменной

// Второе задание

let name = 'Дима'; // объявляем переменную и присваиваем ей строку с именем
alert(name); // выводим содержимое переменной через высплывающее окно

// Третье задание

let a = 'Hello';
let b = ' ';
let c = 'world';
console.log(a + b + c); // Склеивание строк происходит согласно порядку переменных которым они присвоены 
console.log(c + a + b); // Отличие от первого случая это отсутствие пробела которым является переменная b и также порядок слов
// заметил еще одну особенность после выполнения скрипта и отображении в консоле можно после это вводить переменные в консоль и так 
// же получать результат то есть получить доступ к этим значениям и оперировать с ними.