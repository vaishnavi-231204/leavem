const express = require('express');
const Leave = require('../models/Leave');
const User = require('../models/User');
const router = express.Router();

// Apply for Leave
router.post('/apply', async (req, res) => {
    try {
        const { userId, type, startDate, endDate } = req.body;
        const user = await User.findById(userId);

        if (!user) return res.status(404).json({ message: 'User not found' });

        const newLeave = new Leave({ userId, type, startDate, endDate });
        await newLeave.save();

        res.status(201).json({ message: 'Leave applied successfully' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Get User's Leave Balance
router.get('/balance/:userId', async (req, res) => {
    try {
        const user = await User.findById(req.params.userId);
        res.json({ leaveBalance: user.leaveBalance });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;
