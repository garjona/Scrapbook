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

//ruteo

app.use(express.static(__dirname + '/Views'));
app.use(express.static(__dirname + '/'));
app.get('/', function(req,res) {
	res.sendfile(__dirname + '/Views/index.html');
});
app.get('/about', function(req, res){
	res.sendfile(__dirname + 'Views/about.html');
});
app.use(express.static('response.write("Hola Mundo");public'));


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
		var pagina='<!doctype html><html><head><title>FisFinder120 Home</title><meta charset="utf-8" />' +
			'<meta name="viewport" content="width=device-width, initial-scale=1" />' +
			'<!--[if lte IE 8]><script src="assets/js/ie/html5shiv.js"></script><![endif]-->' +
			'<link rel="stylesheet" href="assets/css/main.css" />' +
			'<!--[if lte IE 8]><link rel="stylesheet" href="assets/css/ie8.css" /><![endif]--></head><body>'+
		           'Nombre de usuario:'+formulario['nombre']+'<br>'+
				   'Clave:'+formulario['clave']+'<br>'+
				   '<a href="index.html">Retornar</a>'+
		           '</body></html>';
		respuesta.end(pagina);
		var datos = {mail: formulario['email'], nombre: formulario['nombre']  , contrasenia: formulario['clave'],  tipo: '0'};
		connection.connect();

		connection.query("INSERT INTO alumno SET ?", datos);

		connection.end();

    });	
}

console.log('Servidor web iniciado');