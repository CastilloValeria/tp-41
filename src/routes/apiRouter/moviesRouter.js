const express = require('express');
const router = express.Router();
const moviesController = require('../../controllers/api/moviesController');

router.post('/api', moviesController.create);
router.get('/api/:id', moviesController.destroy);
router.delete('/delete/:id',moviesController.destroy)
router.put('/api/update/:id',moviesController.update);

module.exports = router;