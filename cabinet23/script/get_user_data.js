document.addEventListener('DOMContentLoaded', function() {
    let elems = document.querySelectorAll('.datepicker');
    let instances = M.Datepicker.init(elems, {'format': 'yyyy-mm-dd'});
});

let userEmail = getCookie('email');
// console.log(userEmail);
ajax('core/get_user_data.php', 'POST', getUser, {'email' : userEmail})

document.querySelector('.update-submit').onclick    =   function(event) {
    event.preventDefault();
    let name = document.querySelector('.signup-name').value;
    let pass = document.querySelector('.signup-pass').value ;
    let birthday = document.querySelector('.signup-birthday').value;
    let sex = document.querySelectorAll('.signup-sex');
    for(let i = 0; i < sex.length; i++) {
        if(sex[i].checked)  {
            sex =   sex[i].value;
            break;
        }
    };
    let updateUser = {
        'email' : userEmail,
        'name'  :   name,
        'pass'  : pass,
        'birthday'  :   birthday,
        'sex'   :   sex
    };

    ajax('core/update_user_data.php', 'POST', updateUserData, updateUser);
}

function getCookie(cname) {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for(let i = 0; i <ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
}

function getUser (result)   {
    result = JSON.parse(result);
    document.querySelector('.signup-name').value    =   result.name;
    document.querySelector('.signup-pass').value    =   result.password;
    document.querySelector('.signup-birthday').value    =   result.birthday;
    let sex = document.querySelectorAll('.signup-sex');
    for(let i = 0; i < sex.length; i++) {
        if(sex[i].value == result.sex)  {
            sex[i].checked = true;
            break;
        }
    };
    M.updateTextFields();
}

function updateUserData (updataData)    {
    if (updataData == 1)    {
        M.toast({html: 'Данные успешно обновлены!'});
    } else {
        M.toast({html: 'Ошибка обновления данных!!!'});
    }
}