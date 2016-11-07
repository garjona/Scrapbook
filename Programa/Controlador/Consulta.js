function ConsultaBDIniciarSesion(mail,contrasenia) {
    return "#/Perfil";
    var mysql =require('mysql');
    var connection;
    connection = mysql.createConnection({
        host: '127.0.0.1',
        user: 'root',
        password: 'root',
        database: 'scrapbook'
    });
    connection.connect(function(err) {
        if (err) {
            console.error('error connecting: ' + err.stack);
            return;
        }

        console.log('connected as id ' + connection.threadId);
    });
    connection.query("SELECT * FROM alumno WHERE mail = ?","jorge.aliste.14@sansano.usm.cl" , function (err, rows) {
        if (err) throw err;
        if (rows.length != 0) {
            return "#/PerfilProfesor"
        }
    });

    var datos = [["gabriel.arjona.14","gabriel","3"],["jorge.aliste.14","jorge","0"],["a","a","3"],["profesor","profesor","1"]];
    for (var i=0; i<datos.length; i++){
        if ((datos[i][0] == mail) && (datos[i][1] == contrasenia)&&(datos[i][2]=="1")){
            return "#/PerfilProfesor";
        }
        else if ((datos[i][0] == mail) && (datos[i][1] == contrasenia)&&(datos[i][2]=="0")){
            return "#/Perfil1";
        }
        else if ((datos[i][0] == mail) && (datos[i][1] == contrasenia)&&(datos[i][2]=="3")){
            return "#/Perfil";
        }
    }
    connection.end();
    return "#/IniciarSesion"
}