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
console.log($dataAdmin);
console.log($dataAlumno);