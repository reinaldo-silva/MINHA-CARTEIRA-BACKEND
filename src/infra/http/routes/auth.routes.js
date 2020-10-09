const { Router } = require('express');

const AuthController = require('../../../modules/users/controllers/AuthController');

const userRoutes = Router();

userRoutes.post('/', AuthController.create);

module.exports = userRoutes;
