$(document).ready(()=>{
    var previous =0;
$(".optionss:nth-child(1)").click(()=>{
   
    
    $.ajax({
        type:'get',
        url: '/third',
        data: '',
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
             
           
            if(previous ==0)
            {

                for(let i =0;i<stdem1.length; i++)
                {
                    // console.log(  stdem1[i]);
                   
         
             $(".divide").append(`<div class="containerss"><div class="tick"><div class="tk"></div></div><div class="add"><div class="titlessss">${stdem1[i]} </div></div>`);
                  
        
        
                }

                previous = stdem1.length;
            }
            else if(previous != stdem1.length)
            {



                console.log("I will do somthing here");

            }else{
                console.log("else part ma aa gaya");
            }


             
           
     
         
       
     
            }
             
          

        }
    });
})



});