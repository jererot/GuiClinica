(function () {
    //Create a Modele
    var app = angular.module('Myapp', ['ngRouter']);
    //Create a controller
    app.controller('ClienteController', function ($scope) {
        $scope.Message = "Yahooo! we have successfully done our first part.";
    });
})();