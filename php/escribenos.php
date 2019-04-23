<?php

// Llamando a los campos
$empresa = $_POST['empresa'];
$nombre = $_POST['nombre'];
$telefono = $_POST['telefono'];
$correo = $_POST['correo'];
$ciudad = $_POST['ciudad'];
$mensaje = $_POST['mensaje'];
$captcha = $_POST['g-recaptcha-response'];
$secret = '6Le4jJ8UAAAAAEnLuSryV534n1qbp-oryNBIrLNL';

// Datos para el correo
$destinatario = "ventas@vecorental.com";
$asunto = "$nombre escribe desde la web de VECORENTAL";
$carta = "De: $nombre \n";
$carta .= "Empresa: $empresa";
$carta .= " De $ciudad \n";
$carta .= "Correo: $correo \n";
$carta .= "Telefono: $telefono \n";
$carta .= "Mensaje: $mensaje";

//Google Recaptcha 
$response_recaptcha = $_POST['g-recaptcha-response'];
    if(isset($response_recaptcha)&& $response_recaptcha){
        $ip = $_SERVER['REMOTE_ADDR'];
        $validation_server = file_get_contents("https://www.google.com/recaptcha/api/siteverify?secret=$secret&response=$response_recaptcha&remoteip=$ip");
        header("Location: http://www.vecorental.com/gracias");    
    } else{
        ?><meta http-equiv="refresh" content="5; url=http://www.vecorental.com/">Error. Comprueba los datos que ingresaste <br />Redireccionando...<?php
        exit;
    }

// Enviando Mensaje
mail($destinatario, $asunto, $carta);

?>