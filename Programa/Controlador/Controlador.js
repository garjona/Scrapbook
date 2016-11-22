var MensajeError = '';
var NombreActivo = '';
var MailActivo = '';
var TipoDeAprendizajeActivo = '';
var CargoActivo = '';
var CarreraActivo = '';
var CampusActivo = '';
var ImgActiva = '';
var UnidadActivo = '';
var NombreUnidadActivo = '';
var SubUnidadActivo = '';
var TipoActivo = '0'; //0=todos, 1= tipo1 ,... n=tipon
var app = angular.module('Controller', ['ngRoute']);

app.controller('EditarProfesor', function ($scope, $http) {
    $http.get("/api/mostrarProfesor")
        .then(function (respuesta) {
            if (respuesta.data.split("$")[0] == 'OK') {
                $scope.listas = JSON.parse(respuesta.data.split("$")[1]);
            } else {
                MensajeError = 'Hubo un error';
            }
        });
    $scope.del = function (i) {
        var data = $.param({
            mail: $scope.listas[i].Mail
        });
        $scope.listas.splice(i, 1);
        $http.post("/api/eliminarProfesor", data)
            .success(function (respuesta) {
                //la respuesta es un string con respuesta,mail,cargo,nombre
                if (respuesta.split(",")[0] == 'OK') {
                    MensajeError = 'Se ha eliminado exitosamente el profesor de mail ' + respuesta.split(",")[1];
                } else {
                    MensajeError = 'El mail no se encuentra en la base de datos';
                }
            })
    };
    $scope.submitEliminar = function () {
        var data = $.param({
            mail: $scope.mail2
        });
        $http.post("/api/eliminarProfesor", data)
            .success(function (respuesta) {
                //la respuesta es un string con respuesta,mail,cargo,nombre
                if (respuesta.split(",")[0] == 'OK') {
                    MensajeError = 'Se ha eliminado exitosamente el profesor de mail ' + respuesta.split(",")[1];
                    for (i=0;i<$scope.listas.length;i++){
                        if ($scope.listas[i].Mail == $scope.mail2){
                            $scope.listas.splice(i, 1);
                        }
                    }

                } else {
                    MensajeError = 'El mail no se encuentra en la base de datos';
                }
            })
    };
    $scope.submitNuevo = function () {
        var data = $.param({
            nombre: $scope.nombre,
            mail: $scope.mail,
            contrasenia: $scope.contrasenia
        });
        $http.post("/api/nuevoProfesor", data)
            .success(function (respuesta) {
                //la respuesta es un string con respuesta,mail,cargo,nombre
                if (respuesta.split(",")[0] == 'OK') {
                    MensajeError = 'Se ha registrado exitosamente al profesor ' + respuesta.split(",")[3].substr(0, 1).toUpperCase() + respuesta.split(",")[3].substr(1);
                    $scope.listas.push({Mail: $scope.mail, Nombre: $scope.nombre});
                } else {
                    MensajeError = 'El mail ya está inscrito';
                }
            })
    }
});
app.controller('MostrarUnidad1', function ($scope, $http, $window) {
    $http.get("/api/mostrarUnidad1")
        .then(function (respuesta) {
            if (respuesta.data.split("$")[0] == 'OK') {
                $scope.listas = JSON.parse(respuesta.data.split("$")[1]);
                ListasActivo = $scope.listas;
            } else {
                MensajeError = 'Hubo un error';
            }
        });

    $scope.mostrar = function (unidad, i) {
        $window.location = "#/Edicion";
        UnidadActivo = unidad;
        SubUnidadActivo = i;
        TipoActivo = '0';
    };


});

app.controller('MostrarUnidad2', function ($scope, $http, $window) {
    $http.get("/api/mostrarUnidad2")
        .then(function (respuesta) {
            if (respuesta.data.split("$")[0] == 'OK') {
                $scope.listas = JSON.parse(respuesta.data.split("$")[1]);
                ListasActivo = $scope.listas;
            } else {
                MensajeError = 'Hubo un error';
            }
        });
});

