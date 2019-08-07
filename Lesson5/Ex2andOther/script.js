//-------------Второе задание----------
document.querySelector('#word_inner').onclick = function() {
    document.querySelector('p').innerHTML += ' world';
};
//-----------Третье задание--------------
document.querySelector('#word_inner_afterbegin').onclick = function() {
    document.querySelector('.after_begin').insertAdjacentHTML('afterbegin', 'Здравстуйте по-английски это ');
};
//-------------Четвертое задание ----------------------
document.querySelector('#word_inner_beforebegin').onclick = function() {
    document.querySelector('.before_begin').insertAdjacentHTML('beforebegin', 'Этот текст стоит перед тегом р ');
};
//-------------Пятое задание ----------------------
document.querySelector('#word_inner_beforeend').onclick = function() {
    document.querySelector('.before_end').insertAdjacentHTML('beforeend', ' <i>это здравствуйте</i>');
};
//-------------Шестое задание ----------------------
document.querySelector('#inner_html').onclick = function() {
    document.querySelector('.inner_html').innerHTML= '<b>Hi</b>';
};
document.querySelector('#inner_text').onclick = function() {
    document.querySelector('.inner_html').innerText= '<b>Hi</b>';
};
//-------------Седьмое задание ----------------------
document.querySelector('#outer_html').onclick = function() {
    document.querySelector('.outer_html').outerHTML= '<b>Hi</b>';
};
document.querySelector('#outer_text').onclick = function() { // не создал для outer отдельного параграфа так как в этом случае
    document.querySelector('b').outerText= '<b>Hi</b>';      // вылавливаю его по тегу b
};
