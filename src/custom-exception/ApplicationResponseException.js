'use strict';

module.exports = function ApplicationResponseException(httpCode,message) {
  Error.captureStackTrace(this, this.constructor);
  this.name = this.constructor.name;
  this.httpCode = httpCode;
  this.message = message;
};

require('util').inherits(module.exports, Error);