var test = require('tap').test,
	AbstractError = require('./../lib/abstract-error'),
	main = require('./../lib/main');

// individual error classes
var ValidationError = main.general.ValidationError;
var BadRequestError = main.request.BadRequest;


test('ValidationError', function(t) {

	var msg = "not a valid date",
		ValError = new ValidationError(msg);

	t.ok(ValidationError.prototype instanceof AbstractError, 'ValidationError inherits from AbstractError');
	t.ok(ValError instanceof ValidationError);
	t.equal(ValError.message, msg, 'this.message param is correct');
	t.equal(ValError.name, 'Validation', 'this.name param is correct');
	t.equal(ValError.logLevel, 'warn', 'this.logLevel param is correct');

	t.end();
});