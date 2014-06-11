angular.module('visaguidehn.wizards', []).directive('scrollOnClick', function() {
  return {
    restrict: 'A',
    link: function(scope, $elm) {
      $elm.on('click', function() {
        $("html, body").animate({ scrollTop: $(document).height() }, 1000);
      });
    }
  };
});