<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Register</title>
    <link rel="stylesheet" href="./css/regist.css">
    <script type="text/javascript" src="./js/jquery.js"></script>
</head>
<body>

<div class="box1">

<div class="logo">
<img src="./images/logoforweb.png" alt="logo">
</div>

<div class="forms">

<form id="form-data" action="ind12.php"  method="POST">

<div class="message1">First Name cannot be empty </div>
<div class="message2">Last Name cannot be empty </div>
<div class="message3">Email cannot be empty </div>
<div class="message4">password cannot be empty </div>
<div class="message5">Confirm password cannot be empty </div>
<input type="text" name="firstname" placeholder="Firstname">
<input type="text" name="lastname" placeholder="Lastname">
<input type="text" name="email" placeholder="Email">
<input type="password" name="pass" placeholder="Password">
<input type="password" name="Confpass" placeholder="Confirm Password">
<input type="submit" value="Submit">
</form>

</div>



</div>
<div class="someMessage">

<div class="mes">

</div>
</div>
<script type="text/javascript" src="./js/register.js"></script>
</body>
</html>