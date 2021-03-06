const express = require('express');
const path = require('path');

const app = express();

const viewsPath = path.join(__dirname, '../', 'views');

app.get('/', (request, response) => {
  response.sendFile(path.join(viewsPath, 'home.html'));
});

app.get('/about', (request, response) => {
  response.sendFile(path.join(viewsPath, 'about.html'));
});

app.get('/works', (request, response) => {
  response.sendFile(path.join(viewsPath, 'works.html'));
});

app.get('/gallery', (request, response) => {
  response.sendFile(path.join(viewsPath, 'gallery.html'));
});

module.exports = app;
