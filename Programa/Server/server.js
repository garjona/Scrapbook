var express = require('express');

//instanciar
var app = express();

app.get('/', function (req, res) {
    res.sendfile(__dirname + '/Views/index.html');
});
app.get('/about', function (req, res) {
    res.sendfile(__dirname + 'Views/Registrarse.html');
});

var mysql = require('mysql');

var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'scrapbook'
});

connection.connect();
var http = require('http');
var url = require('url');
var fs = require('fs');
var querystring = require('querystring');

var mime = {
    'html': 'text/html',
    'css': 'text/css',
    'jpg': 'image/jpg',
    'ico': 'image/x-icon',
    'mp3': 'audio/mpeg3',
    'mp4': 'video/mp4'
};
var servidor = http.createServer(function (pedido, respuesta) {
    var objetourl = url.parse(pedido.url);
    var camino = objetourl.pathname;
    if (camino == '/') {
        camino = 'Vista/Index.html';
    } else if (camino.substring(0, 15) == "/Controlador.js") {
        camino = 'Controlador/Controlador.js';
    } else if (camino.substring(0, 5) == "/Cont") {
        camino = "Controlador/Controlador.js";
    } else if (camino.substring(0, 4) == "/Vis") {
        camino = camino.substring(1);
    } else if (camino.substring(0, 4) == "/ven") {
        camino = camino.substring(1);
    }
     else {
        camino = 'Vista' + camino;
    }
    encaminar(pedido, respuesta, camino);
});

var nodemailer = require('nodemailer');

// Create a SMTP transport object
var transport = nodemailer.createTransport("SMTP", {
    service: 'Gmail',
    auth: {
        user: "scrapbook.contacto@gmail.com",
        pass: "voteporevelyn"
    }
});

console.log('SMTP Configured');


function encaminar(pedido, respuesta, camino) {
    console.log(camino);
    switch (camino) {
        case 'Vista/api/registrarse': {
            registro2(pedido,respuesta);
            break;
        }
        case 'Vista/api/iniciarSesion': {
            iniciarSesion(pedido,respuesta);
            break;
        }
        case 'Vista/api/nuevoProfesor':{
            nuevoProfesor(pedido,respuesta);
            break;
        }
        case 'Vista/api/eliminarAlumno':{
            eliminarAlumno(pedido,respuesta);
            break;
        }
        case 'Vista/api/cambiarImagen':{
            cambiarImagen(pedido,respuesta);
            break;
        }
        case 'Vista/api/eliminarProfesor':{
            eliminarProfesor(pedido,respuesta);
            break;
        }
        case 'Vista/api/mostrarAlumnos':{
            mostrarAlumnos(pedido,respuesta);
            break;
        }
        case 'Vista/api/mostrarProfesor':{
            mostrarProfesor(pedido,respuesta);
            break;
        }
        case 'Vista/api/mostrarColumnas':{
            mostrarColumnas(pedido,respuesta);
            break;
        }

        case 'Vista/api/enviarMail':{
            enviarMail(pedido,respuesta);
            break;
        }
        case 'Vista/api/mostrarUnidades':{
            mostrarUnidades(pedido,respuesta);
            break;
        }
        case 'Vista/api/mostrarUnidad1':{
            mostrarUnidad1(pedido,respuesta);
            break;
        }
        case 'Vista/api/mostrarUnidad2':{
            mostrarUnidad2(pedido,respuesta);
            break;
        }
        case 'Vista/api/mostrarUnidad3':{
            mostrarUnidad3(pedido,respuesta);
            break;
        }
        case 'Vista/api/mostrarUnidad4':{
            mostrarUnidad4(pedido,respuesta);
            break;
        }
        case 'Vista/api/mostrarUnidad5':{
            mostrarUnidad5(pedido,respuesta);
            break;
        }
        case "/api/mostrarData":{
            mostrarData(pedido);
            break;
        }
        case "/api/eliminarUnidad":{
            eliminarUnidad(pedido,respuesta);
            break;
        }

        default : {
            fs.exists(camino, function (existe) {
                if (existe) {
                    fs.readFile(camino, function (error, contenido) {
                        if (error) {
                            respuesta.writeHead(500, {'Content-Type': 'text/plain'});
                            respuesta.write('Error interno');
                            respuesta.end();
                        } else {
                            var vec = camino.split('.');
                            var extension = vec[vec.length - 1];
                            var mimearchivo = mime[extension];
                            respuesta.writeHead(200, {'Content-Type': mimearchivo});
                            respuesta.write(contenido);
                            respuesta.end();
                        }
                    });
                } else {
                    respuesta.writeHead(404, {'Content-Type': 'text/html'});
                    respuesta.write('<!doctype html><html><head></head><body>Recurso inexistente</body></html>');
                    respuesta.end();
                }
            });
        }
    }
}

