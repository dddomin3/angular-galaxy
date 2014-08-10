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
 * Function   :    This is main service wrapper for calls. Every other service would call this service to call 
 * 				   methods and use the returned response. Any additional manipulation of business logic 
 * 				   is NOT done here but in the main file. 		
 */

gxMainApp.factory('gxAPIServiceWrapper', function($http, $q,$rootScope) { 
	
		function _makeRequest(verb, uri, data) {
			var defer = $q.defer();
			verb = verb.toLowerCase();
		 
			//start with the uri
			var httpArgs = [uri];
			if (verb.match(/post|put/)){
				httpArgs.push( data );
			}
			 
			$http[verb].apply(null, httpArgs)
			.success(function(data, status){
				defer.resolve(data);
				// update angular's scopes if needed; i'd handle it later. 
				// $rootScope.$$phase || $rootScope.$apply();
			})
			.error(function(data, status){
				defer.reject('HTTP Error: ' + status);
			});
		 
			return defer.promise;
		}
		 
		return {
			get: function( uri ) {
				return _makeRequest( 'get', uri );
			}
			,post: function( uri, data ){
				return _makeRequest( 'post', uri, data );
			}
			,put: function( uri, data ){
				return _makeRequest( 'put', uri, data );
			}
			,delete: function( uri ){
				return _makeRequest( 'delete', uri );
			}
		};
 
});