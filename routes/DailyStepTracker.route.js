const express = require('express');
const router = express.Router();
const authMiddleware = require('../middlewares/auth');
const { logSteps, getWeeklySummary } = require('../controllers/stepsController');

// Route to log steps for a user
router.post('/steps', authMiddleware, logSteps);

// Route to fetch weekly summary of steps for a user
router.get('/steps/weekly', authMiddleware, getWeeklySummary);

module.exports = router;



