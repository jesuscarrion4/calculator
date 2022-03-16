/*let lastOperator = null;
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
            document.getElementById("calculator").value ="";
            reset = false;
        }else if(text == "ce"){
            document.getElementById("calculator").value = "";
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
}*/
const buttonNumeros = document.getElementsByName('dataNumber');
const buttonOpera = document.getElementsByName('dataOpera');
const buttonIgual = document.getElementsByName('dataIgual')[0];
const buttonDelete = document.getElementsByName('dataDelete')[0];
let result = document.getElementById('result');
let opeActual = '';
let opeAnterior = '';
let operacion = undefined;

buttonNumeros.forEach(function(button){
    button.addEventListener('click', function(){
        agregarNumero(button.innerText);
        

    })
    
});

buttonOpera.forEach(function(button){
    button.addEventListener('click',function(){
        selectOperacion(button.innerText);
        
    })

});

buttonIgual.addEventListener('click', function(){
    calcular();
    actualizarDisplay();

});

function selectOperacion(op){
    if(opeActual === '') return;
    if(opeAnterior !== ''){
        calcular()
    }
        operacion = op.toString();
        opeAnterior = opeActual;
        opeActual = '';
}
function calcular(){
    let calculo;
    const anterior = parseFloat(opeAnterior);
    const actual = parseFloat(opeActual);
    if(isNaN(anterior) || isNaN(actual)) return;
    switch(operacion){
        case '+':
            calculo = anterior + actual;
            break;
        case '-':
            calculo = anterior - actual;
            break;
        case 'x':
            calculo = anterior * actual;
            break;
        case '/':
            calculo = anterior / actual;
            break;
        default:
            return;
    }
    opeActual = calculo;
    operacion = undefined;
    opeAnterior = '';
}

buttonDelete.addEventListener('click', function(){
    clear();
    actualizarDisplay();
});

function agregarNumero(num){
    opeActual = opeActual.toString() + num.toString();
    actualizarDisplay();
}
function clear(){
    opeActual = '';
    opeAnterior = '';
    operacion ='';
}
function actualizarDisplay(){
    result.value = opeActual;
}

clear ();









