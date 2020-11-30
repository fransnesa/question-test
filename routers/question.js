const routes = require('express').Router();
const {questionController} = require('../controllers/question');

routes.get('/', questionController.loadAll);
routes.get('/:id', questionController.findOne);
routes.post('/', questionController.create);
routes.delete('/:id', questionController.delete);
routes.patch('/:id', questionController.edit);

module.exports = routes;