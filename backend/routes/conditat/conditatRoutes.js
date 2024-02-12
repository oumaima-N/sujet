const express = require('express');
const router = express.Router();
const conditatController = require('../../controllers/conditat/conditatController');


router.post('/login', conditatController.login);
router.post('/signup', conditatController.signup);
module.exports = router;
