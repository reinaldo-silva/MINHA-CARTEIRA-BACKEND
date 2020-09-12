const { Router } = require('express');

const UserController = require('../../../modules/users/controllers/UserController');

const userRoutes = Router();

userRoutes.post('/', UserController.create);

module.exports = userRoutes;
