const User = require('../models/user');
const ClaimHistory = require('../models/claimHistory');

// Get all users
exports.getUsers = async (req, res) => {
    try {
        const users = await User.find();
        res.json(users);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// Add a new user
exports.addUser = async (req, res) => {
    try {
        const { name } = req.body;
        const user = new User({ name });
        await user.save();
        res.status(201).json(user);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

// Claim random points for a user
exports.claimPoints = async (req, res) => {
    try {
        const { userId } = req.body;
        const points = Math.floor(Math.random() * 10) + 1;

        const user = await User.findById(userId);
        if (!user) return res.status(404).json({ error: 'User not found' });

        user.totalPoints += points;
        await user.save();

        // Save claim history
        const history = new ClaimHistory({
            userId: user._id,
            pointsClaimed: points
        });
        await history.save();

        res.json({ user, pointsClaimed: points });
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

// Get leaderboard (sorted users)
exports.getLeaderboard = async (req, res) => {
    try {
        const users = await User.find().sort({ totalPoints: -1 });
        // Assign ranks
        users.forEach((user, idx) => {
            user.rank = idx + 1;
        });
        res.json(users);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// Get claim history
exports.getClaimHistory = async (req, res) => {
    try {
        const history = await ClaimHistory.find().populate('userId', 'name');
        res.json(history);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};