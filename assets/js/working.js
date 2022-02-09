let key="PRAGS";
let newurl="ff0665984c6f379b857436f60efab88d38cd34c24d53c93928b0f362a4c19463.html";
var counter=0;
var finalcheck=0;
var input=document.getElementById('input');
    input.addEventListener("keyup", function(event) {
        if (event.keyCode === 13) {
            event.preventDefault();
            checker();
            
        }
    });
function checker(){
    counter++;
    if(counter>10){
    var hint=document.getElementById('hint');
    hint.style.display="block";
    hint.style.transition="0.5s smooth";
    }
    var enteredkey = document.querySelector('input').value;
    for(var i=0;i<5;i++){
        var span=document.getElementById("l"+(i+1));
        var spana=document.getElementById("c"+(i+1));
        span.textContent=enteredkey[i];
        if(enteredkey[i].toUpperCase()==key[i]){
            spana.setAttribute("style","font-family: 'Fira Code', monospace;border-style: solid;border-color: rgb(140,54,54);margin: 1rem;animation: rotating-letters 0.5s ease-in-out alternate;transition-duration:0.7s;text-transform: uppercase;font-size: 3vh;color: green;");
            enteredkey[i]=".";
            finalcheck++;
            if(finalcheck==5){
                break;
            }
            for(var j=0;j<5;j++){
                if(key[i]==enteredkey[j]){
                    enteredkey[j]=".";
                }
            }
        }
        else if(enteredkey[i].toUpperCase()==key[0]||enteredkey[i].toUpperCase()==key[1]||enteredkey[i].toUpperCase()==key[2]||enteredkey[i].toUpperCase()==key[3]||enteredkey[i].toUpperCase()==key[4]){
            spana.setAttribute("style","font-family: 'Fira Code', monospace;border-style: solid;border-color: rgb(140,54,54);margin: 1rem;animation: rotating-letters 0.5s ease-in-out alternate;transition-duration:0.7s;text-transform: uppercase;font-size: 3vh;color: yellow;");
        }
        else{
            spana.setAttribute("style","font-family: 'Fira Code', monospace;border-style: solid;border-color: rgb(140,54,54);margin: 1rem;animation: rotating-letters 0.5s ease-in-out alternate;transition-duration:0.7s;text-transform: uppercase;font-size: 3vh;color: red;");
        }
    }
    if(finalcheck==5){
        var section1=document.getElementById('section1');
        var section2=document.getElementById('section2');
        section2.style.display="flex";
        
    }
}