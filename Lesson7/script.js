// //------------Первое задание---------------
// let hundredNumbers = document.querySelector('.first-ex');
// document.querySelector('#run-cycle').onclick = function(){
//     hundredNumbers.innerHTML = ' '; // данная строка обнуляет содержание
//     let dataNumbers =  document.querySelector('#input-numbers').value;
//     for (let i = 0; i <= dataNumbers; i++) {
//         let colNum = 'black'
//         if(!(i%2)){
//             colNum = 'red';
//         }
//     hundredNumbers.innerHTML += "<span style = 'color: " + colNum + "'>" + i + "</span>" + ' ';
// };
// };

// //---------------Второе задание--------------------------

// let evenNumbers = document.querySelector('.second-ex');
// document.querySelector('#run-cycle-even').onclick = function(){
//     evenNumbers.innerHTML = ' '; // данная строка обнуляет содержание
//     let dataNumbers =  document.querySelector('#input-all-numbers').value;
//     for (let i = 0; i <= dataNumbers; i++) {
//         if(!(i%2)){
//             evenNumbers.innerHTML += i + ' ';        
//         }
// };
// };

// //---------------Третье задание--------------------------

// let revNumbers = document.querySelector('.third-ex');
// document.querySelector('#run-cycle-rev').onclick = function(){
//     revNumbers.innerHTML = ' '; // данная строка обнуляет содержание
//     let dataNumbers =  document.querySelector('#input-rev-numbers').value;
//     for (let i = dataNumbers; i >= 0; i--) {
//             revNumbers.innerHTML += i + ' ';        
        
// };
// };

// //---------------Четвертое задание--------------------------

// let sumNumbers = document.querySelector('.fourth-ex');
// document.querySelector('#run-cycle-sum').onclick = function(){
//     let summaNumbers = 0;
//     sumNumbers.innerHTML = ' '; // данная строка обнуляет содержание
//     let dataNumbers =  document.querySelector('#input-sum-numbers').value;
//     for (let i = 0; i <= dataNumbers; i++) {
//             summaNumbers += i;
//     };
//     sumNumbers.innerHTML = summaNumbers;   
// };

// //---------------Пятое задание--------------------------

// let degreeNumbers = document.querySelector('.fifth-ex');
// document.querySelector('#run-degree').onclick = function(){
//     degreeNumbers.innerHTML = ' '; // данная строка обнуляет содержание
//     let baseNum =  document.querySelector('#base-number').value;
//     let degreeNum =  document.querySelector('#degree-number').value;
//     let result = 1;
//     for (let i = 0; i < degreeNum; i++) {
//         result *= baseNum;
//     };
//     degreeNumbers.innerHTML = '<b>' + result + '</b>';   
// };
// function insertNum(){
//     document.querySelector('#base-number').style.border = '5px solid green';
// };
// function insertDegree(){
//     document.querySelector('#degree-number').style.border = '5px solid red';
// };

// //------------------Шестое задание---------------------------
// let outBlock = document.querySelector('.pifagor-table');
// document.querySelector('#pifagor-create').onclick = function(){
//     for (let i = 1; i <=9; i++){
//         let tempBlock = '';
//         for(let j =1; j <=9; j++){
//             let result = i*j;
//             tempBlock += "<div>" + i + '*' + j + '=' + result + "</div>";
//         };
//         outBlock.innerHTML += "<div>" + tempBlock +"</div>";
//     };
// };

// //-----------------Седьмое задание----------------------------
// let resultFactorial = document.querySelector('.factorial-result');
// document.querySelector('#check-factorial').onclick = function(){
//     let inputFactorial = document.querySelector('#factorial-num').value;
//     let result = 1;
//     for(let i = 1; i <= inputFactorial; i++) {
//         result *= i;
//     };
//     resultFactorial.innerHTML = result;
// };
// //----------------Восьмое задание----------------
// let resultSymbol = document.querySelector('.result-symbol');
// let inputValue = document.querySelector('#input-value');

