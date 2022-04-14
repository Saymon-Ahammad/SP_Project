 const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const Blog = require('./models/blog');
const result = require('lodash');

// express app
const app = express();

//connect to mongodb
const dbURI = 'mongodb+srv://netninja:test1234@nodetuts.xoo5n.mongodb.net/node-tuts?retryWrites=true&w=majority'
mongoose.connect(dbURI, {useNewUrlParser: true, useUnifiedTopology: true})
 .then((result) => app.listen(3000))
 .catch((err) => console.log(err));



//register view engine
app.set('view engine', 'ejs');


//middleware & static files
app.use('/public', express.static('public'));
app.use(morgan('dev'));


//routes
app.get('/' , (req, res) => {
    res.redirect('/blogs');
});


app.get('/about' , (req, res) => {
    //res.send('<p>About Page</p>');
    res.render('about', { title: 'About Us'});
});

// blog routes
app.get('/blogs', (req, res) => {
  Blog.find()
   .then((result) => {
     res.render('index', {title: 'All Blogs', blogs: result});
   })
   .catch((err) => {
     console.log(err);
   });
});

app.get('/blogs/create', (req, res) => {
    res.render('create', { title: 'Create a new Blog'});
});

// 404 page
app.use((req, res) => {
    res.status(404).render('404', { title: '404'});
}); 

