var app = angular.module('markT');

app.controller('mainCtrl', function($scope, blogService){

$scope.test = "Hello World";

	$scope.staticBlogTest= [{
		title: "Mark's 1st Blog",   //needs to come dynamically
		content: "This is where the dynamic content should come in"
	}];


	//I need to figure how to allow my index.html to access this controller- earlier attempts didn't work . . .
	$scope.getBlog = function(){
	
		blogService.getParseBlog()
		.then(function(blog){
			//displayResults(blog);//comes back as an obj with an array of objects called results that is html code
			
			$scope.blog = blog.results;//display all blogs- could limit
		})
	};
	$scope.getBlog();

});
