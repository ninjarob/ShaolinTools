'use strict';

angular.module('animalTechniqueTool.restServices', ['ngResource'])
    .factory('Employee', ['$resource',
        function ($resource) {
            return $resource('http://localhost:3000/employees/:employeeId', {});
        }])
    .factory('Tool', ['$resource',
        function ($resource) {
            return $resource('http://localhost:3000/employees/:employeeId', {});
        }])
    .factory('Report', ['$resource',
        function ($resource) {
            return $resource('http://localhost:3000/employees/:employeeId/reports', {});
        }]);