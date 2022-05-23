var $dataAlumno = new Set();
var $dataAdmin = new Set();
$(function(){
    $.ajax({
        type: 'GET',
        url: "http://127.0.0.1:8000/api/test/alumnos",
        success: function(data){
            $.each(data,function(i,datos){
                datos.forEach(element => {
                    $dataAlumno.add(element);
                });
            })
        }
    });
    $.ajax({
        type: 'GET',
        url: 'http://127.0.0.1:8000/api/test/administradores',
        success: function(data){
            $.each(data, function(i,datos){
                datos.forEach(element => {
                    $dataAdmin.add(element);
                });
            });
        }
    })
});
function auth(){
    var rut = document.getElementById('rut').value;
    var pass = document.getElementById('pass').value;
    var success = false;
    $dataAlumno.forEach(element => {
    if(rut === element.data.rut && pass === element.data.contrasena){
        success = true;
        window.location.href='./inicio.html';
    }
    });
    $dataAdmin.forEach(element => {
    if(rut === element.data.rut && pass === element.data.contrasena){
        success = true;
        window.location.href='./vista_admin.html';
    }
    });
    if(!success){
        alert('Rut y/o Contraseña erroneas');
    }
}