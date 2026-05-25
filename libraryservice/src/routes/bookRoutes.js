import express from 'express';
import { addBook,uploadBooksCSV } from '../controllers/bookController.js';
import { authMiddleware } from '../utils/tokenServices.js';
import upload from '../middleware/uploadMiddleware.js';

const router = express.Router();

router.post('/add',authMiddleware,addBook);

router.post('/upload-books',upload.single('file'),uploadBooksCSV);
export default router;