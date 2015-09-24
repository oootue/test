// +----------------------------------------------------------------------
// | Author: xuanhu last modfiy 2015-08-27
// +----------------------------------------------------------------------
var request = require('request');

//日志
var log4js = require('log4js'),
    logger = log4js.getLogger('map');

var config = require('../config');
var mysql = require('node-mysql'),
    envConfig = require('../config/envConfig'),
    Q = require('q'),
    mysqlConn = require('../config/mysqlConn');


/**
 * 取得用户信息
 * @param req
 * @param res
 * @constructor
 */
exports.getUserByInfo = function (req, res) {
    //取值
    // config.err.message = "您要查询的用户ID：" + req.params.userid;
    var $get = req.query,
        param = {
            uid: req.params.uid
        };
    //判断
    config.err = {
        code: 0,
        message: "查询出错",
        content: []
    };

    if (!param.uid) {
        config.err.code=-1;
        config.err.message = "您要查询的用户ID不能为空值";
        res.send(config.err);
        return;
    }


    //获取连接，sql，返回数组
    var connection = mysqlConn.getConn(),
        sqlQry = "select uid,username,realname from t_user " +
            "where uid=?",
        paramArray = [
            param.uid
        ];
    //设置 异步sql方法
    function createQryConn(sql, param, cb) {
        connection.query(sql, param, cb);
    }

    var qConn = Q.denodeify(createQryConn);

    Q.all(qConn(sqlQry, paramArray))//执行sql方法
        .then(function (qryAllResult) {//得到查询联系人列表结果
            var rows = qryAllResult[0];
            console.log(rows.length);
            if (rows.length > 0) {//查询有结果，返回查询结果
                //设置头像路径
                //console.log(rows[0]);
                var content = rows[0];
                content.avatar = envConfig.avatar_url + '?uid=' + content.username;
                //返回数据
                config.err.message = "查询联系人成功";
                config.err.content = content;
                res.send(config.err);
            } else {
                config.err.code=-1;
                config.err.message = "未找到联系人";
                res.send(config.err);
            }
        }, function (err) {//操作sql异常
            console.log(err);
            throw err;
        })
        .then(function () {//关闭连接
            console.log('关闭连接detail');
            mysqlConn.closeConn(connection);
        });

};