let dataArray = document.querySelector('form');
document.querySelector('input[type="submit"]').onclick = function() {
    event.preventDefault();
    console.log(dataArray.elements.length);
    // for (let key in dataArray){
    //     console.log(`${key}=${dataArray[key].value}`);
    // }
    
}