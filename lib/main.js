/*jslint nomen: true, plusplus: false, sloppy: true, white:true*/
/*jshint nomen: false, curly: true, plusplus: false, expr:true, undef:true, newcap:true, latedef:true, camelcase:true  */
/*global module: false, iScroll:false, setTimeout: false, document:false, WebKitCSSMatrix:false, _: false, Backbone: false, backbone: false, $: false, define: false, require: false, console: false, window:false */


// var validationError = require('./validation-error');
var errFactory = require('./error-factory');

// all exports shd be capitalised!
module.exports = {
	general: {
		ValidationError: errFactory('Validation', 'warning'),
		DatabaseError: errFactory('Database', 'error')
	},
	request: {
		BadRequest: errFactory('BadRequest', 'warning', 400),
		Unauthorized: errFactory('Unauthorized', 'warning', 401),
		Forbidden: errFactory('Forbidden', 'warning', 403),
		NotAcceptable: errFactory('Not Acceptable', 'warning', 406)
	}
};