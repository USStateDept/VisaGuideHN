angular.module('visaguidehn.checklist').factory('Checklist', ['$http', function($http) {

        var urlBase = 'http://api.visaguidehn.com/';
        //var urlBase = 'http://localhost:3000/';
        var checklistFactory = {};
        
        //$http.defaults.useXDomain = true;

        checklistFactory.postChecklist = function (data) {
            return $http.post(urlBase + 'emailsender', data);
        };

        checklistFactory.getChecklist = function (id) {
            return $http.get(urlBase + 'checklist/' + id);
        };

        return checklistFactory;
}]);