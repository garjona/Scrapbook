var mysql = require('mysql');
var connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "scrapbook"
});


var express = require('express');
//instanciar
var app = express();




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
    var camino=objetourl.pathname;
    if(camino=='/') {
        camino = 'Vista/Index.html';
    } else if(camino.substring(0, 15)=="/Controlador.js"){
        camino = 'Controlador/Controlador.js';
    } else if(camino.substring(0,5)=="/Cont"){
        camino = "Controlador/Controlador.js";
    } else if (camino.substring(0,4)=="/Vis") {
        camino=camino.substring(1);
    } else if (camino.substring(0,4)=="/ser") {
        camino = "Controlador"+camino.substring();
    }else {
            camino = 'Vista'+camino;
    }

    encaminar(pedido,respuesta,camino);
});
function ConsultaBDIniciarSesion(mail,contrasenia) {
    var datos = [["gabriel.arjona.14","gabriel"],["jorge.aliste.14","jorge"]];
    for (var i=0; i<datos.length; i++){
        if ((datos[i][0] == mail) && (datos[i][1] == contrasenia)){
            return "#/Perfil";
        }
    }
    return "#/IniciarSesion"
}

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

servidor.listen(9000);

console.log('Servidor web iniciado en http://localhost:9000');
