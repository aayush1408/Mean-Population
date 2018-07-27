myApp.controller('displayController', ['$scope', '$http', function ($scope, $http) {
    $scope.population = []
    $http.get("http://localhost:5000/api/display").then(function (response) {
        console.log(response.data)
        $scope.population = response.data
    }).catch(function (err) {
        console.log(err)
    })
}])