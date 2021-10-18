const { Sequelize, DataTypes, Model } = require('sequelize');

class Task extends Model {

  /**
   * Helper method for defining associations.
   * This method is not a part of Sequelize lifecycle.
   * The `models/index` file will call this method automatically.
   */
  static associate(models) {
    // define association here
  }

  static async postTask(task) {
    return await Task.create(task);
  }

  static async getTasks() {
    return await Task.findAll();
  }

  static async getTask(id) {
    return await Task.findOne({ where: { id } });
  }

  static async updateTask(id, name) {
    await Task.update(
      { name: name }, 
      { where: { 
        id
      } 
    });
    return { id, name };
  }

  static async deleteTask(id) {
    await Task.destroy({ where: { id }});
  }

};

function tasksModel(fastify, options, done) {

  Task.init({
    id: { 
      type: DataTypes.UUID,
      defaultValue: Sequelize.UUIDV4,
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    }
  }, {
    sequelize: fastify.pg,
    modelName: 'Task',
  });

  done();
}


module.exports = {
  tasksModel,
  Task,
}