app.controller('MostrarUnidad3', function ($scope, $http, $window) {
    $http.get("/api/mostrarUnidad3")
        .then(function (respuesta) {
            if (respuesta.data.split("$")[0] == 'OK') {
                $scope.listas = JSON.parse(respuesta.data.split("$")[1]);
                ListasActivo = $scope.listas;
            } else {
                MensajeError = 'Hubo un error';
            }
        });
});

app.controller('MostrarUnidad4', function ($scope, $http, $window) {
    $http.get("/api/mostrarUnidad4")
        .then(function (respuesta) {
            if (respuesta.data.split("$")[0] == 'OK') {
                $scope.listas = JSON.parse(respuesta.data.split("$")[1]);
                ListasActivo = $scope.listas;
            } else {
                MensajeError = 'Hubo un error';
            }
        });
});

app.controller('MostrarUnidad5', function ($scope, $http, $window) {
    $http.get("/api/mostrarUnidad5")
        .then(function (respuesta) {
            if (respuesta.data.split("$")[0] == 'OK') {
                $scope.listas = JSON.parse(respuesta.data.split("$")[1]);
                ListasActivo = $scope.listas;
            } else {
                MensajeError = 'Hubo un error';
            }
        });
});

app.controller('feedback', function ($scope, $http) {
    $http.get("/api/mostrarFeedback")
        .then(function (respuesta) {
            if (respuesta.data.split("$")[0] == 'OK') {
                $scope.listas = JSON.parse(respuesta.data.split("$")[1]);
            } else {
                MensajeError = 'Hubo un error';
            }
        });

});

app.controller('EliminarAlumno', function ($scope, $http) {
    $http.get("/api/mostrarAlumnos")
        .then(function (respuesta) {
            if (respuesta.data.split("$")[0] == 'OK') {
                $scope.listas = JSON.parse(respuesta.data.split("$")[1]);
            } else {
                MensajeError = 'Hubo un error';
            }
        });
    $scope.del = function (i) {
        var data = $.param({
            mail: $scope.listas[i].Mail
        });
        $scope.listas.splice(i, 1);
        $http.post("/api/eliminarAlumno", data)
            .success(function (respuesta) {
                //la respuesta es un string con respuesta,mail,cargo,nombre
                if (respuesta.split(",")[0] == 'OK') {
                    MensajeError = 'Se ha eliminado exitosamente al alumno de mail ' + respuesta.split(",")[1];
                } else {
                    MensajeError = 'El mail no se encuentra en la base de datos';
                }
            })
    };
    $scope.submit = function () {
        var data = $.param({
            mail: $scope.mail
        });
        $http.post("/api/eliminarAlumno", data)
            .success(function (respuesta) {
                //la respuesta es un string con respuesta,mail,cargo,nombre
                if (respuesta.split(",")[0] == 'OK') {
                    MensajeError = 'Se ha eliminado exitosamente al alumno de mail ' + respuesta.split(",")[1];
                    for (i=0;i<$scope.listas.length;i++){
                        if ($scope.listas[i].Mail == $scope.mail){
                            $scope.listas.splice(i, 1);
                        }
                    }

                } else {
                    MensajeError = 'El mail no se encuentra en la base de datos';
                }
            })
    }
});

app.controller('Registrarse', function ($scope, $http, $window) {
    $scope.nombre="";
    $scope.mail="";
    $scope.rol="";
    $scope.contrasenia="";
    $scope.carrera="";
    $scope.campus="";
    $scope.submit = function () {
        if($scope.nombre!="" && $scope.mail!="" && $scope.rol!="" && $scope.contrasenia!="" && $scope.carrera!=""  && $scope.campus!="" ) {
            var data = $.param({
                nombre: $scope.nombre,
                mail: $scope.mail,
                rol: $scope.rol,
                contrasenia: $scope.contrasenia,
                carrera: $scope.carrera,
                campus: $scope.campus
            });
            $http.post("/api/registrarse", data)
                .success(function (respuesta) {
                    //la respuesta es un string con respuesta,mail,cargo,nombre,rol,confirmacionMail,ConfirmacionAdm,TipoAprendizaje,campus,carrera
                    if (respuesta.split(",")[0] == 'OK') {
                        $scope.MensajeError = 'Listo';
                        //$window.location.href = 'http://www.google.com';
                        MailActivo = respuesta.split(",")[1];
                        CargoActivo = respuesta.split(",")[2];
                        NombreActivo = respuesta.split(",")[3].substr(0, 1).toUpperCase() + respuesta.split(",")[3].substr(1);
                        CarreraActivo = respuesta.split(",")[9];
                        CampusActivo = respuesta.split(",")[8];
                        ImgActiva = respuesta.split(",")[10];
                        $window.location = "#/Test";

                    } else {
                        $window.location = "#/Registrarse"
                    }
                })
        } else{
            $scope.MensajeError= "Faltan datos por rellenar"
        }

    }
});


