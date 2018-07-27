myApp.controller('displayController', ['$scope', '$http', function ($scope, $http) {
    $scope.population = []

    $scope.displayValues = function () {
        $http.get("http://localhost:5000/api/display").then(function (response) {
            console.log(response.data)
            $scope.population = response.data
        }).catch(function (err) {
            console.log(err)
        })
    }
    $scope.displayValues()
    $scope.removeData = function (id) {
        let _id = id
        $http({
            method: 'DELETE',
            url: 'http://localhost:5000/api/remove/' + _id,
        }).then(function (response) {
            console.log(response)
            alert('Deleted')
            $scope.displayValues()
        }).catch(function (err) {
            console.log(err)
        })
    }

}])