$(document).ready(()=>{
  
  var pervious=0;
  var pres = 0;

    $("#form-datas").submit((e)=>{
        var route = $('#form-datas').data('route');
        var form_data = $("#form-datas");
        console.log(route);
     
        //   var s = form_data.serialize()+ "&useR=someh";
        
       $.ajax({
           type:'POST',
           url: route,
           data: form_data.serialize(),
           success: function(Response)
           {
               console.log(Response)

               
              if(Response=="uNot")
            
              {
                 
                $(".thing").addClass("statuss");
                $(".statuss").addClass("note");
                  $(".statuss").css("display","block");
                
                $(".note").text("username cannot be empty");
                
                setTimeout(doit,2000);

              }
              else if(Response=="lNot")
              {
                $(".thing").addClass("statuss");
                $(".statuss").addClass("note");
             $(".statuss").css("display","block");
                
                $(".note").text("lastname cannot be empty");
                
                setTimeout(doit,2000);

              }
              else if(Response=="fNot")
              {
                $(".thing").addClass("statuss");
                $(".statuss").addClass("note");
             $(".statuss").css("display","block");
                
                $(".note").text("firstname cannot be empty");
                
                setTimeout(doit,2000);

              }
              else if(Response=="pNot")
              {
                $(".thing").addClass("statuss");
                $(".statuss").addClass("note");
             $(".statuss").css("display","block");
                
                $(".note").text("password cannot be empty");
                
                setTimeout(doit,2000);
              }
              else{
                $(".thing").addClass("statuss");
                $(".statuss").addClass("note");
             $(".statuss").css("display","block");
                $(".note").css("color","green");
                $(".note").text("Successfully Updated");
                
                setTimeout(doit,3000);

                window.location.replace("/");
              }
           
           },
       });


       function doit()
       {
           $(".note").css("display","none");
           $(".statuss").css("display","none");
       }
        e.preventDefault();

    });


    $(".cancelling").click(()=>{
        $(".updates").css("display","none")
    })

    $(".changit").click(()=>{
        window.location.replace("/");
    })
   
    $(".shade").click(()=>{
      $("#photos").trigger("click");
    })
    
    document.getElementById("photos").addEventListener("change",()=>{

  
       var sopd = $("#photos");
        // console.log(sopd);
        // var srrc = $("#orfile").attr("src");
        // alert(srrc);
        // $("#orfile").attr("src",sopd);
          takeCareoformData();
          
    })
   
    $(".smallOne").click(()=>{
    
        $(".bigprofile img").css("display","block");
     
       
    });

    $(".cross img").click(()=>{
      $(".bigprofile img").css("display","none");
    })



    function takeCareoformData()
    {

      $("#su").trigger("click");
    
  
     
   
        

    }

    $("#fomrss").submit((ef)=>{
 
      var fData = $("#fomrss").data();

     

        console.log(fData);
     
    

      
      ef.preventDefault();
  
  
    });



  var Global1=0;
  var Global2=0;


  document.getElementById("1ONE").addEventListener("click",()=>{
      $("input[type='text'] ")
       
  });

  document.getElementById("2TWO").addEventListener("click",()=>{

  });
  document.getElementById("3THREE").addEventListener("click",()=>{

  });
  document.getElementById("4FOUR").addEventListener("click",()=>{

  });
  document.getElementById("5FIVE").addEventListener("click",()=>{

  });
  document.getElementById("6SIX").addEventListener("click",()=>{

  });
  document.getElementById("7SEVEN").addEventListener("click",()=>{

  });
  document.getElementById("8EIGHT").addEventListener("click",()=>{

  });
  document.getElementById("9NINE").addEventListener("click",()=>{
  
  });
  document.getElementById("1OTEN").addEventListener("click",()=>{

  })

  document.getElementById("plus").addEventListener("click",()=>{

  });
  document.getElementById("minus").addEventListener("click",()=>{

  });
  document.getElementById("mult").addEventListener("click",()=>{

  });
  document.getElementById("divide").addEventListener("click",()=>{

  });


  
  $("#commentswala").submit((e)=>{
    var route = $('#commentswala').data('route');
    var form_data = $("#commentswala");
    console.log(route);

     
    $.ajax({
      type:'POST',
      url: route,
      data: form_data.serialize(),
      success: function(Response)
      {
      
        var store =  Response;
        
       if(Response==0)
       {
        console.log("Comments cannot be empty");


       }
       
       else{

      
    
        var stdem = store.split(",");
        var stdem1 = JSON.parse(stdem);
        
        
     
        


        
        $(".divide").hide();

        
         if(pervious==0)
         {
          for(let i =0;i<stdem1.length; i++)
          {
              // console.log(  stdem1[i]);
             
   
         $(".divide1").append(`<div class="containerss"><div class="tick"><div class="tk"></div></div><div class="add"><div class="titlessss">${stdem1[i]} </div></div>`);
              
        
            
  
          }
          pervious = stdem1.length;

         }
         else{
    
            var z = pervious;
             
          for( i=z;i<stdem1.length; i++)
          {
              // console.log(  stdem1[i]);
             
   
         $(".divide1").append(`<div class="containerss"><div class="tick"><div class="tk"></div></div><div class="add"><div class="titlessss">${stdem1[i]} </div></div>`);
              
        
            
  
          }
          pervious = stdem1.length

         }


      
        
    
  

       }
        
     
        
     
 
      }
  

    });

    e.preventDefault();

  
  });
 







});




