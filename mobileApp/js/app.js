window.app = angular.module('visaguidehn',
    ['ngCookies', 'ngResource', 'ui.bootstrap', 'ui.route', 'visaguidehn.system', 'visaguidehn.articles','visaguidehn.wizards', 'visaguidehn.checklist', 'visaguidehn.faq', 'visaguidehn.resources']);

angular.module('visaguidehn.system', []);
angular.module('visaguidehn.articles', []);
angular.module('visaguidehn.wizards',[]);
angular.module('visaguidehn.checklist',[]);
angular.module('visaguidehn.faq',[]);
angular.module('visaguidehn.resources',[]);