var app = angular.module('markT');

app.factory('httpRequestInterceptor', function () {
  return {
    request: function (config) {
      config.headers = {'X-Parse-Application-Id': 'b1qFGVXhlhChGZM3nrHUbu64RpmoSXtz1WzcVi14', 'X-Parse-REST-API-Key': 'RF7mcc7veP7xDe6n5G2OX8grxOYcxxJK8DFm6AuE'}
      return config;
    }
  };
});