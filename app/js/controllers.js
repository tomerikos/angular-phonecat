'use strict';

/* Controllers */

var phonecatControllers = angular.module('phonecatControllers', []);

phonecatControllers.controller('PhoneListCtrl', ['$scope', '$http',
	function ($scope, $http){
		$http.get('phones/phones.json').success(function (data){
			$scope.phones = data;
		});

		$scope.phonesOrder = 'age';
	}]);

phonecatControllers.controller('PhoneDetailCtrl', ['$scope', '$routeParams', '$http',
	function ($scope, $routeParams, $http){
		$http.get('phones/' + $routeParams.phoneId + '.json').success(function (data){
			$scope.phone = data;
			$scope.mainImageUrl = data.images[0];
		});

		$scope.setImage = function(imageUrl){
			$scope.mainImageUrl = imageUrl;
		}

		$scope.hello = function(name){
			alert('Hello ' + (name || 'World') + '!');
		}

	}]);

/*
$scope.hello = "Hello, this is a message from the controller"

$scope.people = [{'fname': 'Tomer', 'lname': 'Amar', 'age': '22'},
				 {'fname': 'Guy', 'lname':'Kroitoru', 'age':'23'},
				 { 'fname': 'Nir', 'lname':"Halperin", 'age':'25'},
				 { 'fname':'Yehuda', 'lname':'Broderick', 'age':'24'}];
*/
