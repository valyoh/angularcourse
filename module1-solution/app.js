(function () {
    'use strict'
    angular.module('LunchChecker', [])
    .controller('LunchCheckerController', LunchCheckerController);
    LunchCheckerController.$inject = ['$scope'];
    function LunchCheckerController($scope) {
      $scope.dishes = "";
      $scope.message = "";

      $scope.checkIfTooMuch = function() {
        var allDishes = $scope.dishes
        var trimedDishes = allDishes.trim();

        if(trimedDishes.length == 0) {
          $scope.message = "Please enter data first"
        } else {
          var arrayOfStrings = trimedDishes.split(",");
          var dishesCount = arrayOfStrings.length;
          if(dishesCount > 0 && dishesCount < 4) {
            $scope.message = "Enjoy!";
          } else {
            $scope.message = "Too much!";
          }
        }
      }

    }
  }
)();
