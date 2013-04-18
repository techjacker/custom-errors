var _    = require('underscore'),
	test = require('tap').test,
	AbstractError = require('./../lib/abstract-error'),
	main = require('./../lib/main');

// individual error classes
var ValidationError = main.general.ValidationError;

test('main.js exports', function(t) {

	// general errors
	t.ok(_.isFunction(main.general.ValidationError), 'main.general.ValidationError exports a function');
	t.ok(_.isFunction(main.general.WorkerError), 'main.general.WorkerError exports a function');
	t.ok(_.isFunction(main.general.DatabaseError), 'main.general.DatabaseError exports a function');

	// request errors
	t.ok(_.isFunction(main.request.BadRequest), 'main.request.BadRequest exports a function');
	t.ok(_.isFunction(main.request.Unauthorized), 'main.request.Unauthorized exports a function');
	t.ok(_.isFunction(main.request.Forbidden), 'main.request.Forbidden exports a function');
	t.ok(_.isFunction(main.request.NotAcceptable), 'main.request.NotAcceptable exports a function');
	t.end();
});

test('ValidationError', function(t) {

	var msg = "not a valid date",
		ValError = new ValidationError(msg);

	t.ok(ValidationError.prototype instanceof AbstractError, 'ValidationError inherits from AbstractError');
	t.ok(ValError instanceof ValidationError);
	t.equal(ValError.message, msg, 'this.message param is correct');
	t.equal(ValError.name, 'Validation', 'this.name param is correct');
	t.equal(ValError.logLevel, 'warning', 'this.logLevel param is correct');

	t.end();
});

