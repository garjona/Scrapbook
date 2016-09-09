/**
 * Created by arjon on 05-Sep-16.
 */
alert("aqui");

var express;
express = require('express');
alert("alla");
var mysql = require('mysql');


var app = express();
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'scrapbook'
});
alert("aqui");
    connection.connect(function(error){
        if(error){
            alert("No se pudo conectar a la base de datos");
            throw error;
        }else{
            console.log('Conexion correcta.');
        }
    });
    connection.query("INSERT INTO administrador (mail, nombre, contrasenia) VALUES ('aaaaaa','adsf','dsaf');");
    connection.end();

app.get('/insertarn',function insertar() {
    connection.query("INSERT INTO administrador (mail, nombre, contrasenia) VALUES ('aaa','aaaa','aaa');");
});
function desconectar(){
    connection.end();
};