const {
  getTasks,
  getTask,
  postTask,
  deleteTask,
  updateTask,
} = require("../controllers/tasksController");
const {
  getTasksOptions,
  getTaskOptions,
  postTaskOptions,
  deleteTaskOptions,
  updateTaskOptions,
} = require("../schemas/tasksSchema");

// register tasks routes as a plugin
function taskRoutes(fastify, options, done) {
  // get all tasks
  fastify.get("/tasks", getTasksOptions, getTasks);

  // get task by id
  fastify.get("/tasks/:id", getTaskOptions, getTask);

  // post task
  fastify.post('/tasks', postTaskOptions, postTask);

  // delete task
  fastify.delete('/tasks/:id', deleteTaskOptions, deleteTask);

  // update task
  fastify.put('/tasks/:id', updateTaskOptions, updateTask);

  done();
}

module.exports = taskRoutes;