myApp.config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {
    $locationProvider.html5Mode(true);
    $locationProvider.hashPrefix('');
    $routeProvider.
        when('/', {
            templateUrl: 'views/home.html',
        })
        .when('/display', {
            templateUrl: 'views/display.html',
            controller: 'displayController'
        })
        .otherwise({ redirectTo: '/' })
}]);