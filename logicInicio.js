var registro = document.getElementById('id_beca');
function clickR(){
    switch(registro.value){
        case "1":
            window.location.href="./beca_tad.html";
            break;
        case "2":
            window.location.href="./beca_es.html";
            break;
    }
}