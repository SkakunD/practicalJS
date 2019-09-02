document.addEventListener('DOMContentLoaded', function() {
    let elems = document.querySelectorAll('.datepicker');
    let instances = M.Datepicker.init(elems, {'format': 'yyyy-mm-dd'});
});

document.querySelectorAll('.modal-show').forEach(function(element){ 
    element.onclick =   showModal;
});


function showModal() {
    let modalId = this.dataset.modal;
    document.querySelector(modalId).classList.remove('hide');
    document.onkeydown = function (event) {
        //закрываем окно на кнопку Esc
        if (event.keyCode == 27) closeModal();
    }
}

document.querySelectorAll('.modal-wrap').forEach(function (element) {
    //закрываем окно на клике в области серой
    element.onclick = closeModal;
});

document.querySelectorAll('.modal-project-close').forEach(function (element) {
    //закрываем окно на кнопке закрыть
    element.onclick = closeModal;
});

function closeModal() {
    document.querySelectorAll('.modal-wrap').forEach(function (element) {
        element.classList.add('hide');
    });
    document.onkeydown = null;
}

document.querySelector('#log-in .modal-project').onclick = function(event) {
    event.stopPropagation();
}

document.querySelector('#sign-in .modal-project').onclick = function(event) {
    event.stopPropagation();
}

document.querySelector('.read-rules').onclick    =   function(){
    document.querySelector('.block-slider-content').style.marginLeft    =   '-350px';
};

document.querySelectorAll('.read-rules-back').forEach(function(element){
    element.onclick = backChange;
}
);

 function backChange (){
    document.querySelector('.block-slider-content').style.marginLeft    =   '0px';
};

document.querySelector('.accept-rules').onchange = function()   {
    let signupDisable = document.querySelector('.signup-submit');
    if(this.checked) {
        signupDisable.classList.remove('disabled')
    } else  {
        signupDisable.classList.add('disabled')
    }
}