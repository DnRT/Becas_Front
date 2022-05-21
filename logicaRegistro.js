function registrar(){
    var datos = {
        'Rut':document.getElementById('rut').value,
        'Nombre':document.getElementById('nombre').value,
        'Apellido':document.getElementById('apellido').value,
        'Correo':document.getElementById('email').value,
        'Contrasena':document.getElementById('pass').value
    };
    console.log(datos);
    $.ajax({
        type: 'POST',
        url: 'http://127.0.0.1:8000/api/test/alumnos',
        data:datos,
        success: function(data){
            console.log(data);
        }
    })
}