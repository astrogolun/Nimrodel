$(document).ready(function() {

//FORMULARIO DE RESERVAS
$("#botonr").click(function(){
    var nombre_ = $("#nombre2").val();
    var correo_ = $("#correo2").val();
    var telefono_ = $("#telefono2").val();
    var fecha = $("#fecha").val();
    var hora = $("#hora").val();
    var asistentes = $("#asistentes").val();
    alert("Estimada "+ nombre_ + " agradecemos por reservar con nosotros. Hemos registrado " + asistentes +" asistentes. Se ha enviado el código de confirmación al correo " + correo_ + "\nGracias por preferirnos");
    });



//CERRAR VENTANAS EMERGENTES

$("#myModal").click(function(){
    $("#myModal").hide();
});

$("#myModalt").click(function(){
    $("#myModalt").hide();
});

$("#myModalc").click(function(){
    $("#myModalc").hide();
});


});



