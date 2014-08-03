angular.module("gxMainApp").directive('footer', function() {
	return {
			//Define the directive as an attribute
			restrict: 'A', 
			templateUrl: "/app/partials/footer.html",
			controller: ['$scope', '$location', function($scope, $location){
			
			var check = function(){
				var url = $location.url();
				if(url.indexOf("Login") >= 0 || url.indexOf("login") >= 0){
					$scope.showFooter = false;
				}
				else{
					$scope.showFooter = true;
				}
			}
			
			$scope.$on('$viewContentLoaded', check);
		}]
	}
});

angular.module("gxMainApp").directive('header', function () {
   
	return {
        restrict: 'A', 
        replace: true,
        //scope: {user: '='},
        templateUrl: "/app/partials/header.html",
        controller: ['$scope', '$location', function ($scope, $location) {
			
			var check = function(){
				var url = $location.url();
				if(url.indexOf("Login") >= 0 || url.indexOf("login") >= 0){
					$scope.showHeader = false;
				}
				else{
					$scope.showHeader = true;
				}
			}
			
			$scope.$on('$viewContentLoaded', check);
        }]
    }
});