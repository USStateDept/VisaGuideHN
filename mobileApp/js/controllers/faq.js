/** 
 *  VisaGuideHN
 * 
 *  Copyright (c) 2014 United Stades Department of State
 *
 *  This product includes software developed by
 *  Acklen Avenue (http://acklenavenue.com).
 *
 *  Project Founder: Zennia Hancock Paganini, PhD
 **/

 angular.module('visaguidehn.faq').controller('FaqController',
    ['$scope', '$routeParams', '$location', 'Global', 'Faq', function ($scope, $routeParams, $location, Global, Faq) {
        $scope.global = Global;

        $scope.findOne = function() {
            Faq.getFaq($routeParams.faqId)
                .success(function (result){
                    $scope.faq = result;
                    $scope.faqs = $scope.faq.faqs;
                })
                .error(function(error){
                    $scope.status = 'Unable to load faq data: ' + error.message;
                });
            };
}]);