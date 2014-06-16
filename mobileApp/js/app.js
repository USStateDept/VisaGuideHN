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

 window.app = angular.module('visaguidehn',
    ['ngCookies', 'ngResource', 'ui.bootstrap', 'ui.route', 'visaguidehn.system', 'visaguidehn.articles','visaguidehn.wizards', 'visaguidehn.checklist', 'visaguidehn.faq', 'visaguidehn.resources']);

angular.module('visaguidehn.system', []);
angular.module('visaguidehn.articles', []);
angular.module('visaguidehn.wizards',[]);
angular.module('visaguidehn.checklist',[]);
angular.module('visaguidehn.faq',[]);
angular.module('visaguidehn.resources',[]);