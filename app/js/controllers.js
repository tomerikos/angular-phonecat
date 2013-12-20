'use strict';

/* Controllers */

var phonecatApp = angular.module('phonecatApp', []);

phonecatApp.controller('PhoneListCtrl',['$scope', '$http', function($scope, $http) {

$http.get('phones/phones.json').success(function(data){ $scope.phones = data;});

$scope.hello = "Hello, this is a message from the controller"

$scope.people = [{'fname': 'Tomer', 'lname': 'Amar', 'age': '22'},
				 {'fname': 'Guy', 'lname':'Kroitoru', 'age':'23'},
				 { 'fname': 'Nir', 'lname':"Halperin", 'age':'25'},
				 { 'fname':'Yehuda', 'lname':'Broderick', 'age':'24'}];

$scope.phonesOrder = 'age'

}]);
