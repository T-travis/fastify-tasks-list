const { Task } = require('../models/task');

const getTasks = async (request, reply) => {
  try {
    const tasks = await Task.getTasks();
    reply.send(tasks);
  } catch(error) {
    reply.code(500).send(error);
  }
};

const getTask = async (request, reply) => {
  try {
    const { id } = request.params;
    const task = await Task.getTask(id);
    reply.send(task);
  } catch(error) {
    reply.code(500).send(error);
  }
};

const postTask = async (request, reply) => {
  try {
    const { name } = request.body;
    const newTask = Task.postTask({ name });
    reply.code(201).send(newTask)
  } catch(error) {
    reply.code(500).send(error);
  }
};

const deleteTask = async (request, reply) => {
  try {
    const { id } = request.params;
    await Task.deleteTask(id);
    reply.send({ message: `Task ${id} has been deleted` });
  } catch(error) {
    reply.code(500).send(error);
  }
};

const updateTask = async (request, reply) => {
  try {
    const { id } = request.params;
    const { name } = request.body;
    const task = await Task.updateTask(id, name);
    reply.send(task);
  } catch(error) {
    reply.code(500).send(error);
  }
  
};



module.exports = {
  getTasks,
  getTask,
  postTask,
  deleteTask,
  updateTask,
};
