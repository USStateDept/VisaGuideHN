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

 /**
 * Created by Kmilo on 10/14/13.
 */
angular.module('visaguidehn.wizards').controller('WizardController',
    ['$scope', '$routeParams', '$location', 'Global', 'Wizard', 'Checklist', 'checklistItemsFactory', function ($scope, $routeParams, $location, Global, Wizard, Checklist, checklistItemsFactory) {
        $scope.global = Global;

        $scope.currentTip = {show: false};

        

        $scope.find = function() {
            Wizard.getWizards()
                .success(function (wizards) {
                    $scope.wizards = wizards;
                })
                .error(function (error) {
                    $scope.status = 'Unable to load wizards data: ' + error.message;
                });
        };

        $scope.findOne = function() {
            Wizard.getWizard($routeParams.wizardId)
                .success(function (result){
                    angular.element('#img-loading').hide();
                    $scope.wizard = result;
                    $scope.setCurrentQuestion(0,-1);
                })
                .error(function(error){
                    $scope.status = 'Unable to load wizard data: ' + error.message;
                });
        };

        $scope.setCurrentQuestion = function(nextQuestionId, checklist){
            if (nextQuestionId < -1) {
                $location.path('/resources/1');
            }
            else if (checklist === 1){
                $location.path('/checklist/1');
            }
            else{
            $scope.checklistItemsFactory = checklistItemsFactory;
            $scope.currentQuestion = $scope.wizard.questions[nextQuestionId];
            $scope.currentAnswers = $scope.wizard.questions[nextQuestionId].answers;
            
            $scope.randomImage = getImageRandom();
            }
        };

        $scope.answerToShow = function(currentAnswer){
            $scope.answer = currentAnswer;

            if ($scope.answer.tip != '' || $scope.answer.antitip != '') {
                $scope.currentTipo = {show: true};
                $scope.currentTip = {show: true};
            }else{
                $scope.currentTip = {show: true};
                $scope.currentTipo = {show: false};
            }
        };      

        var imgArray = ['libertybellred.png', 'libertybell.png', 'capitol.png', 'capitolred.png', 'baldeagle.png', 'libertyheadsmaller.png', 'visa_0009_Vector-Smart-Object.png'];
        var basepath = "img/";
        function getImageRandom(){
            for (var i = 0; i < 1; i++) {
                var rand = imgArray[Math.floor(Math.random() * imgArray.length)];
                return basepath + rand;
            }
        }
        
}]);

