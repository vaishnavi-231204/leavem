const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: String,
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    leaveBalance: { type: Number, default: 20 }, // Default leave balance
});

module.exports = mongoose.model('User', userSchema);
