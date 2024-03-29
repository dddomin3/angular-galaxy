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
 * Function   :    This is creating server instance. 
 */
// @pcseg306 - This only runs at port 8000 ; i have tried running on other ports but it does not work. I'd check later.

var express = require('Express');
var app = express();
port = process.argv[2] || 8000;


/** The below syntax is for version 4.0 **/
/**
//all environments
app.set('title', 'Galaxy 2021 - Platform of Platforms');

// development only
if ('development' == app.get('env')) {
  app.set('app_uri', 'http://localhost/dev');
}

// production only
if ('production' == app.get('env')) {
  app.set('app_uri', 'http://localhost/prod');
}

app.use("/", express.static('C:/Galaxy_workspace/galaxy-ui'));
app.listen(port);
console.log("Express server running at http://localhost:"  + port + "/\nCTRL + C to shutdown"); **/


/** The below syntax is for version 3.4.6 - version 4 has errors with ngRoute ; i'd update when those stable code fixes are committed**/


app.configure(function () {
	app.use("/",express.static('C:/Users/pcscs204/workspace/galaxy-ui'));
});

app.listen(port);
console.log("Express server running at http://localhost:"  + port + "/\nCTRL + C to shutdown");
