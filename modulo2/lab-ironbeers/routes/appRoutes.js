const express = require('express');
const PunkAPIWrapper = require('punkapi-javascript-wrapper');

const punkAPI = new PunkAPIWrapper();

const app = express();

app.get('/', (req, res) => {
  res.render('home');
});

app.get('/beers', async (request, response) => {
  try {
    const beers = await punkAPI.getBeers();

    response.render('beers', { beers });
  } catch (error) {
    console.log(error);
  }
});

app.get('/beers/s', async (request, response) => {
  try {
    const { beerName } = request.query;

    const beerNameWithUnderscore = beerName.split(' ').join('_');

    const beers = await punkAPI.getBeers({ 'beer_name': beerNameWithUnderscore });

    response.render('beers', { beers });
  } catch (error) {
    console.log(error);
  }
});

app.get('/random-beers', async (request, response) => {
  try {
    const beer = await punkAPI.getRandom();

    response.render('beer-detail', beer[0]);
  } catch (error) {
    console.log(error);
  }
});

app.get('/beer', async (request, response) => {
  try {
    const { beerId } = request.query;
    const beer = await punkAPI.getBeer(beerId);

    response.render('beer-detail', beer[0]);   
  } catch (error) {
    console.log(error);
  }
});

module.exports = app;
