var express = require('express');
var router = express.Router();
var login_dir = './pages/login/';

//Register
router.get('/register', function(req, res) {
    res.render(login_dir + 'register');
});

//Login
router.get('/login', function(req, res) {
    res.render(login_dir + 'login');
});

module.exports = router;