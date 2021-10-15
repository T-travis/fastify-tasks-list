const Task = {
  type: "object",
  properties: {
    id: { type: "string" },
    name: { type: "string" },
  },
};

const AddTask = {
  type: "object",
  properties: {
    id: { type: "string" },
    name: { type: "string" },
  },
};

const getTasksOptions = {
  schema: {
    response: {
      200: {
        type: "array",
        tasks: Task,
      },
    },
  },
};

const getTaskOptions = {
  schema: {
    response: {
      200: Task,
    },
  },
};

const postTaskOptions = {
  schema: {
    body: {
      type: 'object',
      required: ['name'],
      properties: {
        name: { type: 'string' }
      }
    },
    response: {
      201: AddTask,
    },
  },
};

const deleteTaskOptions = {
  schema: {
    response: {
      200: {
        type: 'object',
        properties: {
          message: { type: 'string' }
        }
      },
    },
  },
};

const updateTaskOptions = {
  schema: {
    response: {
      200: Task,
    },
  },
};

module.exports = {
  getTasksOptions,
  getTaskOptions,
  postTaskOptions,
  deleteTaskOptions,
  updateTaskOptions,
};