app.controller('EditarUnidades', function ($scope, $http) {
    $http.get("/api/mostrarUnidades")
        .then(function (respuesta) {
            if (respuesta.data.split("$")[0] == 'OK') {
                $scope.listas = JSON.parse(respuesta.data.split("$")[1]);
                ListaActivo = $scope.listas;
            } else {
                MensajeError = 'Hubo un error';
            }
        });

    $scope.mostrar = function (unidad, i) {
        $window.location = "#/Edicion";
        UnidadActivo = unidad;
        SubUnidadActivo = i;
        TipoActivo = '0';
    };
    $scope.del = function (numeroU,numeroSub) {
        posicion1=0;
        posicion2=0;
        for (i=0;i<$scope.listas.length;i++){
            for (j=0;j<$scope.listas[i].SubUnidad.length;j++){
                if (String($scope.listas[i]['Numero'])==numeroU && String($scope.listas[i]['SubUnidad'][j]==numeroSub)){
                    posicion1=i;
                    posicion2=j;
                }
            }
        }
        var data = $.param({
            unidad: numeroU,
            subUnidad : numeroSub
        });
        $scope.listas[posicion1].SubUnidad.splice(posicion2, 1);
        $http.post("/api/eliminarUnidad", data)
            .success(function (respuesta) {
                //la respuesta es un string con respuesta,mail,cargo,nombre
                if (respuesta.split(",")[0] == 'OK') {
                    MensajeError = 'Se ha eliminado exitosamente la unidad ';
                } else {
                    MensajeError = 'La unidad no se encuentra en la base de datos';
                }
            })
    };
});

app.controller('IniciarSesion', function ($scope, $http, $window) {
    $scope.submit = function () {
        var data = $.param({
            mail: $scope.mail,
            contrasenia: $scope.contrasenia
        });
        $http.post("/api/iniciarSesion", data)
            .success(function (respuesta) {
                if (respuesta.split(",")[0] == "OK") {
                    if (respuesta.split(",")[2] == "Profesor") {
                        MailActivo = respuesta.split(",")[1];
                        CargoActivo = 'Profesor';
                        NombreActivo = respuesta.split(",")[3].substr(0, 1).toUpperCase() + respuesta.split(",")[3].substr(1);
                        $window.location = "#/PerfilProfesor";
                    } else if (respuesta.split(",")[2] == "Alumno") {
                        //respusta es un string de tipo: respuesta,mail,cargo,nombre,rol,confirmacionMail,ConfirmacionAdm,TipoAprendizaje,campus,carrera
                        $scope.MensajeError = 'Listo';
                        //$window.location.href = 'http://www.google.com';
                        MailActivo = respuesta.split(",")[1];
                        CargoActivo = 'Alumno';
                        NombreActivo = respuesta.split(",")[3].substr(0, 1).toUpperCase() + respuesta.split(",")[3].substr(1);
                        CarreraActivo = respuesta.split(",")[9];
                        CampusActivo = respuesta.split(",")[8];
                        ImgActiva = respuesta.split(",")[10];
                        TipoDeAprendizajeActivo = respuesta.split(",")[7];
                        $window.location = "#/Perfil";
                    } else if (respuesta.split(",")[2] == "Administrador") {
                        MailActivo = respuesta.split(",")[1];
                        CargoActivo = 'Administrador';
                        NombreActivo = respuesta.split(",")[3].substr(0, 1).toUpperCase() + respuesta.split(",")[3].substr(1);
                        $window.location = "#/PerfilAdministrador";
                    }
                } else {
                    $window.location = "#/IniciarSesion";
                }

            })


    }
});

