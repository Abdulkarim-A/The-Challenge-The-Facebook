const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const ejs = require('ejs');

const   
 app = express();
const port = 3000;


mongoose.connect('mongodb+srv://abdulkarimalmaghrabi:afBK3UtPFkN61h2d@cluster0kareem.mwgfs.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0Kareem', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB connection error:', err));

// Middleware   

app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine', 'ejs');

// Define Feed Schema
const feedSchema = new mongoose.Schema({
  name: { type: String, required: true, maxlength: 15 },
  message: { type: String, required: true, maxlength: 40   
 },
  date: { type: Date, default: Date.now }
});

const Feed = mongoose.model('Feed', feedSchema);

// Routes
app.get('/', (req, res) => {
  Feed.find()
    .then(posts => res.render('feed', { posts }))
    .catch(err => console.error(err));
});

app.get('/add', (req, res) => {
  res.render('add');
});

app.post('/add', (req, res) => {
  const { name, message } = req.body;

  // Validation
  if (!name || !message) {
    // Handle validation error (e.g., redirect with error message)
  }

  const newPost = new Feed({ name, message });
  newPost.save()
    .then(() => res.redirect('/'))
    .catch(err => console.error(err));
});

// ... (Implement routes for editing, deleting, and viewing individual posts)

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});