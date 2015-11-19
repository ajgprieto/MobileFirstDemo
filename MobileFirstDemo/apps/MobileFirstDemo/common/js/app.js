(function() {
	angular.module('demo', ['ionic', 'routes', 'demo.home']);
	
	angular.module('demo').run(function($ionicPlatform) {
		$ionicPlatform.ready(function() {
			if (window.statusBar) {
				statusBar.styleDefault();
			}
		});
	});
})();