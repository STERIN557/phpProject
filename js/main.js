


$(document).ready(()=>{
  // $(".inbox:nth-child(2)").css("display","block");
  // $(".optionss:nth-child(1)").css("background-color","rgba(0, 0, 0, 0.185)");
  $(".FirstPageOne img").css("display","block");


  $(".optionss:nth-child(1)").click(()=>{
    $(".FirstPageOne img").css("display","none");
      $(".inbox:nth-child(1)").css("display","block");
      $(".inbox:nth-child(2)").css("display","none");

      $(".optionss:nth-child(1)").css("background-color","rgba(0, 0, 0, 0.185)");
      $(".optionss:nth-child(2)").css("background-color","rgba(240, 255, 240, 0)");


  });
  



  $(".optionss:nth-child(2)").click(()=>{
  

    
 
  
    $(".optionss:nth-child(2)").css("background-color","rgba(0, 0, 0, 0.185)");

    $(".optionss:nth-child(1)").css("background-color","rgba(240, 255, 240, 0)");
  
  
});

var sCount=0;
$(".box").click(()=>{
    if(sCount==0)
    {
   $(".box1").css("left","-17rem");
   $(".box").css("left","0rem");
   $(".calculator").css("left","2rem");
   sCount=1;
    }
    else if(sCount==1)
    {
        $(".box1").css("left","0rem");
        $(".box").css("left","13.5rem");
        $(".calculator").css("left","-17rem");
    sCount=0;
    }

});

var upCHECK=0;
$(".update").click(()=>{
  if(upCHECK==0)
  {
    $(".updates").css("display","block");
    upCHECK=1;
  }
  else if(upCHECK==1)
  {
    $(".updates").css("display","none");
    upCHECK=0;
  }

   
});







$(".titlessss").click(()=>{

    $(".inputsforupdatingtodo").css("display","block");
    $(".date").css("display","block");
    $(".addtask").css("display","block");
    $(".cancelbutton").css("display","block");

});

$(".cancelbutton").click(()=>{
  $(".inputsforupdatingtodo").css("display","none");
  $(".date").css("display","none");
  $(".addtask").css("display","none");
  $(".cancelbutton").css("display","none");
});

var stop=0;
$(".optionsplus").click(()=>{

 if(stop==0)
 {
  $(".outercomment").css("display","block");
  $(".optionsplus").css("color","dodgerblue");
  $(".optionsplus").css("background-color","rgba(255, 255, 255, 0.24)");
  stop=1;
 }else if(stop==1)
 {
  $(".outercomment").css("display","none");
  $(".optionsplus").css("color","white");
  stop=0;
 }

});
});
