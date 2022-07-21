function registrar(){
    var datos = {
        'rut':document.getElementById('rut').value,
        'nombre':document.getElementById('nombre').value,
        'apellido':document.getElementById('apellido').value,
        'correo':document.getElementById('correo').value,
        'contrasena':document.getElementById('clave').value,
        'edad':document.getElementById('edad').value,
        'direccion':document.getElementById('dirección').value
    };
    $.ajax({
        type: 'POST',
        url: 'http://127.0.0.1:8000/api/test/alumnos',
        data:datos,
        success: function(data){
            console.log(data);
        },
        error: function(data){
            let aux = Object.values(data.responseJSON.errors);
            aux.forEach(test =>{
                test.forEach(value=> {
                    alert(value);
                });
            });
        }
        
    })
}