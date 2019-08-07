// // ----------------------Первое задание--------------------------
// let valueMargin = 0;

// document.querySelector('.block-ondblclick').ondblclick  =   function()  {
//     valueMargin += 20;
//     document.querySelector('.block-ondblclick').style.marginLeft = valueMargin + 'px';
    
// };

// document.querySelector('.block-ondblclick p').onmousedown = function() {
//     return false;
//   };

// // document.querySelector('.block-ondblclick p').onselectstart = function() {
// //     return false;
// //   }; 
// //срабатывают обе фукнции отмены выделения.

// //-----------------Второе задание---------------------------
// document.querySelector('.off-click').oncontextmenu  =   function()  {
//     return false;
// }
// //Выделение работает но контекстное меню не появляется
// //-----------------Третье задание---------------------------

// document.querySelector('.folder-open').onmouseenter =   function()  {
    
//     document.querySelector('.folder-open').style.backgroundImage = 'url("assets/open.png")';
// };

// document.querySelector('.folder-open').onmouseleave =   function()  {
    
//     document.querySelector('.folder-open').style.backgroundImage = 'url("assets/close.png")';
// };

//--------------Четвертое задание---------------------------
//Спасибо за подсказку, после я догадался что я могу сразу подставлять и вызывать функцию по месту.

function generateNumber ()  {
    return Math.floor(Math.random()*255);
};


document.querySelector('.block-change-color-enter').onmouseenter =   function()  {

    document.querySelector(".block-change-color-enter").style.backgroundColor =
        "RGB(" + generateNumber() + "," + generateNumber() + "," + generateNumber() + ")";
};

document.querySelector('.block-change-color-leave').onmouseleave =   function()  {

    document.querySelector(".block-change-color-leave").style.backgroundColor =
        "RGB(" + generateNumber() + "," + generateNumber() + "," + generateNumber() + ")";
};

document.querySelector('.block-change-color-move').onmousemove =   function()  {

    document.querySelector(".block-change-color-move").style.backgroundColor =
        "RGB(" + generateNumber() + "," + generateNumber() + "," + generateNumber() + ")";
};