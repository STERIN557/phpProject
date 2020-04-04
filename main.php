<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Result</title>
    <link rel="icon"  type="image/x-icon" href="./images/checklist.png">
    <link rel="stylesheet" href="./css/result.css">

    <script type="text/javascript" src="./js/jquery.js"></script>
</head>
<body>


<div class="thing">

<!-- <div class="statuss">
   <div class="note">
     
   </div>

</div> -->

</div>

<div class="bigprofile">


   <div class="cross">
     <img src="./images/close.png" alt="cross">
   </div>
<img  src="./images/person2.jpg" alt="profileImage">

</div>
<div class="box1">
  

<div class="profile">
  <div class="buttonforupload">
     
  <img id="orfile" class="smallOne" src="./images/person2.jpg" alt="profileImage">
</div>


<div>


  <form id="fomrss"  data-route="/upload"  method="POST" >
  
  <input type="text" value={{$info}} name="username">
  <input type="file" id="photos" accept="image/x-png,image/gif,image/jpeg" name="ptt" >

  <input type="submit" id="su" value="submit">
  </form>
</div>


  </div>
<div class="shade">
Upload
</div>
<div class="inform">
{{$info}}
</div>
<div class="info11">
  Full name : {{$firstname}} {{$lastname}} <br>
  Email : {{$email}}
</div>
<div class="update">

  <input type="button" value="Update" >
</div>
<div class="changit" >
  <div class="txt">
  Log Out
  </div>
</div>


<!-- <div class="change">
  <form action="">
    <input type="file" value="Change Background">
  </form>
</div> -->
</div>
<div class="box">
<div class="b1">
</div>
<dix class="b2">
</dix>
<div class="b3">
</div>
</div>

<div class="calculator">
  <div class="image">
    <input type="text" name="valuess" id="values">
  </div>
  <div class="keyss">

  <div class="number" id="1ONE">1</div>
  <div class="number" id="2TWO">2</div>
  <div class="number" id="3THREE">3</div>
  <div class="number" id="4FOUR">4</div>
  <div class="number" id="5FIVE">5</div>
  <div class="number" id="6SIX">6</div>
  <div class="number" id="7SEVEN">7</div>
  <div class="number" id="8EIGHT">8</div>
  <div class="number" id="9NINE">9</div>
  <div class="number" id="1OTEN">0</div>
  <div class="number" id="plus">+</div>
  <div class="number" id="minus">-</div>
  <div class="number" id="mult">/</div>
  <div class="number" id="divide">*</div>
  <div class="cancel" >C</div>
  <div class="AC" >%</div>
  <div class="Equals" >=</div>
  </div>

</div>





<div class="box222">


<!-- sfhdsjfhjkdshjfhdshfkhsdkjhfkhsdkjfhjsdhfjksdhf -->
<!-- dfbsdfkdsjkfgksgufjfsdjfbjdshfjhsdjfhdsjfhjsd -->
<!-- fhjsdhfjhsdjfhdshjfdshfjhsdjkfhjdshjfhdsjhfs -->

 
<div class="inbox">



<div class="heading1">
  Inbox

  <div class="optionsplus">+</div>
</div>


   <div class="divide">
   

   </div>

   <div class="divide1">

   
   </div>


   <div class="outercomment">
     <form data-route="{{route('AddingComments')}}" method="POST" id="commentswala">

    
<!-- jbfdkldfgkldfklgdklgldf -->

<textarea name="outercomment" id="outerstuff" cols="30" rows="10"></textarea>
<input type="text" value={{$info}} id="idiot" name="useridd">
<input type="submit" value="Add" id="ss">

<!-- njsdfjsdajkafkjs -->

     
     </form>

     </div>
  
   </div>

   <div class="FirstPageOne">
      
      <img src="./images/g1.png" alt="logoforweb2">

      </div>
</div>

<!-- fsdbfjhfjhsdjfhjsdhfjhslfhlwheflwqdhflhwdlfh -->
<!-- fnsjdfjkdhjfhjhfjfhkdsghkfdhkfkhwegfgwejfkwjkfjkwfwd -->



<div class="box333">
  <div class="imageforlogo">
    <img src="./images/logoforweb.png" alt="">
  </div>
  <div class="kil">
  <div class="optionss">
    Inbox
  </div>
  <div class="optionss">
    Your Productivity
  </div>
  </div>
  <div class="tasks">

</div>

<div class="updates">
<div class="cancelling">
  cancel
</div>
<div class="updateOption">
  <div class="earlyInfo">
      <div class="titl">OLD</div>

      <div class="somethingInfo">
         
      <div id="o1">    <label for="firstname">Firstname</label> : {{$firstname}} <br></div>
     <div id=o2>     <label for="lastname">lastname</label> : {{$lastname}} <br></div>
       <div id=o3>   <label for="Username">Username</label> : {{$username}} <br></div>
   <div id="o4">    <label for="Password">Password</label>: {{$pass}} <br></div>


      </div>

  </div>
  <div class="titl2">
    NEW
  </div>
<form id="form-datas" method="POST" data-route="{{route('UP')}}" enctype="multipart/form-data">
  {{csrf_field()}}
  <input id="one"  type="text" name="firstname" placeholder="New firstname">
  <input id="two" type="text" name="lastname" placeholder="New lastname">
  <input id="four" type="text" name="username" placeholder="New Username">
  <input id="three" type="text" name="password" placeholder="New Password">
  <input type="hidden" value={{$info}} name="realUser">
 
  <input id="five" type="submit" value="Update">
</form>
</div>
</div>


<script type="text/javascript" src="./js/main.js"></script>
<script type="text/javascript" src="./js/update.js"></script>
<script type="text/javascript" src="./js/thirdClick.js"></script>
</body>
</html>