const mysql = require("mysql2/promise");

async function createConnection() {
    return (connection = await mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "DB123",
        database: "cars",
    }));
}

module.exports = { createConnection };
