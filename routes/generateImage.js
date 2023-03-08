const express = require("express");
const router = express.Router();
const imageGenController = require('../controllers/imageGen_Controller');

router.post('/', imageGenController.imagegen);

module.exports = router;