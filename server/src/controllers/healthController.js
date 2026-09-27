function getHealthStatus(req, res) {
  res.json({
    success: true,
    message: 'Health Tracker API is running',
  });
}

module.exports = {
  getHealthStatus,
};
