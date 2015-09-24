var request = require('request');
/**
 * 回调方法，判断 request 处理后的信息
 * @param execute
 * @returns {Function}
 */


exports.requestCallback = function (res, execute) {

    return function (error, response, body) {
        if (!error && response.statusCode == 200) {
            //console.log(body);
            //判断回显数据
            if (body == null) {
                res.render("error", {title: "错误页面", message: "返回body错误", result: ""});
                return;
            }
            var json = JSON.parse(body);
            if (json.result != "success") {
                res.render('error', {title: '乌鲁鲁手机网页版', message: "执行结果错误", result: json.result});
                return;
            }
            execute(body);
        } else {
            if (!body) {
                console.log(body);
            }
            //console.log(response);
            //ßconsole.log('接口查询响应错误');
            res.render("error", {title: "错误页面", message: "数据库返回异常错误", result: "啦啦啦"});
            return;
        }
    }
};
