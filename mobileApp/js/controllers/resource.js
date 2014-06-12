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

 angular.module('visaguidehn.resources').controller('ResourcesController',
    ['$scope', '$routeParams', '$location', 'Global', 'Resources', function ($scope, $routeParams, $location, Global, Resources) {
        $scope.global = Global;

        $scope.findOne = function() {
            Resources.getResources($routeParams.resourceId)
                .success(function (result){
                    $scope.resource = result;
                    $scope.resources = $scope.resource.resources;
                })
                .error(function(error){
                    $scope.status = 'Unable to load resource data: ' + error.message;
                });
            };
}]);