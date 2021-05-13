const AWS = require("aws-sdk");
AWS.config.update({ region: 'sa-east-1' });
var dynamodbClient = new AWS.DynamoDB.DocumentClient();
const tableName = 'TableSample';
const logger = require("./logger");
const { monitoring, OK, NOK } = require("../utils/monitoring");
const { operationType } = require('../utils/enums');

var queryTableById = async (hashId) => {

  var params = {
    TableName: tableName,
    KeyConditionExpression: "#id = :id",
    ExpressionAttributeNames: {
      "#id": "HashId"
    },
    ExpressionAttributeValues: {
      ":id": hashId
    }
  };

  logger.info({ uuid, message: [`Getting doc id ${hashId} on DynamoDb table ${tableName}`] });

  return await new Promise((resolve, reject) => {
    dynamodbClient.query(params, function (error, data) {
      if (error) {
        monitoring(operationType.GET_TABLE_DOC, NOK, error.message);
        reject(error);
      } else {
        monitoring(operationType.GET_TABLE_DOC, OK, `Query on table ${tableName} returned ${data.Items.length} items`);
        resolve(data);
      }
    });
  });
};

var putObjectIntoTable = async (body) => {

  var params = {
    TableName: tableName,
    Item: {
      HashId: uuid,
      ...body
    }
  };

  return await new Promise((resolve, reject) => {
    dynamodbClient.put(params, (error, data) => {
      if (error) {
        monitoring(operationType.PUT_OBJECT_INTO_TABLE, NOK, "Error on saving object into dynamodb");
        logger.error({ uuid, message: [error.message, error.stack] });
        reject(error);
      } else {
        monitoring(operationType.PUT_OBJECT_INTO_TABLE, OK, "Object saved successfully");
        resolve(data);
      }
    });
  });
};

module.exports = {
  queryTableById,
  putObjectIntoTable
}