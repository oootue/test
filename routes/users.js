// +----------------------------------------------------------------------
// | Author: xuanhu last modfiy 2015-08-27
// +----------------------------------------------------------------------


var express = require('express');
var router = express.Router();
var crypto = require('crypto');
var config = require('../config');
var _usercontroll = require('../controllers/users.server.js');
//规则入口 校验有效性
router.use(function(req, res, next) {
    //先判断请求有效性
    for (var _p in req.query)
    {
        console.log(_p +"|"+ req.query[_p]);
    }
    console.log('先判断请求有效性');


    /*var content = 'password'
    var md5 = crypto.createHash('md5');
    md5.update(content);
    var d = md5.digest('hex');
    console.log(d);*/
    //config.err.message = "您的请求校验不通过";
    //res.send(config.err);
    next();
});

/* GET users listing. */
router.get('/', function(req, res, next) {
  config.err.code = 404;
  res.send(config.err);
});

/* GET users by id */
router.get('/:uid', _usercontroll.getUserByInfo);

module.exports = router;
