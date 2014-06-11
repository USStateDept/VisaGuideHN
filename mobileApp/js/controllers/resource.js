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