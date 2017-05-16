angular.module('seoaiApp')
.controller('HomeCtrl', [
	'$scope',
	'$http',
	function($scope, $http) {
		$scope.selected = null;
		$scope.websites = [];	
		$scope.searchWebsites = function(url) {
			if(url){
				return $http.get('http://ec2-34-209-22-240.us-west-2.compute.amazonaws.com:8080/api/search/website/' + url)
				  .then(function(response) {
				    $scope.websites = response.data	;
				  }, function(err){
				  	console.log(err);
				  });
			}
		};
	}
]);