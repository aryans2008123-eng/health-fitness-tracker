const Profile = require('../models/Profile');

async function saveProfile(req, res) {
  try {
    const { name, age, weight, height, goal, focus } = req.body;

    if (!name || !weight || !height) {
      return res.status(400).json({
        success: false,
        message: 'Name, weight, and height are required.',
      });
    }

    const profile = await Profile.create({
      name,
      age: age || 0,
      weight,
      height,
      goal: goal || 'General wellness',
      focus: Array.isArray(focus) ? focus : [],
    });

    return res.status(201).json({
      success: true,
      message: 'Profile saved successfully.',
      profile,
    });
  } catch (error) {
    console.error('Profile save error:', error.message);
    return res.status(500).json({
      success: false,
      message: 'Profile could not be saved.',
    });
  }
}

module.exports = {
  saveProfile,
};