// document.querySelector('#check-symbol').onclick = function () {
//     if(inputValue.value >=  1000    &&  inputValue.value    <=  2000){
//     resultSymbol.innerHTML = '&#' + inputValue.value;
//     }   else{
//         resultSymbol.innerHTML  =   'Вы ввели некоректное значение!!!'
//     };
// };
// document.querySelector('#check-all-symbol').onclick =   function() {
//     for(let i   =   1000;   i   <=  2000;   i++){
//         resultSymbol.innerHTML  +=  '&#'    +   i   +   ' ';
//     }
// };
// //-------------------Девятое задание------------------------
// let allGetParagraf = document.querySelectorAll('.main p');
// document.querySelector('#check-num').onclick    =   function()  {
//     for(let i   =   0;  i   <  allGetParagraf.length;  i++)    {
//         allGetParagraf[i].insertAdjacentHTML('afterbegin' , '<span style = "color:  red; font-size: 20px">'  +   (i  +   1) + '</span>'   + ' ');
//     }
// };
//-------------------Десятое задание----------------------------
//Возник вопрос в ходе выполнения задачи - пытался пробежаться в цикле через 3 элемента
// при этом писал в условии i+3 но цикл при этом просто зависал, поставл просто i++все работает
// не нашел объяснение почему так. Или как я понял шаг нельзя изменить он или на +1 или -1 других
//значений нет.

//!!!! новый комент - сделал проще через массивы в ассициативном массиве - по сути мы сразу же обращаемся к элементу без цикла 
// и возник вопрос а нужен ли был здесь цикл вообще, может я что-то не так понял.
let outGoroscope = document.querySelector('.out-result-goroscope');
let monthBirthday = document.querySelector('#month-input');
let dayBirthday = document.querySelector('#day-input');

let arrGoroscope = {1:  ['Козерог',    21,   'Водолей', 31],  2:    ['Водолей',    19,  'Рыбы', 29], 3: ['Рыбы',    21,    'Овен',  31],   
    4:  ['Овен',    20, 'Телец',    30],   5:  ['Телец',   21, 'Близнецы',  31],    6:  ['Близнецы',   22,   'Рак', 30], 7:  ['Рак',  23, 'Лев',    31],
    8:  ['Лев',  23, 'Дева',    31],    9:['Дева', 23, 'Весы',  30],    10:['Весы', 24, 'Скорпион', 31],    11:['Скорпион', 23, 'Стрелец',  30],
    12:['Стрелец',  22, 'Козерог',  31]};

let arrIcon = {1:  ['1.png',   '2.png'],  2:    ['2.png',   '3.png'], 3: ['3.png',  '4.png'],   
4:  ['4.png',   '5.png'],   5:  ['5.png',   '6.png'],    6:  ['6.png',  '7.png'], 7:  ['7.png', '8.png'],
8:  ['8.png',   '9.png'],    9:['9.png',    '10.png'],    10:['10.png', '11.png'],    11:['11.png', '12.png'],
12:['12.png',   '1.png']};

//Данный массив добавил для вывода картинки знака зодиака, чтобы не плодить if решил обращаться к ним также как и к предыдущему массиву.
// Скорректировал код добавив в него проверку сначала месяца а потом даты, если проверять сразу то будут сыпаться ошибки в случае если некорректно введен месяц
//ведь при обращении к элементу которого нет чтобы проверить границу даты то получим ошибку, поэтому разделил на два шага - месяц мы просто проверяем есть такой 
//элемент в массиве или нет на true & false ну а дату сравниваем с крайней датой текущего месяца.

