//--------------Основное задание--------------------------

let block = document.querySelector('.block');
document.onclick    =   function(){
    if (block.classList.contains('hide')){
    block.classList.remove('hide');
    }   else {
        block.classList.add('hide');
    };
};

document.onkeypress =   function(event){
    if(event.keyCode    ==  27){
        block.classList.add('hide');
    };
};

//-----------------Для практики-----------------------

let closeWindow = document.querySelector('.close-window');
let close = document.querySelector('.close');
let turn = document.querySelector('.turn');


close.onclick = function(){
    closeWindow.classList.add('hide');
};

turn.onclick = function(){
    if(closeWindow.classList.contains('close-turn')){
        closeWindow.classList.remove('close-turn')
    }   else {
    closeWindow.classList.add('close-turn');
    }
};

