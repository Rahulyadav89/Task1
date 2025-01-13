const mongoose = require('mongoose');

const stepSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  date: { type: Date, required: true, unique: true }, // Ensure unique entry for a day
  steps: { type: Number, required: true },
});

module.exports = mongoose.model('Step', stepSchema);
