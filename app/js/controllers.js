'use strict';

/* Controllers */

var phonecatControllers = angular.module('phonecatControllers', []);

phonecatControllers.controller('PhoneListCtrl', ['$scope', 'Phone', function($scope, Phone){
			$scope.phones = Phone.query();
			$scope.phonesOrder = 'age';
	}]);

phonecatControllers.controller('PhoneDetailCtrl', ['$scope', '$routeParams', 'Phone',
	function ($scope, $routeParams, Phone){
			$scope.phone = Phone.get({phoneId: $routeParams.phoneId}, function(phone){
			$scope.mainImageUrl = phone.images[0];
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
