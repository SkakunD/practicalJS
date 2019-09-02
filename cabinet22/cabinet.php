<?php
    //var_dump($_COOKIE);
    if ( !isset($_COOKIE['email']) OR trim($_COOKIE['email']) ==''){
        header("Location: index.html");
        exit; 
    }
?>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>User cabinet</title>
    <!--Import Google Icon Font-->
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
    <!--Import materialize.css-->
    <link type="text/css" rel="stylesheet" href="css/materialize.min.css"  media="screen,projection"/>
    <!--Let browser know website is optimized for mobile-->
    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
    <link rel="shortcut icon" href="usercabinet.png" type="image/png">
    <link rel="stylesheet" href="css/style.css">
    <link rel="stylesheet" href="css/chips.css">
</head>

<body>
    <div class="container">
        <div class="row">
            <div class="col s12 center-align">
                <h1 class="user-cabinet-header">User cabinet</h1>
            </div>
            <div class="col s12 center-align">
                <button id="logout" class="waves-effect waves-light btn deep-purple darken-4"><i class="material-icons right">subdirectory_arrow_left</i>Logout</button>
            </div>
        </div>
        <div class="row">
            <div class="col s12">
                <form>
                    <div class="row">
                        <div class="input-field col s6">
                            <input id="signup-name" type="text" class="validate signup-name">
                            <label class="active" for="signup-name">First Name</label>
                        </div>
                        <div class="input-field col s6">
                            <input id="signup-pass" type="text" class="validate signup-pass">
                            <label class="active" for="signup-pass">Password</label>
                        </div>
                        <div class="input-field col s12">
                            <input id="signup-birthday" type="text" class="validate signup-birthday datepicker">
                            <label class="active" for="signup-birthday">Birthday</label>
                        </div>
                        <div class="col s12">
                            <p>
                                <label>
                                    <input name="sex" type="radio" class="signup-sex with-gap" value="male"/>
                                    <span>Male</span>
                                </label>
                            </p>
                            <p>
                                <label>
                                    <input name="sex" type="radio" class="signup-sex with-gap" value="female"/>
                                    <span>Female</span>
                                </label>
                            </p>
                            <p>
                                <label>
                                    <input name="sex" type="radio" class="signup-sex with-gap" value="other"/>
                                    <span>Other</span>
                                </label>
                            </p>
                        </div>
                    </div>
                    <div class="col s12 right-align">
                        <button id="logout" class="waves-effect waves-light btn update-submit deep-purple darken-4"><i class="material-icons right">refresh</i>update</button>
                    </div>
                </form>
            </div>
           
        </div>
    </div>
    
    
    
   
    <script src="script/logout.js"></script>
    <script src="script/ajax.js"></script>
    <script src="script/get_user_data.js"></script>
    <script src="js/materialize.min.js"></script>
    <script src="script/chips.js"></script>
    
</body>

</html>