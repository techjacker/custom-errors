var test = require('tap').test,
	AbstractError = require('./../lib/abstract-error'),
	errorFactory = require('./../lib/error-factory');


test('error factory', function(t) {

	var	msg = 'random message',
		RandomError = errorFactory('Random', 'info'),
		RandomInstance = new RandomError(msg);

	t.ok(RandomError.prototype instanceof AbstractError, 'RandomError inherits from AbstractError');
	t.equal(RandomInstance.message, msg, 'this.message param is correct');
	t.equal(RandomInstance.name, 'Random', 'this.name param is correct');
	t.equal(RandomInstance.logLevel, 'info', 'this.logLevel param is correct');
	t.equal(RandomInstance.resCode, 400, 'this.resCode param defaults to 400');
	t.notOk(RandomInstance.doNotKill, 'this.doNotKill defaults to falsey');

	// WITH status code this time
	var ResCodeDoNotKill = errorFactory('Random', 'info', 403, true),
		instanceResCodeDoNotKill = new ResCodeDoNotKill(msg),
		instanceResCodeDoNotKillOverride = new ResCodeDoNotKill(msg, 123, false);

	// defaults
	t.equal(instanceResCodeDoNotKill.resCode, 403, 'this.resCode param is assigned according to fn input args');
	t.ok(instanceResCodeDoNotKill.doNotKill, 'this.doNotKill set to falsey by factory');
	// override
	t.equal(instanceResCodeDoNotKillOverride.resCode, 123, 'this.resCode param is assigned according to fn input args');
	t.notOk(instanceResCodeDoNotKillOverride.doNotKill, 'this.doNotKill overridden by constructor');

	t.end();
});


test('error factory: override response code', function(t) {

	var BaseError = errorFactory('Random', 'info', 400),
		msg = 'random message',
		BaseErrorInstance = new BaseError(msg),
		BaseErrorInstanceOverride = new BaseError(msg, 500);

	t.equal(BaseErrorInstance.resCode, 400, 'this.resCode shd have been overriden by instance of class');
	t.equal(BaseErrorInstanceOverride.resCode, 500, 'this.resCode shd have been overriden by instance of class');
	t.end();
});