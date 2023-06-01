const express = require('express');
const path = require('path');

const app = express();
const port = 3000;

app.use((req, res, next) => {
    console.log('request received');
    console.log(req.originalUrl);
    next();
});

app.get('/about', (req, res) => {
    res.sendFile(path.join(__dirname, '/pages/about-me.html'))
});

app.get('/contact', (req, res) => {
    res.sendFile(path.join(__dirname, '/pages/contact.html'))
});

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/pages/index.html'))
});

app.use((req, res) => {
    res.sendFile(path.join(__dirname, '/pages/404.html'));
})

app.listen(port, function () {
    console.log(`Example app listening on port ${port}!`);
  });