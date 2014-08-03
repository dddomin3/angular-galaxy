/**
* Copyright 2014 Pacific Controls Software Services LLC (PCSS). All Rights Reserved.
*
* This software is the property of Pacific Controls  Software  Services LLC  and  its
* suppliers. The intellectual and technical concepts contained herein are proprietary 
* to PCSS. Dissemination of this information or  reproduction  of  this  material  is
* strictly forbidden  unless  prior  written  permission  is  obtained  from  Pacific 
* Controls Software Services.
* 
* PCSS MAKES NO REPRESENTATION OR WARRANTIES ABOUT THE SUITABILITY  OF  THE  SOFTWARE,
* EITHER EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE  IMPLIED  WARRANTIES  OF
* MERCHANTANILITY, FITNESS FOR A PARTICULAR PURPOSE,  OR  NON-INFRINGMENT.  PCSS SHALL
* NOT BE LIABLE FOR ANY DAMAGES SUFFERED BY LICENSEE AS A RESULT OF  USING,  MODIFYING
* OR DISTRIBUTING THIS SOFTWARE OR ITS DERIVATIVES.
*/

/**
 * Version    :    1.0 
 * User       :    pcscs204
 * Function   :    This file 
 */

gxMainApp.controller('adminNotificationController', function($scope, $filter, $rootScope,$modal, ngDialog, ngTableParams,adminFunctionsService) {
	
	//Function to open Main Menu
	
	  $scope.showPopupStatus = function (p,size) {
		  
		   $scope.selectedRow = p;			   
		   if($scope.selectedRow.status == 'Plan Features')
		   {
			   var modalInstance = $modal.open({
				      templateUrl: 'views/adminNotification/gxPlannedFeatures.html',
				      controller: ModalInstanceCtrl,
				      size: size,
				      resolve: {
				          selectedRowData: function () {
				            return $scope.selectedRow;
				          }
				      }
				    });

				    modalInstance.result.then(function (selectedItem) {
				     console.log('clicked OK');
				    }, function () {
				    	   console.log('clicked Cancel');
				    });
		   }
		   else
		   {
			   var modalInstance = $modal.open({
				      templateUrl: 'views/adminNotification/gxStatusDetails.html',
				      controller: ModalInstanceCtrl,
				      size: size,
				      resolve: {
				          selectedRowData: function () {
				            return $scope.selectedRow;
				          }
				      }
				    });

				    modalInstance.result.then(function (selectedItem) {
				     console.log('clicked OK');
				    }, function () {
				    	   console.log('clicked Cancel');
				    });
		   }
		  
		  };
		

     
		  $scope.showPopupAction = function (p,size) {
			   $scope.selectedRow = p;	
			   console.log($scope);
			   alert($scope.selectedRow.status);
			  if($scope.selectedRow.status == 'Plan Features')
			   {
				   var modalInstance = $modal.open({
					      templateUrl: 'views/adminNotification/gxPlannedFeatures.html',
					      controller: ModalInstanceCtrl,
					      size: size,
					      resolve: {
					          selectedRowData: function () {
					            return $scope.selectedRow;
					          }
					      }
					    });

					    modalInstance.result.then(function (selectedItem) {
					     console.log('clicked OK');
					    }, function () {
					    	   console.log('clicked Cancel');
					    });
			   }
			   else
			   {
				   var modalInstance = $modal.open({
					      templateUrl: 'views/adminNotification/gxActionDetails.html',
					      controller: ModalInstanceCtrl,
					      size: size,
					      resolve: {
					          selectedRowData: function () {
					            return $scope.selectedRow;
					          }
					      }
					    });

					    modalInstance.result.then(function (selectedItem) {
					     console.log('clicked OK');
					    }, function () {
					    	   console.log('clicked Cancel');
					    });
			   }
			  
		
			    
			  };
			  
			  $scope.showCompanyDetails = function (p,size) {
				   $scope.selectedRow = p;		
				    var modalInstance = $modal.open({
				      templateUrl: 'views/adminNotification/gxCompanyDetails.html',
				      controller: ModalInstanceCtrl,
				      size: size,
				      resolve: {
				          selectedRowData: function () {
				            return $scope.selectedRow;
				          }
				      }
				    });

				    modalInstance.result.then(function (selectedItem) {
				     console.log('clicked OK');
				    }, function () {
				    	   console.log('clicked Cancel');
				    });
				  };
			  
			  
		
				  /** Code for integrating with service side**/				
				  $scope.notificationArray = adminFunctionsService.notificationArray;
				
				 
				
		 
////     $scope.rows=[];
////     $scope.rows= 
//     
//     $scope.rows = [
//                    {
//                        "id":1,
//                        "date":"17-July-2014 10:25:00AM",
//                        "userid":"Smith",
//                        "status":"Approved",
//                        "companyname":"ZZ Company",
//                        "email":"j.smith@company.com",
//                        "phone":"617-321-4567",
//                        "actions":"Create App",
//                        "ac":true,
//                        "dl":false
//                    }
//                    ,
//                    {
//                    	"id":2,
//                        "date":"15-July-2014 10:25:00AM",
//                        "userid":"Mae",
//                        "status":"Approved",
//                        "companyname":"M Company",
//                        "email":"mae@company.com",
//                        "phone":"617-321-4567",
//                        "actions":"Create App",
//                        "ac":true,
//                        "dl":false
//                    },
//                    {
//                    	"id":3,
//                        "date":"15-July-2014 10:25:00AM",
//                        "userid":"Anju",
//                        "status":"Pending Verification",
//                        "companyname":"A Company",
//                        "email":"ajnu@company.com",
//                        "phone":"617-321-4567",
//                        "actions":"Verify",
//                        "ac":true,
//                        "dl":false
//                    },
//                    {
//                    	"id":4,
//                        "date":"17-July-2014 10:25:00AM",
//                        "userid":"Smith",
//                        "status":"Verified",
//                        "companyname":"CEO",
//                        "email":"j.smith@company.com",
//                        "phone":"617-321-4567",
//                        "actions":"Plan Features",
//                        "ac":true,
//                        "dl":false
//                    },
//                    {
//                    	"id":5,
//                        "date":"17-July-2014 10:25:00AM",
//                        "userid":"Smith",
//                        "status":"Verified",
//                        "companyname":"CEO",
//                        "email":"j.smith@company.com",
//                        "phone":"617-321-4567",
//                        "actions":"Plan Features",
//                        "ac":true,
//                        "dl":false
//                    },
//                    {
//                    	"id":6,
//                        "date":"17-July-2014 10:25:00AM",
//                        "userid":"Smith",
//                        "status":"Verified",
//                        "companyname":"S Company",
//                        "email":"j.smith@company.com",
//                        "phone":"617-321-4567",
//                        "actions":"Plan Features",
//                        "ac":true,
//                        "dl":false
//                    },
//                    {
//                    	"id":7,
//                        "date":"17-July-2014 10:25:00AM",
//                        "userid":"Smith",
//                        "status":"Pending Confirmation",
//                        "companyname":"XX Company",
//                        "email":"j.smith@company.com",
//                        "phone":"617-321-4567",
//                        "actions":"Features Selected",
//                        "ac":true,
//                        "dl":false
//                    },
//                    {
//                    	"id":8,
//                        "date":"17-July-2014 10:25:00AM",
//                        "userid":"Smith",
//                        "status":"Pending Confirmation",
//                        "companyname":"Smith Company",
//                        "email":"smith@company.com",
//                        "phone":"617-321-4567",
//                        "actions":"Features Selected",
//                        "ac":true,
//                        "dl":false
//                    },
//                    
//                    {"id":9,
//                        "date":"17-July-2014 10:25:00AM",
//                        "userid":"Smith",
//                        "status":"Pending Confirmation",
//                        "companyname":"FF Company",
//                        "email":"j.smith@company.com",
//                        "phone":"617-321-4567",
//                        "actions":"Features Selected",
//                        "ac":true,
//                        "dl":false
//                    },
//                    {
//                    	"id":10,
//                        "date":"17-July-2014 10:25:00AM",
//                        "userid":"Smith",
//                        "status":"Feature list Rejected",
//                        "companyname":"LL Company",
//                        "email":"j.smith@company.com",
//                        "phone":"617-321-4567",
//                        "actions":"Plan Features",
//                        "ac":true,
//                        "dl":false
//                    },
//                    {
//                    	"id":11,
//                        "date":"17-July-2014 10:25:00AM",
//                        "userid":"Smith",
//                        "status":"Feature list Rejected",
//                        "companyname":"SD Company",
//                        "email":"j.smith@company.com",
//                        "phone":"617-321-4567",
//                        "actions":"Plan Features",
//                        "ac":true,
//                        "dl":false
//                    },
//                    
//                    {
//                    	"id":12,
//                        "date":"17-July-2014 10:25:00AM",
//                        "userid":"Smith",
//                        "status":"Feature list Rejected",
//                        "companyname":"SQ Company",
//                        "email":"j.smith@company.com",
//                        "phone":"617-321-4567",
//                        "actions":"Plan Features",
//                        "ac":true,
//                        "dl":false
//                    },
//                    {
//                    	"id":13,
//                        "date":"17-July-2014 10:25:00AM",
//                        "userid":"Smith",
//                        "status":"Feature list Accepted",
//                        "companyname":"SH Company",
//                        "email":"j.smith@company.com",
//                        "phone":"617-321-4567",
//                        "actions":"Approved",
//                        "ac":true,
//                        "dl":false
//                    },
//                    
//                    {
//                    	"id":14,
//                        "date":"17-July-2014 10:25:00AM",
//                        "userid":"Smith",
//                        "status":"Feature list Accepted",
//                        "companyname":"YY Company",
//                        "email":"j.smith@company.com",
//                        "phone":"617-321-4567",
//                        "actions":"Approved",
//                        "ac":true,
//                        "dl":false
//                    }
//                    
//                ];          
//            
            
            $scope.tableParams = new ngTableParams({
                page: 1,            // show first page
                count: 10,          // count per page
                sorting: {
                    companyname: 'asc'     // initial sorting
                }
            }, 
            {
                total: $scope.notificationArray.length, // length of data
              
                getData: function($defer, params) {
                	var resultPromise = adminFunctionsService.resultPromise;
                	
                	var resultPromise =  adminFunctionsService.getNotificationArray();
                	console.log(resultPromise);
                	resultPromise.then(function(data){
                
                		  var orderedData = params.sorting() ?
                                  $filter('orderBy')(data, params.orderBy()) :
                                	  data;
                                  $defer.resolve(orderedData.slice((params.page() - 1) * params.count(), params.page() * params.count()));
                          		angular.copy(data,$scope.notificationArray);     
                			})
                    // use build-in angular filter
                  
                }
            }); 
            
            console.log($scope.notificationArray);
            $scope.editId = -1;

            $scope.setEditId =  function(pid) {
            	$scope.rejectId = -1;
                $scope.editId = pid;
            };
            
            
            $scope.rejectId = -1;
            $scope.setRejectId =  function(pid) {
            	$scope.editId = -1;
                $scope.rejectId = pid;
            };
            
      
           // $scope.rows= data;
            $scope.temp = false;
            
            $scope.deleteRow = function(p){
            $scope.notificationArray.splice($scope.notificationArray.indexOf(p),1);
            
            };
             
            $scope.isTemp = function(i){
              return i===$scope.notificationArray.length-1 && $scope.temp;
            };
            
            
            
            	var ModalInstanceCtrl = function ($scope, $modalInstance,selectedRowData) {
            	
            	$scope.selectedRowData = selectedRowData;
            	$scope.ok = function () {
            	    $modalInstance.close();
            	};

            	 $scope.cancel = function () {
            	    $modalInstance.dismiss('cancel');
            	  };
            	};
        });