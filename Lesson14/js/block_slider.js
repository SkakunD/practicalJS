document.querySelector('.btn-read-more').onclick    =   function(){
    document.querySelector('.block-slider-content').style.marginLeft    =   '-250px';
};

document.querySelectorAll('.btn-back').forEach(function(element){
    element.onclick = backChange;
}
);

 function backChange (){
    document.querySelector('.block-slider-content').style.marginLeft    =   '0px';
};


