(function() {
	function homeController($scope) {
		
		$scope.search = {};
		
		$scope.getAllCountries = function() {
			var invocationData = {
					adapter : 'DemoAdapter', 
					procedure : 'getAllCountries'
			};
			
			WL.Client.invokeProcedure(invocationData, {
				onSuccess : function(result) {
					var countries = result.invocationResult.RestResponse.result;
					$scope.countries = countries;
					$scope.$apply();
				},
				onFailure : function() {
					alert("something went wrong.  Blame Andrew");
				}
			})
			
		}
	}
	angular.module('demo.home')
		.controller('home-controller', ['$scope', homeController]);
})();