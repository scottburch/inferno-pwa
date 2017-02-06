const logger =  require('debug');
const mongoose = require('mongoose');
const path = require('path');

const config = require(path.resolve('src/config'));

// Use native promises
mongoose.Promise = Promise

// Initialize our database
mongoose.connect(config.databases.mongo)

const db = mongoose.connection
db.on('error', (err) => logger('database:error')(err))
db.once('open', () => logger('database:info')(config.databases.mongo))

module.exports =  db