function mostrarUnidades(pedido,respuesta){
    var info = '';
    pedido.on('data', function (datosparciales) {
        info += datosparciales;
    });
    pedido.on('end', function () {
        var formulario = querystring.parse(info);

        connection.query("SELECT * FROM Unidades ORDER by subunidad ASC ;", function (err, rows) {
            if (err) {
                respuesta.end('ERROR');
            }
            var string = JSON.stringify(rows);
            var json = JSON.parse(string);
            if (rows.length == 0) {
                respuesta.end('ERROR');
            }else{
                diccionarioTemp={};
                lista=[];
                for (i=0;i<rows.length;i++){
                    if (json[i].Unidad in diccionarioTemp){
                        diccionarioTemp[json[i].Unidad].SubUnidad.push({Titulo:json[i].Titulo, Numero:json[i].SubUnidad});
                    } else{
                        diccionarioTemp[json[i].Unidad]={Numero:json[i].Unidad, TextoParche:"SubUnidad"+String(json[i].Unidad), SubUnidad:[]};
                        diccionarioTemp[json[i].Unidad].SubUnidad.push({Titulo:json[i].Titulo, Numero:json[i].SubUnidad});
                    }
                }
                for (i=0;i<Object.keys(diccionarioTemp).length;i++){
                    lista.push(diccionarioTemp[String(i+1)]);
                }
                respuesta.end('OK$'+JSON.stringify(lista));
            }
        });
    });
}
function mostrarUnidad1(pedido,respuesta){
    var info = '';
    pedido.on('data', function (datosparciales) {
        info += datosparciales;
    });
    pedido.on('end', function () {
        var formulario = querystring.parse(info);

        connection.query("SELECT * FROM Unidades WHERE Unidad = '1' ORDER by subunidad ASC ;", function (err, rows) {
            if (err) {
                respuesta.end('ERROR');
            }
            var string = JSON.stringify(rows);
            var json = JSON.parse(string);
            if (rows.length == 0) {
                respuesta.end('ERROR');
            }else{
                lista=[];
                for (i=0;i<rows.length;i++){
                    lista.push({Titulo:json[i].Titulo});
                }
                respuesta.end('OK$'+JSON.stringify(lista));
            }
        });
    });
}
function mostrarUnidad2(pedido,respuesta){
    var info = '';
    pedido.on('data', function (datosparciales) {
        info += datosparciales;
    });
    pedido.on('end', function () {
        var formulario = querystring.parse(info);

        connection.query("SELECT * FROM Unidades WHERE Unidad = '2' ORDER by subunidad ASC ;", function (err, rows) {
            if (err) {
                respuesta.end('ERROR');
            }
            var string = JSON.stringify(rows);
            var json = JSON.parse(string);
            if (rows.length == 0) {
                respuesta.end('ERROR');
            }else{
                lista=[];
                for (i=0;i<rows.length;i++){
                    lista.push({Titulo:json[i].Titulo});
                }
                respuesta.end('OK$'+JSON.stringify(lista));
            }
        });
    });
}
function mostrarUnidad3(pedido,respuesta){
    var info = '';
    pedido.on('data', function (datosparciales) {
        info += datosparciales;
    });
    pedido.on('end', function () {
        var formulario = querystring.parse(info);

        connection.query("SELECT * FROM Unidades WHERE Unidad = '3' ORDER by subunidad ASC ;", function (err, rows) {
            if (err) {
                respuesta.end('ERROR');
            }
            var string = JSON.stringify(rows);
            var json = JSON.parse(string);
            if (rows.length == 0) {
                respuesta.end('ERROR');
            }else{
                lista=[];
                for (i=0;i<rows.length;i++){
                    lista.push({Titulo:json[i].Titulo});
                }
                respuesta.end('OK$'+JSON.stringify(lista));
            }
        });
    });
}
function mostrarUnidad4(pedido,respuesta){
    var info = '';
    pedido.on('data', function (datosparciales) {
        info += datosparciales;
    });
    pedido.on('end', function () {
        var formulario = querystring.parse(info);

        connection.query("SELECT * FROM Unidades WHERE Unidad = '4' ORDER by subunidad ASC ;", function (err, rows) {
            if (err) {
                respuesta.end('ERROR');
            }
            var string = JSON.stringify(rows);
            var json = JSON.parse(string);
            if (rows.length == 0) {
                respuesta.end('ERROR');
            }else{
                lista=[];
                for (i=0;i<rows.length;i++){
                    lista.push({Titulo:json[i].Titulo});
                }
                respuesta.end('OK$'+JSON.stringify(lista));
            }
        });
    });
}
function mostrarUnidad5(pedido,respuesta){
    var info = '';
    pedido.on('data', function (datosparciales) {
        info += datosparciales;
    });
    pedido.on('end', function () {
        var formulario = querystring.parse(info);

        connection.query("SELECT * FROM Unidades WHERE Unidad = '5' ORDER by subunidad ASC ;", function (err, rows) {
            if (err) {
                respuesta.end('ERROR');
            }
            var string = JSON.stringify(rows);
            var json = JSON.parse(string);
            if (rows.length == 0) {
                respuesta.end('ERROR');
            }else{
                lista=[];
                for (i=0;i<rows.length;i++){
                    lista.push({Titulo:json[i].Titulo});
                }
                respuesta.end('OK$'+JSON.stringify(lista));
            }
        });
    });
}
function mostrarColumnas(pedido,respuesta){
    var info = '';
    pedido.on('data', function (datosparciales) {
        info += datosparciales;
    });
    pedido.on('end', function () {
        var formulario = querystring.parse(info);
        //console.log(formulario["mail"]);
        //console.log(toString(formulario['mail']));
        connection.query("SELECT * FROM Contenido WHERE Unidad ='"+ formulario["unidad"]+"' and SubUnidad='"+formulario["subUnidad"]+ "'ORDER by codigo ASC ;", function (err, rows) {
            if (err) {
                respuesta.end('ERROR');
            }
            var string = JSON.stringify(rows);
            var json = JSON.parse(string);
            if (rows.length == 0) {
                respuesta.end('ERROR');
            }else{
                lista=[];
                for (i=0;i<rows.length;i++){
                    lista.push({Titulo:json[i].Titulo, Contenido:json[i].Contenido, Uno:json[i].Uno, Dos:json[i].Dos, Tres:json[i].Tres, Cuatro:json[i].Cuatro });
                }
                console.log(lista);
                respuesta.end('OK$'+JSON.stringify(lista));
            }
        });
    });
}


