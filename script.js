const textArea=document.querySelector(".text-area");
const mensaje=document.querySelector(".mensaje");

//a por ai
//e ppor enter
//i ppor imes
//o ppor ober
// u ppor ufat


function btnEncriptar(){
const textoEncriptado=encriptar(textArea.value);
mensaje.value=textoEncriptado;
textArea.value="";
mensaje.style.backgroundImage="none";
}

function encriptar(stringEncriptado){
let reemplazo = [
   ["e", "enter"],    ["i", "imes"],    ["a", "ai"],       ["o", "ober"],    ["u", "ufat"],
];
stringEncriptado=stringEncriptado.toLowerCase();
for (let i=0;i<reemplazo.length;i++){
if(stringEncriptado.includes(reemplazo[i][0])){
stringEncriptado=stringEncriptado.replaceAll(reemplazo[i][0],reemplazo[i][1]);
}
}
return stringEncriptado;
}

function btnDesencriptar(){
const textoEncriptado=desencriptar(textArea.value);
mensaje.value=textoEncriptado;
textArea.value="";
mensaje.style.backgroundImage="none";

}


function desencriptar(stringDesencriptado){
let reemplazo = [
   ["e", "enter"],    ["i", "imes"],    ["a", "ai"],       ["o", "ober"],    ["u", "ufat"],
];
stringDesencriptado=stringDesencriptado.toLowerCase();
for (let i=0;i<reemplazo.length;i++){
if(stringDesencriptado.includes(reemplazo[i][1])){
stringDesencriptado=stringDesencriptado.replaceAll(reemplazo[i][1],reemplazo[i][0]);
}
}
return stringDesencriptado;
}

function btnCopiar(){
    if (mensaje.value != "") {
        navigator.clipboard.writeText(mensaje.value);
        alert("Mensaje copiado");
    }
    else {
        alert("Nada que copiar");
    }
}

