// entrepriseRoutes.js

const express = require('express');
const router = express.Router();
const entrepriseController = require('../controllers/entrepriseController');

router.post('/login', entrepriseController.Login);
router.post('/signup', entrepriseController.Signup);

module.exports = router;
