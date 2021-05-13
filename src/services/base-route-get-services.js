const dynamoDb = require('../utils/dynamodb');
const logger = require('../utils/logger');
const httpStatus = require('http-status');
const ApplicationResponseException = require("../custom-exception/ApplicationResponseException");

var getDocumentById = async (id) => {

  try {

    logger.info({ uuid, message: [`Getting document by id ${id}`] });

    var dynamoObj = await dynamoDb.queryTableById(id);

    var response;
    if (dynamoObj.Items.length > 0) {
      response = {
        HashId: dynamoObj.Items[0].HashId,
        RangeId: dynamoObj.Items[0].RangeId,
        IndexSample: dynamoObj.Items[0].IndexSample
      };
    } else {
      response = { message: "No register found" };
    };

    return response;

  } catch (error) {

    logger.error({ uuid, message: [error.message, typeof error, error.stack] });

    throw new ApplicationResponseException(httpStatus.INTERNAL_SERVER_ERROR, { message: "Failed get document" });
  }

}


module.exports = {
  getDocumentById
}