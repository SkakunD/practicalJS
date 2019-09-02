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
            M.toast({html: 'Региcтрация прошла успешно!!! Теперь можете войти.'});
            closeModal();
        } else if (result   ==  2)  {
            M.toast({html: 'Заполните все поля!!!'});
        }   else    {
            M.toast({html: 'ERROR!!!'});
        }
    }
}

document.querySelector('.login-submit').onclick = function(event)  {
    event.preventDefault();
    let pass = document.querySelector('.login-pass').value;
    let email = document.querySelector('.login-email').value;
    
    let loginArray = {
        'pass'  :   pass,
        'email' :   email
    };

    ajax('core/login.php', 'POST', login, loginArray);

    function login (result)  {
        console.log(result);
        if (result  ==  2)  {
            M.toast({html: 'Вы не заполнили поля!!!'});
        } else if (result   ==  0)  {
            M.toast({html: 'Пользователь не найден!!!'});
        }   else    {
            result = JSON.parse(result);
            var d = new Date();
            d.setTime(d.getTime() + (10*60*1000));
            var expires = d.toUTCString();
            document.cookie = `email=${result.email}; expires = ${expires}; path/`;
            location.href = "cabinet.php";
        }
    }
}