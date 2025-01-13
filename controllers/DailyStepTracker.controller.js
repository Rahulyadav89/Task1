const Step = require('../models/Step');

const getWeeklySummary = async (req, res) => {
  const userId = req.userId;

  try {
    const sevenDaysAgo = new Date();
    sevenDaysAgo.setDate(sevenDaysAgo.getDate() - 7);

    const stepsData = await Step.aggregate([
      { $match: { userId: mongoose.Types.ObjectId(userId), date: { $gte: sevenDaysAgo } } },
      { $group: { _id: null, totalSteps: { $sum: '$steps' }, count: { $sum: 1 } } },
    ]);

    const totalSteps = stepsData[0]?.totalSteps || 0;
    const averageSteps = stepsData[0]?.count ? totalSteps / stepsData[0].count : 0;

    const dailyLogs = await Step.find({ userId, date: { $gte: sevenDaysAgo } }).sort({ date: -1 });

    res.json({ totalSteps, averageSteps, dailyLogs });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};