document.querySelector('#check-goroscope').onclick = function() {
    console.log(Object.keys(arrGoroscope).length);
    if(arrGoroscope[monthBirthday.value]){
        if(dayBirthday.value    >   0   &&  dayBirthday.value   <=   arrGoroscope[monthBirthday.value][3]){
        if (arrGoroscope[monthBirthday.value][1] >  dayBirthday.value){
            outGoroscope.innerHTML = 'Ваш знак - ' + arrGoroscope[monthBirthday.value][0]   +   '<img src   ="assets/'   +  arrIcon[monthBirthday.value][0]  + '">'; 
        }   else    {
            outGoroscope.innerHTML = 'Ваш знак - ' + arrGoroscope[monthBirthday.value][2]   +   '<img src   ="assets/'   +  arrIcon[monthBirthday.value][1]  + '">';
        }
    } else {
        outGoroscope.innerHTML = 'Вы ввели некорректное число дня рождения!!!!'
    }
}   else {
    outGoroscope.innerHTML   =   'Вы ввели некоректное число месяца рождения!!!!'
}
    
};
// //------------------Одинадцатое задание---------------------------
// let yellowSpan = document.querySelectorAll('span');
// document.querySelector('#check-yellow-span').onclick    =   function()  {
//     for(let i   =   0;  i   <  yellowSpan.length;  i++){
//         yellowSpan[i].style.background = 'yellow';
//     }
// };
// //---------------Двенадцатое задание---------------------
// let outQualityParag = document.querySelector('.footer');
// let qualityParag = document.querySelectorAll('p');
// document.querySelector('#check-quality').onclick   =    function(){
//     outQualityParag.innerHTML = '<p style = "text-align: center; font-size: 40px">' +  qualityParag.length +   '</p>';
// };
// //--------------Тринадцатое задание------------------------
// let showArray = document.querySelector('.out-array');
// let testArray = [1, 0, 0, 0, 0];
// showArray.innerHTML = testArray;
// document.querySelector('#btn-change-array').onclick = function () {
//     for(let i   =   0;  i   < testArray.length; i++){
//         if (testArray[i] == 1){
//             if(i == testArray.length - 1){
//                 document.querySelector('#btn-change-array').innerText = 'Stop';
//             }   else    {
//             let swap    =   testArray[i+1];
//             testArray[i+1]  =   testArray[i];
//             testArray[i]    =   swap;
//             showArray.innerHTML = testArray;
//             break;
//             }
//         };
//     };
// };
// //----------------Четырнадцатое задание-------------------
// //Извиняюсь за нестандартный подход, хотел изначально сформировать массив по клику 
// //а потом с ним работать, но столкнулся с задачей что переменная let не видна из функции в другой
// //функции, поэтому решил вместо переменной использовать возвращенное значение фукнции и вызывать ее 
// //по клику и запуску общей итоговой фукнции в которой идет подсчет
// let numbersArray = document.querySelector('#number-array');
// let showUnderZero = document.querySelector('.show-element');
// // let arrayNum = [];
// let  getArrayNumbers   = function(numberAr){
//     let arrayNum = [];
//     for (let    i   =   0;  i   < numberAr ; i++){
//         let j = Math.floor(Math.random()*100);
//         let  sign = Math.floor(Math.random()*10);
//         if(sign < 5){
//             arrayNum.push(-j);
//         } else {
//             arrayNum.push(j);
//         };
//     };
//     return arrayNum;
// };
//  document.querySelector('#show-element').onclick = function(){
//     let numAr = getArrayNumbers(numbersArray.value);
//     // console.log(numAr);
//     let count =0;
//     for(i   =   0;  i   <   numAr.length;   i++){
//         if (numAr[i]    <   0){
//             count++;
//         }
//     };
//     showUnderZero.innerHTML = 'Число элементов меньше 0 получилось равное ' +   count;
//  };

//  //----------------Пятнадцатое задание------------------------
//  //Используем функцию создания массива из предыдущей задачи чтобы не копировать код
//  // вводить число элементов массива необходимо в предыдущей 14 задаче 
//  //и после нажимаем на кнопку показать элементы
//  //Надо учесть что в данном случае генерируется новый массив и число элементов
//  //меньше 0 будет другое отличное от того что получено в 14 задаче
// let showElementBlock = document.querySelector('.show-element-block');
// document.querySelector('#show-element-array').onclick = function(){
//     let numAr = getArrayNumbers(numbersArray.value);
//     for(i   =   0;  i   <   numAr.length;   i++){
//         if (numAr[i]    <   0){
//             showElementBlock.innerHTML +=    numAr[i] + ', ';
//         }
//     };   
// };
// //---------------Шестнадцатое задание----------------------
// let numbersArrayOne = document.querySelector('.out-array-one');
// let inputArrayOne = document.querySelector('#input-array-one');

// document.querySelector('#btn-check-one').onclick = function(){
    
//     let arrayNumOne = [];
//     for (let    i   =   0;  i   <  inputArrayOne.value;    i++){
//        arrayNumOne.push(1);
//     };
//     for (let i  =   0;  i   <   inputArrayOne.value;    i++){
//         if (i   ==  arrayNumOne.length  -   1){
//             numbersArrayOne.innerHTML += '<span>'   +   arrayNumOne[i]  +   '</span>';
//         } else  {
//         numbersArrayOne.innerHTML += '<span>'   +   arrayNumOne[i]  +   '</span>'   +   ', ';
//         }
//     };
//     //поясню почему так сделал - если выводить массив целиком он как одна строка
//     //уходит за пределы страницы, а в таком случае он подстраивается под размер 
//     //родительского блока.
// };
// //----------------Семнадцатое задание------------------------
// let numbersArrayOther = document.querySelector('.out-array-other');
// let inputArrayOther = document.querySelector('#input-array-other');

