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
gxMainApp.controller('roleManagementController', function($scope, $filter, $rootScope, ngTableParams) {

	
	$scope.view = function() {
		window.location.href = ('views/roleMgnt/gxCreateRole.html');
	  };
	
	
	    var data = [
	        {	siNo: 1,
	        	roleId: "Mae013",
	        	roleName: "hhh",
	        	noOfUsers: "847-8027",
	        	createdDate:"24-July-2014"
	                	
	        },
	        
	        {	siNo: 2,
	        	roleId: "www",
	        	roleName: "hhh",
	        	noOfUsers: "847-8027",
	        	createdDate:"24-July-2014"    	
	        },
	        
	        {	siNo: 3,
	           	roleId: "qqq",
	        	roleName: "hhh",
	        	noOfUsers: "847-8027",
	        	createdDate:"24-July-2014"      	
	        },
	        
	        {	siNo: 4,
	        	roleId: "nnn",
	        	roleName: "hhh",
	        	noOfUsers: "847-8027",
	        	createdDate:"24-July-2014"   	
	        },
	        
	        {	siNo: 5,
	           	roleId: "ttt",
	        	roleName: "hhh",
	        	noOfUsers: "847-8027",
	        	createdDate:"24-July-2014"	
	        },
	        
	        {	siNo: 6,
	           	roleId: "kkk",
	        	roleName: "hhh",
	        	noOfUsers: "847-8027",
	        	createdDate:"24-July-2014"
	        },
	        {	
	        	siNo: 7,
	           	roleId: "lll",
	        	roleName: "hhh",
	        	noOfUsers: "847-8027",
	        	createdDate:"24-July-2014"  	    	
	        },

	        
	        {	
	        	siNo: 8,
	           	roleId: "bbb",
	        	roleName: "hhh",
	        	noOfUsers: "847-8027",
	        	createdDate:"24-July-2014"        	
	        },
	        

	        
	        {	siNo: 9,
	           	roleId: "uuu",
	        	roleName: "hhh",
	        	noOfUsers: "847-8027",
	        	createdDate:"24-July-2014"      	
	        },

	        
	        {	siNo: 10,
	           	roleId: "kkk",
	        	roleName: "hhh",
	        	noOfUsers: "847-8027",
	        	createdDate:"24-July-2014"         	
	        },
	        

	        
	        {	siNo: 11,
	           	roleId: "iii",
	        	roleName: "hhh",
	        	noOfUsers: "847-8027",
	        	createdDate:"24-July-2014"        	
	        },
	        

	        
	        {	siNo: 12,
	           	roleId: "aaa",
	        	roleName: "hhh",
	        	noOfUsers: "847-8027",
	        	createdDate:"24-July-2014"       	
	        }
	    ];
	    
	    $scope.data = data;

	    $scope.tableParams = new ngTableParams({
	        page: 1,            // show first page
	        count: 10,          // count per page
	        filter: {
	            //name: 'M'       // initial filter
	        },
	        sorting: {
	            //name: 'asc'     // initial sorting
	        }
	    }, 
	    
	    {
	        total: data.length, // length of data
	        getData: function ($defer, params) {
	            // use build-in angular filter
	            var filteredData = params.filter() ?
	                    $filter('filter')(data, params.filter()) :
	                    data;
	            var orderedData = params.sorting() ?
	                    $filter('orderBy')(filteredData, params.orderBy()) :
	                    data;

	            params.total(orderedData.length); // set total for recalc pagination
	            $defer.resolve(orderedData.slice((params.page() - 1) * params.count(), params.page() * params.count()));
	        }
	    });

	    $scope.changeSelection = function(user) {
	        // console.info(user);
	    }
	    
	    $scope.rows= data;
	    $scope.temp = false;
     
	    $scope.deleteRow = function(user){
	    	$scope.rows.splice($scope.rows.indexOf(user),1);
      };
       
     $scope.isTemp = function(i){
      };
	 
      $scope.userInfo = {
    	        person: {
    	            mDate: '1967-10-07'
    	        }
    	    };
    	    
      

});