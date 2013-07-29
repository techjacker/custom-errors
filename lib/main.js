// var validationError = require('./validation-error');
var errFactory = require('./error-factory');


// seriousErrors = ['emergency', 'alert', 'critical', 'error'],

// all exports shd be capitalised!
module.exports = {
	general: {
		ValidationError: errFactory('Validation', 'warning'),
		WorkerError: errFactory('Worker', 'error', 500, true), // last param = donotkill
		DatabaseError: errFactory('Database', 'error', 500, true) // last param = donotkill
	},
	request: {
		BadRequest: errFactory('BadRequest', 'warning', 400),
		Unauthorized: errFactory('Unauthorized', 'warning', 401),
		Forbidden: errFactory('Forbidden', 'warning', 403),
		NotAcceptable: errFactory('Not Acceptable', 'warning', 406)
	}
};