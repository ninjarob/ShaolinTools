'use strict';

function startComboTimer($scope) {
    setTimeout(function () {
        console.log("Ran DisplayNewCombo");
        $scope.currentCombo = Math.round(Math.random(5) * 10);
    }, 500);
}

angular.module('animalTechniqueTool.controllers', [])
    .controller('MainCtrl', ['$scope', '$rootScope', '$window', '$location', function ($scope, $rootScope, $window, $location) {
        $scope.slide = '';
        $rootScope.back = function() {
          $scope.slide = 'slide-right';
          $window.history.back();
        }
        $rootScope.go = function(path){
          $scope.slide = 'slide-left';
          $location.url(path);
        }
    }])
    .controller('ToolsCtrl', ['$scope', 'Tool', function ($scope, Tool) {
        $scope.tools = Tool.query();
    }])
    .controller('AnimalsCtrl', ['$scope', 'Animal', function ($scope, Animal) {
        $scope.animals = Animal.query();
        $scope.add = function() {
            $scope.animals.push({id:'?', title:$scope.formAnimalText})
            $scope.formAnimalText = '';
        }
    }])
    .controller('CombosCtrl', ['$scope', 'Combo', function ($scope, Combo) {
        $scope.combos = Combo.query();
        $scope.currentCombo = Math.round(Math.random(5)*10);
        startComboTimer($scope);
    }])
    .controller('EmployeeListCtrl', ['$scope', 'Employee', function ($scope, Employee) {
        $scope.employees = Employee.query();
    }])
    .controller('EmployeeDetailCtrl', ['$scope', '$routeParams', 'Employee', function ($scope, $routeParams, Employee) {
        $scope.employee = Employee.get({employeeId: $routeParams.employeeId});
    }])
    .controller('ReportListCtrl', ['$scope', '$routeParams', 'Report', function ($scope, $routeParams, Report) {
        $scope.employees = Report.query({employeeId: $routeParams.employeeId});
    }]);
