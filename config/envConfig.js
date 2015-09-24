// +----------------------------------------------------------------------
// | Copyright (c) 2010-2013 http://www.YiiSpace.com All rights reserved.
// +----------------------------------------------------------------------
// | Author: Micheal Chen <shilong.chen2012@gmail.com>
// +----------------------------------------------------------------------
// | FileName: 
// +----------------------------------------------------------------------
// | DateTime: 2015-07-29 16:23
// +----------------------------------------------------------------------


var type = {

    test: {
        cjg_url: 'http://localhost:8890/',

        avatar_url: 'http://54.223.171.230:8787/avatar',

        appID: "ICECAIUI-C9A1-4DBF-9972-B21DA0CFEFC4",
        token: "DTuuuvdWNqENxCd2Af57",
        ag_url: 'http://54.223.171.230:8081/v1',

        mysql_url: 'localhost',
        mysql_name: 'root',
        mysql_pwd: '',
        mysql_databaseName: 'test',

        qtyCaseUrl: "http://54.223.196.153:8888",
        caseUIService: "http://54.223.196.153:8484",

        kafka_url:"54.223.171.230:2181"
    },

    dev: {
        //联系人，map用到配置
        cjg_url: 'http://192.168.31.197:8080//organization-service/',  //cgjag路径
        //
        avatar_url: 'http://localhost:4000/avatar', //图片路径

        appID: "ICEXCGJ0-5F89-4E17-BC44-7A0DB101B245",  //appid ag
        token: "AXPHrD48LRa8xYVkgV4c",      //token ag
        ag_url: 'http://54.223.171.230:8081/v1',    //ag 路径

        mysql_url: '192.168.2.200',      //mysql 路径
        mysql_name: 'root',     //mysql 名字
        mysql_pwd: 'root',      //mysql 密码
        mysql_databaseName: 'test',    //mysql 库名

        qtyCaseUrl: "http://54.223.196.153:8888", //消息推送路径
        caseUIService: "http://54.223.196.153:8484", //caseUI 地址

        kafka_url:"54.223.171.230:2181"
    },

    production: {
        cjg_url: '',

        avatar_url: '',

        appID: "I",
        token: "",
        ag_url: '',

        mysql_url: '',
        mysql_name: '',
        mysql_pwd: '',
        mysql_databaseName: '',

        qtyCaseUrl: "http://54.223.171.230:8081",
        caseUIService: "http://54.223.171.230:8484"
    }
};

module.exports = type.test;

