//-------------Первое задание----------------
document.querySelector("#color_btn").onclick = function () {
    let colorBackground = document.querySelector("#color").value;
    document.querySelector("body").style.background = colorBackground;
};

//-------------Второе задание-----------------
document.querySelector("#color_main_btn").onclick = function () {
    let colorMAinBackground = document.querySelector("#color_back").value;
    let colotText = document.querySelector("#color_text").value;
    document.querySelector("body").style.background = colorMAinBackground;
    document.querySelector("p").style.color = colotText;
};
document.querySelector("#reset_main_btn").onclick = function () {
    document.querySelector("body").style.background = "white";
    document.querySelector("p").style.color = "black";
};

//--------------Третье и четвертое задание----------------------
// document.querySelector('#range_text').onclick = function (){
//     let sizeText = document.querySelector('#range_input').value;
//     document.querySelector('p').style.fontSize = sizeText + 'px';
// };
document.querySelector("span").innerHTML = document.querySelector(
    "#range_input"
).value;
//добавил строку чтобы изначально было показано значение по дефолту
function rangeText() {
    let sizeText = document.querySelector("#range_input").value;
    document.querySelector("p").style.fontSize = sizeText + "px";
    document.querySelector("span").innerHTML = sizeText;
}

//--------------Пятое задание-----------------
document.querySelector(".red_color").innerHTML = document.querySelector(
    "#range_input_red"
).value;
document.querySelector(".green_color").innerHTML = document.querySelector(
    "#range_input_green"
).value;
document.querySelector(".blue_color").innerHTML = document.querySelector(
    "#range_input_blue"
).value;
document.querySelector(".block_color").style.backgroundColor =// перезалил задание вот из-за этой строки так как подумал что 
    "RGB(" +                                                  // лучше пусть блок сразу имеет какой-то цвет и плавно изменяется
    document.querySelector("#range_input_red").value +        // а то без нее он белый и резко меняет цвет потом. Прошу оценку не снижать
    "," +
    document.querySelector("#range_input_green").value +
    "," +
    document.querySelector("#range_input_blue").value +
    ")";
//добавил строки чтобы изначально было показано значение по дефолту
function rangeColorBlock() {
    let colorRed = document.querySelector("#range_input_red").value;
    let colorGreen = document.querySelector("#range_input_green").value;
    let colorBlue = document.querySelector("#range_input_blue").value;
    document.querySelector(".red_color").innerHTML = document.querySelector(
        "#range_input_red"
    ).value;
    document.querySelector(".green_color").innerHTML = document.querySelector(
        "#range_input_green"
    ).value;
    document.querySelector(".blue_color").innerHTML = document.querySelector(
        "#range_input_blue"
    ).value;
    document.querySelector(".block_color").style.backgroundColor =
        "RGB(" + colorRed + "," + colorGreen + "," + colorBlue + ")";
}
// код выглядит так вследствии применения функции форматирования документа средствами vs code - скажите пожалуйста 
//его применение верное или лучше так не делать?