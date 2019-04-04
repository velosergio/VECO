<?php  

// Llamando a los campos
$empresa = $_POST['empresa'];
$nombre = $_POST['nombre'];
$telefono = $_POST['telefono'];
$correo = $_POST['correo'];
$ciudad = $_POST['ciudad'];
$mensaje = $_POST['mensaje'];

// Datos para el correo
$destinatario = "ventas@vecorental.com";
$asunto = "Contacto desde la web de VECORENTAL";

$carta = "De: $nombre \n";
$carta .= "Empresa: $empresa";
$carta .= " De $ciudad \n";
$carta .= "Correo: $correo \n";
$carta .= "Telefono: $telefono \n";
$carta .= "Mensaje: $mensaje";

// Enviando Mensaje
mail($destinatario, $asunto, $carta);

?>