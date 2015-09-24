var mysql = require('node-mysql'),
    envConfig = require('../config/envConfig');

exports.getConn = function () {
    //创建连接
    var conn = mysql.createConnection({
        host: envConfig.mysql_url,
        user: envConfig.mysql_name,
        password: envConfig.mysql_pwd,
        database: envConfig.mysql_databaseName
    });
    //打开连接
    conn.connect();
    return conn
};
exports.closeConn = function (conn) {
    if (conn) conn.end();
};
