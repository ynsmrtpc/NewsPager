const express = require('express');
const app = express();

app.set('view engine', 'ejs')
app.use(express.static('public'));

// index page
app.get('/', function(req, res) {
    res.render('pages/index');
});

// about page
app.get('/about', function(req, res) {
    res.render('pages/about');
});

// contact page
app.get('/contact', function(req, res) {
    res.render('pages/contact');
});

// search page
app.get('/search', function(req, res) {
    res.render('pages/search');
});

// Categories 
app.get('/sports', function(req, res) {
    res.render('pages/sports');
});
app.get('/travel', function(req, res) {
    res.render('pages/travel');
});
app.get('/technology', function(req, res) {
    res.render('pages/technology');
});
app.get('/culture', function(req, res) {
    res.render('pages/culture');
});
app.get('/magazine', function(req, res) {
    res.render('pages/magazine');
});


const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}...`);
});