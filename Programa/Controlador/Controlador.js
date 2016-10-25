var app = angular.module('Controller',['ngRoute']);



app.controller('Inicio', function($scope) {
    $scope.message = 'Hola Desde Inicio';
});

app.controller('IniciarSesion', function($scope) {
    $scope.message = 'Hola Desde Iniciar Sesion';
});

app.controller('Registrarse', function($scope) {
    $scope.message = 'Hola Desde Registrarse';
});

app.controller('Test', function($scope) {
    $scope.message = 'Hola Desde Registrarse';
});

app.controller('Edicion', function($scope) {
    $scope.message = 'Hola Desde Edición';
});

app.controller('Perfil', function($scope) {
    $scope.message = 'Hola Desde Perfil';
});

app.controller('PerfilProfesor', function($scope) {
    $scope.message = 'Hola Desde Perfil Profesor';
});

app.controller('FIS120', function($scope) {
    $scope.message = 'Hola Desde FIS120';
});

app.controller('FIS1201', function($scope) {
    $scope.message = 'Hola Desde FIS1201';
});

app.controller('Perfil1', function($scope) {
    $scope.message = 'Hola Desde Perfil1';
});


app.controller('Perfil', function($scope) {
    $scope.Nombre='Felipe Monsalve';
    $scope.Cargo='Alumno';
    $scope.Carrera='Informática';
    $scope.Campus='San Joaquín';
});

app.controller('PerfilProfesor', function($scope) {
    $scope.Nombre='Dexter';
    $scope.Cargo='Profesor';
    $scope.Carrera='FIS 120';
    $scope.Campus='San Joaquín';
});

app.controller('Jorge', function($scope) {
    $scope.Nombre='Jorge Aliste';
    $scope.Cargo='Alumno';
    $scope.Carrera='Informática';
    $scope.Campus='San Joaquín';
});


app.controller('Datos', function ($scope) {
    $scope.Inicio =  'ScrapBooks';
    $scope.IniciarSesion = ' Iniciar Sesión ';
    $scope.Registrarse = ' Registrarse ';
    $scope.Mail='Mail Sansano';
    $scope.Rol= 'Rol (Sin Guión)';
    $scope.Contraseña= 'Contraseña';

});



app.controller('InlineEditorController', function($scope){

    // $scope is a special object that makes
    // its properties available to the view as
    // variables. Here we set some default values:

    $scope.showtooltip = false;
    //$scope.value = document.getElementById('asd').textContent;

    // Some helper functions that will be
    // available in the angular declarations

    $scope.hideTooltip = function(){

        // When a model is changed, the view will be automatically
        // updated by by AngularJS. In this case it will hide the tooltip.

        $scope.showtooltip = false;
    }

    $scope.toggleTooltip = function(e){
        e.stopPropagation();
        $scope.showtooltip = !$scope.showtooltip;
    }
}
);

app.config(function($routeProvider) {
    $routeProvider

        .when('/', {
            templateUrl : '../Vista/Paginas/Inicio.html',
            controller  : 'Inicio'
        })

        .when('/IniciarSesion', {
            templateUrl : '../Vista/Paginas/IniciarSesion.html',
            controller  : 'IniciarSesion'
        })

        .when('/Registrarse', {
            templateUrl : '../Vista/Paginas/Registrarse.html',
            controller  : 'Registrarse'
        })

        .when('/Test', {
            templateUrl : '../Vista/Paginas/Test.html',
            controller  : 'Test'
        })
        .when('/Perfil', {
            templateUrl : '../Vista/Paginas/Perfil.html',
            controller  : 'Perfil'
        })
        .when('/Edicion', {
            templateUrl : '../Vista/Paginas/Edición.html',
            controller  : 'Edicion'
        })
        .when('/FIS120', {
            templateUrl : '../Vista/Paginas/FIS120.html',
            controller  : 'FIS120'
        })

        .when('/FIS1201', {
            templateUrl : '../Vista/Paginas/FIS1201.html',
            controller  : 'FIS1201'
        })

        .when('/PerfilProfesor', {
            templateUrl : '../Vista/Paginas/PerfilProfesor.html',
            controller  : 'PerfilProfesor'
        })

        .when('/Perfil1', {
            templateUrl : '../Vista/Paginas/Perfil1.html',
            controller  : 'Perfil1'
        })


        .otherwise({redirectTo: '/'});
});

