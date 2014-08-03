angular.module("gxMainApp").controller('viewController', [
	'$scope', '$location', '$state', function($scope, $location, $state){
		var check = function(){
			var url = $location.url();
			if(url.indexOf("Login") >= 0 || url.indexOf("login") >= 0){
				$scope.viewClass = "col-main";
			}
			else{
				$scope.viewClass = "col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main";
			}
		}
		
		$scope.$on('$locationChangeSuccess', check);
}]).directive('galView', function() {
	return {
			//Define the directive as an attribute
			restrict: 'A',
			scope: {
				viewClass: '=viewClass'
			},
			templateUrl: "/app/partials/view.html",
	}
});
