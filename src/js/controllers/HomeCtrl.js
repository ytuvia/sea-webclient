angular.module('seoaiApp')
.controller('HomeCtrl', [
	'$scope',
	'$http',
	function($scope, $http) {
		$scope.selectedWebsite = null;
		$scope.relatedWebsites = null;
		$scope.websites = [];
		$scope.columns = [
			{ field: 'url', displayName: 'Website' }, 
			{ field: 'occourances', displayName: 'Occourances' },
			{ field: 'similarKeywords', displayName: 'Similar keywords' },
		];
		$scope.gridOptions = {
			enableSorting: false,
			columnDefs: $scope.columns
		};

		$scope.searchWebsites = function(url) {
			if(url){
				return $http.get('http://ec2-34-209-22-240.us-west-2.compute.amazonaws.com:8080/api/search/website/' + url)
				  .then(function(response) {
				    $scope.websites = response.data;
				  }, function(err){
				  	console.log(err);
				  });
			}
		};
		$scope.getWebsite = function(item){
			$scope.selectedWebsite = item;
			$http.get('http://ec2-34-209-22-240.us-west-2.compute.amazonaws.com:8080/api/website/'+ item.url +'/related')
				.then(function(response) {
					console.log(response.data);
					$scope.gridOptions.data = response.data;
				}, function(err){
					console.log(err);
				});
		}
	}
]);