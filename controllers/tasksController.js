let tasks = require("../Items");
const { v4: uuidv4 } = require("uuid");

const getTasks = (request, reply) => {
  reply.send(tasks);
};

const getTask = (request, reply) => {
  const { id } = request.params;
  const task = tasks.find((task) => task.id === id);
  reply.send(task);
};

const postTask = (request, reply) => {
  const { name } = request.body;
  const task = {
    id: uuidv4(),
    name,
  };
  tasks = [...tasks, task];
  reply.code(201).send(task);
};

const deleteTask = (request, reply) => {
  const { id } = request.params;
  tasks = tasks.filter((task) => task.id !== id);
  reply.send({ message: `Task ${id} has been deleted` });
};

const updateTask = (request, reply) => {
  const { id } = request.params;
  const { name } = request.body;
  tasks = tasks.map(task => (task.id === id ? { id, name } : task));
  reply.send({ id, name });
};

module.exports = {
  getTasks,
  getTask,
  postTask,
  deleteTask,
  updateTask,
};
