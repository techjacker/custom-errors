var test = require('tap').test,
	AbstractError = require('./../lib/abstract-error'),
	errorFactory = require('./../lib/error-factory');


test('error factory', function(t) {

	var RandomError = errorFactory('Random', 'info');
	var RandomErrorStatusCode = errorFactory('Random', 'info', 400);

	var msg = 'random message',
		RandomInstance = new RandomError(msg),
		RandomStatusInstance = new RandomErrorStatusCode(msg);

	t.ok(RandomError.prototype instanceof AbstractError, 'RandomError inherits from AbstractError');
	t.equal(RandomInstance.message, msg, 'this.message param is correct');
	t.equal(RandomInstance.name, 'Random', 'this.name param is correct');
	t.equal(RandomInstance.logLevel, 'info', 'this.logLevel param is correct');
	t.notOk(RandomInstance.resCode, 'this.resCode param is undefined');

	// WITH status code this time
	t.ok(RandomStatusInstance.resCode, 'this.resCode param IS defined');

	t.end();
});