'use strict';

const splitApi = require('../../external/split-api.js');

const opts = {
  schema: {
    querystring: {
      name: {type: 'string'}
    }
  }
}

const getSplits = async (req) => {
  return splitApi.getEnvironments()
}

const createSplit = async () => {
  // create the split
  // create a definition for each split
}

const homeRouter = async (fastify) => {
  fastify.get('/splits/', opts, getSplits)
  fastify.post('/splits/', opts, createSplit)
}

module.exports = homeRouter