app.controller('MostrarEdicion', function ($scope, $http, $sce, $window) {
    $scope.nombreUnidad = NombreUnidadActivo;
    var data = $.param({
        unidad: UnidadActivo,
        subUnidad: SubUnidadActivo
    });
    $http.post("/api/mostrarColumnas", data)
        .success(function (respuesta) {
            //la respuesta es un string con respuesta,mail,cargo,nombre
            if (respuesta.split("$")[0] == 'OK') {
                $scope.listaTemp = JSON.parse(respuesta.split("$")[1]);
                $scope.lis1 =[];
                $scope.lis2 =[];
                $scope.lis3 =[];
                for(i=0;i<$scope.listaTemp.length;i++){
                    $scope.listaTemp[i].Contenido=$sce.trustAsHtml($scope.listaTemp[i].Contenido);
                    if (i % 3 == 0){
                        $scope.lis1.push($scope.listaTemp[i]);
                    }else if (i % 3 == 1){
                        $scope.lis2.push($scope.listaTemp[i]);
                    }else if (i % 3 == 2){
                        $scope.lis3.push($scope.listaTemp[i]);
                    }
                }
            } else {
                MensajeError = 'El mail ya está inscrito';

            }
        });
    $scope.refrescarEdicion = function (j) {
        contador=0;
        $scope.lis1 =[];
        $scope.lis2 =[];
        $scope.lis3 =[];
        for(i=0;i<$scope.listaTemp.length;i++){
            if(j==0){
                if (i % 3 == 0){
                    $scope.lis1.push($scope.listaTemp[i]);
                }else if (i % 3 == 1){
                    $scope.lis2.push($scope.listaTemp[i]);
                }else if (i % 3 == 2){
                    $scope.lis3.push($scope.listaTemp[i]);
                }
            } else if(j==1 && String($scope.listaTemp[i].Uno)=='1'){
                if (contador % 3 == 0){
                    $scope.lis1.push($scope.listaTemp[i]);
                }else if (contador % 3 == 1){
                    $scope.lis2.push($scope.listaTemp[i]);
                }else if (contador % 3 == 2){
                    $scope.lis3.push($scope.listaTemp[i]);
                }
                contador++;
            } else if(j==2 && String($scope.listaTemp[i].Dos)=='1'){
                if (contador % 3 == 0){
                    $scope.lis1.push($scope.listaTemp[i]);
                }else if (contador % 3 == 1){
                    $scope.lis2.push($scope.listaTemp[i]);
                }else if (contador % 3 == 2){
                    $scope.lis3.push($scope.listaTemp[i]);
                }
                contador++;
            } else if(j==3 && String($scope.listaTemp[i].Tres)=='1'){
                if (contador % 3 == 0){
                    $scope.lis1.push($scope.listaTemp[i]);
                }else if (contador % 3 == 1){
                    $scope.lis2.push($scope.listaTemp[i]);
                }else if (contador % 3 == 2){
                    $scope.lis3.push($scope.listaTemp[i]);
                }
                contador++;
            } else if(j==4 && String($scope.listaTemp[i].Cuatro)=='1'){
                if (contador % 3 == 0){
                    $scope.lis1.push($scope.listaTemp[i]);
                }else if (contador % 3 == 1){
                    $scope.lis2.push($scope.listaTemp[i]);
                }else if (contador % 3 == 2){
                    $scope.lis3.push($scope.listaTemp[i]);
                }
                contador++;
            }
        }
    };
});

app.controller('Inicio', function ($scope) {
    $scope.MensajeError = '';
    $scope.NombreActivo = '';
    $scope.MailActivo = '';
    $scope.TipoDeAprendizajeActivo = '';
    $scope.CargoActivo = '';
    $scope.CarreraActivo = '';
    $scope.CampusActivo = '';
    MensajeError = '';
    NombreActivo = '';
    MailActivo = '';
    TipoDeAprendizajeActivo = '';
    CargoActivo = '';
    CarreraActivo = '';
    CampusActivo = '';
    ImgActiva = '';
    UnidadActivo = '';
    SubUnidadActivo = '';
    TipoActivo = '0';

});

