const winston = require("winston");

const { combine, timestamp, printf } = winston.format;

const logger = winston.createLogger({
  format: combine(
    timestamp(),
    winston.format.json(),
    printf(info => {
      if (typeof info.message === "string")
        return `[${info.level}]: ${info.message}`;

      let message = {
        uuid: info.uuid,
        xUuid: info.xUuid,
        operationType: info.operationType,
        level: info.level,
        status: info.status,
        timestamp: info.timestamp,
        message: info.message
      };
      return `[${info.level}]: ${JSON.stringify(message)}`;
    })
  ),
  transports: [new winston.transports.Console()]
});

module.exports = logger;