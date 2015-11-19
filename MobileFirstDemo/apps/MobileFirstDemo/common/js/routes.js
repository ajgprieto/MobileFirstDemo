(function() {
	angular.module('routes', []);
	angular.module('routes').config(function($stateProvider, $urlRouterProvider) {
		$stateProvider
			.state('home', {
				url : '/home',
				templateUrl : 'views/home/home.html',
				controller : 'home-controller'
			})
			;
		$urlRouterProvider.otherwise('/home');
	});
})();