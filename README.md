# fastify-tasks-list

### Steps to run locally
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

### To run in chasers dev
- `npm i`
- Create `.evn` file and add the required variables for chasers dev db.  Look at example.env for what's needed.
- To run the project, use `npm run dev`
- From another terminal use curl for testing:
   - POST: curl -X POST http://127.0.0.1:5000 -H "Content-Type: application/json" -d '{"name": "test 1"}'
   - GET: curl http://127.0.0.1:5000/tasks
   - GET: curl http://127.0.0.1:5000/tasks/id
   - PUT: curl -X PUT http://127.0.0.1:5000/tasks/id -H "Content-Type: application/json" -d '{"name": "test 1 updated"}'
   - DELETE: curl -X DELETE http://127.0.0.1:5000/tasks/id

### This is an example of Fastify and Sequelize ORM.
- https://sequelize.org/master/index.html
- https://www.fastify.io/
