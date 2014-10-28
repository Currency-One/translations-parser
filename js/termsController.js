angular.module('languageParser').controller('TermsCtrl', function($scope) {
  $scope.exportLanguageFile = function () {
  	if ($scope.languageObject) {
  		var blob = new Blob([angular.toJson($scope.languageObject)], {type: "application/json;charset=utf-8"});
  		window.saveAs(blob, $scope.languageObject.language + '.json');
  	}
  };

  $scope.isString = function(checkedVar) {
    return typeof checkedVar === 'string';
  }

  $scope.splitCamelCase = function (value) {
  	return value.replace(/([A-Z]?[^A-Z]*)/g,"$1 ").toLowerCase();
  }
});
