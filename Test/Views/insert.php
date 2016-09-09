<?php
$data = json_decode(file_get_contents("php://input"));
$Nombre = mysql_real_escape_string($data->Nombre);
$Mailj = mysql_real_escape_string($data->Mailj);
$Contrasenia = mysql_real_escape_string($data->Contrasenia);
mysql_connect("localhost","root","");
mysql_select_db("scrapbook");
mysql_query("INSERT INTO alumno (Mail, Nombre, Contrasenia, Tipo) VALUES('".$Mailj."','".$Nombre."','".$Contrasenia."','1')");
?>