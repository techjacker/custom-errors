/*jslint nomen: true, plusplus: false, sloppy: true, white:true*/
/*jshint nomen: false, curly: true, plusplus: false, expr:true, undef:true, newcap:true, latedef:true, camelcase:true  */
/*global module: false, iScroll:false, setTimeout: false, document:false, WebKitCSSMatrix:false, _: false, Backbone: false, backbone: false, $: false, define: false, require: false, console: false, window:false */


// var validationError = require('./validation-error');
var errFactory = require('./error-factory');


// seriousErrors = ['emergency', 'alert', 'critical', 'error'],

// all exports shd be capitalised!
module.exports = {
	general: {
		ValidationError: errFactory('Validation', 'warning'),
		WorkerError: errFactory('Worker', 'error', 500, true), // last param = donotkill
		DatabaseError: errFactory('Database', 'error', 500, true) // last param = donotkill
	},
	request: {
		BadRequest: errFactory('BadRequest', 'warning', 400),
		Unauthorized: errFactory('Unauthorized', 'warning', 401),
		Forbidden: errFactory('Forbidden', 'warning', 403),
		NotAcceptable: errFactory('Not Acceptable', 'warning', 406)
	}
};