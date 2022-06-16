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

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}...`);
});