function registro2(pedido,respuesta){
    var info = '';
    pedido.on('data', function (datosparciales) {
        info += datosparciales;
    });
    pedido.on('end', function () {
        var formulario = querystring.parse(info);
        //console.log(formulario["mail"]);
        //console.log(toString(formulario['mail']));
        connection.query("INSERT INTO alumno Values ('" + formulario["mail"] + "', '" + formulario["nombre"] + "', '" + formulario["rol"] + "', '" + formulario["contrasenia"] + "', '0', '0', '0','"+formulario["campus"]+"', '"+ formulario["carrera"]+"','0','http://www.formandoformadores.org.mx/sites/all/themes/ff/images/user.png');", function (err) {
            if (err) {
                respuesta.end('ERROR');
            }
            else{
                //respuesta,mail,cargo,nombre,rol,confirmacionMail,ConfirmacionAdm,TipoAprendizaje,campus,carrera
                respuesta.end('OK,'+formulario["mail"]+ ',Alumno,'+formulario["nombre"]+","+formulario["rol"]+","+formulario["confirmacion_mail"]+","+formulario["confirmacion_administrador"]+","+formulario["tipo_aprendizaje"]+ ","+formulario["campus"]+ ","+formulario["carrera"]);//respuesta,mail,nombre
            }


        });
    });
}

