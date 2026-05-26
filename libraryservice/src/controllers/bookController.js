import { addBookService, getBooksService } from "../services/bookService.js";
import csv from 'csv-parser';
import fs from 'fs';

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


export const uploadBooksCSV = async (req, res) => {

try {

    const results = [];

    fs.createReadStream(req.file.path)

      .pipe(csv())

      .on('data', (data) => {
        results.push(data);
      })

      .on('end', async () => {

        for (const item of results) {

            await addBookService(

              item['Book Name'],
              item['Author'],
              item['Genre'],
              item['Type'],
              item['Language'],
              item['Small Description']

            );
        }

        fs.unlinkSync(req.file.path);

        res.json({
          message:
            'Books uploaded successfully',
          totalBooks: results.length,
        });

      });

  } catch (error) {

    console.error(error);

    res.status(500).json({
      message: 'Server error',
    });
  }
}


export const getBooks = async (req, res) => {
    try {
         const page = Number(req.query.page) || 1;
         const limit = Number(req.query.limit) || 4;
          const search = req.query.search || "";

        const {books,totalPages} = await getBooksService(page,limit,search);
      
        res.status(200).json({
            message: 'Books retrieved successfully',
            books,
            totalPages,
            page,
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            message: 'Server error',
        });
    }
}