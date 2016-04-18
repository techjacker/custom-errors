// var util = require('util');
var AbstractError = require('./abstract-error');

// log levels shd correspond to Log Levels listed here https://github.com/visionmedia/log.js
var errorFactory = function (name, logLevel, resCode, doNotKill) {

	var CustomError = function (msg, resCodeOverride, doNotKillOverride) {
        this.doNotKill = (doNotKillOverride !== undefined) ? doNotKillOverride : doNotKill;
        this.name      = name;
        this.logLevel  = logLevel;
        this.resCode   = resCodeOverride || resCode || 400; // default to 400
		CustomError.super_.call(this, msg, this.constructor);
	};

	// util.inherits(CustomError, AbstractError);
	CustomError.prototype = new AbstractError;
	CustomError.super_ = AbstractError;
	CustomError.prototype.constructor = CustomError;

	// add name info
	CustomError.prototype.name = name;

	return CustomError;
};

module.exports = errorFactory;
