angular.module('seoaiApp', ['ngRoute', 'ui.select', 'ngSanitize'])
.config([
	'$routeProvider',
	function($routeProvider){
		$routeProvider.when('/', {
			templateUrl: 'views/home.html',
			controller: 'HomeCtrl'
		});
	}
]);