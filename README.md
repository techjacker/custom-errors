# Custom Error Classes

[![Build Status](https://secure.travis-ci.org/techjacker/custom-errors.png)](http://travis-ci.org/techjacker/custom-errors)

- All classes inherit from the abstract class (lib/abstract-error.js) inspired by [dustin senos's post](http://dustinsenos.com/articles/customErrorsInNode).
- The abstract error class inherits from the in built error object.
- All error classes exported in lib/main.js -> index.js
- Easy logging integration with express.js using the [log errors module](https://github.com/techjacker/log-errors)

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
	logLevel: 'warning',
	doNotKill: undefined,
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
	logLevel: 'warning',
	resCode: 400,
	message: 'just an awful request'
}
```

## Using with Express.js

Easy integration with the [log errors module](https://github.com/techjacker/log-errors)

```JavaScript
var BadRequestError = require('customErrors').request.BadRequest;
var logErrors   = require('log-errors');

// define some routes
app.get('/some/route', function(req, res, next) {
	if ('error thrown') {
		next(new BadRequestError('reason for the bad request being thrown'));
	}
});

//... catchall error middleware (put at very end beneath all routes)
app.configure('development', function() {

	// wrap the logger if you need to do something
	// with the error before passing it to the logger
    app.use(function(err, req, res, next) {
		err.resCode || (err.resCode = 400);
        logErrors.development(err, req, res, next);
    });
});

app.configure('production', function() {
	// defaults to sending 500 response if err.resCode is not set
    app.use(logErrors.production);
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