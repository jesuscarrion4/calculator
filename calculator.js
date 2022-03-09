let lastOperator = null;
let reset = false;
let lastNumber = null; 

function inict() {
    const buttons = document.getElementsByName("button");
    for (const button of buttons) {
        button.addEventListener("click", function(event){
            const text = event.target.innerText ;
            console.log(text);
            processText(text)

        })

    }

}

function processText(text){
    if(isNaN(text)){
        if(text == "c"){
            document.getElementById("calculator").value =" ";
            reset = false;
        }else if(text == "ce"){
            document.getElementById("calculator").value = " ";
            reset = false;
            lastOperator = null;
            lastNumber = null;
        }else{
            if(lastNumber){
                switch(lastOperator){
                    case "+":
                        lastNumber += parseInt(document.getElementById("calculator").value);
                        break;
                    case "-":
                        lastNumber -= parseInt(document.getElementById("calculator").value);
                        break;
                    case "*":
                        lastNumber *= parseInt(document.getElementById("calculator").value);
                        break;
                    case "/":
                        lastNumber /= parseInt(document.getElementById("calculator").value);
                        break;
                }
                document.getElementById("calculator").value = lastNumber;
                reset = true;
            }else{
                lastNumber = parseInt(document.getElementById("calculator").value);
                document.getElementById("calculator").value = "";
            }
            lastOperator = text;
        }

    }else{
        if(reset){
            document.getElementById("calculator").value = text;
        reset = false;
        }else{
            document.getElementById("calculator").value += text;
        }
    }
}