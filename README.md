# fastify-tasks-list

### Steps to run
- `npm i`
- Create `.evn` file and add the required variables.  Look at example.env for what's needed.
- I used PostgreSQL which is set in the .env file.  To do the same, you will need a database, table, and user.
   - ```
      -- example postgres commands
      postgres=# create database tasks;
      postgres=# create user tasksuser with encrypted password 'password';
      postgres=# grant all privileges on database tasks to tasksuser;
      ```
- To run the project, use `npm run dev`
- Go the the swagger URL to run the endpoints: http://127.0.0.1:5000/docs/static/index.html

### This is an example of Fastify and Sequelize ORM.
- https://sequelize.org/master/index.html
- https://www.fastify.io/
