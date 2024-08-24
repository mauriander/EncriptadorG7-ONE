const textArea=document.querySelector(".text-area");
const mensaje=document.querySelector(".mensaje");
const botonCopiar=document.querySelector(".btn-copiar");

//a por ai
//e ppor enter
//i ppor imes
//o ppor ober
// u ppor ufat
//reiniciar los campos y dejarlkos en 0
function limpiar() {
     document.querySelectorAll('textarea').forEach(textarea => {        textarea.value = '';      });
    //  document.querySelector('.mensaje2').innerHTML = '';
         if (mensaje.value.trim() !== '') {
        botonCopiar.style.display = 'block'; // Mostrar el botón
      } else {
        botonCopiar.style.display = 'none'; // Ocultar el botón
      }
         // Solo oculta el mensaje en dispositivos móviles o tabletas cuando esté vacío
      if (window.innerWidth <= 768) {
        if (mensaje.value.trim() === '') {
          mensaje.classList.add('hidden'); // Ocultar el mensaje
        } else {
          mensaje.classList.remove('hidden'); // Mostrar el mensaje
        }
      }

    }
window.onload = function() {   limpiar();};


 // Verifica si hay texto en el área de mensaje
  

 function validar(texto) {
  // Expresión regular para permitir solo letras minúsculas y espacios
  const regex = /^[a-z\s]*$/;
  return regex.test(texto);
}

function btnEncriptar(){

const texto = textArea.value; // Convertir el texto a minúsculas

// Llama a la función validar
if (!validar(texto)) {
  alert('El texto solo puede contener letras minúsculas y no debe poseer caracteres especiales');
  return; // Detiene la ejecución si la validación falla
}

const textoEncriptado=encriptar(textArea.value);
mensaje.value=textoEncriptado;
textArea.value="";
mensaje.style.backgroundImage="none";

  document.querySelector('.mensaje2').style.display = 'none';
        if (mensaje.value.trim() !== '') {
        botonCopiar.style.display = 'block'; // Mostrar el botón
      } else {
        botonCopiar.style.display = 'none'; // Ocultar el botón
      }
}


function encriptar(stringEncriptado){
let reemplazo = [
   ["e", "enter"],    ["i", "imes"],    ["a", "ai"],       ["o", "ober"],    ["u", "ufat"],
];
//stringEncriptado=stringEncriptado.toLowerCase();

for (let i=0;i<reemplazo.length;i++){
if(stringEncriptado.includes(reemplazo[i][0])){
stringEncriptado=stringEncriptado.replaceAll(reemplazo[i][0],reemplazo[i][1]);
}
}
return stringEncriptado;

}

function btnDesencriptar(){
  const texto = textArea.value;
  if (!validar(texto)) {
    alert('El texto solo puede contener letras minúsculas y no debe poseer caracteres especiales');
    return; // Detiene la ejecución si la validación falla
  }
const textoEncriptado=desencriptar(textArea.value);
mensaje.value=textoEncriptado;
textArea.value="";
mensaje.style.backgroundImage="none";

document.querySelector('.mensaje2').style.display = 'none';
      if (mensaje.value.trim() !== '') {
        botonCopiar.style.display = 'block'; // Mostrar el botón
      } else {
        botonCopiar.style.display = 'none'; // Ocultar el botón
      }
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


