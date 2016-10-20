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

app.controller('Perfil', function($scope) {
    $scope.message = 'Hola Desde Perfil';
});

app.controller('Datos', function ($scope) {
    $scope.Inicio =  'ScrapBooks';
    $scope.IniciarSesion = ' Iniciar Sesión ';
    $scope.Registrarse = ' Registrarse ';
    $scope.Mail='Mail Sansano'
    $scope.Rol= 'Rol (Sin Guión)'
    $scope.Contraseña= 'Contraseña'

});

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

        .otherwise({redirectTo: '/'});
});

