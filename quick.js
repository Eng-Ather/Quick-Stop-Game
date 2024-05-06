
// var user_number = document.getElementById("user_number")
// console.log( user_number.value);
var number = document.getElementById("number")
var result = document.getElementById("result")
// var number = document.getElementById("number").value
var user_number = document.getElementById("user_number")
var start_btn= document.getElementById("Button")
console.log(user_number.value);
addition = 0;
var interval

function start(){


    if (user_number.value) {

        if (user_number.value < 1000) 
            {
                interval =  setInterval( function()
                        {
                            if(addition < 1000){
                                addition++,
                              number. innerText  = addition}
   
                           else if (addition >= 1000){
                                 result.innerText = "You are late";
                                 start_btn.disabled = false;
                                clearInterval(interval);
                                alert ("you are late ")}
        
                      
                    
                }, 5)}
            else{ alert ("Insert Number less then 1000") }
         }

            else { 
            console.log("nahe chla");
            alert ("Insert Number First") }

} // end of strat button function


     function stop(){

        clearInterval(interval);
        if (user_number.value == addition){ result.innerText = " ypu win"}
        else{ result.innerText = "you lose"}
        start_btn.disabled = true;


     }

     