const user = require('../../routes/router');
const express = require('express');
const router = express.Router();
class UserController {
    constructor(app) {
      router.get('/', user.getAllUsers);
      router.post('/', user.addUser);
      router.put('/', user.updateUser);
      router.delete('/:id', user.deleteUser);
      
      app.use('/api/v1/users', router);
    }
 }
module.exports = UserController;