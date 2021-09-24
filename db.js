/** Database for lunchly */

const {Client} = require("pg");

const config = {
    host: "localhost",
    user: "myuser",
    password: "password",
    database: "lunchly"
};

const db = new Client(config);
db.connect();

module.exports = db;
