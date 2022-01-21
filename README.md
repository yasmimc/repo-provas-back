# Repo Provas API

This is the API of a platform for people to share their college exams anonymously.

## Tolling

NodeJs</br>
Express</br>
Jest</br>
Supertest</br>

## Deployment

This api is deployed on Heroku, you can visit it by accessing this [url]("https://full-stackoverflow-developer.herokuapp.com/").

## Routes

### `GET /health`

This route just returns the http 200 OK status code and is used to check if the API is running.

### `GET /teachers`

Returns the list of registered teachers.

### `GET /subjects`

Returns the list of registered subjects.

### `GET /exams`

Returns the list of registered exams.

### `GET /exams/categories`

Returns the list of registered exams categories.

### `POST /exam` 

Receives a JSON containing the exam name, link, teacher, subject and category.

## Requirements to run:

You must have installed node and npm.

## How to run:

First run `npm i` to install all dependencies.

Use the sql script to create your database structure and populate it with the basic data (_SQL dump [here](https://github.com/yasmimc/repo-provas-back/blob/a9ca51f3b5f19558cca2cf915be9c5f20ee2bb17/dump.sql)_).

And then create a .env file following as an example the .env.example file, setting the environment variables accordingly. with data from your database (_.env.example file [here](https://github.com/yasmimc/repo-provas-back/blob/a9ca51f3b5f19558cca2cf915be9c5f20ee2bb17/.env.example)_).

In the project directory, you can run:

### `npm run dev`

Runs the app in the development mode.\
Open the HOST:PORT that you that you set up in you env file to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm run test`

Launches the test runner in the sequencial mode.7

**_Warning_**
<br>

You need to create a .env.test file following the same [.env.example](https://github.com/yasmimc/repo-provas-back/blob/a9ca51f3b5f19558cca2cf915be9c5f20ee2bb17/.env.example) file to run this command.

### `npm run test:watch`

Launches the test runner in the interactive watch mode.

**_Warning_**
<br>

You need to create a .env.test file following the same [.env.example](https://github.com/yasmimc/repo-provas-back/blob/a9ca51f3b5f19558cca2cf915be9c5f20ee2bb17/.env.example) file to run this command.

### Add `:windows`

If you want to run any of the above commands on Windows, just add `:windows` to the end of any of them.