app.controller('Test', function ($scope, $window) {
    $scope.reedirigir = function (i) {
        $scope.palabra = i;
        if (i == "Usted es un Adaptador") {
            $window.location = "#/Mail";
        } else if (i == "Usted es un Divergente") {
            $window.location = "#/Mail";
        } else if (i == "Ustes es un Convergent") {
            $window.location = "#/Mail";
        } else if (i == "Ustes es un Asimilador") {
            $window.location = "#/Mail";
        }
    };
    $scope.message = 'Hola Desde Registrarse';
});

app.controller('Edicion', function ($scope, $window) {
    $scope.message = 'Hola Desde Edición';
});

app.controller('Perfil', function ($scope, $http, $window) {
    $scope.MensajeError = MensajeError;
    $scope.NombreActivo = NombreActivo;
    $scope.MailActivo = MailActivo;
    $scope.TipoDeAprendizajeActivo = TipoDeAprendizajeActivo;
    $scope.CargoActivo = CargoActivo;
    $scope.CarreraActivo = CarreraActivo;
    $scope.CampusActivo = CampusActivo;
    $scope.ImgActiva = ImgActiva;
    $http.get("/api/mostrarUnidades")
        .then(function (respuesta) {
            if (respuesta.data.split("$")[0] == 'OK') {
                $scope.listas = JSON.parse(respuesta.data.split("$")[1]);
                ListaActivo = $scope.listas;
            } else {
                MensajeError = 'Hubo un error';
            }
        });
    $scope.cambiar = function (i) {
        var data = $.param({
            nombre: $scope.NombreActivo,
            imagen: $scope.imagen
        });
        if ($scope.imagen == '') return;
        //$scope.listas.splice(i, 1);
        $http.post("/api/cambiarImagen", data)
            .success(function (respuesta) {
                //la respuesta es un string con respuesta,mail,cargo,nombre
                if (respuesta.split(",")[0] == 'OK') {
                    MensajeError = 'Se ha cambiado tu imagen!' + respuesta.split(",")[1];
                    $scope.ImgActiva = $scope.imagen;
                } else {
                    MensajeError = 'No funcionó el cambio de imagen!';
                }
            })

    };
    $scope.mostrar = function (unidad, i) {
        $window.location = "#/FIS120";
        UnidadActivo = unidad;
        SubUnidadActivo = i;
        TipoActivo = '0';
    };
});

app.controller('PerfilProfesor', function ($scope, $http, $window) {
    $scope.MensajeError = MensajeError;
    $scope.NombreActivo = NombreActivo;
    $scope.MailActivo = MailActivo;
    $scope.TipoDeAprendizajeActivo = TipoDeAprendizajeActivo;
    $scope.CargoActivo = CargoActivo;
    $scope.CarreraActivo = CarreraActivo;
    $scope.CampusActivo = CampusActivo;
    $http.get("/api/mostrarUnidades")
        .then(function (respuesta) {
            if (respuesta.data.split("$")[0] == 'OK') {
                $scope.listas = JSON.parse(respuesta.data.split("$")[1]);
                ListaActivo = $scope.listas;
            } else {
                MensajeError = 'Hubo un error';
            }
        });

    $scope.mostrar = function (unidad, i) {
        $window.location = "#/Edicion";
        UnidadActivo = unidad;
        SubUnidadActivo = i;
        TipoActivo = '0';
    };
});

