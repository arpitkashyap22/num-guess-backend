import express from 'express';
import { getLeaderboard } from '../controllers/leaderboardController.js'; // Ensure this path is correct

const router = express.Router();

// Get top 10 players
router.get('/leaderboard', getLeaderboard);

export default router;
