let j   =   1; 

function hiddenBlock (j){
let tabBlock    =   document.querySelectorAll('.tab-content-data');

for(var i   =   j;  i   <   tabBlock.length;    i++){
    tabBlock[i].style.display   =   'none';
};
};

hiddenBlock(j);

let tabLi   =   document.querySelectorAll('.tab-ul-li');
tabLi.forEach(function(element) {
    element.onclick = showTab;
});

function showBorder(){
let swap = document.querySelectorAll('.tab-ul-li');
    swap.forEach(function(element)    {
    element.style.borderBottomColor = 'rgb(147, 112, 212)'
    // element.style.borderBottomColor = 'rgb(147, 112, 212)';
    // element.style.borderBottomWStyle = 'solid';
});
};
// showBorder();
function showTab(j){
    let dataNum = this.getAttribute('data');
    j   =   0;

    hiddenBlock(j);
    showBorder();
    
    document.querySelector(`.tab-content-data[data="${dataNum}"]`).style.display  =   'block';
    document.querySelector(`.tab-ul-li[data="${dataNum}"]`).style.borderBottomColor = 'rgba(147, 112,  212,  0.1)';

};

