'use strict';

const fastify = require('fastify')({
  logger: true,
});
const splits = require('./routes/splits-router.js');
const environments = require('./routes/environments-router.js');

fastify.register(splits)
fastify.register(environments)

const start = async () => {
  try {
    await fastify.listen(8080,'0.0.0.0')
  } catch (err) {
    fastify.log.error(err)
    process.exit(1)
  }
}

if (require.main === module) {
  start();
}

module.exports = { start, fastify }