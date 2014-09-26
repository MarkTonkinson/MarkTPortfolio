var app = angular.module('markT', ['textAngular']);

app.config(function($httpProvider){
  $httpProvider.interceptors.push('httpRequestInterceptor');
});

