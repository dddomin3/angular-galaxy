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
 * User       :    pcseg306
 * Function   :   This file is controller for all the control flow related to homePage
 */

gxMainApp.controller("homeController", function ($scope, $rootScope, ngDialog,homeProfileDataService) {

	 	//Function to open Main Menu
		
		$scope.openMainMenuPopUp = function () {
		$scope.value = true;

		ngDialog.open({
			template: 'views/home/comps/mainMenuAccordian.html',
			className: 'ngdialog-theme-default',
			scope:$scope
		});
		
		//ngDialog
		
	};	
	
	$scope.openSuperAdminRegistrationNotifications = function() {	
			window.location.href = '#AdminNotifications';
			
	};
	
	$scope.routeSubModule = function(str) {
    	alert('helloMain1' + str);
    	ngDialog.close();
    };
});


gxMainApp.controller('MainController',function ($scope,homeProfileDataService) {
		$scope.menuArray = homeProfileDataService.menuArray;
		homeProfileDataService.getMenuArray();
		
		$scope.routeSubModule = function(str) {
			$scope.$parent.routeSubModule(str);
        };
		
});

gxMainApp.controller('ItemController', function ($scope) {

					$scope.$parent.isopen = ($scope.$parent.default === $scope.item);

					$scope.$watch('isopen', function (newvalue, oldvalue, $scope) {
						$scope.$parent.isopen = newvalue;
		                });
					$scope.routeSubModule = function(str) {
		                	alert('hello' + str);
		                	//window.location.href='#'+str;
		                };
		            });