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
 * Function   :   Service for Super/client Admin Notification Functions
 */




gxMainApp.factory("adminFunctionsService", function($http,$rootScope,gxAPIServiceWrapper){
    var _notificationArray = [];
    var _resultPromise;
    var _getNotificationArray = function() {
    	_resultPromise = gxAPIServiceWrapper.get("models/superAdmin/dummySuperAdminNotification.json");
    	console.log(_resultPromise);
    	return _resultPromise;
    }
    return{
    	notificationArray: _notificationArray,
    	getNotificationArray: _getNotificationArray,
    	resultPromise : _resultPromise
    };
});