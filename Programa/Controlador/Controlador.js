var app = angular.module('Controller',['ngRoute']);

app.controller('IniciarSesion()',['$scope', function($scope) {
    $scope.master = {};

    $scope.update = function(user) {
        $scope.master = angular.copy(user);
    };
    $scope.reset = function() {
        $scope.user = angular.copy($scope.master);
    };

    $scope.reset();
}]);

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
    $scope.Nombre='Felipe Monsalve';
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

        .otherwise({redirectTo: '/'});
});

