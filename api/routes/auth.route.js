import express from 'express';

const router = express.Router();

router.post('/login', (req, res) => {
  // Simple login logic
  res.json({ success: true, message: 'Login successful' });
});

export default router;
