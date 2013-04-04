# Custom Error Classes

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

	var main = require('./../lib/main');
	var ValidationError = main.general.ValidationError;

	var msg = "awfully bad request is the message",
		ValError = new BadRequest(msg);

	console.log('ValError', ValError);

STDOUT output:

	ValError {
		name: 'Validation',
		logLevel: 'warn',
		resCode: undefined,
		message: 'not a valid date'
	}

### 2. Request Error Classes

	var BadRequestError = main.request.BadRequest;
	var msg = "just an awful request",
		ReqError = new BadRequestError(msg);

	console.log('ReqError', ReqError);

STDOUT output:

	ReqError {
		name: 'BadRequest',
		logLevel: 'warn',
		resCode: 400,
		message: 'just an awful request'
	}



## TODO
1. add more tests
2. add visionmedia's log as dependency -> walk thru list of methods and throw error logLevel property is not a method

eg this shd throw:

	errFactory('Database', 'err')

eg this is correct:

	errFactory('Database', 'error')


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