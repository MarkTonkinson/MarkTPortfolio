var app = angular.module('markT');

app.controller('blogCtrl', function($scope, blogService) {
	
	$scope.blogcontent = '';//need this, though the name can vary for TextAngular not to read undefined. 
	$scope.htmlcontent = $scope.blogcontent;//send $scope.html to object called blog!
	$scope.disabled = false; //this is for ng-show - but may not be important
	

$scope.submitBlog = function(){
		
		blogService.postParseBlog($scope.htmlcontent) //takes scope.blog and sends it on
		
		//we don't take any data in from the promise- because it just told us the promise ran
		
		//clear the blog content
	}

$scope.getBlog = function(){
	
		blogService.getParseBlog()
		.then(function(blog){
			//displayResults(blog);//comes back as an obj with an array of objects called results that is html code
			$scope.blog = blog.results;
			
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