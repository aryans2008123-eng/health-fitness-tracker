const mongoose = require('mongoose');

const profileSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true },
    age: { type: Number, default: 0 },
    weight: { type: Number, required: true },
    height: { type: Number, required: true },
    goal: { type: String, default: 'General wellness' },
    focus: [{ type: String }],
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model('Profile', profileSchema);
