<?php
    $conn = mysqli_connect('localhost', 'root', '#CONTRASEÑA', '#NOMBRE_DE_LA_BD');

    $nombre=$_POST[nombre];
    $apellido=$_POST[apellido];
    $rut=$_POST[rut];
    $correo=$_POST[correo];
    $clave=$_POST[clave];

    $sql="INSERT INTO usuarios (nombre, apellido, rut. correo, clave)
    values ('$nombre','$apellido','$rut','$correo','$clave')";

    echo mysqli_connect($conn,$sql);
?>