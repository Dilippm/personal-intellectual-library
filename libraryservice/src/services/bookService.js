import prisma from '../db/prisma.js';

export const addBookService = async (title,author, genre,type,language,description) => {
    const bookTotalCount = await prisma.book.count();
     const authorShort = author
    .replace(/\s+/g, '')
    .substring(0, 3)
    .toUpperCase();

  const languageLetter = language
    .charAt(0)
    .toUpperCase();

  const bookId = `BK-${authorShort}-${languageLetter}-${bookTotalCount + 1}`;
 
    return await prisma.book.create({
        data: {
            bookId,
            title,
            author,
            genre,
            type,
            language,
            description,
        },
    });
}

export const getBooksService = async (page,limit,search) => {
    const skip = (page - 1) * limit;
    const books = await prisma.book.findMany({
        skip,
        take: limit,
        where: {
            OR: [
                { title: { contains: search, mode: 'insensitive' } },
                { author: { contains: search, mode: 'insensitive' } },
                { genre: { contains: search, mode: 'insensitive' } }
            ]
        },
    });
    const totalBooks = await prisma.book.count({
        where: {
            OR: [
                { title: { contains: search, mode: 'insensitive' } },
                { author: { contains: search, mode: 'insensitive' } },
                { genre: { contains: search, mode: 'insensitive' } }
            ]
        }
    });
    const totalPages = Math.ceil(totalBooks / limit);
    return {
        books,
        totalPages
       
    };
}

export const getBookByIdService = async (bookId) => {
    return await prisma.book.findUnique({
        where: { bookId },
    });
}