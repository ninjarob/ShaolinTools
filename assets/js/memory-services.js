'use strict';

(function () {

    var employees = [
            {"id": 1, "firstName": "James", "lastName": "King", "managerId": 0, "managerName": "", "reports": 4, "title": "President and CEO", "department": "Corporate", "cellPhone": "617-000-0001", "officePhone": "781-000-0001", "email": "jking@fakemail.com", "city": "Boston, MA", "pic": "james_king.jpg", "twitterId": "@fakejking", "blog": "http://coenraets.org"},
            {"id": 2, "firstName": "Julie", "lastName": "Taylor", "managerId": 1, "managerName": "James King", "reports": 2, "title": "VP of Marketing", "department": "Marketing", "cellPhone": "617-000-0002", "officePhone": "781-000-0002", "email": "jtaylor@fakemail.com", "city": "Boston, MA", "pic": "julie_taylor.jpg", "twitterId": "@fakejtaylor", "blog": "http://coenraets.org"},
            {"id": 3, "firstName": "Eugene", "lastName": "Lee", "managerId": 1, "managerName": "James King", "reports": 0, "title": "CFO", "department": "Accounting", "cellPhone": "617-000-0003", "officePhone": "781-000-0003", "email": "elee@fakemail.com", "city": "Boston, MA", "pic": "eugene_lee.jpg", "twitterId": "@fakeelee", "blog": "http://coenraets.org"},
            {"id": 4, "firstName": "John", "lastName": "Williams", "managerId": 1, "managerName": "James King", "reports": 3, "title": "VP of Engineering", "department": "Engineering", "cellPhone": "617-000-0004", "officePhone": "781-000-0004", "email": "jwilliams@fakemail.com", "city": "Boston, MA", "pic": "john_williams.jpg", "twitterId": "@fakejwilliams", "blog": "http://coenraets.org"},
            {"id": 5, "firstName": "Ray", "lastName": "Moore", "managerId": 1, "managerName": "James King", "reports": 2, "title": "VP of Sales", "department": "Sales", "cellPhone": "617-000-0005", "officePhone": "781-000-0005", "email": "rmoore@fakemail.com", "city": "Boston, MA", "pic": "ray_moore.jpg", "twitterId": "@fakermoore", "blog": "http://coenraets.org"},
            {"id": 6, "firstName": "Paul", "lastName": "Jones", "managerId": 4, "managerName": "John Williams", "reports": 0, "title": "QA Manager", "department": "Engineering", "cellPhone": "617-000-0006", "officePhone": "781-000-0006", "email": "pjones@fakemail.com", "city": "Boston, MA", "pic": "paul_jones.jpg", "twitterId": "@fakepjones", "blog": "http://coenraets.org"},
            {"id": 7, "firstName": "Paula", "lastName": "Gates", "managerId": 4, "managerName": "John Williams", "reports": 0, "title": "Software Architect", "department": "Engineering", "cellPhone": "617-000-0007", "officePhone": "781-000-0007", "email": "pgates@fakemail.com", "city": "Boston, MA", "pic": "paula_gates.jpg", "twitterId": "@fakepgates", "blog": "http://coenraets.org"},
            {"id": 8, "firstName": "Lisa", "lastName": "Wong", "managerId": 2, "managerName": "Julie Taylor", "reports": 0, "title": "Marketing Manager", "department": "Marketing", "cellPhone": "617-000-0008", "officePhone": "781-000-0008", "email": "lwong@fakemail.com", "city": "Boston, MA", "pic": "lisa_wong.jpg", "twitterId": "@fakelwong", "blog": "http://coenraets.org"},
            {"id": 9, "firstName": "Gary", "lastName": "Donovan", "managerId": 2, "managerName": "Julie Taylor", "reports": 0, "title": "Marketing Manager", "department": "Marketing", "cellPhone": "617-000-0009", "officePhone": "781-000-0009", "email": "gdonovan@fakemail.com", "city": "Boston, MA", "pic": "gary_donovan.jpg", "twitterId": "@fakegdonovan", "blog": "http://coenraets.org"},
            {"id": 10, "firstName": "Kathleen", "lastName": "Byrne", "managerId": 5, "managerName": "Ray Moore", "reports": 0, "title": "Sales Representative", "department": "Sales", "cellPhone": "617-000-0010", "officePhone": "781-000-0010", "email": "kbyrne@fakemail.com", "city": "Boston, MA", "pic": "kathleen_byrne.jpg", "twitterId": "@fakekbyrne", "blog": "http://coenraets.org"},
            {"id": 11, "firstName": "Amy", "lastName": "Jones", "managerId": 5, "managerName": "Ray Moore", "reports": 0, "title": "Sales Representative", "department": "Sales", "cellPhone": "617-000-0011", "officePhone": "781-000-0011", "email": "ajones@fakemail.com", "city": "Boston, MA", "pic": "amy_jones.jpg", "twitterId": "@fakeajones", "blog": "http://coenraets.org"},
            {"id": 12, "firstName": "Steven", "lastName": "Wells", "managerId": 4, "managerName": "John Williams", "reports": 0, "title": "Software Architect", "department": "Engineering", "cellPhone": "617-000-0012", "officePhone": "781-000-0012", "email": "swells@fakemail.com", "city": "Boston, MA", "pic": "steven_wells.jpg", "twitterId": "@fakeswells", "blog": "http://coenraets.org"}
        ],

        findById = function (id) {
            var employee = null,
                l = employees.length,
                i;
            for (i = 0; i < l; i = i + 1) {
                if (employees[i].id === id) {
                    employee = employees[i];
                    break;
                }
            }
            return employee;
        },

        findByManager = function (managerId) {
            var results = employees.filter(function (element) {
                return managerId === element.managerId;
            });
            return results;
        };

    var tools = [
        {"id": 1, "title": "Animal Technique Organizer", "pic":"animals/leopard.png", "link":"/animals"},
        {"id": 2, "title": "Combo Speed Drill", "pic":"play.png", "link":"/combos"},
        {"id": 3, "title": "Cycles", "pic":"animals/crane.png", "link":"/cycles"},
        {"id": 4, "title": "Meridians", "pic":"animals/snake.png", "link":"/meridians"},
        {"id": 5, "title": "Test Kung Fu Knowledge", "pic":"animals/dragon.png", "link":"/knowledge"},
        {"id": 6, "title": "Learn", "pic":"learn.png", "link":"/learn"},
        {"id": 7, "title": "Record", "pic":"record.png", "link":"/record"},
    ];

    var animals = [
        {"id": 1, "title": "Tiger 1"},
        {"id": 2, "title": "Tiger 2"},
        {"id": 3, "title": "Three Punch"},
    ];
    
    var combos = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21];
    
    angular.module('animalTechniqueTool.memoryServices', [])
        .factory('Employee', [
            function () {
                return {
                    query: function () {
                        return employees;
                    },
                    get: function (employee) {
                        return findById(parseInt(employee.employeeId));
                    }
                }

            }])
        .factory('Tool', [
            function () {
                return {
                    query: function () {
                        return tools;
                    }
                }
            }])
        .factory('Animal', [
            function () {
                return {
                    query: function () {
                        return animals;
                    }
                }
            }])
        .factory('Combo', [
            function () {
                return {
                    query: function() {
                        return combos;
                    }
                }
            }
        ])
        .factory('Report', [
            function () {
                return {
                    query: function (employee) {
                        return findByManager(parseInt(employee.employeeId));
                    }
                }

            }]);

}());