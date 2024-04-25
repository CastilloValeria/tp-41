const express = require('express');
const router = express.Router();
const apiGenresControllers=require("../../controllers/api/genresController")
const controllerMovies= require("../../controllers/api/moviesController.js")


router.get('/detail/:id',apiGenresControllers.detail )
router.get('/',apiGenresControllers.list)
router.post('/api',controllerMovies.create)
router.post('/api/:id',controllerMovies.delete)

module.exports = router;