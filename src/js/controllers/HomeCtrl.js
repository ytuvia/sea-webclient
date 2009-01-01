angular.module('seoaiApp')
.controller('HomeCtrl', [
	'$scope',
	function($scope) {
		$scope.message='juds the great';
	}
])
.filter('urlFilter', function(){
	return function(items, props){
		console.log('items', items);
		console.log('items', props);
	}
})