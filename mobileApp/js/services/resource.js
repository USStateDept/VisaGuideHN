/** 
 *  VisaGuideHN
 * 
 *  Copyright (c) 2014 United Stades Department of State
 *
 *  This product includes software developed by
 *  Acklen Avenue (http://acklenavenue.com).
 *
 *  Project Founder: Zennia Hancock, PhD
 **/

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