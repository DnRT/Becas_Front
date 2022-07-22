function registrar(){
    var datos = {
        'rut':document.getElementById('rut').value,
        'nombre':document.getElementById('nombre').value,
        'apellido':document.getElementById('apellido').value,
        'correo':document.getElementById('correo').value,
        'contrasena':document.getElementById('clave').value,
        'edad':document.getElementById('edad').value,
        'direccion':document.getElementById('dirección').value,
        'id_beca':0,
        'ubicacion_archivos':'../archivos/'+document.getElementById('nombre').value+document.getElementById('apellido').value
    };
    console.log(datos);
    $.ajax({
        type: 'POST',
        url: 'http://127.0.0.1:8000/api/test/alumnos',
        data:datos,
        success: function(data){
            console.log(data);
            window.location.href='./loginvista.html';
        },
        error: function(data){
            alert(data.statusText);
        }
        
    })
}