$(document).ready(()=>{
    var coutn= 0;
    $("#form-data").submit((e)=>{
        var route = $('#form-data').data('route');
        var form_data = $("#form-data");
   
 
       $.ajax({
           type:'POST',
           url: route,
           data: form_data.serialize(),
           success: function(Response)
           {
               console.log(Response);
           
      
             if(Response!=0)
             {
                $(".alertingsystem").css("display","none");
                 console.log("Exist");
         
                 window.location.replace(`/Tlist/username=${Response[0]}/password=${Response[1]}`);
             }else if(Response==0){
                 coutn++;
                 console.log(coutn)
                 if(coutn==2)
                 {
                    $(".someextra").css("display","block");
                     coutn=0;
                   
                 }
         
                console.log("non existing");
                $(".alertingsystem").css("display","block");
  
             }
           },
       });
        e.preventDefault();

    });



    
});


