import express from 'express';
import { addBook } from '../controllers/bookController.js';
import { authMiddleware } from '../utils/tokenServices.js';


const router = express.Router();

router.post('/add',authMiddleware,addBook);

export default router;