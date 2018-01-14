var outer = document.getElementById("buttons");


outer.addEventListener("click", toScreen);

function toScreen(evt) {

    var realDiv = evt.target;
    
    if(realDiv === buttons){        
        
    }else if(realDiv === calculate){
        
        var toCalc = document.getElementById("display").innerText;
                            
        if(toCalc.toString().indexOf("+") >= 1){
            
            document.getElementById("display").innerText = (parseInt(toCalc.toString().split("+")[0]) + parseInt(toCalc.toString().split("+")[1]));
            
        }else if(toCalc.toString().indexOf("-") >= 1){
            
            document.getElementById("display").innerText = (parseInt(toCalc.toString().split("-")[0]) - parseInt(toCalc.toString().split("-")[1]));
            
        }else if(toCalc.toString().indexOf("*") >= 1){
            
            document.getElementById("display").innerText = (parseInt(toCalc.toString().split("")[0]) * parseInt(toCalc.toString().split("")[1]));
            
        }else if(toCalc.toString().indexOf("/") >= 1){
            
            document.getElementById("display").innerText = (parseInt(toCalc.toString().split("/")[0]) / parseInt(toCalc.toString().split("/")[1]));
            
        }
        
        
    }else{
        
        document.getElementById("display").innerText += realDiv.id;
        
    }
    
    
}