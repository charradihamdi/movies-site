const express = require('express');
const router = express.Router();

const { addmovies, getmovies, updatemovie, deletemovie } = require('../controllers/controllers-categories')
router.post('/movie/add', addmovies);
router.get('/movies', getmovies);
router.put('/movies/update/:name', updatemovie)
router.delete('/movies/delete', deletemovie)

module.exports = router;