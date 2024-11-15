const mongoose = require('mongoose');

mongoose.connect("mongodb+srv://abdulkarimalmaghrabi:afBK3UtPFkN61h2d@cluster0kareem.mwgfs.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0Kareem")
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.error)

((module.exports = mongoose))