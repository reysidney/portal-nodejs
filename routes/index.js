var express = require('express');
var router = express.Router();
var portal_dir = './pages/portal/';
//Get Homepage
router.get('/', function(req, res) {
    res.render(portal_dir + 'home', {home : 'active'});
});

//Get About Page
router.get('/about', function(req, res) {
    res.render(portal_dir + 'about', {about : 'active'});
});

//Get Services Page
router.get('/services', function(req, res) {
    res.render(portal_dir + 'services', {services : 'active'});
});

//Get Contact Page
router.get('/contact', function(req, res) {
    res.render(portal_dir + 'contact', {contact : 'active'});
});

module.exports = router;