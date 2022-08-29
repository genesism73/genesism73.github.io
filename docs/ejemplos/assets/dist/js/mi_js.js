// function mostrarContrasena() {
//     var tipo = document.getElementById("InputPassword1");
//     if(tipo.type == "password"){
//         tipo.type = "text";
//     }else{
//         tipo.type = "password";
//     }
// }


function mostrarPassword(){
    var cambio = document.getElementById("InputPassword1");
    if(cambio.type == "password"){
        cambio.type = "text";
        $('.icon').removeClass('fa fa-eye-slash').addClass('fa fa-eye');
    }else{
        cambio.type = "password";
        $('.icon').removeClass('fa fa-eye').addClass('fa fa-eye-slash');
    }
} 

$(document).ready(function () {
//CheckBox mostrar contraseña
$('#ShowPassword').click(function () {
    $('#Password').attr('type', $(this).is(':checked') ? 'text' : 'password');
});
});