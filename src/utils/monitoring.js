const logger = require("./logger");
const moment = require("moment");

const OK = 'OK';
const NOK = 'NOK'

var monitoring = async (operationType, status, message) => {
  let dateTime = moment(new Date).format("YYYY-MM-DDTHH:mm:ss:SSS Z");
  logger.info({
    uuid,
    timestamp: dateTime,
    operationType,
    status: status,
    message: { message: message }
  });
};

module.exports = {
  monitoring,
  OK,
  NOK
};