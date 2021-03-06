const express = require('express');
const spotifyApi = require('../repository/spotify');

const app = express();

app.get('/', (request, response) => {
  response.render('home');
});

app.get('/artist-search', async (request, response) => {
  const { artistName } = request.query;

  try {
    const { body: { artists: { items } } } = await spotifyApi.searchArtists(artistName);

    response.render('artist-search-results', { items })
  } catch (error) {
    console.log(error);
  }
});

app.get('/albums/:artistId', async (request, response) => {
  const { artistId } = request.params;

  try {
    const { body: { items } } = await spotifyApi.getArtistAlbums(artistId);

    response.render('albums', { items });
  } catch (error) {
    console.log(error);
  }
});

app.get('/tracks/:trackId', async (request, response) => {
  const { trackId } = request.params;

  try {
    const { body: { items } } = await spotifyApi.getAlbumTracks(trackId);

    response.render('tracks', { items });
  } catch (error) {
    console.log(error);
  }
});

module.exports = app;