app.controller('FIS120', function ($scope, $http, $sce, $window) {

    if (CargoActivo != "Alumno") {
        $window.location = "#/";
    }
    $scope.nombreUnidad = NombreUnidadActivo;
    var data = $.param({
        unidad: UnidadActivo,
        subUnidad: SubUnidadActivo
    });
    $http.post("/api/mostrarColumnas", data)
        .success(function (respuesta) {
            //la respuesta es un string con respuesta,mail,cargo,nombre
            if (respuesta.split("$")[0] == 'OK') {
                $scope.listaTemp = JSON.parse(respuesta.split("$")[1]);
                contador=0;
                $scope.lis1 =[];
                $scope.lis2 =[];
                $scope.lis3 =[];
                for(i=0;i<$scope.listaTemp.length;i++){
                    $scope.listaTemp[i].Contenido=$sce.trustAsHtml($scope.listaTemp[i].Contenido)
                    if(String(TipoDeAprendizajeActivo)=='0'){
                        if (i % 3 == 0){
                            $scope.lis1.push($scope.listaTemp[i]);
                        }else if (i % 3 == 1){
                            $scope.lis2.push($scope.listaTemp[i]);
                        }else if (i % 3 == 2){
                            $scope.lis3.push($scope.listaTemp[i]);
                        }
                    } else if(String(TipoDeAprendizajeActivo)=='1' && String($scope.listaTemp[i].Uno)=='1'){
                        if (contador % 3 == 0){
                            $scope.lis1.push($scope.listaTemp[i]);
                        }else if (contador % 3 == 1){
                            $scope.lis2.push($scope.listaTemp[i]);
                        }else if (contador % 3 == 2){
                            $scope.lis3.push($scope.listaTemp[i]);
                        }
                        contador++;
                    } else if(String(TipoDeAprendizajeActivo)=='2' && String($scope.listaTemp[i].Dos)=='1'){
                        if (contador % 3 == 0){
                            $scope.lis1.push($scope.listaTemp[i]);
                        }else if (contador % 3 == 1){
                            $scope.lis2.push($scope.listaTemp[i]);
                        }else if (contador % 3 == 2){
                            $scope.lis3.push($scope.listaTemp[i]);
                        }
                        contador++;
                    } else if(String(TipoDeAprendizajeActivo)=='3' && String($scope.listaTemp[i].Tres)=='1'){
                        if (contador % 3 == 0){
                            $scope.lis1.push($scope.listaTemp[i]);
                        }else if (contador % 3 == 1){
                            $scope.lis2.push($scope.listaTemp[i]);
                        }else if (contador % 3 == 2){
                            $scope.lis3.push($scope.listaTemp[i]);
                        }
                        contador++;
                    } else if(String(TipoDeAprendizajeActivo)=='4' && String($scope.listaTemp[i].Cuatro)=='1'){
                        if (contador % 3 == 0){
                            $scope.lis1.push($scope.listaTemp[i]);
                        }else if (contador % 3 == 1){
                            $scope.lis2.push($scope.listaTemp[i]);
                        }else if (contador % 3 == 2){
                            $scope.lis3.push($scope.listaTemp[i]);
                        }
                        contador++;
                    }
                }
            } else {
                MensajeError = 'El mail ya está inscrito';

            }
        });

    // PARA REALIZAR FEEDBACK
    $scope.titulo = '';
    $scope.comentario = '';
    $scope.limpiar = function(){
        $scope.titulo = '';
        $scope.comentario = '';
    }
    $scope.feedback = function () {
        var data1 = $.param({
            titu: $scope.titulo,
            coment: $scope.comentario,
            mail: MailActivo
        });
        $http.post("/api/darFeedback", data1)
            .success(function (respuesta) {
                //la respuesta es un string con respuesta,mail,cargo,nombre
                if (respuesta.split(",")[0] == 'OK') {
                    MensajeError = 'Feedback Realizado!' + respuesta.split(",")[1];
                    $scope.titulo = '';
                    $scope.comentario = '';
                    MensajeError = 'No FeedBack!';
                    $scope.titulo = '';
                    $scope.comentario = '';
                }
            })
        $scope.titulo = '';
        $scope.comentario = '';
    };

});

app.controller('FIS1201', function ($scope) {
    $scope.message = 'Hola Desde FIS1201';
});

app.controller('Mail', function ($scope, $http) {
});

app.controller('AgregarContenido', function ($scope, $window) {
    $scope.message = 'Hola Desde Mail';
});

