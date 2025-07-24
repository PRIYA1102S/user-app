const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

// Get all users
router.get('/users', userController.getUsers);

// Add a new user
router.post('/users', userController.addUser);

// Claim random points for a user
router.post('/claim', userController.claimPoints);

// Get leaderboard
router.get('/leaderboard', userController.getLeaderboard);

// Get claim history
router.get('/claim-history', userController.getClaimHistory);

module.exports = router;