function iniciarSesion(pedido,respuesta){
    var info = '';
    pedido.on('data', function (datosparciales) {
        info += datosparciales;
    });
    pedido.on('end', function () {
        var formulario = querystring.parse(info);

        connection.query("SELECT * FROM administrador where Mail='"+formulario["mail"]+"'and Contrasenia='"+formulario["contrasenia"]+"'", function (err, rows) {
            if (err) {
                respuesta.end('ERROR');
            }
            var string = JSON.stringify(rows);
            var json = JSON.parse(string);
            if (rows.length == 1) {
                respuesta.end('OK,' + formulario["mail"] + ",Administrador," + json[0].Nombre);
                //respuesta,mail,cargo,nombre
            }
        });

        connection.query("SELECT * FROM profesor where Mail='"+formulario["mail"]+"'and Contrasenia='"+formulario["contrasenia"]+"'", function (err, rows) {
            if (err) {
                respuesta.end('ERROR');
            }
            var string = JSON.stringify(rows);
            var json = JSON.parse(string);
            if (rows.length == 1) {
                respuesta.end('OK,' + formulario["mail"] + ",Profesor," + json[0].Nombre);
                //respuesta,mail,cargo,nombre
            }
        });
        //console.log(formulario["mail"]);
        //console.log(toString(formulario['mail']));
        connection.query("SELECT * FROM alumno where Mail='"+formulario["mail"]+"'and Contrasenia='"+formulario["contrasenia"]+"'", function (err, rows) {
            if (err) {
                respuesta.end('ERROR');
            }
            var string = JSON.stringify(rows);
            var json = JSON.parse(string);
            if (rows.length == 0) {
                respuesta.end('ERROR');
            }
            else{

                respuesta.end('OK,'+formulario["mail"]+",Alumno,"+json[0].Nombre+","+json[0].Rol+","+json[0].Confirmacion_mail+","+json[0].Confirmacion_administrador+","+json[0].Tipo_aprendizaje+ ","+json[0].campus+ ","+json[0].carrera+","+json[0].image);
                console.log(json[0].Tipo_aprendizaje);
                //respuesta,mail,cargo,nombre,rol,confirmacionMail,ConfirmacionAdm,TipoAprendizaje,campus,carrera
            }


        });
    });
}

function mostrarAlumnos(pedido,respuesta){
    var info = '';
    pedido.on('data', function (datosparciales) {
        info += datosparciales;
    });
    pedido.on('end', function () {
        var formulario = querystring.parse(info);
        //console.log(formulario["mail"]);
        //console.log(toString(formulario['mail']));
        connection.query("SELECT * FROM alumno;", function (err, rows) {
            if (err) {
                respuesta.end('ERROR');
            }
            var string = JSON.stringify(rows);
            var json = JSON.parse(string);
            if (rows.length == 0) {
                respuesta.end('ERROR');
            }else{
                lista=[];
                for (i=0;i<rows.length;i++){
                    lista.push({Nombre:json[i].Nombre,Mail:json[i].Mail,Rol:json[i].Rol});
                }
                respuesta.end('OK$'+JSON.stringify(lista));
            }
        });
    });
}
function mostrarProfesor(pedido,respuesta){
    var info = '';
    pedido.on('data', function (datosparciales) {
        info += datosparciales;
    });
    pedido.on('end', function () {
        var formulario = querystring.parse(info);
        //console.log(formulario["mail"]);
        //console.log(toString(formulario['mail']));
        connection.query("SELECT * FROM profesor;", function (err, rows) {
            if (err) {
                respuesta.end('ERROR');
            }
            var string = JSON.stringify(rows);
            var json = JSON.parse(string);
            if (rows.length == 0) {
                respuesta.end('ERROR');
            }else{
                lista=[];
                for (i=0;i<rows.length;i++){
                    lista.push({Nombre:json[i].Nombre,Mail:json[i].Mail});
                }
                respuesta.end('OK$'+JSON.stringify(lista));
            }
        });
    });
}

function nuevoProfesor(pedido,respuesta){
    var info = '';
    pedido.on('data', function (datosparciales) {
        info += datosparciales;
    });
    pedido.on('end', function () {
        var formulario = querystring.parse(info);
        //console.log(formulario["mail"]);
        //console.log(toString(formulario['mail']));
        connection.query("INSERT INTO profesor Values ('" + formulario["mail"] + "', '" + formulario["nombre"] +"', '"+formulario["contrasenia"]+"');", function (err, rows) {
            if (err) {
                respuesta.end('ERROR');
            }
            else{
                //respuesta,mail,cargo,nombre
                respuesta.end('OK,'+formulario["mail"]+ ',Profesor,'+formulario["nombre"]);//respuesta,mail,cargo,nombre
            }


        });
    });
}

function cambiarImagen(pedido,respuesta)
{
    var info = '';
    pedido.on('data', function(datosparciales)
    {
        info += datosparciales;
    });
    pedido.on('end', function () {
        var formulario = querystring.parse(info);
        //console.log(formulario["mail"]);
        //console.log(toString(formulario['mail']));
        //"SELECT * FROM alumno where Mail='"+formulario["mail"]+"';"
        connection.query("UPDATE alumno SET image ='" + formulario["imagen"] + "' where nombre = '" + formulario["nombre"] + "';", function (err, rows) {
            if (err) {
                respuesta.end('ERROR');
            }
            else {
                //respuesta,mail,cargo,nombre
                ImgActiva = formulario["imagen"];
                console.log(formulario["imagen"]);
                respuesta.end('OK,' + formulario["nombre"]);//respuesta,mail,nombre
            }
        });
    });
}

