fastify
  .register(require("sequelize-fastify"), {
    instance: "db",
    sequelizeOptions: {
      dialect:
        "DIALECT_NAME" /* one of 'mysql' | 'mariadb' | 'postgres' | 'mssql' */,
      database: "DATABASE_NAME",
      username: "DATABASE_USER_NAME",
      password: "DATABASE_USER_PASSWORD",
      options: {
        host: "DATABASE_HOST_OR_SERVER",
        port: "DATABASE_PORT",
      },
    },
  })
  .ready(async () => {
    try {
      // first connection
      const result = await fastify.db.authenticate();

      console.log(
        chalk.green("Database connection is successfully established.")
      );
    } catch (err) {
      console.log(chalk.red(`Connection could not established: ${err}`));
    } finally {
      fastify.close();
    }
  });
