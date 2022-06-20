const user = require('../../src/router');
const express = require('express');
const router = express.Router();
class UserController {
    constructor(app) {
      router.get('/', user.getAllUsers);
      router.post('/', user.addUser);
      router.put('/', user.updateUser);
      app.use('/api/v1/users', router);
    }
 }
module.exports = UserController;