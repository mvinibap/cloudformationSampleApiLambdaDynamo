const logger = require('../utils/logger');
const { getDocumentById } = require('../services/base-route-get-services')
const { makeResponse } = require('../utils/response');
const lambdaVersion = process.env.LAMBDA_VERSION
const httpStatus = require('http-status');
const { operationType } = require('../utils/enums');
const ApplicationResponseException = require("../custom-exception/ApplicationResponseException");

exports.run = async event => {

  uuid = event.requestContext.requestId;

  try {

    logger.info({ uuid, message: [`Starting base-route-get version ${lambdaVersion}`] });

    const id = event.pathParameters.id;
    var response = await getDocumentById(id);

    return await makeResponse(httpStatus.OK, response, operationType.BASE_ROUTE_GET_RESPONSE);

  } catch (error) {

    if (error instanceof ApplicationResponseException) {
      return await makeResponse(error.httpCode, error.message, operationType.BASE_ROUTE_GET_RESPONSE);
    }

    logger.error({ uuid, message: [error.message, error.stack] });

    return await makeResponse(httpStatus.INTERNAL_SERVER_ERROR, { message: "Try again soon." }, operationType.BASE_ROUTE_GET_RESPONSE);

  }


}