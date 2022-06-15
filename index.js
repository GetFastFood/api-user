const express = require('express');
const app = express();
const dotenv = require('dotenv');
const mongoose = require('mongoose');


// Import the routes
const authRoutes = require('./routes/auth');
const postRoutes = require('./routes/posts');

dotenv.config();

// cponnect to mongoDB
mongoose.connect(process.env.DB_CONNECT, () => console.log('connected to mongoDB'));

// middleware
app.use(express.json());


// Route MIDDLEWARE
app.use('/api/user', authRoutes);
app.use('/api/posts', postRoutes);

app.listen(3000, () => console.log('Server started on port 3000'));