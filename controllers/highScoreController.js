import User from '../models/User.js';

// Fetch user's high score
export const getHighScore = async (req, res) => {
  try {
    const user = await User.findById(req.user.id);
    if (!user) return res.status(404).json({ message: 'User not found' });

    res.status(200).json({ highScore: user.highScore });
  } catch (error) {
    res.status(500).json({ message: 'Error fetching high score', error });
  }
};

// Update user's high score
export const updateHighScore = async (req, res) => {
  const { highScore } = req.body;
  try {
    const user = await User.findById(req.user.id);
    if (!user) return res.status(404).json({ message: 'User not found' });

    if (highScore > user.highScore) {
      user.highScore = highScore;
      await user.save();
    }

    res.status(200).json({ message: 'High score updated successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error updating high score', error });
  }
};
