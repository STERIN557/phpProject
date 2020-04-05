$(document).ready(()=>{
    $("#form-data").submit((e)=>{
       
        var form_data = $("#form-data");
    
       $.ajax({
           type:'POST',
           url: '/phptodolist/ind12.php',
           data: form_data.serialize(),
           success: function(Response)
           {
            //  console.log(Response);  

            if(Response==1)
            {
                $(".message1").css("display","block");

            }
            else if(Response==2)
            {
                $(".message2").css("display","block");

            }
            else if(Response==3)
            {
                $(".message3").css("display","block");
            }
            else if(Response==4)
            {
               $(".message4").css("display","block"); 
            }
            else if(Response==5)
            {
               $(".message5").css("display","block"); 
            }
            else if(Response==6)
            {
                alert("password do not match");
            }
            else if(Response==404){
                alert("Connection Problem");

            }else if(Response==7)
            {
                alert("password length needs to me more than 8");
            }
            else{

          $(".box1").css("display","none");
           $(".someMessage").css("display","block")
            $(".someMessage .mes").prepend(`Your Username is :<br><br> ${Response} <br><br> Please Remember your username and password <br> click here to <span style='color:white;'><a href="./index.php">login</a></span>`);
            }

           },
       });
        e.preventDefault();

    })
});


// $(".message4").css("display","none");
// $(".message1").css("display","none");
// $(".message2").css("display","none");
// $(".message3").css("display","none");
// $(".message5").css("display","none");
// $(".someMessage").css("display","none");

// console.log(Response);
//                if(Response==1)
//                {
                  
//                    $(".message4").css("display","block");
//                    $(".message5").css("display","block");
//                }
//                else if(Response==2)
//                {
//                    alert("Passwords should be more than 8 charcacters");

//                }else if(Response==3)
//                {
                
//                   $(".message1").css("display","block");
//                }
//                else if(Response==4)
//                { $(".message2").css("display","block");
//                }
//                else if(Response==5)
//                { 

//                 $(".message3").css("display","block");
//                }
//                else{
                   

                   
//                 }