document.querySelector('.signup-submit').onclick = function(event)  {
    event.preventDefault();
    let name = document.querySelector('.signup-name').value;
    let pass = document.querySelector('.signup-pass').value;
    let email = document.querySelector('.signup-email').value;
    let birthday = document.querySelector('.signup-birthday').value;
    let sex = document.querySelectorAll('.signup-sex');
    for(let i = 0; i < sex.length; i++) {
        if(sex[i].checked)  {
            sex =   sex[i].value;
            break;
        }
    };
    let sendArray = {
        'name'  :   name,
        'pass'  :   pass,
        'email' :   email,
        'birthday'  :   birthday,
        'sex'   :   sex,
    };

    ajax('core/signup.php', 'POST', showSend, sendArray);

    function showSend (result)  {
        console.log(result);
        if (result  ==  1)  {
            alert('Congritulation!!! You are registration!!!');
        } else if (result   ==  2)  {
            alert('Error in input your data!!!');
        }   else    {
            alert('Other error!!!')
        }
    }
}