<!DOCTYPE html>
<html lang="en" >
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="./css/index.css">
    <script type="text/javascript" src="./js/jquery.js"></script>
  
</head>
<body>


<div class="alertingsystem" style="padding-left:3rem;">
  Credentials Cannot be Empty <br>
  
</div>

<div class="someextra">
    please check your username and password
  </div>

<div class="box">
 <div class="logo">
     <img src="./images/logoforweb.png" alt="logo">
 </div>
 
<div class="sub">
<div id="messages">

</div>
<form id="form-data" method="POST"  enctype="multipart/form-data"> 


<input type="text" name="username"  placeholder="User name">
 <input type="password" name="password" placeholder="Password">
<input type="submit" value="Submit"> 

</form>


<div class="message" >
<a href="./reg.php" >
    don't have account! create here
    </a>
</div>
</div>



</div>



<script type="text/javascript" src="./js/index.js"></script>
 


</body>
</html>