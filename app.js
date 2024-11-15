const express = require('express');
const mongoose = require('mongoose');
const ejs = require('ejs');

const app = express();
const port = 3000;

// Connect   
 to MongoDB
mongoose.connect('mongodb+srv://abdulkarimalmaghrabi:afBK3UtPFkN61h2d@cluster0kareem.mwgfs.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0Kareem', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB connection error:', err));

// Set   
 up EJS as the view engine
app.set('view engine', 'ejs');

// Use the routes
const feedRoutes = require('./routes/index');
app.use('/', feedRoutes);

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});