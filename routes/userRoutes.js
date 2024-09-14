import express from 'express';
import { registerUser, loginUser} from '../controllers/userController.js';
import { getHighScore, updateHighScore} from '../controllers/highScoreController.js';
import { getLeaderboard } from '../controllers/leaderboardController.js';

import authMiddleware from '../middleware/authMiddleware.js';

const router = express.Router();

// User routes
router.post('/register', registerUser);
router.post('/login', loginUser);

// Protected routes
router.get('/highscore', authMiddleware, getHighScore);
router.post('/updatehighscore', authMiddleware, updateHighScore);



// leaderboard routes
router.get('/leaderboard', getLeaderboard);

export default router;
