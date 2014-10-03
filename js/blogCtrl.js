var app = angular.module('markT');

app.controller('blogCtrl', function($scope, blogService) {
	
	$scope.blogcontent = '';//need this, though the name can vary for TextAngular not to read undefined. 
	$scope.htmlcontent = $scope.blogcontent;//send $scope.html to object called blog!
	$scope.disabled = false; //this is for ng-show - but may not be important
	

$scope.submitBlog = function(){
	blogService.postParseBlog($scope.htmlcontent)
	.then(function(data){
		$scope.htmlcontent="";
		$scope.getBlog();
	});
}

$scope.deleteBlog = function(blog){
	if(confirm("Are you sure?")){ //how do I grab the response from the prompt? Put this above
		blogService.deleteParseBlog(blog)
		.then(function(data){
			$scope.getBlog();
		})
	} else {
		console.log('apparently you have to have an else or the delete runs');
	}
}

$scope.getBlog = function(){
	
		blogService.getParseBlog()
		.then(function(blog){
			//displayResults(blog);//comes back as an obj with an array of objects called results that is html code
			$scope.blogs = blog.results;
			
		})
	};
	$scope.getBlog();


});

// app.controller('blogControl', function($scope, blogService){

// 	$scope.blog = [{  //blog will need to be sent to parse service
// 		title: $scope.blogtitle,
// 		content: $scope.blogcontent
// 	}]




	
// });