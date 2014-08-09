
gxMainApp.controller('vehicleController', function($scope, $filter, $rootScope, ngTableParams, $http) {

	$http.get('http://10.234.31.214:8080/entity?size=1000').success(function(data) {		
		$scope.rows = data._embedded.entity;
		
		$scope.tableParams = new ngTableParams({
		page: 1,            // show first page
		count: 10,          // count per page
		sorting: {
			eid: 'asc'     // initial sorting
		}
			}, {
				total: $scope.rows.length, // length of $scope.rows
				getData: function($defer, params) {
					// use build-in angular filter
					var orderedData = params.sorting() ?
										$filter('orderBy')($scope.rows, params.orderBy()) :
											$scope.rows;
					$defer.resolve(orderedData.slice((params.page() - 1) * params.count(), params.page() * params.count()));
				}
			}); 
		});
});