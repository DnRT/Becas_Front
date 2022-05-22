function registrar(){
    var nuevo_registro = document.getElementById('nuevo_registro');
    var datos = new FormData(nuevo_registro);
    datos.append('rut',document.getElementById('rut').value);
    datos.append('nombre',document.getElementById('nombre').value);
    datos.append('apellido',document.getElementById('apellido').value);
    datos.append('edad',null);
    datos.append('direccion',null);
    datos.append('correo',document.getElementById('email').value);
    datos.append('contrasena',document.getElementById('pass').value);
    fetch('http://127.0.0.1:8000/api/test/alumnos', {
        method:'POST',
        body:datos
    }).then(function(response){
        if(response.ok){
            window.location.href='./loginvista.html';
        }
        else{
            alert(response.statusText);
        }
    })
}