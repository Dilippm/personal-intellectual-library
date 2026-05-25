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

