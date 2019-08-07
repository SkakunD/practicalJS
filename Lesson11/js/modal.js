document.querySelectorAll('.modal-show').forEach(function(element){               // перебираем и назначаем кнопке/ам выполнение функции showModal
    // element.onclick =   showModal;
    element.onclick =   modal;
});
  
document.querySelectorAll('.modal-close').forEach(function(element){              // аналогично только функция closeModal
    // element.onclick =   closeModal;
    element.onclick =   modal;
});


document.querySelectorAll('.modal-main').forEach(function(element)  {             //тут уже назначаем фукнцию closeModalMain по клику области
    element.onclick =   closeModalMain;
});

// function showModal(){                                                             //фукнция удаляет класс и показывает блоки
//         let modal = this.dataset.modal;                                           //получаем значение data-modal
//         document.querySelector(modal).classList.remove('hide');                   //удаляем класс у блока с указанным id
//         document.querySelector(modal).parentElement.classList.remove('hide');     //удаляем класс у родителя вышестоящего блока
//         document.onkeydown = function(event)  {                                   //помещаем сюда функцию отрабатывающую по Esc
//         if(event.keyCode == 27) {
//             document.querySelectorAll('.modal-main').forEach(function(element){   //снова перебираем элементы 
//                 element.classList.add('hide');                                    //и уже элементам вешаем удаление класса
//                 element.children[0].classList.add('hide');                        // с ребенком аналогично
//                 document.onkeydown = null;                                        //обнуляем Esc что не срабатывал после
//             })
//         };
//     };
// };
  
// function closeModal(){                                                            //функция закрытия окон
//         let modal = this.dataset.modal;                                           //получаем id указанный в data-modal
    
//         document.querySelector(modal).parentElement.classList.add('hide');        //удаляем класс у родителя и у потомка
//         document.querySelector(modal).classList.add('hide');
    
//         document.onkeydown = null;
// };
  
function closeModalMain(){
      this.classList.add('hide');
      this.children[0].classList.add('hide');

      document.onkeydown    =   null;
}; 
 
  
// самостоятельная оптимизация - как я думаю то что можно объединить функции показа и скрытия окна
// в данном случае мы работаем по id следовательно можно написать одну функцию и в внутри указать условие 
//согласно которому будет будет проводиться проверка какая кнопка нажата и выполняться то или иное действие
// чтобы не переписывать перебор элементов я взял их сверху
  
function modal(){
    let modal = this.dataset.modal;
    let modalBlock  =   document.querySelector(modal);
    if(this.className    ==  'modal-show'){                                         
        modalBlock.classList.remove('hide');                   
        modalBlock.parentElement.classList.remove('hide');     
        document.onkeydown = function(event)  {                                   
            if(event.keyCode == 27) {
                document.querySelectorAll('.modal-main').forEach(function(element){   
                    element.classList.add('hide');                                    
                    element.children[0].classList.add('hide');                        
                    document.onkeydown = null;                                        
                })
            };
        };
    }   else if (this.className  ==  'modal-close'){
        modalBlock.parentElement.classList.add('hide');        
        modalBlock.classList.add('hide');
    
        document.onkeydown = null;
    }
}