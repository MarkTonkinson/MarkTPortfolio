var app = angular.module('markT');

app.controller('mainCtrl', function($scope, blogService){

$scope.test = "Hello World";

	
	$scope.getBlog = function(){
	
		blogService.getParseBlog()
		.then(function(blog){
			//displayResults(blog);//comes back as an obj with an array of objects called results that is html code
			
			$scope.blogs = blog.results;//display all blogs- could limit
			
		})
	};
	$scope.getBlog();

	// var display3Results = function(blog){
	// 	for(var i = 0; i < blog.results.length; i++){
			//return i;


	// 	}

	// }
});
