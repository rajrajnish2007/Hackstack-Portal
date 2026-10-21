const express = require('express');
const router = express.Router();
const auth = require('../middleware/authMiddleware');
const dashboardCtrl = require('../controllers/dashboardController');

router.get('/', auth, dashboardCtrl.getDashboard);

module.exports = router;
