angular.module('languageParser').directive('fileUpload', function() {


  return {
    link: function(scope, elm, attrs) {
      var reader = new FileReader();
      reader.onload = function(e) {
        scope.$apply(function() {
          scope.languageObject = angular.fromJson(e.target.result);
        });
      };

      var fileField = elm.find('[type="file"]').on('change', function(e) {
        reader.readAsText(e.target.files[0]);
      });
    }
  };
});
