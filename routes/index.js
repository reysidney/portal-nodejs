var express = require('express');
var router = express.Router();
var portal_dir = './pages/portal/';
//Get Homepage
router.get('/', function(req, res) {
    res.render(portal_dir + 'home');
});

//Get About Page
router.get('/about', function(req, res) {
    res.render(portal_dir + 'about');
});

//Get Services Page
router.get('/services', function(req, res) {
    res.render(portal_dir + 'services');
});

//Get Contact Page
router.get('/contact', function(req, res) {
    res.render(portal_dir + 'contact');
});

module.exports = router;