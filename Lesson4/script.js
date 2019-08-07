//---------------Первое задание--------------
//Поигрался немного со стилями алерт закоментировал а вывел текст
// на саму кнопку, все хотел чтобы после алерта с текстом пробуй еще
// input отчищался но checkNum.value = '' почему то не работат, я думал
//оно должно было присвоить пустой значение но видать не так просто
let randNum = Math.round(Math.random()*10);
let checkNum = document.querySelector('#check_number');
console.log(randNum);

function doCheckNumber() {
    let inputNum = document.querySelector('#input_number').value;
    inputNum = parseInt(inputNum);
    checkNum.innerText = 'Проверить';
    if(!isNaN(inputNum)){
        if(inputNum == randNum){
            checkNum.style.background = 'green';
            checkNum.style.width = '200px';
            checkNum.style.height = '40px';
            checkNum.innerText = 'Вы молодец! Нажми чтобы сыграть еще.';
            checkNum.onclick = restartGame;
            // alert('Поздравляю вы угадали!!!');
            // location.reload();
        } else if(inputNum > randNum){
            alert('Ваше число больше загаданного. Пробуйте еще раз');
        } else {
            alert('Ваше число меньше загаданного. Пробуйте еще раз');
        }
    } else {
        checkNum.innerText = 'Введите число!!!';
    }
}

checkNum.onclick = doCheckNumber;

function restartGame(){
    location.reload();
};

//----------------------Второе задание---------------------------

let count = 0;
let countBtn = document.querySelector('#count_btn');
let outParagraph = document.querySelector('.out_text');

function doCount() {
    count++;
    if(count == 1) {
        countBtn.innerText = 'Не нажимать!';
        outParagraph.innerHTML = '<b>У вас осталось 2 попытки</b>';
    } else if (count == 2) {
        outParagraph.innerHTML = '<b>У вас осталось 1 попытка</b>';
    } else if (count == 3) {
        outParagraph.innerHTML = '<b>Доигрались, сломали кнопку)</b>';
        countBtn.hidden = true;
    };
};

countBtn.onclick = doCount;

//---------------------Третье задание-----------------------------

let compareBtn = document.querySelector('#compare_btn');
let result = document.querySelector('.result');

function doCompare(){
    let firstNum = parseInt(document.querySelector('#first_num').value);
    let secondNum = parseInt(document.querySelector('#second_num').value);
    if(!isNaN(firstNum) && !isNaN(secondNum)){
    if (firstNum > secondNum) {
        result.innerHTML = '<i>Из двух чисел больше - </i>' + firstNum;
    } else{
        result.innerHTML = '<i>Из двух чисел больше - </i>' + secondNum;
    }
    } else {
        result.innerHTML = '<i>Ну просили же оба числа!!!!</i>';
    }
};

compareBtn.onclick = doCompare;

//-----------------Четвертое задание------------------------
// по хорошему тут надо проверять еще после объявления функции число 
//дней в месяце так как если ввести месяц 2 а день 12222 то проверка 
//по else пройдет, поэтому думаю после того как мы получили значения
//нужно проверять их парно - месяц/день, так как в разных месяцах разнное
//количетсво дней через &&  и || 
let checkZodiac = document.querySelector('#check_zodiac');
let resultZodiac = document.querySelector('.result_zodiac');

