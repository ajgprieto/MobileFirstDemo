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
		};
		
		$scope.searchByCountryCode2 = function() {
			
			var invocationData = {
					adapter : 'DemoAdapter',
					procedure : 'search2charCountryCode',
					parameters : [$scope.search.countryCode]
			};
			
			WL.Client.invokeProcedure(invocationData, {
				onSuccess : function(result) {
					var message = result.invocationResult.RestResponse.messages.toString();
					if (message.toString().indexOf("requested") != -1) {
						message = message.slice(message.indexOf(',') + 1);
						$scope.result = message;
					}
					else {
						$scope.result = result.invocationResult.RestResponse.result.name;
					}
					$scope.$apply();
				},
				onFailure : function() {
					alert("something went wrong.  Don't blame Andrew");
				}
			});
			
		}
	}
	angular.module('demo.home')
		.controller('home-controller', ['$scope', homeController]);
})();