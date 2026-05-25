import { addBookService } from "../services/bookService.js";


export const addBook = async (req, res) => {
    try {
   
        const { title, author, genre, type, language, description } = req.body;
        const book = await addBookService(title, author, genre, type, language, description);
        res.status(201).json({
            message: 'Book added successfully',
            book,
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            message: 'Server error',
        });
    }
}   