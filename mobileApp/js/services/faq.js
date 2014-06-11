angular.module('visaguidehn.faq').factory('Faq', ['$http', function($http) {

	var urlBase = 'http://api.visaguidehn.com/';
	//var urlBase = 'http://localhost:3000/';
	var faqFactory = {};

	//$http.defaults.useXDomain = true;

	faqFactory.getFaq = function (id) {
		return $http.get(urlBase + 'faq/' + id);
	};

	return faqFactory;
}]);