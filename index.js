/*jslint nomen: true, plusplus: false, sloppy: true, white:true*/
/*jshint nomen: false, curly: true, plusplus: false, expr:true, undef:true, newcap:true, latedef:true, camelcase:true  */
/*global iScroll:false, setTimeout: false, document:false, WebKitCSSMatrix:false, _: false, Backbone: false, backbone: false, $: false, define: false, require: false, console: false, window:false */

var main = require('./lib/main');

	// var ValidationError = main.general.ValidationError;
	// var msg = "not a valid date",
	// 	ValError = new ValidationError(msg);

	// 	console.log('ValError', ValError);


	var BadRequestError = main.request.BadRequest;
	var msg = "just an awful request",
		ReqError = new BadRequestError(msg);

		console.log('ReqError', ReqError);
ReqError {
	name: 'BadRequest',
	logLevel: 'warn',
	resCode: 400,
	message: 'just an awful request'
}


module.exports = main;