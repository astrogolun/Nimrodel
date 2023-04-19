//SCRIPT FORMULARIO DE CONTACTO (sesion9)
function abrirform1(){
document.getElementById("form1").style.display = "block" 
};

function abrirform2(){
document.getElementById("form2").style.display = "block" 
    };

function obtenerdatos(){

var nombre = document.getElementById("nombre").value;
console.log(nombre);
var correo = document.getElementById("correo").value;
console.log(correo);
var telefono = document.getElementById("telefono").value;
console.log(telefono);
var motivo = document.getElementById("motivo").value;
console.log(motivo);
var text = document.getElementById("text").value;
console.log(text);


if (nombre==""){alert("El campo "+"Nombre "+"es obligatorio ") }
  else if(correo==""){alert("El campo "+"Correo "+"es obligatorio ")} 
    else if (telefono==""){alert("El campo "+"Telefono" +" es obligatorio ")}
      else if (motivo==""){alert("El campo "+"Motivo"+" es obligatorio ")}
        else if (text=="" || text==null) {alert("El campo es obligatorio ")} 


    else if (nombre != "" && correo != "" && telefono != "" && motivo != "" && text != "" )
{
  alert("Muchas gracias " + nombre +" hemos recibido su sugerencia y enviaremos una pronta respuesta al correo " + correo + ".") 
}

}

;
//SCRIPT PARA AGRANDAR TARJETAS

// Get the modal
var modal = document.getElementById("myModal");
var modalt = document.getElementById("myModalt");
var modalc = document.getElementById("myModalc");

// Get the button that opens the modal

var gaseosa = document.getElementById("gaseosas");
var tablas = document.getElementById("tablas");
var ceveza = document.getElementById("cerveza");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];
var spant = document.getElementsByClassName("close")[0];
var spanc = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 

gaseosas.onclick = function(){
  modal.style.display = "block"
}

tablas.onclick = function(){
  modalt.style.display = "block"
}

cerveza.onclick = function(){
  modalc.style.display = "block"
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}
spant.onclick = function() {
  modalt.style.display = "none";
}

spanc.onclick = function() {
  modalc.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
  


  



