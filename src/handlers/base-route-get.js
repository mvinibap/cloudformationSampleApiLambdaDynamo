const JSON = require('circular-json');
const logger = require("../utils/logger");
const dynamoDb = require('../utils/dynamodb-ultils');
const { makeResponse } = require("../utils/response");
const lambdaVersion = process.env.LAMBDA_VERSION
const httpStatus = require("http-status");

exports.run = async event => {

  uuid = event.requestContext.requestId;

  logger.info({ uuid, message: [`Starting base-route-get version ${lambdaVersion}`] });

  logger.info(event);

  const registerId = event.queryStringParameters.id;

  var dynamoObj = await dynamoDb.getTableDoc(registerId);

  logger.info(JSON.stringify(dynamoObj))

  var response;
  if (dynamoObj.Items.length > 0) {
    response = {
      HashId: dynamoObj.Items[0].HashId,
      RangeId: dynamoObj.Items[0].RangeId,
      IndexSample: dynamoObj.Items[0].IndexSample
    };
  } else {
    response = "No register found";
  };

  return await makeResponse(httpStatus.OK, { message: response }, "base-rout-get-response");
}