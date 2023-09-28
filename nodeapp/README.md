# NodeApp

Webside and API application.

## Install

Install dependencies:

```sh
$ npm install
```

Review database connection on /lib/connectMongoose.js (see "Start a MondgoDB server")

Load initial data: 

```sh
# WARNING: this command deletes all the data in the database and creates default data
$ npm run init-db
```

## Start

In production:
```sh
$ npm start
```

In development:
```sh
$ npm run dev
```

## Start a MongoDB Server in Linux

## API Endpoints

### GET /api/agentes