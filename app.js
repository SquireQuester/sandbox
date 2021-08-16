alert("Hello"); //Testing if Javascript is functioning

var btn = document.querySelector("button"); //Setting a Query Selector for the Button
var counter = 1;

btn.addEventListener("click", function(){
    if(counter === 5){
        alert("Maximum 5 clicks are reached! Will reset the counter back to 0");
        counter = 0
    }
    else{alert(counter);
        counter += 1;}
    
});


