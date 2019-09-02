function followFunc()   {
    if  (document.querySelector('.ex-1-btn'))   {
            document.querySelector('.ex-1-btn').onclick = function(e)    {
                e.preventDefault();
                let numberArray = document.querySelectorAll('.ex-1');
                ajax('unit1.php', 'POST', showNum, numArr(numberArray));
            };
    }   else if (document.querySelector('.ex-2-btn'))   {
            document.querySelector('.ex-2-btn').onclick = function(e)    {
                e.preventDefault();
                let numberArray = document.querySelectorAll('.ex-2');
                ajax('unit2.php', 'POST', showNum, numArrSecond(numberArray));
            };
        }
        else if (document.querySelector('.ex-3-btn'))   {
            document.querySelector('.ex-3-btn').onclick = function(e)    {
                e.preventDefault();
                let textArray = document.querySelector('textarea');
                ajax('unit3.php', 'POST', showText, textArr(textArray));
            };
        }
        else if (document.querySelector('.ex-4-btn'))   {
            document.querySelector('.ex-4-btn').onclick = function(e)    {
                e.preventDefault();
                let urlArray = document.querySelector('.ex-4');
                ajax('unit4.php', 'POST', showUrl, urlArr(urlArray));
            };
        }
}
followFunc();

//-------------Code Unit 1-------------------

function numArr (dataArray) {
    let outResult = '';
    if(+dataArray[0].value <   +dataArray[1].value){
        for (let i  =   0;  i   <   dataArray.length;   i++) {
            let tempNumber = Math.round(dataArray[i].value);
            outResult   +=  `${dataArray[i].name}=${tempNumber}&`;
        }
        console.log(outResult);
        return outResult;
    } else  return false;
    
}



//------------Code Unit 2--------------


function numArrSecond (dataArray) {
    let outResult = '';
        for (let i  =   0;  i   <   dataArray.length;   i++) {
            let tempNumber = Math.round(dataArray[i].value);
            outResult   +=  `${dataArray[i].name}=${tempNumber}&`;
        }
    console.log(outResult);
    return outResult;
}

function showNum(numData){
    console.log(numData);
}


//-------------Code Unit 3---------------------
function textArr (textArray) {
    let tempText = textArray.value.split(' ')
    for (let i = 0; i   <   tempText.length;   i++ ){
        for (let j = 0; j < tempText[i].length;    j++){
            if (tempText[i].charCodeAt(j) > 64 && tempText[i].charCodeAt(j) < 91 || tempText[i].charCodeAt(j) > 96 && tempText[i].charCodeAt(j) < 123 ) {
                continue;
            } else {
                alert(`Error in the word - "${tempText[i]}" in the symbol - "${tempText[i][j]}"`);
                return false;
            }
        }
    }
    let outResult =  `${textArray.name}=${textArray.value}&`
    console.log(outResult);
    return outResult;
}


function showText(data){
    console.log(data);
}

//---------------Code Unit 4------------------------

function urlArr (urlArray) {
    let outResult =  `${urlArray.name}=${urlArray.value}&`
    console.log(outResult);
    return outResult;
}


function showUrl(data){
    console.log(data);
}