const mysql = require('mysql2');

// استخدام Pool لضمان استقرار الاتصال
const db = mysql.createConnection({
  host: process.env.MYSQLHOST,
  user: process.env.MYSQLUSER,
  password: process.env.MYSQLPASSWORD,
  database: process.env.MYSQLDATABASE,
  port: process.env.MYSQLPORT
});

// اختبار الاتصال
db.getConnection((err, connection) => {
  if (err) {
    console.log('❌ Database connection failed:', err.message);
  } else {
    console.log('✅ Connected to MySQL');
    connection.release();
  }
});

module.exports = db;
