const Router = require('express');
const router = new Router;
const userController = require('../controllers/user.controller');

router.post('/user', userController.createUser);

module.exports = router;