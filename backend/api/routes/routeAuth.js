import express from 'express';
import { signin, signup, google, signout } from '../controllers/authController.js';
import { verifyToken } from '../middleware/verifyToken.js';

const router = express.Router();

router.post('/signup', signup);
router.post('/signin', signin);
router.post('/google', google);
router.get('/signout', verifyToken, signout); // Hanya verifikasi token untuk signout

export default router;
