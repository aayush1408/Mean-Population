myApp.controller('displayController', ['$scope', '$http', function ($scope, $http) {

    //store the complete data.
    $scope.population = []

    // Control the display of the forms.
    $scope.isEdit = false
    $scope.isAdd = false

    // Handles and displays the data.
    $scope.displayValues = function () {
        $http.get("http://localhost:5000/api/display").then(function (response) {
            console.log(response.data)
            $scope.population = response.data
        }).catch(function (err) {
            console.log(err)
        })
    }

    // Print the display values
    $scope.displayValues()

    // Removes the selected row
    $scope.removeData = function (id) {
        let _id = id
        $http({
            method: 'DELETE',
            url: 'http://localhost:5000/api/remove/' + _id,
        }).then(function (response) {
            console.log(response)
            swal({ text: 'Removed', icon: "success" });
            $scope.displayValues()
        }).catch(function (err) {
            console.log(err)
        })
    }

    // Handles the display and value of the editform
    $scope.editData = function (pop) {
        $scope.isEdit = true
        $scope.editId = pop._id
        $scope.editYear = pop.year
        $scope.editPopulation = pop.population
        $scope.editGrowth = pop.growth
        $scope.editRate = pop.rate
    }

    // Updates the data
    $scope.updateData = function () {
        let newData = {
            _id: $scope.editId,
            year: $scope.editYear,
            population: $scope.editPopulation,
            growth: $scope.editGrowth,
            rate: $scope.editRate
        }
        $http({
            method: 'PUT',
            url: 'http://localhost:5000/api/edit/' + $scope.editId,
            headers: { "Content-Type": "application/json;charset=UTF-8" },
            data: newData
        }).then(function (response) {
            console.log(response)
            swal({ text: 'Updated', icon: "success" });
            $scope.isEdit = false
            $scope.displayValues()
        }).catch(function (err) {
            console.log(err)
        })
    }

    // Handles the add form
    $scope.addForm = function () {
        $scope.isAdd = true
    }

    // Add data
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
            swal({ text: 'Added', icon: "success" });
            $scope.isAdd = false
            $scope.displayValues()
        }).catch(function (err) {
            console.log(err)
        })
    }
}])