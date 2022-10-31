const config = require('../config/config');
const logger = require('../config/logger');

module.exports = async (instance, url, data, method = 'POST') => {
  let response;

  try {
    if (config.clientDebug) {
      logger.info('REQUEST:');
      logger.info({ method, data });
    }

    response = await instance({ url, method, data });

    if (config.clientDebug) {
      logger.info('RESPONSE:');
      logger.info(response.data);
    }
  } catch (error) {
    logger.error(error);
  }

  return response;
};
