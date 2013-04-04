/*jslint nomen: true, plusplus: false, sloppy: true, white:true*/
/*jshint nomen: false, curly: true, plusplus: false, expr:true, undef:true, newcap:true, latedef:true, camelcase:true  */
/*global module: false, iScroll:false, setTimeout: false, document:false, WebKitCSSMatrix:false, _: false, Backbone: false, backbone: false, $: false, define: false, require: false, console: false, window:false */
var util = require('util');

///////////////////////////////////////////////////////
// http://shapeshed.com/uncaught-exceptions-in-node/ //
///////////////////////////////////////////////////////
var AbstractError = function (msg, constr) {

	// If defined, pass the constr property to V8's
	// captureStackTrace to clean up the output
	Error.captureStackTrace(this, constr || this);

	// If defined, store a custom error message
	this.message = msg || 'Default Error Message';
};

// Extend our AbstractError from Error
util.inherits(AbstractError, Error);

// Give our Abstract error a name property. Helpful for logging the error later.
// AbstractError.prototype.name = 'Abstract Error'

module.exports = AbstractError;