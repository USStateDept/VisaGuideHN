angular.module('visaguidehn.checklist').controller('ChecklistController',
    ['$scope', '$routeParams', '$location', '$modal', 'Global', 'Checklist', 'checklistItemsFactory', 'Wizard', function ($scope, $routeParams, $location, $modal, Global, Checklist, checklistItemsFactory, Wizard) {
        $scope.global = Global;

        $scope.open = function() {
            var modalInstance = $modal.open({
                templateUrl: 'views/modal.html',
                controller: ModalInstanceCtrl
            });
        };
        
        var ModalInstanceCtrl = function ($scope, $modalInstance) {
          $scope.cancel = function () {
            
            $modalInstance.dismiss('cancel');
          };

          $scope.go = function () {
              $location.path('/');
            };
        };
        
        $scope.findOne = function() {
            Checklist.getChecklist($routeParams.checklistId)
                .success(function (result){
                    $scope.checklist = result;
                    $scope.checklistItemsFactory = checklistItemsFactory;
                    $scope.checklistItems = checklistItemsFactory.getItems();
                    $scope.checklistVisaType = checklistItemsFactory.getVisaType();

                })
                .error(function (error){
                    $scope.status = 'Unable to load checklist data: ' + error.message;
                });
        
        };

        $scope.emailSender = function (){
            Checklist.postChecklist({"email": $scope.textEmail,
                    "visa_type": $scope.checklistVisaType,
                    "checklist": $scope.checklistItems
                        
                });
            $scope.textEmail = '';
        };


}]);