function eliminarAlumno(pedido,respuesta){
    var info = '';
    pedido.on('data', function (datosparciales) {
        info += datosparciales;
    });
    pedido.on('end', function () {
        var formulario = querystring.parse(info);
        //console.log(formulario["mail"]);
        //console.log(toString(formulario['mail']));
        connection.query("SELECT * FROM alumno where Mail='"+formulario["mail"]+"';", function (err, rows) {
            if (err) {
                respuesta.end('ERROR');
            }
            if (rows.length == 0) {
                respuesta.end('ERROR');
            }
        });
        connection.query("DELETE FROM alumno WHERE Mail='"+formulario["mail"]+"';", function (err, rows) {
            console.log(formulario["mail"]);
            if (err) {
                respuesta.end('ERROR');
            }
            else{
                //respuesta,mail,cargo,nombre
                respuesta.end('OK,'+formulario["mail"]);//respuesta,mail,nombre
            }
        });
    });
}

function eliminarProfesor(pedido,respuesta){
    var info = '';
    pedido.on('data', function (datosparciales) {
        info += datosparciales;
    });
    pedido.on('end', function () {
        var formulario = querystring.parse(info);
        //console.log(formulario["mail"]);
        //console.log(toString(formulario['mail']));
        connection.query("SELECT * FROM profesor where Mail='"+formulario["mail"]+"';", function (err, rows) {
            if (err) {
                respuesta.end('ERROR');
            }
            if (rows.length == 0) {
                respuesta.end('ERROR');
            }
        });
        connection.query("DELETE FROM profesor WHERE Mail='"+formulario["mail"]+"';", function (err, rows) {
            console.log(formulario["mail"]);
            if (err) {
                respuesta.end('ERROR');
            }
            else{
                //respuesta,mail,cargo,nombre
                respuesta.end('OK,'+formulario["mail"]);//respuesta,mail,nombre
            }
        });
    });
}

function enviarMail(pedido,respuesta){
    var info = '';
    pedido.on('data', function (datosparciales) {
        info += datosparciales;
    });
    pedido.on('end', function () {
        var formulario = querystring.parse(info);

        // Message object
        var message = {

            // sender info
            from: 'Scrapbook <scrapbook.contacto@gmail.com>',

            // Comma separated list of recipients
            to: '"'+formulario["nombre"]+'" <'+formulario["mail"]+'>',

            // Subject of the message
            subject: 'Confirmacion mail',

            // plaintext body
            text: 'Hola!!',

            // HTML body
            html: '<p><b>Hola</b> </p>' +
            '<p>Tu codigo de confirmacion es 132341<br/></p>'
        };

        console.log('Sending Mail');
        transport.sendMail(message, function (error) {
            if (error) {
                console.log('Error occured');
                console.log(error.message);
                return;
            }
            console.log('El correo se mando al mail'+ formulario["mail"]);

            // if you don't want to use this transport object anymore, uncomment following line
            //transport.close(); // close the connection pool
        });
        connection.query("UPDATE alumno SET Tipo_aprendizaje='"+formulario["tipo"]+"' WHERE Mail='"+formulario["mail"]+"';", function (err, rows) {
            if (err) {
                respuesta.end('ERROR');
            }
            else if (rows.length == 0) {
                respuesta.end('ERROR');
            } else {
                respuesta.end("OK");
            }
        });
    });
}

function mostrarData(pedido){
    var info = '';
    pedido.on('data', function (datosparciales) {
        info += datosparciales;
    });
    pedido.on('end', function () {
        var formulario = querystring.parse(info);
        //console.log(formulario["mail"]);
        //console.log(toString(formulario['mail']));
        console.log(formulario);
    });
}
function eliminarUnidad(pedido,respuesta){
    var info = '';
    pedido.on('data', function (datosparciales) {
        info += datosparciales;
    });
    pedido.on('end', function () {
        var formulario = querystring.parse(info);
        //console.log(formulario["mail"]);
        //console.log(toString(formulario['mail']));
        connection.query("DELETE FROM unidades WHERE Unidad="+formulario["unidad"]+" and SubUnidad="+formulario["subUnidad"]+";", function (err, rows) {
            console.log(formulario["unidad"]);
            if (err) {
                respuesta.end('ERROR');
            }
            else{
                //respuesta,mail,cargo,nombre
                respuesta.end('OK,'+formulario["unidad"]);//respuesta,mail,nombre
            }
        });
    });
}
servidor.listen(9000);

console.log('Servidor web iniciado en http://localhost:9000');
