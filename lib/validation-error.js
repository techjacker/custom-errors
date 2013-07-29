var errFactory = require('./error-factory');
var ValidationError = errFactory('Validation', 'warning');

module.exports = ValidationError;