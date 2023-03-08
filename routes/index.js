const express = require("express");
const router = express.Router();
const imageGenController = require('../controllers/imageGen_Controller');

router.get('/', function(req, res){
    return res.render('Home', {
        title: "Home"
    });
})

router.use('/generateImage', require('./generateImage'));

module.exports = router;