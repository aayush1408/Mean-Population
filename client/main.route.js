// Handle the routes

myApp.config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {
    $locationProvider.html5Mode(true);
    $locationProvider.hashPrefix('');
    $routeProvider.
        when('/', {
            templateUrl: 'views/display.html',
            controller: 'displayController'
        })
        .otherwise({ redirectTo: '/' })
}]);