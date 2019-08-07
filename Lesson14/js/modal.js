document.querySelectorAll('.modal-show').forEach(function(element){               
    element.onclick =   showModal;
});
  
document.querySelectorAll('.modal-close').forEach(function(element){              
    element.onclick =   closeModal;
});


document.querySelectorAll('.modal-main').forEach(function(element)  {             
    element.onclick =   closeModalMain;
});

function showModal(){                                                             
        let modal = this.dataset.modal;                                           
        document.querySelector(modal).classList.remove('hide');                   
        document.onkeydown = function(event)  {                                   
        if(event.keyCode == 27) {
            document.querySelectorAll('.modal-main').forEach(function(element){   
                element.classList.add('hide');                                    
                document.onkeydown = null;                                        
            })
        };
    };
};
  
function closeModal(){                                                            
        let modal = this.dataset.modal;                                           
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
  
