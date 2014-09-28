var app = angular.module('markT');

app.service('blogService', function($http, $q){
	this.getParseBlog = function(){
		var deferred = $q.defer();
		$http({
			method: 'GET',
			url: 'https://api.parse.com/1/classes/parseBlog' + '?order=-createdAt'
		}).success(function(data){
			console.log(data);
			deferred.resolve(data);
		})
		return deferred.promise;
	};



	this.postParseBlog = function(blog){
		var deferred = $q.defer(); //remember the defer() is a method on the q prototype
		console.log(blog);
		$http({
			method: 'POST',
			url: 'https://api.parse.com/1/classes/parseBlog',
			data: {
				//title: blog,
				content: blog
				//have to send data with some keys determined by what my blog object will be
			}
		})//.success(function(data){
		// console.log(data);
		// deferred.resolve(data);

		// })
		// return deferred.promise; //promise is key word related to getting information through http
	};


	//get parseBlog
	//this.deleteParseBlog
});



//?order=-createdAt

//To minify the code would require some changed notatation practices for
//injecting dependencies 
//controllers could have to do with one controller being over the body,
//while the other is nested.

/*To fix unknown provider, I tried the full annotation with brackets
I have read about modules, and controllers, and services
i changed the name of the service
I think it must be syntax fo trying to request things to happen-however, when I remove all coding,
it is still broken
If I remove the service completely it works*/