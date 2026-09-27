const express = require('express');
const { saveProfile } = require('../controllers/profileController');

const router = express.Router();

router.post('/profile', saveProfile);

module.exports = router;
