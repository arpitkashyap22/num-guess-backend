import User from '../models/User.js'; 

// Fetch top 10 players for the leaderboard
export const getLeaderboard = async (req, res) => {
  try {
    // Fetch the top 10 users with the highest scores
    const leaderboard = await User.find({})
      .sort({ highScore: -1 }) // Sort by highScore in descending order
      .limit(10) // Limit the result to 10 users
      .select('username highScore'); // Only select the username and highScore fields

    // Return the leaderboard data with a 200 status
    res.status(200).json(leaderboard);
  } catch (error) {
    // Return error details with a 500 status
    res.status(500).json({ message: 'Error fetching leaderboard', error: error.message });
  }
};