app.controller('Adaptador', function ($scope, $http, $window) {
    var data = $.param({
        mail: MailActivo,
        nombre: NombreActivo,
        tipo: "1"
    });
    $http.post("/api/enviarMail", data)
        .success(function (respuesta) {
            if (respuesta.split(",")[0] == 'OK') {
                MensajeError = 'Se ha enviado un mail ';
            } else {
                MensajeError = 'Error al conectarse a la base de datos';
            }
        });
    $window.location = "#/Mail";
});

app.controller('Convergente', function ($scope, $http, $window) {
    var data = $.param({
        mail: MailActivo,
        nombre: NombreActivo,
        tipo: "3"
    });
    $http.post("/api/enviarMail", data)
        .success(function (respuesta) {
            if (respuesta.split(",")[0] == 'OK') {
                MensajeError = 'Se ha enviado un mail ';
            } else {
                MensajeError = 'Error al conectarse a la base de datos';
            }
        });
    $window.location = "#/Mail";
});

app.controller('Asimilador', function ($scope, $http, $window) {
    var data = $.param({
        mail: MailActivo,
        nombre: NombreActivo,
        tipo: "4"
    });
    $http.post("/api/enviarMail", data)
        .success(function (respuesta) {
            if (respuesta.split(",")[0] == 'OK') {
                MensajeError = 'Se ha enviado un mail ';
            } else {
                MensajeError = 'Error al conectarse a la base de datos';
            }
        });
    $window.location = "#/Mail";
});

app.controller('Divergente', function ($scope, $http, $window) {
    var data = $.param({
        mail: MailActivo,
        nombre: NombreActivo,
        tipo: "2"
    });
    $http.post("/api/enviarMail", data)
        .success(function (respuesta) {
            if (respuesta.split(",")[0] == 'OK') {
                MensajeError = 'Se ha enviado un mail ';
            } else {
                MensajeError = 'Error al conectarse a la base de datos';
            }
        });
    $window.location = "#/Mail";
});

app.controller('PerfilAdministrador', function ($scope, $http, $window) {
    $scope.MensajeError = MensajeError;
    $scope.NombreActivo = NombreActivo;
    $scope.MailActivo = MailActivo;
    $scope.TipoDeAprendizajeActivo = TipoDeAprendizajeActivo;
    $scope.CargoActivo = CargoActivo;
    $scope.CarreraActivo = CarreraActivo;
    $scope.CampusActivo = CampusActivo;
    $http.get("/api/mostrarUnidades")
        .then(function (respuesta) {
            if (respuesta.data.split("$")[0] == 'OK') {
                $scope.listas = JSON.parse(respuesta.data.split("$")[1]);
                ListaActivo = $scope.listas;
            } else {
                MensajeError = 'Hubo un error';
            }
        });

    $scope.mostrar = function (unidad, i) {
        $window.location = "#/Edicion";
        UnidadActivo = unidad;
        SubUnidadActivo = i;
        TipoActivo = '0';
    };
    $scope.message = 'Hola Desde Admin';
});

app.controller('Datos', function ($scope, $window) {
    $scope.reedirigirAPerfilSegunCargo = function () {
        if (CargoActivo == "Alumno") {
            $window.location = "#/Perfil";
        }
        if (CargoActivo == "Administrador") {
            $window.location = "#/PerfilAdministrador";
        }
        if (CargoActivo == 'Profesor') {
            $window.location = "#/PerfilProfesor";
        }
    };
    $scope.Inicio = 'ScrapBooks';
    $scope.IniciarSesion = ' Iniciar Sesión ';
    $scope.Registrarse = ' Registrarse ';
    $scope.Mail = 'Mail Sansano';
    $scope.Rol = 'Rol (Sin Guión)';
    $scope.Contraseña = 'Contraseña';
    $scope.MensajeError = MensajeError;
    $scope.NombreActivo = NombreActivo;
    $scope.MailActivo = MailActivo;
    $scope.TipoDeAprendizajeActivo = TipoDeAprendizajeActivo;
    $scope.CargoActivo = CargoActivo;
    $scope.CarreraActivo = CarreraActivo;
    $scope.CampusActivo = CampusActivo;
});

