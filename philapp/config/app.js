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
 * Function   :    This file is main config file (like a config constructor) do not change the main 
 * 				   settings except for variable names. 
 */
 
angular.module('angularDc', []);
 
var gxMainApp = angular.module("gxMainApp", [
	'ui.router',
	'ngRoute',
	'ngCsv',
	'ngDialog',
	'ngTable',
	'ui.bootstrap',
	'ngAnimate', 
	'leaflet-directive',
	'angularTreeview',
	'angularDc'
	]);

//for routing the application
gxMainApp.config(['$stateProvider', '$urlRouterProvider',function($stateProvider,$urlRouterProvider){
	$stateProvider.
		state('login',{
			url:'/Login',
			templateUrl:'views/loginFlow/gxLogin.html',
			controller:'loginFlowController'
		}).	
		state('home',{ 
			url:'/Home',
			templateUrl:'views/home/gxHome.html',
			controller:'homeController'
		}).	
		state('Registration', {
			url:'/Registration',
			templateUrl: 'views/loginFlow/gxRegistration.html',
	        controller : 'registrationFlowController'
	    }).
	    state('Forgot_Password', {
	    	url:'/Forgot_Password',
			templateUrl: 'views/loginFlow/gxForgotPassword.html',
	        controller : 'loginFlowController'
	    }).
	    state('AdminNotifications',{
	    	url:'/AdminNotifications',
	    	templateUrl : 'views/adminNotification/gxNotification.html',
	    	controller : 'adminNotificationController'
	    }). 
	    state('ManageUsers',{
			url:'/ManageUsers',
	    	templateUrl : 'views/manageUsers/manageUsers.html',
	    	controller : 'tabledata'
	    }). 
		state('ManageVehicles',{
			url:'/ManageVehicles',
	    	templateUrl : 'views/manageVehicles/manageVehicles.html',
	    	controller : 'vehicleController'
	    }).
	    state('CreateUsers', {
			  url:'/CreateUsers',
	          templateUrl: 'views/manageUsers/createusers.html',
	          controller: 'treedata1'
	    }).
		state('EditUsers', {
			  url:'/EditUsers',
			  templateUrl: 'views/manageUsers/editusers.html',
			  controller: 'treedata2'
		}).
		state('ViewUsers', {
			  url:'/ViewUsers',
			  templateUrl: 'views/manageUsers/viewusers.html',
			  controller: 'treedata3'
		}).
		state('ImportClients', {
			  url:'/ImportClients',
			  templateUrl: 'views/manageUsers/importclients.html',
			  controller: 'tabledata'
		}).		
	    state('RoleManagement',{
	    	url :'/RoleManagement',
	    	templateUrl : 'views/roleMgnt/gxRoleMgnt.html',
	    	controller : 'roleManagementController'
	    }).
	    state('home.Manage Users',{
	    	url:'/Manage Users',
	    	template: 'I could sure use a drink right now.'
	    }); 
		$urlRouterProvider.otherwise('/Login');
}]);


//Registering all constants for global scope
gxMainApp.run(function ($rootScope) {
    $rootScope.SERVER_URL = 'http://10.234.60.27:9773/galaxy-core-api-1.0.0/services/core/'; 
    $rootScope.CONSTANT_GET = 'get'; 
    $rootScope.CONSTANT_POST = 'post';
    $rootScope.mainAppState = 'home';
});
