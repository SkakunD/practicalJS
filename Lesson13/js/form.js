document.querySelector('input[type="submit"]').onclick = function(e){
    let formSend = document.querySelector('form');
    e.preventDefault();
    console.log(serialize(formSend));
};