const mysql = require('mysql2');

// استخدام Pool لضمان استقرار الاتصال
const db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  port: process.env.DB_PORT
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