// document.querySelector('#btn-check-other').onclick = function(){
    
//     let arrayNumOther = [];
//     for (let    i   =   0;  i   <  inputArrayOther.value;    i++){
//         let j = Math.floor(Math.random()*100);
//         arrayNumOther.push(j);
//     };
//     for (let i  =   0;  i   <   inputArrayOther.value;    i++){
//         if(i    ==  arrayNumOther.length    -   1){
//             numbersArrayOther.innerHTML += '<span>'   +   arrayNumOther[i]  +   '</span>';
//         }   else    {
//         numbersArrayOther.innerHTML += '<span>'   +   arrayNumOther[i]  +   '</span>'   +   ', ';
//         }
//     };
// };
// //------------------Восемнадцатое задание----------------------------
// //была идея написать цикл по формированию массива хаотично целиком из вложенных циклов и 
// //условий но столкнулся с проблеммой - я смогу сгенерировать длину слова, смогу сгенерировать
// //код прописных букв в интервале от 1071 до 1103 но когда буду слова составленные из букв
// // даже с приставкой &# у меня так и останутся эти строчные элемент не преобразованные
// //поэтому решил набить вручную массив и ниже его вывести на экран для наглядности
// let differentArray = ['word', 4, 'letter', 0, 3, 'array', 43, 95, 10, 83, 'function', 'string', 92];
// document.querySelector('.different-array-output').innerHTML =   differentArray;
// let numberOutput = document.querySelector('.numbers-array-output');
// document.querySelector('#btn-check-sort').onclick    =   function()  {
//     let onlyNumberArray = [];
//     for(let i   =   0;  i   <  differentArray.length; i++)    {
//         if(!isNaN(differentArray[i])){
//             onlyNumberArray.push(differentArray[i]);
//         };
//     };
//     numberOutput.innerHTML = onlyNumberArray;
// };
// //----------------Девятнадцатое задание--------------------------------
// let arrayShow   =   document.querySelector('.array-show');
// let maxValueOutput  =   document.querySelector('.max-value');
// let arrayMax    =   [27, 10, 5, 3, 32, 93, 58, 8, 75, 19];
// // let currentIndex    =   0;
// let maxValue    =   arrayMax[0];


// for(let i   =   0;  i   <  arrayMax.length;    i++)    {
//     arrayShow.innerHTML +=  arrayMax[i] +   ' ';
// };

// document.querySelector('#check-max-value').onclick    =   function()  {
    
//     for(let i   =   1;  i   <   arrayMax.length;    i++)    {
//         if(maxValue <   arrayMax[i])    {
//             maxValue    =   arrayMax[i];
//             let swap    =   arrayMax[0];
//             arrayMax[0] =   maxValue;
//             arrayMax[i]    =   swap;
//         }
//     };
//     maxValueOutput.innerHTML = maxValue;
// };
// //----------------------Двадцатое задание------------------------
// //изучил ваш пример-подсказку, не знаю специально или нет но там допущена ошибка
// // в строке for (let i = 0; i < b.length; i++) - данный цикла не отработает ведь условие
// // некорректные - массив b пустой и в нем нет элементов, а значит и длины нет, но вот 
// //длина есть у массива а из вашего примера

// let arrayAllNumberStatistic = [32, 95, 14, 25, 10, 14, 3, 32, 95, 14, 10, 3, 95, 25];
// let statisticArray = {};

// let showArrayAllStatistic = document.querySelector('.array-asociat');
// let showArrayStatistic = document.querySelector('.statistic-array');

// for(let i   =   0;  i   <  arrayAllNumberStatistic.length;  i++){
//     showArrayAllStatistic.innerHTML +=  arrayAllNumberStatistic[i] + ' ';
// };

// document.querySelector('#check-statistic').onclick  =   function()  {
//     for (let    i   =   0;  i   <   arrayAllNumberStatistic.length; i++) {
//         if (statisticArray[arrayAllNumberStatistic[i]] == undefined) {
//             statisticArray[arrayAllNumberStatistic[i]] = 1;
//         }
//         else {
//             statisticArray[arrayAllNumberStatistic[i]]++;
//         }
//     };

//     for (let j = 0; j < arrayAllNumberStatistic.length; j++){
//         showArrayStatistic.innerHTML += arrayAllNumberStatistic[j] + ':' + statisticArray[arrayAllNumberStatistic[j]] + ' ';  
//     };
// };

//прошу сильно не ругаться если что-то сделал не так