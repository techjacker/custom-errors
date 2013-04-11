# Custom Error Classes

[![Build Status](https://secure.travis-ci.org/techjacker/custom-errors.png)](http://travis-ci.org/techjacker/custom-errors)

- All classes inherit from the abstract class (lib/abstract-error.js) inspired by [dustin senos's post](http://dustinsenos.com/articles/customErrorsInNode).
- The abstract error class inherits from the in built error object.
- All error classes exported in lib/main.js -> index.js

### App Error Classes (module.exports.general)
	1. ValidationError
	2. DatabaseError

### Express Error Classes (module.exports.request)
	1. BadRequest = Bad Request Error (400)
	2. Unauthorized = Unauthorized Error (401)
	3. Forbidden = Forbidden Error (403)
	4. NotAcceptable Request Not Acceptable Error (406)

## Sample Usage

### 1. General Error Classes
```JavaScript
var main 			= require('./../lib/main');
var ValidationError = main.general.ValidationError;

var msg 	 = "terrible input",
	ValError = new ValidationError(msg);

console.log('ValError', ValError);
```

STDOUT output:
```Shell
ValError {
	name: 'Validation',
	logLevel: 'warn',
	resCode: undefined,
	message: 'not a valid date'
}
```

### 2. Request Error Classes
```JavaScript
var BadRequestError = main.request.BadRequest;
var msg = "just an awful request",
	ReqError = new BadRequestError(msg);

console.log('ReqError', ReqError);
```

STDOUT output:
```Shell
ReqError {
	name: 'BadRequest',
	logLevel: 'warn',
	resCode: 400,
	message: 'just an awful request'
}
```

## In-App Usage eg in Express
```JavaScript
// route definitions
var customErrors = require('customErrors');
var BadRequestError = customErrors.request.BadRequest;

app.get('/some/route', function(req, res, next) {
	if ('error thrown') {
		next(new BadRequestError('reason for the bad request being thrown'));
	}
});

// catchall error middleware (put at very end underneath all routes)
var	util = require('util');
var Log = require('log');
var	log = new Log();
var customErrors = require('customErrors');
var BadRequestError = customErrors.request.BadRequest;

app.use(function(err, req, res, next) {

	if (err instanceof BadRequestError && app.get('env') === 'production') {
		// use visionmedia's logger to write to main app logfile
		var logLevel = err.logLevel || 'debug';
		var logger = log[logLevel];
		var seriousErrors = ['error', 'critical', 'alert', 'emergency'];

		// log the error summary with visionmedia's logger
		logger(err.name + ': ' + err.message);

		// if it's a serious error then dump some more info for debugging purposes
		if (seriousErrors.indexOf(logLevel) !== -1) {
			console.log(err.stack);
		}

	} else {
		// if in dev then deeply inspect every error
		console.log(err.name || 'express error', util.inspect(err, true, 4, true));
	}

	res.send(err.resCode || 500, {error: err.name || "there was an error"});
});
```

### Reference
#### [Header status codes](http://en.wikipedia.org/wiki/List_of_HTTP_status_codes)

#### log levels
##### [Visionmedia Logging Module](https://github.com/visionmedia/log.js)
	0 EMERGENCY system is unusable
	1 ALERT action must be taken immediately
	2 CRITICAL the system is in critical condition
	3 ERROR error condition
	4 WARNING warning condition
	5 NOTICE a normal but significant condition
	6 INFO a purely informational message
	7 DEBUG messages to debug an application


## TODO
1. add more tests
2. add visionmedia's log as dependency -> walk thru list of methods and throw error logLevel property is not a method

eg this shd throw:
```JavaScript
errFactory('Database', 'err');
```
eg this is correct:
```JavaScript
errFactory('Database', 'error');
```