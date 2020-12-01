# question API

## About project
This project is simple create read update delete. Framework on this project i used expressjs.

## Project Structures
In this project we have:

1. Sequelize as the ORM for helping us with database
1. config: contains database configuration, you can make it suitable with your database but in this example i use mysql and the database name question
2. migrations: contains historical migration database, this folder used for create, update, delete table, column database.
3. node_modules: contains all installed depedencies.

## How to run this project?
1. First do command npm install
2. Create database based on the config that you create in this case the database name is question. If you use sequelize version less than 5.5 you can use command sequelize db:create in the terminal to create database
3. Make the table with command sequelize db:migrate
4. Run app.js with nodemon or node
5. In this app you need to login before do create read update delete the question, then use token that created when you login in header with name token when you run the question API

Here it is the list of API

## List of question routes
| Route                 | HTTP   | Header(s)   |  Body                                                                 | Description                |
| --------------------- | ------ | ----------- |  -----------------------------------------------------------------    |  -------------------       |
| /api/question            | GET    |    token     |   none                                                                | Get all the question info, you can use query limit and offset to handle the pagination or limitation. If you use query limit = 1 then the data that will get just 1 data and id you use query offset = 1 then 1 data will be skip |
| /api/question/:uuid        | GET    |    token     |   none                                                                | Get a single question info with uuid     |
| /api/question            | POST   |    token     |   question: string    | Create a question              |
| /api/question/:uuid        | DELETE |    token     |   none                                                                | Delete a question  by uuid            |
| /api/question/:uuid        | PATCH  |    token     |   question: string   | Update a question by uuid|

## List of user routes

| Route                 | HTTP   | Header(s)   |  Body                                                                 | Description                |
| --------------------- | ------ | ----------- |  -----------------------------------------------------------------    |  -------------------       |
| /api/user/signup           | POST   |    none     |  username: string(**required**), password: string(**required**)      | Register new user and give you token     |
| /api/user/signin           | POST   |    none     |  username: string(**required**), password: string(**required**)      | Login with username and password then give you token     |