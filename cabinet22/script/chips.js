function chips (message, color, timeremove = 2000)  {
    let tempChips = document.querySelector('.chips');
    if  (!tempChips)    {    
        let chipses = document.createElement('div');
        chipses.classList.add('chips');
        chipses.innerHTML = message;
        chipsField(chipses);
        colorChips(chipses, color);
        setTimeout(function(){ deleteChips(chipses)},timeremove);
    }
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
}

function colorChips (chips, colorCh)  {
    let colorChips = colorCh;
    if(colorChips == 'red'){
        chips.style.backgroundColor = 'red';
    } else if   (colorChips == 'green')    {
        chips.style.backgroundColor = 'green';
    } else if   (colorChips == 'blue')     {
        chips.style.backgroundColor = 'blue';
    }    
}


