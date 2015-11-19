(function() {
	function homeController($scope) {
		
		$scope.search = {};
		
		$scope.getAllCountries = function() {
			alert($scope.search.field);
			
			
		}
	}
	angular.module('demo.home')
		.controller('home-controller', ['$scope', homeController]);
})();