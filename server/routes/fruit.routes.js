const fruitController = require('../controllers/fruit.controller')

module.exports = app => {
    app.post('/api/fruits', fruitController.createFruit);
    app.get('/api/fruits', fruitController.getAllFruits);
    app.get('/api/fruit/:id', fruitController.getOneFruit);
    app.put('/api/fruit/:id', fruitController.updateFruit);
    app.delete('/api/fruit/:id', fruitController.deleteFruit);
};