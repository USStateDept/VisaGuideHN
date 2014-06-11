angular.module('visaguidehn.resources').factory('Resources', ['$http', function($http) {

	var urlBase = 'http://api.visaguidehn.com/';
	//var urlBase = 'http://localhost:3000/';
	var resourcesFactory = {};

	//$http.defaults.useXDomain = true;

	resourcesFactory.getResources = function (id) {
		return $http.get(urlBase + 'resources/' + id);
	};

	return resourcesFactory;
}]);