function doCheckZodiac(){
    let month = parseInt(document.querySelector('#month').value);
    let day = parseInt(document.querySelector('#day').value);
    if(!isNaN(month) && !isNaN(day)){
    if (month == 1){
        if(day <= 20) {
            resultZodiac.innerHTML = 'Ваш знак Козерог';
        }  else {
            resultZodiac.innerHTML = 'Ваш знак Водолей';
        }
    } else if(month == 2) {
        if(day <= 18) {
            resultZodiac.innerHTML = 'Ваш знак Водолей';
        } else {
            resultZodiac.innerHTML = 'Ваш знак Рыбы';
        }
    } else if(month == 3){
        if(day <= 20) {
            resultZodiac.innerHTML = 'Ваш знак Рыбы';
        } else {
            resultZodiac.innerHTML = 'Ваш знак Овен';
        }
    } else if(month == 4) {
        if (day <= 19) {
            resultZodiac.innerHTML = 'Ваш знак Овен';
        } else {
            resultZodiac.innerHTML = 'Ваш знак Телец';
        }
    } else if(month == 5) {
        if (day <= 20) {
            resultZodiac.innerHTML = 'Ваш знак Телец';
        } else {
            resultZodiac.innerHTML = 'Ваш знак Близнецы';
        }
    } else if(month == 6) {
        if (day <= 21) {
            resultZodiac.innerHTML = 'Ваш знак Близнецы';
        } else {
            resultZodiac.innerHTML = 'Ваш знак Рак';
        }
    } else if(month == 7) {
        if (day <= 22) {
            resultZodiac.innerHTML = 'Ваш знак Рак';
        } else {
            resultZodiac.innerHTML = 'Ваш знак Лев';
        }
    } else if(month == 8) {
        if (day <= 22) {
            resultZodiac.innerHTML = 'Ваш знак Лев';
        } else {
            resultZodiac.innerHTML = 'Ваш знак Дева';
        }
    } else if(month == 9) {
        if (day <= 22) {
            resultZodiac.innerHTML = 'Ваш знак Дева';
        } else {
            resultZodiac.innerHTML = 'Ваш знак Весы';
        }
    } else if(month == 10) {
        if (day <= 23) {
            resultZodiac.innerHTML = 'Ваш знак Весы';
        } else {
            resultZodiac.innerHTML = 'Ваш знак Скорпион';
        }
    } else if(month ==11) {
        if (day <= 22) {
            resultZodiac.innerHTML = 'Ваш знак Скорпион';
        } else {
            resultZodiac.innerHTML = 'Ваш знак Стрелец';
        }
    } else if(month == 12) {
        if (day <= 21) {
            resultZodiac.innerHTML = 'Ваш знак Стрелец';
        } else {
            resultZodiac.innerHTML = 'Ваш знак Козерог';
        }
    } else {
        resultZodiac.innerHTML = 'Такого месяца не существует!';
    }
} else {
    resultZodiac.innerHTML = 'Введите день и месяц в цифровом формате!!!';
}
};

checkZodiac.onclick = doCheckZodiac;

//----------------Пятое задание----------------------
// упростить как я вижу это загнять все знаки в массив в строковом 
//виде и потом уже просто выводить ответ ссылаясь на полученный
//остаток от деления который будет индеком массива
let checkYear = document.querySelector('#check_year');
let resultYear = document.querySelector('.result_year');

function doYear() {
    let yearInput = parseInt(document.querySelector('#year').value);
    if (!isNaN(yearInput)) {
        yearInput = yearInput % 12;
        if (yearInput == 1) {
            resultYear.innerHTML = 'Вы родились в год Петуха';
        } else if(yearInput == 2) {
            resultYear.innerHTML = 'Вы родились в год Собаки';
        } else if(yearInput == 3) {
            resultYear.innerHTML = 'Вы родились в год Свиньи';
        } else if(yearInput == 4) {
            resultYear.innerHTML = 'Вы родились в год Крысы';
        } else if(yearInput == 5) {
            resultYear.innerHTML = 'Вы родились в год Быка';
        } else if(yearInput == 6) {
            resultYear.innerHTML = 'Вы родились в год Тигра';
        } else if(yearInput == 7) {
            resultYear.innerHTML = 'Вы родились в год Кролика';
        } else if(yearInput == 8) {
            resultYear.innerHTML = 'Вы родились в год Дракона';
        } else if(yearInput == 9) {
            resultYear.innerHTML = 'Вы родились в год Змеи';
        } else if(yearInput == 10) {
            resultYear.innerHTML = 'Вы родились в год Лошади';
        } else if(yearInput == 11) {
            resultYear.innerHTML = 'Вы родились в год Козы';
        } else if(yearInput == 0) {
            resultYear.innerHTML = 'Вы родились в год Обезьяны';
        }
    } else {
        resultYear.innerHTML = 'Введите год в числовом формате.';
    }
};

checkYear.onclick = doYear;