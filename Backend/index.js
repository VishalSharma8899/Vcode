const express = require('express');
const PORT = process.env.PORT || 3000;
const path = require('path');
const cors = require('cors');
const app = express();
const  connection = require('./Model/db');

// const cookieParser = require('cookie-parser');
// const multer = require('multer');const storage = multer.memoryStorage();
// const upload = multer({ storage: storage });
require('dotenv').config();

 
 
app.use(cors());
// app.use(cookieParser());
// app.use((err, req, res, next) => {
//   if (err instanceof multer.MulterError) {
//     // A Multer error occurred when uploading.
//     return res.status(400).json({ error: 'Multer error', details: err.message });
//   } else if (err) {
//     // An unknown error occurred.
//     return res.status(500).json({ error: 'Server error', details: err.message });
//   }
//   next();
// });
// app.use('/uploads', express.static(path.join(__dirname, 'uploads')));
// app.use(express.json());
//database
connection();


// // api path for uplod data student
// app.use('/students',studentRoutes);
 
 
 
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
  });

  
  



 