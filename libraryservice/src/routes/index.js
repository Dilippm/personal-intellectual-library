import express from 'express';
import prisma from '../db/prisma.js';
const router = express.Router();

//Basic route for testing
router.get('/', async (req, res) => {
  const users = await prisma.user.findMany();

  res.json({
    message: 'Library API Running',
    users,
  });
});

export default router;