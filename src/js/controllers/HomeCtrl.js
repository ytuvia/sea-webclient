angular.module('seoaiApp')
.controller('HomeCtrl', [
	'$scope',
	function($scope) {
		$scope.message='juds the great';
	}
])
.filter('urlFilter', function(){
	return function(items, props){
		if(props && props.url){
			$http({
			  method: 'GET',
			  url: 'http://ec2-34-209-22-240.us-west-2.compute.amazonaws.com:8080/api/search/website/' + props.url
			}).then(function successCallback(response) {
			    return response;
			}, function errorCallback(err) {
			    console.log(err)
			});	
		}
	}
})