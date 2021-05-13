const AWS = require("aws-sdk");
AWS.config.update({ region: 'sa-east-1' });
var dynamodbClient = new AWS.DynamoDB.DocumentClient();
const tableName = 'TableSample';

const logger = require("./logger");

const { monitoring, OK, NOK } = require("../utils/monitoring");

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
        monitoring("getTableDoc", NOK, error.message);
        reject(error);
      } else {
        monitoring("getTableDoc", OK, `Query on table ${tableName} returned ${data.Items.length} items`);
        resolve(data);
      }
    });
  });

};

module.exports = {
  queryTableById
}