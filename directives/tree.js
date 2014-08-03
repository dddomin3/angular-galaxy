angular.module("gxMainApp").directive('sidebar', function() {
	return {
			//Define the directive as an attribute
			restrict: 'A', 
			scope: {
				},
			templateUrl: "/app/partials/tree.html",
			controller: ['$scope', '$location', '$http', '$filter', function($scope, $location, $http, $filter){
			
			var check = function(){
				var url = $location.url();
				if(url.indexOf("Login") >= 0 || url.indexOf("login") >= 0){
					$scope.showSidebar = false;
				}
				else{
					$scope.showSidebar = true;
				}
				console.log((url.indexOf("Login") >= 0 || url.indexOf("login") >= 0));
			}
			
			$scope.$on('$viewContentLoaded', check);
			
			$http.get('http://localhost:8080/entity?size=1000').success(function(data) {
			$scope.entities = data;
			$scope.entitiesArray = data._embedded.mobileAsset;
			
			});
		}]
	}
});