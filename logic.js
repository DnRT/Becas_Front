$(function (){
    $.ajax({
        type: 'GET',
        url: 'http://127.0.0.1:8000/api/test/alumnos',
        success: function(data){
            console.log('success',data);
        }
    });
});