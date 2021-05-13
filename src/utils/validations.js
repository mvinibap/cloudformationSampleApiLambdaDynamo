const ApplicationResponseException = require("../custom-exception/ApplicationResponseException");
const JSON = require('circular-json');
const postSchema = require('../schema/schema-post');
const logger = require('../utils/logger');
const httpStatus = require('http-status');

var validatePost = async body => {

  logger.info({ uuid, message: ["Starting validations body for post method"] });

  var body = JSON.parse(body);

  let arrErros = postSchema.validate(body);

  if (arrErros.length) {
    logger.error({ uuid, message: [`Error on validating = ${arrErros}`] });

    let errors = arrErros.map(error => error.message);
    let msgError = errors.join(" ");
    throw new ApplicationResponseException(httpStatus.BAD_REQUEST, { message: msgError });
  }

  return body;
};

module.exports = {
  validatePost
}