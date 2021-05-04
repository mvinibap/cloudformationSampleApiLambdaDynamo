const { logger } = require("./custom-logs");

var info = async (messageObj) => {
  logger.info(messageObj);
};

var error = async (messageObj) => {
  logger.error(messageObj);
};

module.exports = {
  info,
  error
};