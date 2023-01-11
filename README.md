# Usermanagement-Api

This is an usermanagement API where CRUD opeartion can be done for users.

## Tech Stack:

- Node.js
- mySql
- Express.js
- Typescript


## API
The API runs by default on port 3000 under the base path /api/v1 and exposes the following endpoints:

- `/localhost:3000/users` -  POST and GET operations for users
- `/localhost:3000/{userId}` -  GET and DELETE operations for the specified user

## How to run it?
1.Sql folder contains database.sql file which has sql command to create database and table. Which can be used in sql editor or sql workbench.
2.Install dependencies with `npm install`
3.Compile the project with `npm run build`
4.Start the application by running `npm run dev`


