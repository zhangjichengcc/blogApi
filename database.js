/*
 * @Author: your name
 * @Date: 2021-07-09 17:28:55
 * @LastEditTime: 2021-07-09 17:37:20
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \blogApi\database.js
 */
const mysql = require('mysql');

// 链接博客数据库
const BLOGDB = mysql.createConnection({
    host:'118.190.52.53',
    user:'root',
    password:'root',
    database:'BLOGDB',
    // 允许同时执行多条sql语句
    multipleStatements: true,
});

module.exports = BLOGDB;