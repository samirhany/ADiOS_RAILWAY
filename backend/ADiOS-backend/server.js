const express = require('express');
const path = require('path');
const app = express();

// تشغيل الملفات من مجلد public
app.use(express.static(path.join(__dirname, 'public')));

// هاد السطر عشان لو طلب أي رابط يفتح له صفحة الاندكس بدال الـ 404
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// تأكد إن هاد السطر تحت الروابط (API Routes)
const PORT = process.env.PORT || 5000;
app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server is running on port ${PORT}`);
});