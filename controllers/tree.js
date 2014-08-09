
gxMainApp.controller('sidebar', function($scope, $location, $http, $state) {
	var check = function(){
		var url = $location.url();
		if(url.indexOf("Login") >= 0 || url.indexOf("login") >= 0){
			$scope.showSidebar = false;
			$scope.viewClass = "col-main";
		}
		else{
			$scope.showSidebar = true;
			$scope.viewClass = "col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main";
		}
		//unclear if this is required.
		//$scope.$parent.$apply;
	}
	
	$scope.$on('$stateChangeSuccess', check);
	
	$http.get('http://10.234.31.214:8080/entity?size=1000').success(function(data) {
	$scope.entities = data;
	});
});