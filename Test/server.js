var mysql = require('mysql');
var connection = mysql.createConnection({
    host : 'localhost',
    user : 'root',
    password : '',
    database : 'scrapbook'
});

var express = require('express');

//instanciar
var app = express();




app.get('/', function(req,res) {
    res.sendfile(__dirname + '/Views/index.html');
});
app.get('/about', function(req, res){
    res.sendfile(__dirname + 'Views/about.html');
});


var http=require('http');
var url=require('url');
var fs=require('fs');
var querystring = require('querystring');

var mime = {
    'html' : 'text/html',
    'css'  : 'text/css',
    'jpg'  : 'image/jpg',
    'ico'  : 'image/x-icon',
    'mp3'  :	'audio/mpeg3',
    'mp4'  : 'video/mp4'
};

var servidor=http.createServer(function(pedido,respuesta){
    var objetourl = url.parse(pedido.url);
    var camino='Views'+objetourl.pathname;
    if (camino=='Views/')
        camino='Views/index.html';
    encaminar(pedido,respuesta,camino);
});

servidor.listen(9000);


function encaminar (pedido,respuesta,camino) {
    console.log(camino);
    switch (camino) {
        case 'Views/recuperardatos': {
            recuperar(pedido,respuesta);
            break;
        }
        case 'Views/login':{
            recuperarlogin(pedido,respuesta);
            break;
        }
        case 'Views/test':{
            recuperarTest(pedido,respuesta);
            break;
        }
        default : {
            fs.exists(camino,function(existe){
                if (existe) {
                    fs.readFile(camino,function(error,contenido){
                        if (error) {
                            respuesta.writeHead(500, {'Content-Type': 'text/plain'});
                            respuesta.write('Error interno');
                            respuesta.end();
                        } else {
                            var vec = camino.split('.');
                            var extension=vec[vec.length-1];
                            var mimearchivo=mime[extension];
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

function recuperar(pedido,respuesta) {
    var info = '';
    pedido.on('data', function(datosparciales){
        info += datosparciales;
    });
    pedido.on('end', function(){
        var formulario = querystring.parse(info);
        respuesta.writeHead(200, {'Content-Type': 'text/html'});
        var pagina='<!doctype html><html><head><title>Registro exitoso</title><meta charset="utf-8" />' +
            '<meta http-equiv="content-type" content="text/html; charset=utf-8" /><meta name="description" content="" /><meta name="keywords" content="" />' +
            "<link href='http://fonts.googleapis.com/css?family=Raleway:400,100,200,300,500,600,700,800,900' rel='stylesheet' type='text/css'>"+
            '<script src="js/html5shiv.js"></script><![endif]-->'+
            '<script src="http://ajax.googleapis.com/ajax/libs/jquery/1.11.0/jquery.min.js"></script>'+
            '<script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.5.7/angular.min.js"></script>'+
            '<script src="js/skel.min.js"></script>'+
            '<script src="js/skel-panels.min.js"></script>'+
            '<script src="js/init.js"></script>'+
            '<script src="server.js"></script>"'+
            '<noscript> <link rel="stylesheet" href="../css/skel-noscript.css" /> <link rel="stylesheet" href="../css/style.css" /> <link rel="stylesheet" href="../css/style-desktop.css" /> </noscript>'+
            ' <link rel="stylesheet" href="../css/ie/v9.css"/><![endif]-->' +
            '</head><body>'+
            '<div id="banner"></div>'+
            '<div id="header"> <div class="container"> <!-- Logo --> <div id="logo"> <h1><a href="#">ScrapBooks</a></h1> </div> <!-- Nav --> <nav id="nav"> <ul> <li ><a href="index.html">Inicio</a></li> <li><a href="IniciarSesion.html">Iniciar Sesión</a></li> <li class="active"><a href="Registrarse.html">Registrarse</a></li> <li><a href="Test.html">Test</a></li> </ul> </nav> </div> </div>'+
            '<div id="featured">'+
            '<div class="container">'+
            '<div class="row">'+
            '<div class="12u">'+
            '<section>'+
            '<header>'+
            '<h2>Registro exitoso</h2>'+
            '</header>'+
            'Se ha enviado un mail de confirmación al correo '+formulario['email']+'<br>'+
            '<a href="test.html">Hacer el test</a>'+
            '</body></html>';
        respuesta.end(pagina);
        var datos = {mail: formulario['email'], nombre: formulario['nombre'] , rol: formulario['rol'], contrasenia: formulario['clave'], confirmacion_mail: 'NO', confirmacion_administrador:'NO', tipo_aprendizaje: '1'};
        connection.connect();

        connection.query("INSERT INTO alumno SET ?", datos);

        connection.end();

    });
}
function recuperarTest(pedido,respuesta){
    var info = '';
    pedido.on('data', function(datosparciales){
        info += datosparciales;
    });
    pedido.on('end', function(){
        var formulario = querystring.parse(info);
        respuesta.writeHead(200, {'Content-Type': 'text/html'});
        var pagina='<!doctype html><html><head><title>Registro exitoso</title><meta charset="utf-8" />' +
            '<meta http-equiv="content-type" content="text/html; charset=utf-8" /><meta name="description" content="" /><meta name="keywords" content="" />' +
            "<link href='http://fonts.googleapis.com/css?family=Raleway:400,100,200,300,500,600,700,800,900' rel='stylesheet' type='text/css'>"+
            '<script src="js/html5shiv.js"></script><![endif]-->'+
            '<script src="http://ajax.googleapis.com/ajax/libs/jquery/1.11.0/jquery.min.js"></script>'+
            '<script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.5.7/angular.min.js"></script>'+
            '<script src="js/skel.min.js"></script>'+
            '<script src="js/skel-panels.min.js"></script>'+
            '<script src="js/init.js"></script>'+
            '<script src="server.js"></script>"'+
            '<noscript> <link rel="stylesheet" href="../css/skel-noscript.css" /> <link rel="stylesheet" href="../css/style.css" /> <link rel="stylesheet" href="../css/style-desktop.css" /> </noscript>'+
            ' <link rel="stylesheet" href="../css/ie/v9.css"/><![endif]-->' +
            '</head><body>'+
            '<div id="banner"></div>'+
            '<div id="header"> <div class="container"> <!-- Logo --> <div id="logo"> <h1><a href="#">ScrapBooks</a></h1> </div> <!-- Nav --> <nav id="nav"> <ul> <li ><a href="index.html">Inicio</a></li> <li><a href="IniciarSesion.html">Iniciar Sesión</a></li> <li class="active"><a href="Registrarse.html">Registrarse</a></li> <li><a href="Test.html">Test</a></li> </ul> </nav> </div> </div>'+
            '<div id="featured">'+
            '<div class="container">'+
            '<div class="row">'+
            '<div class="12u">'+
            '<section>'+
            '<header>'+
            '<h2>Registro exitoso</h2>'+
            '</header>'+
            'Ha completado exitosamente el resgistro'+'<br>'+
            '<a href="portalEstudiante.html">Ir a la pagina de inicio</a>'+
            '</body></html>';
        respuesta.end(pagina);

    });
}
function recuperarTest2(x,y){
    console.log(x);
    console.log(y);
}
function recuperarlogin(pedido,respuesta) {
    var info = '';
    pedido.on('data', function(datosparciales){
        info += datosparciales;
    });
    pedido.on('end', function(){
        var formulario = querystring.parse(info);

        connection.query("SELECT * FROM alumno WHERE mail = ?", formulario['email'], function (err, rows) {
            if (err) throw err;
            if (rows.length != 0) {

                respuesta.writeHead(200, {'Content-Type': 'text/html'});
                for (var i = 0; i < rows.length; i++) {
                    console.log(rows[i].Contrasenia);
                    if (rows[i].Contrasenia == formulario['contrasenia']) {
                        var pagina='<!doctype html><html><head><title>Cuenta iniciada</title><meta charset="utf-8" />' +
                            '<meta http-equiv="content-type" content="text/html; charset=utf-8" /><meta name="description" content="" /><meta name="keywords" content="" />' +
                            "<link href='http://fonts.googleapis.com/css?family=Raleway:400,100,200,300,500,600,700,800,900' rel='stylesheet' type='text/css'>"+
                            '<script src="js/html5shiv.js"></script><![endif]-->'+
                            '<script src="http://ajax.googleapis.com/ajax/libs/jquery/1.11.0/jquery.min.js"></script>'+
                            '<script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.5.7/angular.min.js"></script>'+
                            '<script src="js/skel.min.js"></script>'+
                            '<script src="js/skel-panels.min.js"></script>'+
                            '<script src="js/init.js"></script>'+
                            '<script src="server.js"></script>"'+
                            '<noscript> <link rel="stylesheet" href="../css/skel-noscript.css" /> <link rel="stylesheet" href="../css/style.css" /> <link rel="stylesheet" href="../css/style-desktop.css" /> </noscript>'+
                            ' <link rel="stylesheet" href="../css/ie/v9.css"/><![endif]-->' +
                            '</head><body>'+
                            '<div id="banner"></div>'+
                            '<div id="header"> <div class="container"> <!-- Logo --> <div id="logo"> <h1><a href="#">ScrapBooks</a></h1> </div> <!-- Nav --> <nav id="nav"> <ul> <li ><a href="index.html">Inicio</a></li> <li class="active"><a href="IniciarSesion.html">Iniciar Sesión</a></li> <li><a href="Registrarse.html">Registrarse</a></li> <li><a href="Test.html">Test</a></li> </ul> </nav> </div> </div>'+
                            '<div id="featured">'+
                            '<div class="container">'+
                            '<div class="row">'+
                            '<div class="12u">'+
                            '<section>'+
                            '<header>'+
                            '<h2>Bienvenido '+formulario['email']+'</h2>'+
                            '</header>'+
                            'Cuenta iniciada<br>'+
                            '<a href="portalEstudiante.html">Ir al portal Estudiante</a>'+
                            '</body></html>';
                        respuesta.end(pagina);
                    }
                }

            }
            else{
                connection.query("SELECT * FROM administrador WHERE mail = ?", formulario['email'], function (err, rows) {
                    if (err) throw err;

                    if (rows.length != 0) {
                        respuesta.writeHead(200, {'Content-Type': 'text/html'});
                        for (var i = 0; i < rows.length; i++) {
                            if (rows[i].Contrasenia== formulario['contrasenia']) {
                                var pagina='<!doctype html><html><head><title>Cuenta iniciada</title><meta charset="utf-8" />' +
                                    '<meta http-equiv="content-type" content="text/html; charset=utf-8" /><meta name="description" content="" /><meta name="keywords" content="" />' +
                                    "<link href='http://fonts.googleapis.com/css?family=Raleway:400,100,200,300,500,600,700,800,900' rel='stylesheet' type='text/css'>"+
                                    '<script src="js/html5shiv.js"></script><![endif]-->'+
                                    '<script src="http://ajax.googleapis.com/ajax/libs/jquery/1.11.0/jquery.min.js"></script>'+
                                    '<script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.5.7/angular.min.js"></script>'+
                                    '<script src="js/skel.min.js"></script>'+
                                    '<script src="js/skel-panels.min.js"></script>'+
                                    '<script src="js/init.js"></script>'+
                                    '<script src="server.js"></script>"'+
                                    '<noscript> <link rel="stylesheet" href="../css/skel-noscript.css" /> <link rel="stylesheet" href="../css/style.css" /> <link rel="stylesheet" href="../css/style-desktop.css" /> </noscript>'+
                                    ' <link rel="stylesheet" href="../css/ie/v9.css"/><![endif]-->' +
                                    '</head><body>'+
                                    '<div id="banner"></div>'+
                                    '<div id="header"> <div class="container"> <!-- Logo --> <div id="logo"> <h1><a href="#">ScrapBooks</a></h1> </div> <!-- Nav --> <nav id="nav"> <ul> <li ><a href="index.html">Inicio</a></li> <li class="active"><a href="IniciarSesion.html">Iniciar Sesión</a></li> <li><a href="Registrarse.html">Registrarse</a></li> <li><a href="Test.html">Test</a></li> </ul> </nav> </div> </div>'+
                                    '<div id="featured">'+
                                    '<div class="container">'+
                                    '<div class="row">'+
                                    '<div class="12u">'+
                                    '<section>'+
                                    '<header>'+
                                    '<h2>Bienvenido '+formulario['email']+'</h2>'+
                                    '</header>'+
                                    'Cuenta iniciada<br>'+
                                        '<a href="portalAdministrador.html">Ingresar al portal Administrador</a>'+
                                    '</body></html>';
                                respuesta.end(pagina);
                            }
                        }
                    }

                    else{
                        connection.query("SELECT * FROM profesor WHERE mail = ?", formulario['email'], function (err, rows) {
                            if (err) throw err;

                            if (rows.length != 0) {
                                respuesta.writeHead(200, {'Content-Type': 'text/html'});
                                for (var i = 0; i < rows.length; i++) {
                                    if (rows[i].Contrasenia== formulario['contrasenia']) {
                                        var pagina='<!doctype html><html><head><title>Cuenta iniciada</title><meta charset="utf-8" />' +
                                            '<meta http-equiv="content-type" content="text/html; charset=utf-8" /><meta name="description" content="" /><meta name="keywords" content="" />' +
                                            "<link href='http://fonts.googleapis.com/css?family=Raleway:400,100,200,300,500,600,700,800,900' rel='stylesheet' type='text/css'>"+
                                            '<script src="js/html5shiv.js"></script><![endif]-->'+
                                            '<script src="http://ajax.googleapis.com/ajax/libs/jquery/1.11.0/jquery.min.js"></script>'+
                                            '<script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.5.7/angular.min.js"></script>'+
                                            '<script src="js/skel.min.js"></script>'+
                                            '<script src="js/skel-panels.min.js"></script>'+
                                            '<script src="js/init.js"></script>'+
                                            '<script src="server.js"></script>"'+
                                            '<noscript> <link rel="stylesheet" href="../css/skel-noscript.css" /> <link rel="stylesheet" href="../css/style.css" /> <link rel="stylesheet" href="../css/style-desktop.css" /> </noscript>'+
                                            ' <link rel="stylesheet" href="../css/ie/v9.css"/><![endif]-->' +
                                            '</head><body>'+
                                            '<div id="banner"></div>'+
                                            '<div id="header"> <div class="container"> <!-- Logo --> <div id="logo"> <h1><a href="#">ScrapBooks</a></h1> </div> <!-- Nav --> <nav id="nav"> <ul> <li ><a href="index.html">Inicio</a></li> <li class="active"><a href="IniciarSesion.html">Iniciar Sesión</a></li> <li><a href="Registrarse.html">Registrarse</a></li> <li><a href="Test.html">Test</a></li> </ul> </nav> </div> </div>'+
                                            '<div id="featured">'+
                                            '<div class="container">'+
                                            '<div class="row">'+
                                            '<div class="12u">'+
                                            '<section>'+
                                            '<header>'+
                                            '<h2>Bienvenido '+formulario['email']+'</h2>'+
                                            '</header>'+
                                            '<a href="portalProfesor.html">Ingresar al portal profesor</a>'+
                                            '</body></html>';
                                        respuesta.end(pagina);
                                    }
                                }
                            }

                            else{
                                var pagina='<!doctype html><html><head><title>Cuenta iniciada</title><meta charset="utf-8" />' +
                                    '<meta http-equiv="content-type" content="text/html; charset=utf-8" /><meta name="description" content="" /><meta name="keywords" content="" />' +
                                    "<link href='http://fonts.googleapis.com/css?family=Raleway:400,100,200,300,500,600,700,800,900' rel='stylesheet' type='text/css'>"+
                                    '<script src="js/html5shiv.js"></script><![endif]-->'+
                                    '<script src="http://ajax.googleapis.com/ajax/libs/jquery/1.11.0/jquery.min.js"></script>'+
                                    '<script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.5.7/angular.min.js"></script>'+
                                    '<script src="js/skel.min.js"></script>'+
                                    '<script src="js/skel-panels.min.js"></script>'+
                                    '<script src="js/init.js"></script>'+
                                    '<script src="server.js"></script>"'+
                                    '<noscript> <link rel="stylesheet" href="../css/skel-noscript.css" /> <link rel="stylesheet" href="../css/style.css" /> <link rel="stylesheet" href="../css/style-desktop.css" /> </noscript>'+
                                    ' <link rel="stylesheet" href="../css/ie/v9.css"/><![endif]-->' +
                                    '</head><body>'+
                                    '<div id="banner"></div>'+
                                    '<div id="header"> <div class="container"> <!-- Logo --> <div id="logo"> <h1><a href="#">ScrapBooks</a></h1> </div> <!-- Nav --> <nav id="nav"> <ul> <li ><a href="index.html">Inicio</a></li> <li><a href="IniciarSesion.html">Iniciar Sesión</a></li> <li class="active"><a href="Registrarse.html">Registrarse</a></li> <li><a href="Test.html">Test</a></li> </ul> </nav> </div> </div>'+
                                    '<div id="featured">'+
                                    '<div class="container">'+
                                    '<div class="row">'+
                                    '<div class="12u">'+
                                    '<section>'+
                                    '<header>'+
                                    '<h2>Ingreso inválido'+'</h2>'+
                                    '</header>'+
                                    'Intente otra vez<br>'+
                                    '<a href="IniciarSesion.html">Retornar</a>'+
                                    '</body></html>';
                                respuesta.end(pagina);
                            }
                        });
                    }
                });
            }

        });
    });


}
console.log('Servidor web iniciado en http://localhost:9000');
