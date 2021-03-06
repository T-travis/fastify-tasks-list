const fastify = require("fastify")({
  logger: true,
});
require("dotenv").config();

// register postgres sequelize plugin
fastify.register(require('./database_connection'));

// register tasksModel
const { tasksModel } = require('./models/task');
fastify.register(tasksModel);

// register swagger plugin
fastify.register(require("fastify-swagger"), {
  exposeRoute: true,
  routePrefix: "/docs", // localhost example: http://127.0.0.1:5000/docs/
  swagger: {
    info: { title: "tasks-list" },
  },
});

// register tasks routes plugin
fastify.register(require('./routes/tasks'), fastify.pg);

const PORT = process.env.PORT || 5000;

const startServer = async () => {
  try {
    await fastify.listen(PORT);
  } catch (error) {
    fastify.log.error(error);
  }
};

startServer();