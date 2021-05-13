const dynamoDb = require('../utils/dynamodb');
const logger = require('../utils/logger');
const httpStatus = require('http-status');
const ApplicationResponseException = require("../custom-exception/ApplicationResponseException");

var saveObject = async (body) => {

  try {

    logger.info({ uuid, message: [`Saving object`] });

    await dynamoDb.putObjectIntoTable(body);

  } catch (error) {

    logger.error({ uuid, message: [error.message, typeof error, error.stack] });

    throw new ApplicationResponseException(httpStatus.INTERNAL_SERVER_ERROR, { message: "Failed get document" });
  }

}


module.exports = {
  saveObject
}