'use strict';

const splitApi = require('../../external/split-api.js');

const opts = {
  schema: {
    querystring: {
      name: {type: 'string'}
    }
  }
}

const getEnvironments = async (req) => {
  return splitApi.getEnvironments()
}

const homeRouter = async (fastify) => {
  fastify.get('/environments/', opts, getEnvironments)
}

module.exports = homeRouter