angular.module('languageParser').controller('TermsCtrl', function($scope) {
  $scope.exportLanguageFile = function() {

  };

  $scope.isString = function(checkedVar) {
    return typeof checkedVar === 'string';
  }

  $scope.splitCamelCase = function (value) {
    return value.replace(/([A-Z]?[^A-Z]*)/g,"$1 ").toLowerCase();
  }
});
