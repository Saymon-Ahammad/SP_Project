const express = require('express');

// express app
const app = express();

//register view engine
app.set('view engine', 'ejs');

// listen for requests
app.listen(3000);

app.get('/' , (req, res) => {
    const blogs = [
        {title: 'Saymon finds eggs', snippet: 'Then he makes dim vajii'},
        {title: 'Mario finds stars', snippet: 'He started to count them'},
        {title: 'How to defeat Bowser', snippet: 'I know but I wont tell you how to do so!'},
    ];
    //res.send('<p>Home Page</p>');
    res.render('index', { title: 'Home', blogs});
});

app.get('/about' , (req, res) => {
    //res.send('<p>About Page</p>');
    res.render('about', { title: 'About Us'});
});

app.get('/blogs/create', (req, res) => {
    res.render('create', { title: 'Create a new Blog'});
});

// 404 page
app.use((req, res) => {
    res.status(404).render('404', { title: '404'});
});