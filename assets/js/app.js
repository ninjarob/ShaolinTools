'use strict';

angular.module('animalTechniqueTool', [
    'ngTouch',
    'ngRoute',
    'ngAnimate',
    'animalTechniqueTool.controllers',
    'animalTechniqueTool.memoryServices'
]).
config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/animals', {templateUrl: 'partials/animal-list.html', controller: 'AnimalsCtrl'});
    $routeProvider.when('/combos', {templateUrl: 'partials/combos.html', controller: 'CombosCtrl'});
    $routeProvider.when('/tools', {templateUrl: 'partials/tools.html', controller: 'ToolsCtrl'});
    $routeProvider.when('/employees', {templateUrl: 'partials/employee-list.html', controller: 'EmployeeListCtrl'});
    $routeProvider.when('/employees/:employeeId', {templateUrl: 'partials/employee-detail.html', controller: 'EmployeeDetailCtrl'});
    $routeProvider.when('/employees/:employeeId/reports', {templateUrl: 'partials/report-list.html', controller: 'ReportListCtrl'});
    $routeProvider.otherwise({redirectTo: '/tools'});
}]);