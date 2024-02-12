const express = require('express');
const router = express.Router();
const entrepriseController = require('../controllers/entrepriseController');

//router.post('/login', entrepriseController.login);
router.post('/signup', entrepriseController.signup);

module.exports = router;
