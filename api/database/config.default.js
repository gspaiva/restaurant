//building  a layer for database connection using mysql driver

var Promise = require("bluebird");
// Note that the library's classes are not properties of the main export
// so we require and promisifyAll them manually
Promise.promisifyAll(require("mysql/lib/Connection").prototype);
Promise.promisifyAll(require("mysql/lib/Pool").prototype);

var mysql = require('mysql')


const pool = mysql.createPool({

    host : 'localhost',
    user : 'root',
    password : 'your-password',
    database : 'your-schema-name'
});


const retrieveConnection = () => {

    return pool.getConnectionAsync();
}

module.exports = {
    retrieveConnection : retrieveConnection
}
