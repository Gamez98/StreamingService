const express = require('express');
const movie = express.Router();
const movieCtrl = require('../../controllers/movies/movies.controller');
const token = require('../../services/token.service');

movie.get('/', token.getToken, movieCtrl.getAll);
movie.get('/category/(:category)', token.getToken, movieCtrl.Category);
movie.get('/user/list', token.getToken, movieCtrl.UserList);
movie.get('/(:movie_name)', token.getToken, movieCtrl.getMovie);

module.exports = movie;