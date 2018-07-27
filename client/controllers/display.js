myApp.controller('displayController', ['$scope', '$http', function ($scope, $http) {
    $scope.population = []
    $scope.isEdit = false
    $scope.isAdd = false
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
    $scope.editData = function (pop) {
        $scope.isEdit = true
        $scope.editId = pop._id
        $scope.editYear = pop.year
        $scope.editPopulation = pop.population
        $scope.editGrowth = pop.growth
        $scope.editRate = pop.rate
    }

    $scope.updateData = function () {
        console.log($scope.editId)
        let newData = {
            _id: $scope.editId,
            year: $scope.editYear,
            population: $scope.editPopulation,
            growth: $scope.editGrowth,
            rate: $scope.editRate
        }
        console.log(newData)
        $http({
            method: 'PUT',
            url: 'http://localhost:5000/api/edit/' + $scope.editId,
            headers: { "Content-Type": "application/json;charset=UTF-8" },
            data: newData
        }).then(function (response) {
            console.log(response)
            alert('Updated')
            $scope.displayValues()
        }).catch(function (err) {
            console.log(err)
        })
    }
    $scope.addForm = function () {
        $scope.isAdd = true
    }

    $scope.addData = function () {
        let newData = {
            year: $scope.addYear,
            population: $scope.addPopulation,
            growth: $scope.addGrowth,
            rate: $scope.addRate
        }
        $http({
            method: 'POST',
            url: 'http://localhost:5000/api/add/',
            headers: { "Content-Type": "application/json;charset=UTF-8" },
            data: newData
        }).then(function (response) {
            console.log(response)
            alert('Added')
            $scope.displayValues()
        }).catch(function (err) {
            console.log(err)
        })
    }
}])