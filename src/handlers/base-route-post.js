const logger = require('../utils/logger');
const { validatePost } = require('../utils/validations')
const { makeResponse } = require('../utils/response');
const lambdaVersion = process.env.LAMBDA_VERSION
const httpStatus = require('http-status');
const { operationType } = require('../utils/enums');
const ApplicationResponseException = require("../custom-exception/ApplicationResponseException");
const services = require('../services/base-route-post-services');

exports.run = async event => {

  uuid = event.requestContext.requestId;

  try {

    logger.info({ uuid, message: [`Starting base-route-post version ${lambdaVersion}`] });

    var body = await validatePost(event.body);

    await services.saveObject(body);

    var response = { message: "Deu bom" }

    return await makeResponse(httpStatus.CREATED, response, operationType.BASE_ROUTE_POST_RESPONSE);

  } catch (error) {

    if (error instanceof ApplicationResponseException) {
      return await makeResponse(error.httpCode, error.message, operationType.BASE_ROUTE_POST_RESPONSE);
    }

    logger.error({ uuid, message: [error.message, error.stack] });

    return await makeResponse(httpStatus.INTERNAL_SERVER_ERROR, { message: "Try again soon." }, operationType.BASE_ROUTE_POST_RESPONSE);

  }


}