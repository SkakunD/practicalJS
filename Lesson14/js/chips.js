function chips (message, timeremove = 3000)  {
    let chipses = document.createElement('div');
    chipses.classList.add('chips');
    chipses.innerHTML = message;
    chipsField(chipses);
    colorChips(chipses);
    setTimeout(function(){ deleteChips(chipses)},timeremove);
};

function deleteChips(chips) {
    chips.remove();
    let all = document.querySelectorAll('.chipsField .chips');
    if(all.length == 0) document.querySelector('.chipsField').remove();
}

function chipsField (chips){
    let chipsField = document.querySelector('.chipsField');
    if  (chipsField){
        chipsField.appendChild(chips);
    }   else    {
        let chipsField = document.createElement('div');
        chipsField.classList.add('chipsField');
        document.querySelector('body').appendChild(chipsField);
        chipsField.appendChild(chips);
    }
    // colorChips(chips);
}

function colorChips (chips)  {
    let colorChips = document.querySelectorAll('.radio input');
    for(let i   =   0;  i   <=  colorChips.length   -   1;  i++){
        if(colorChips[i].checked){
            if(colorChips[i].value == 'red'){
                chips.style.backgroundColor = 'red';
            } else if   (colorChips[i].value == 'green')    {
                chips.style.backgroundColor = 'green';
            } else if   (colorChips[i].value == 'blue')     {
                chips.style.backgroundColor = 'blue';
            }
        }   
    }
}


document.querySelector('.btn-chips').onclick = function ()  {
    chips('hello');
}


