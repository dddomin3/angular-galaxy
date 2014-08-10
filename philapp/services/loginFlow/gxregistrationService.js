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
 * Function   :    Service for Registration Functions, we'd just pass our calls to Service Wrapper
 * 				   and use the returned response. Any additional manipulation of business logic 
 * 				   is done here not in the wrapper. 		
 */

gxMainApp.factory("gxRegistrationService", function($rootScope,$http,gxAPIServiceWrapper){
	/** Declare variables for all the arrayCollections **/

	var _acCountries = [];
	var _acUSStates=[];
	var _acCanadaStates=[];
	var _acStates=[];
	
	var _getCountries = function() {
		var serverUrl= $rootScope.SERVER_URL + 'registration/countries';
		var result = gxAPIServiceWrapper.get(serverUrl);
		result.then(function(data) {
			angular.copy(data.countryDTO, _acCountries);
			});
    }
    var _getStatesForCountryId = function(countryId) {
    	//append the state id here .. for the url. 
    	var serverUrl= $rootScope.SERVER_URL + 'registration/countries/'+ countryId+'/states';
    	var result = gxAPIServiceWrapper.get(serverUrl);
		result.then(function(data) {
			angular.copy(data.stateDTO, _acStates);
			});    		
    }
    return{
    	acCountries: _acCountries,
    	acUSStates: _acUSStates,
    	acCanadaStates:_acCanadaStates,
    	acStates:_acStates,
    	getCountries: _getCountries,
    	getStatesForCountryId:_getStatesForCountryId
    	
    };
	
    
   
	

});
