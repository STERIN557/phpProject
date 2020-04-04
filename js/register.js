$(document).ready(()=>{
    $("#form-data").submit((e)=>{
        var route = $('#form-data').data('route');
        var form_data = $("#form-data");
        $(".message4").css("display","none");
        $(".message1").css("display","none");
        $(".message2").css("display","none");
        $(".message3").css("display","none");
        $(".message5").css("display","none");
        $(".someMessage").css("display","none");
       $.ajax({
           type:'POST',
           url: route,
           data: form_data.serialize(),
           success: function(Response)
           {
               console.log(Response);
               if(Response==1)
               {
                  
                   $(".message4").css("display","block");
                   $(".message5").css("display","block");
               }
               else if(Response==2)
               {
                   alert("Passwords should be more than 8 charcacters");

               }else if(Response==3)
               {
                
                  $(".message1").css("display","block");
               }
               else if(Response==4)
               { $(".message2").css("display","block");
               }
               else if(Response==5)
               { 

                $(".message3").css("display","block");
               }
               else{
                   
                   $(".box1").css("display","none");
                   $(".someMessage").css("display","block");
                   $(".someMessage .mes").prepend(`Your Username is :<br><br> ${Response} <br><br> Please Remember your username and password <br> click here to <span style='color:white;'><a href="{{route('/')}}">login</a></span>`);
                   
                }
           },
       });
        e.preventDefault();

    })
});