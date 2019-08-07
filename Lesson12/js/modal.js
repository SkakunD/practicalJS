document.querySelectorAll('.modal-show').forEach(function(element){               // перебираем и назначаем кнопке/ам выполнение функции showModal
    element.onclick =   showModal;
});
  
document.querySelectorAll('.modal-close').forEach(function(element){              // аналогично только функция closeModal
    element.onclick =   closeModal;
});


document.querySelectorAll('.modal-main').forEach(function(element)  {             //тут уже назначаем фукнцию closeModalMain по клику области
    element.onclick =   closeModalMain;
});

function showModal(){                                                             //фукнция удаляет класс и показывает блоки
        let modal = this.dataset.modal;                                           //получаем значение data-modal
        document.querySelector(modal).classList.remove('hide');                   //удаляем класс у блока с указанным id    //удаляем класс у родителя вышестоящего блока
        document.onkeydown = function(event)  {                                   //помещаем сюда функцию отрабатывающую по Esc
        if(event.keyCode == 27) {
            document.querySelectorAll('.modal-main').forEach(function(element){   //снова перебираем элементы 
                element.classList.add('hide');                                    //и уже элементам вешаем удаление класса        // с ребенком аналогично
                document.onkeydown = null;                                        //обнуляем Esc что не срабатывал после
            })
        };
    };
};
  
function closeModal(){                                                            //функция закрытия окон
        let modal = this.dataset.modal;                                           //получаем id указанный в data-modal      //удаляем класс у родителя и у потомка
        document.querySelector(modal).classList.add('hide');
    
        document.onkeydown = null;
};
  
function closeModalMain(){
      this.classList.add('hide');
      
      document.onkeydown    =   null;
}; 

function close (){
    if(i    ==  0){
        console.log(456)
    }
    
}
  
