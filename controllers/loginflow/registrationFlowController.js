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
 * Function   :    This file is controller file for all user login/signup flow related functions binded with html page.
 */

gxMainApp.controller("registrationFlowController", function ($scope,gxRegistrationService) {
	
	 //Executes when the controller is created
	//Variables
	 $scope.objCaptcha = { original: '', userValue: ''};	
	 $scope.btnHide = false;
	 $scope.showMessage = false;
	 $scope.acCountries =  gxRegistrationService.acCountries;
	 $scope.acStates = gxRegistrationService.acStates;
	 $scope.fields = { email: '', emailConfirm: '', emailSecond: '' };
	 /**
	  * @ function to load the countries and state list at registration load
	  */ 
	 gxRegistrationService.getCountries();
	
	 
	 $scope.loadRegistrationInitData = function () {
	
	 };
	
	/**
	 * @ function to submit the REGISTRATION FORM
	 */ 
	   
	 $scope.submitRegistrationForm = function(isValid) {		
		isValidCaptcha = ValidCaptcha($scope.objCaptcha.userValue,$scope.objCaptcha.original);            
        
		//check if the captcha is valid or not
        if(!isValidCaptcha) {
           alert("Please enter captcha value correctly!");
        }
		// check to make sure the form is completely valid
		else if (isValid && isValidCaptcha) { 
           $scope.showMessage = true;
           $scope.btnHide = true;
           /*alert("Thank you "+ $scope.user.firstName.valueOf() + " for registering. We will get in touch with you through your email id and phone number");*/
             
		}
		
	};
	
	/**
	 * @ function to reset the REGISTRATION FORM
	 */ 
	   
     $scope.resetRegistrationForm = function() {
	      $scope.form.$setPristine();
	      $scope.model = '';
	      $scope.form.$setPristine(true);
     };
	   
     /**
  	 * @ function to get the states for the selected country Id
  	 */ 
  	   
	 $scope.getStatesForCountry = function() {
		  $scope.availableStates=[];
		  //call the service
		  gxRegistrationService.getStatesForCountryId($scope.country.id);
		  $scope.availableStates = $scope.acStates;
	 };
		
		
		//Created / Generates the captcha function    
	 $scope.addCaptchaToForm = function() {
          var a = Math.ceil(Math.random() * 10)+ '';
          var b = Math.ceil(Math.random() * 10)+ '';       
          var c = Math.ceil(Math.random() * 10)+ '';  
          var d = Math.ceil(Math.random() * 10)+ '';  
          var e = Math.ceil(Math.random() * 10)+ '';  
          var f = Math.ceil(Math.random() * 10)+ '';  
          var g = Math.ceil(Math.random() * 10)+ '';  
          var code = a + ' ' + b + ' ' + ' ' + c + ' ' + d + ' ' + e + ' '+ f + ' ' + g;
          $scope.objCaptcha.original = code;
	 };
	// Validate the Entered input against the generated security code function   
	 ValidCaptcha = function(val1, val2) {
          var str1 = removeSpaces(val1);
          var str2 = removeSpaces(val2);
          if (str1 === str2) return true;        
          return false;        
	 };

	    // Remove the spaces from the entered and generated code
	 removeSpaces = function(string){
	      return string.split(' ').join('');
	 };
	 
	 loadCaptcha = function()
	 {
		 $scope.addCaptchaToForm();
	 };
	     
});