app.controller('InlineEditorController', function ($scope) {





        // $scope is a special object that makes
        // its properties available to the view as
        // variables. Here we set some default values:

        $scope.showtooltip = false;
        //$scope.value = document.getElementById('asd').textContent;

        // Some helper functions that will be
        // available in the angular declarations

        $scope.hideTooltip = function () {

            // When a model is changed, the view will be automatically
            // updated by by AngularJS. In this case it will hide the tooltip.

            $scope.showtooltip = false;
        };

        $scope.toggleTooltip = function (e) {
            e.stopPropagation();
            $scope.showtooltip = !$scope.showtooltip;
        };

        var data = $.param({
            unidad: UnidadActivo,
            subunidad: SubUnidadActivo,
            tipo: TipoActivo
        });
        $http.post("/api/mostrarColumnas", data)
            .success(function (respuesta) {
                //la respuesta es un string con respuesta,mail,cargo,nombre
                if (respuesta.split(",")[0] == 'OK') {
                    MensajeError = 'Se ha eliminado exitosamente al profesor de mail ' + respuesta.split(",")[1];

                } else {
                    MensajeError = 'El mail no se encuentra en la base de datos';
                }
            });
    }
);

app.config(function ($routeProvider) {
    $routeProvider

        .when('/', {
            templateUrl: '../Vista/Paginas/Inicio.html',
            controller: 'Inicio'
        })

        .when('/IniciarSesion', {
            templateUrl: '../Vista/Paginas/IniciarSesion.html',
            controller: 'IniciarSesion'
        })

        .when('/Registrarse', {
            templateUrl: '../Vista/Paginas/Registrarse.html',
            controller: 'Registrarse'
        })

        .when('/Test', {
            templateUrl: '../Vista/Paginas/Test.html',
            controller: 'Test'
        })
        .when('/Perfil', {
            templateUrl: '../Vista/Paginas/Perfil.html',
            controller: 'Perfil'
        })
        .when('/Edicion', {
            templateUrl: '../Vista/Paginas/Edicion.html',
            controller: 'Edicion'
        })
        .when('/FIS120', {
            templateUrl: '../Vista/Paginas/FIS120.html',
            controller: 'FIS120'
        })

        .when('/FIS1201', {
            templateUrl: '../Vista/Paginas/FIS1201.html',
            controller: 'FIS1201'
        })

        .when('/PerfilProfesor', {
            templateUrl: '../Vista/Paginas/PerfilProfesor.html',
            controller: 'PerfilProfesor'
        })

        .when('/Mail', {
            templateUrl: '../Vista/Paginas/Mail.html',
            controller: 'Mail'
        })

        .when('/PerfilAdministrador', {
            templateUrl: '../Vista/Paginas/PerfilAdmin.html',
            controller: 'PerfilAdministrador'
        })
        .when('/EliminarAlumno', {
            templateUrl: '../Vista/Paginas/EliminarAlumno.html',
            controller: 'EliminarAlumno'
        })
        .when('/EditarProfesor', {
            templateUrl: '../Vista/Paginas/EditarProfesor.html',
            controller: 'EditarProfesor'
        })
        .when('/EditarUnidades', {
            templateUrl: '../Vista/Paginas/EditarUnidades.html',
            controller: 'EditarUnidades'
        })
        .when('/AgregarContenido', {
            templateUrl: '../Vista/Paginas/AgregarContenido.html',
            controller: 'AgregarContenido'
        })
        .when('/Adaptador', {
            templateUrl: '../Vista/Paginas/Mail.html',
            controller: 'Adaptador'
        })
        .when('/Asimilador', {
            templateUrl: '../Vista/Paginas/Mail.html',
            controller: 'Asimilador'
        })
        .when('/Convergente', {
            templateUrl: '../Vista/Paginas/Mail.html',
            controller: 'Convergente'
        })
        .when('/Divergente', {
            templateUrl: '../Vista/Paginas/Mail.html',
            controller: 'Divergente'
        })
        .otherwise({redirectTo: '/'});
});

