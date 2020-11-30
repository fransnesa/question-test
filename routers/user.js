const routes = require('express').Router();
const {UserController} = require('../controllers/user');

routes.post('/signup', UserController.signup);
routes.post('/signin', UserController.signin);


module.exports = routes;