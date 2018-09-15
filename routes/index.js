// Dependencies
var router = require('express').Router(),
    userCtrl = require('../controllers').UserController;

router.post('/', userCtrl.addUser)
    .get('/:id', userCtrl.getUserById);


module.exports = router;
