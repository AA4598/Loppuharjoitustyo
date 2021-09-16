const express = require('express');
const dataControllers = require('../controllers/data-controllers');
const router = express.Router();

router.get('/', dataControllers.getMyData);

router.get('/results/amateurs/', dataControllers.getSummaryData);

router.get('/results/professionals/', dataControllers.getSummaryData);

router.post('/', dataControllers.addItem);

router.delete('/:id', dataControllers.deleteItem);

router.put('/:id', dataControllers.updateItem);

module.exports = router;