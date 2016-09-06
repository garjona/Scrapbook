/**
 * Created by arjon on 05-Sep-16.
 */

var mysql      = require('mysql');
var connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : '',
    database : 'scrapbook'
});



connection.connect();

connection.query("INSERT INTO administrador (mail, nombre, contrasenia) VALUES ('asdfdsf','gabriel arjona',230);");

connection.end();