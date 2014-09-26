var app = angular.module('markT');

app.controller('mainCtrl',function($scope){
$scope.test = "Hello World";
	$scope.blog= [{
		title: "Mark's 1st Blog",   //needs to come dynamically
		content: "This is where the dynamic content should come in"
	}]



});
