const JSON = require('circular-json');
const { monitoring } = require("./monitoring");

var makeResponse = async (statusCode, body, operationType) => {

  monitoring(operationType, statusCode, body);
  return {
    statusCode,
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Authorization",
      "Access-Control-Request-Method": "POST, GET, PUT"
    },
    body: JSON.stringify(body),
    isBase64Encoded: false
  };

};

module.exports = {
  makeResponse
};
