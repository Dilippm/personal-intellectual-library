import express from 'express';
import prisma from '../db/prisma.js';
import userRoutes from './userRoutes.js';
const router = express.Router();

//Basic route for testing
router.get('/', async (req, res) => {
  const users = await prisma.user.findMany();

  res.json({
    message: 'Library API Running',
    users,
  });
});


router.use('/users',userRoutes);
export default router;