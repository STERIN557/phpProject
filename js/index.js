$(document).ready(()=>{

    $("#form-data").submit((e)=>{


        form_data = $("#form-data");
          
       $.ajax({
           type:'POST',
           url: 'ind1.php',
           data:form_data.serialize(), 
           success: function(Response)
           {


          if(Response==0)
          {

                    console.log("non existing");
                $(".alertingsystem").css("display","block");

          }
          else if(Response==00)
          {
            $(".someextra").css("display","block");
            
          }
          else if(Response)
          {


              window.location.replace(`/phptodolist/main.php?${Response}`);
          }
       
           
      
       
           },
        
       });
       e.preventDefault();

    });



    
});




            //     $(".alertingsystem").css("display","none");
            //      console.log("Exist");
         
            //     
   
            //      {
            //         $(".someextra").css("display","block");
            //          coutn=0;
                   
            //      }
         
            //     console.log("non existing");
            //     $(".alertingsystem").css("display","block");
  
            //  }