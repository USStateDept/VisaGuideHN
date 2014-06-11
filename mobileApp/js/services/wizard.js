//Articles service used for articles REST endpoint
angular.module('visaguidehn.wizards').factory('Wizard', ['$http', function($http) {

        var urlBase = 'http://api.visaguidehn.com/';
        // var urlBase = 'http://localhost:3000/';
        var wizardFactory = {};

        //$http.defaults.useXDomain = true;

        wizardFactory.getWizards = function () {
            return $http.get(urlBase + 'wizards');
        };

        wizardFactory.getWizard = function (id) {
            return $http.get(urlBase + 'wizard/' + id);
        };

        return wizardFactory;
}]);


angular.module('visaguidehn.wizards').factory('checklistItemsFactory', function() {
    var items = [];
    var itemsConcatenados = [];
    var checklistItemsFactory = {};
    var visaType;

    checklistItemsFactory.addVisaType = function(visaTypes) {
        if (visaTypes != null && visaTypes != '')
            visaType = visaTypes;
    };

    checklistItemsFactory.addToChecklist = function(data) {
        if (data != null && data != '')
            items.push(data);
    };

    checklistItemsFactory.getItems = function() {
        for (var i = 0; i < items.length; i++) {
            itemsConcatenados = itemsConcatenados.concat(items[i]);
        }
        return itemsConcatenados;
    };

    checklistItemsFactory.getVisaType = function() {
        
        return visaType;
    };

    return checklistItemsFactory;
});