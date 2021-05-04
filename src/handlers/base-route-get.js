const JSON = require('circular-json');

const logger = require("../utils/logger");

const dynamoDb = require('../utils/dynamodb-ultils');

exports.run = async event => {

  uuid = '1';
  xUuid = '3'

  logger.info({ uuid, xUuid, message: [`Starting base-route-get`] });

  var x = await dynamoDb.getTableDoc('1');

  const response = {
    statusCode: 200,
    body: JSON.stringify(x.Items[0].TestField),
  };

  return response;
};
