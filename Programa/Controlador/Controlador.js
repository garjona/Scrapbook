var MensajeError='';
var NombreActivo= '';
var MailActivo= '';
var TipoDeAprendizajeActivo = '';
var CargoActivo = '';
var CarreraActivo = '';
var CampusActivo = '';
var app = angular.module('Controller', ['ngRoute']);

app.controller('NuevoRegistro', function ($scope, $http, $window) {
    $scope.submit = function () {
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
                    NombreActivo = respuesta.split(",")[3].substr(0,1).toUpperCase()+ respuesta.split(",")[3].substr(1);
                    CarreraActivo = respuesta.split(",")[9];
                    CampusActivo = respuesta.split(",")[8];
                    $window.location = "#/Test";

                } else {
                    $scope.MensajeError = 'El mail ya está inscrito';
                    $window.location = "#/Registrarse"

                }

            })


    }
});

app.controller('NuevoIniciarSesion', function ($scope, $http, $window) {
    $scope.submit = function () {
        var data = $.param({
            mail: $scope.mail,
            contrasenia: $scope.contrasenia
        });
        $http.post("/api/iniciarSesion", data)
            .success(function (respuesta) {
                if (respuesta.split(",")[2]=="Profesor"){
                    if(respuesta.split(",")[0] =="OK"){
                        MailActivo = respuesta.split(",")[1];
                        CargoActivo = respuesta.split(",")[2];
                        NombreActivo = respuesta.split(",")[3].substr(0, 1).toUpperCase() + respuesta.split(",")[3].substr(1);
                        $window.location = "#/PerfilProfesor";
                    } else {
                        $window.location = "#/IniciarSesion";
                    }
                } else if (respuesta.split[2]=="Alumno") {
                    //respusta es un string de tipo: respuesta,mail,cargo,nombre,rol,confirmacionMail,ConfirmacionAdm,TipoAprendizaje,campus,carrera
                    if (respuesta.split(",")[0] == 'OK') {
                        $scope.MensajeError = 'Listo';
                        //$window.location.href = 'http://www.google.com';
                        MailActivo = respuesta.split(",")[1];
                        CargoActivo = respuesta.split(",")[2];
                        NombreActivo = respuesta.split(",")[3].substr(0, 1).toUpperCase() + respuesta.split(",")[3].substr(1);
                        CarreraActivo = respuesta.split(",")[9];
                        CampusActivo = respuesta.split(",")[8];
                        //NombreActivo = respuesta.split(" ")[2];
                        $window.location = "#/Perfil";
                    } else {
                        $window.location = "#/IniciarSesion";
                    }
                }

            })


    }
});

app.controller('Inicio', function ($scope) {
    $scope.message = 'Hola Desde Inicio';
});

app.controller('IniciarSesion', function ($scope) {
    $scope.message = 'Hola Desde Iniciar Sesion';
});

app.controller('Registrarse', function ($scope) {
    $scope.message = 'Hola Desde Registrarse';
});

app.controller('Test', function ($scope) {
    $scope.message = 'Hola Desde Registrarse';
});

app.controller('Edicion', function ($scope) {
    $scope.message = 'Hola Desde Edición';
});

app.controller('Perfil', function ($scope) {
    $scope.message = 'Hola Desde Perfil';
});

app.controller('PerfilProfesor', function ($scope) {
    $scope.message = 'Hola Desde Perfil Profesor';
});

app.controller('FIS120', function ($scope) {
    $scope.message = 'Hola Desde FIS120';
});

app.controller('FIS1201', function ($scope) {
    $scope.message = 'Hola Desde FIS1201';
});

app.controller('Perfil1', function ($scope) {
    $scope.message = 'Hola Desde Perfil1';
});

app.controller('Mail', function ($scope) {
    $scope.message = 'Hola Desde Mail';
});

app.controller('PerfilProfesor', function ($scope) {
    $scope.Nombre = 'Dexter';
    $scope.Cargo = 'Profesor';
    $scope.Carrera = 'FIS 120';
    $scope.Campus = 'San Joaquín';
});

app.controller('Admin', function ($scope) {
    $scope.message = 'Hola Desde Admin';
});

app.controller('Datos', function ($scope) {
    $scope.Inicio = 'ScrapBooks';
    $scope.IniciarSesion = ' Iniciar Sesión ';
    $scope.Registrarse = ' Registrarse ';
    $scope.Mail = 'Mail Sansano';
    $scope.Rol = 'Rol (Sin Guión)';
    $scope.Contraseña = 'Contraseña';
    $scope.MensajeError= MensajeError;
    $scope.NombreActivo= NombreActivo;
    $scope.MailActivo= MailActivo;
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
        }
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

        .when('/Admin', {
            templateUrl: '../Vista/Paginas/PerfilAdmin.html',
            controller: 'Admin'
        })

        .otherwise({redirectTo: '/'});
});

