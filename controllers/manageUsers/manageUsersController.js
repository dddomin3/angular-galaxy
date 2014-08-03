
gxMainApp.controller('tabledata', function($scope,$filter, $rootScope, ngTableParams) {

     $scope.rows=[];
     $scope.rows= [
                    {
                        "id":1,
                        "date":"17-July-2014 10:25:00AM",
                        "userid":"Smith",
                        "status":"Approved",
                        "companyname":"ZZ Company",
                        "email":"j.smith@company.com",
                        "phone":"617-321-4567",
                        "actions":"Create App",
                        "ac":true,
                        "dl":false
                    }
                    ,
                    {
                    	"id":2,
                        "date":"15-July-2014 10:25:00AM",
                        "userid":"Mae",
                        "status":"Approved",
                        "companyname":"M Company",
                        "email":"mae@company.com",
                        "phone":"617-321-4567",
                        "actions":"Create App",
                        "ac":true,
                        "dl":false
                    },
                    {
                    	"id":3,
                        "date":"15-July-2014 10:25:00AM",
                        "userid":"Anju",
                        "status":"Pending Verification",
                        "companyname":"A Company",
                        "email":"ajnu@company.com",
                        "phone":"617-321-4567",
                        "actions":"Verify",
                        "ac":true,
                        "dl":false
                    },
                    {
                    	"id":4,
                        "date":"17-July-2014 10:25:00AM",
                        "userid":"Smith",
                        "status":"Verified",
                        "companyname":"CEO",
                        "email":"j.smith@company.com",
                        "phone":"617-321-4567",
                        "actions":"Plan Features",
                        "ac":true,
                        "dl":false
                    },
                    {
                    	"id":5,
                        "date":"17-July-2014 10:25:00AM",
                        "userid":"Smith",
                        "status":"Verified",
                        "companyname":"CEO",
                        "email":"j.smith@company.com",
                        "phone":"617-321-4567",
                        "actions":"Plan Features",
                        "ac":true,
                        "dl":false
                    },
                    {
                    	"id":6,
                        "date":"17-July-2014 10:25:00AM",
                        "userid":"Smith",
                        "status":"Verified",
                        "companyname":"S Company",
                        "email":"j.smith@company.com",
                        "phone":"617-321-4567",
                        "actions":"Plan Features",
                        "ac":true,
                        "dl":false
                    },
                    {
                    	"id":7,
                        "date":"17-July-2014 10:25:00AM",
                        "userid":"Smith",
                        "status":"Pending Confirmation",
                        "companyname":"XX Company",
                        "email":"j.smith@company.com",
                        "phone":"617-321-4567",
                        "actions":"Features Selected",
                        "ac":true,
                        "dl":false
                    },
                    {
                    	"id":8,
                        "date":"17-July-2014 10:25:00AM",
                        "userid":"Smith",
                        "status":"Pending Confirmation",
                        "companyname":"Smith Company",
                        "email":"smith@company.com",
                        "phone":"617-321-4567",
                        "actions":"Features Selected",
                        "ac":true,
                        "dl":false
                    },
                    
                    {"id":9,
                        "date":"17-July-2014 10:25:00AM",
                        "userid":"Smith",
                        "status":"Pending Confirmation",
                        "companyname":"FF Company",
                        "email":"j.smith@company.com",
                        "phone":"617-321-4567",
                        "actions":"Features Selected",
                        "ac":true,
                        "dl":false
                    },
                    {
                    	"id":10,
                        "date":"17-July-2014 10:25:00AM",
                        "userid":"Smith",
                        "status":"Feature list Rejected",
                        "companyname":"LL Company",
                        "email":"j.smith@company.com",
                        "phone":"617-321-4567",
                        "actions":"Plan Features",
                        "ac":true,
                        "dl":false
                    },
                    {
                    	"id":11,
                        "date":"17-July-2014 10:25:00AM",
                        "userid":"Smith",
                        "status":"Feature list Rejected",
                        "companyname":"SD Company",
                        "email":"j.smith@company.com",
                        "phone":"617-321-4567",
                        "actions":"Plan Features",
                        "ac":true,
                        "dl":false
                    },
                    
                    {
                    	"id":12,
                        "date":"17-July-2014 10:25:00AM",
                        "userid":"Smith",
                        "status":"Feature list Rejected",
                        "companyname":"SQ Company",
                        "email":"j.smith@company.com",
                        "phone":"617-321-4567",
                        "actions":"Plan Features",
                        "ac":true,
                        "dl":false
                    },
                    {
                    	"id":13,
                        "date":"17-July-2014 10:25:00AM",
                        "userid":"Smith",
                        "status":"Feature list Accepted",
                        "companyname":"SH Company",
                        "email":"j.smith@company.com",
                        "phone":"617-321-4567",
                        "actions":"Approved",
                        "ac":true,
                        "dl":false
                    },
                    
                    {
                    	"id":14,
                        "date":"17-July-2014 10:25:00AM",
                        "userid":"Smith",
                        "status":"Feature list Accepted",
                        "companyname":"YY Company",
                        "email":"j.smith@company.com",
                        "phone":"617-321-4567",
                        "actions":"Approved",
                        "ac":true,
                        "dl":false
                    }
                    
                ];          
            
            data =$scope.rows;
            $scope.tableParams = new ngTableParams({
                page: 1,            // show first page
                count: 10,          // count per page
                sorting: {
                    companyname: 'asc'     // initial sorting
                }
            }, {
                total: data.length, // length of data
                getData: function($defer, params) {
                    // use build-in angular filter
                    var orderedData = params.sorting() ?
                                        $filter('orderBy')(data, params.orderBy()) :
                                        	data;
                    $defer.resolve(orderedData.slice((params.page() - 1) * params.count(), params.page() * params.count()));
                }
            }); 
            
            console.log($scope.rows);
});