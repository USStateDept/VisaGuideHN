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