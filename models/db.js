const setting = require('../setting');
const mongo = require('mongodb');
const Db = mongo.Db;
const Connection = mongo.Connection;
const Server = mongo.Server;

module.exports = new Db(setting.db, new Server(setting.host, Connection.DEFAULT_PORT, {}));


