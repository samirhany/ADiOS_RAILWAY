const mysql = require('mysql2');

const db = mysql.createConnection({
    host: process.env.MYSQLHOST,
    user: process.env.MYSQLUSER,
    password: process.env.MYSQLPASSWORD,
    database: process.env.MYSQLDATABASE,
    port: process.env.MYSQLPORT
});

db.connect((err) => {
    if (err) {
        console.error('خطأ في الاتصال بقاعدة البيانات:', err);
        return;
    }
    console.log('تم الاتصال بقاعدة بيانات Railway بنجاح!');
});

module.exports = db;