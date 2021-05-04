const AWS = require("aws-sdk");
AWS.config.update({ region: 'sa-east-1' });
var dynamodbClient = new AWS.DynamoDB.DocumentClient();
const tableName = 'TableSample';

const logger = require("./custom-logs");

const { monitoring, OK, NOK } = require("../utils/monitoring");

var getTableDoc = async (hashId) => {
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

  logger.info({ uuid, xUuid, message: [`Getting doc id ${hashId} on DynamoDb table ${tableName}`] });

  return await new Promise((resolve, reject) => {
    dynamodbClient.query(params, function (error, data) {
      if (error) {
        monitoring("getTableDoc", NOK, error.message);
        reject(error);
      } else {
        monitoring("getTableDoc", OK);
        resolve(data);
      }
    });
  });
};

module.exports = {
  getTableDoc
}