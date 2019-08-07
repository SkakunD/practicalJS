//-------------------------Первое задание----------------------------
document.querySelector('#only-small').onkeypress = function(event) {
    if(event.keyCode    >   96  &&  event.keyCode   <   123){
        let symbol = document.querySelector('#only-small');
        symbol.innerHTML    +=  event.key;
    }   else    {
        return false;
    };
};

//Второе решение данной задачи просто проверка shiftKey на false/true но
// в данном случае цифры выводится будут так как нет проверки на 
//код введенного символа

// document.querySelector('#only-small').onkeypress = function(event) {
//     if(!event.shiftKey){
//         let symbol = document.querySelector('#only-small');
//         symbol.innerHTML    +=  event.key;
//     }   else    {
//         return false;
//     };
// };

//---------------Второе задание----------------------------------
let countHor    =   10;
let countVert   =   10;
let rotate  =   0;

document.onkeydown =   function(event)    {
    // count   =   count   +   10;
    console.log(event);
    let cube    =   document.querySelector('.cube');
    if(event.keyCode    ==  39) {
        countHor   =   countHor   +   10;
        cube.style.marginLeft   =  countHor   +   'px';
    }   else if (event.keyCode  ==  37) {
        countHor   =   countHor   -   10;
        cube.style.marginLeft   =  countHor   +   'px';
    }   else if (event.keyCode  ==  38) {
        countVert   =   countVert   -   10;
        cube.style.marginTop   =  countVert   +   'px';
    }   else if (event.keyCode  ==  40) {
        countVert   =   countVert   +   10;
        cube.style.marginTop   =  countVert   +   'px';
    }   else if(event.keyCode   ==  32) {
        rotate  = rotate    +   45;
        cube.style.transform   =   'rotate( '  +   rotate  +   'deg)';
    };

};
//------------------Третье задание------------------------------------
document.onkeypress =   function(event) {
    let letterBlock =   document.querySelector('.letter');
    letterBlock.innerHTML   +=  String.fromCharCode(Math.floor(Math.random()*25 +   65))    +   ' ';
};

