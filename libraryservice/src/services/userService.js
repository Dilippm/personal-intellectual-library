import prisma from '../db/prisma.js';
import bcrypt from 'bcrypt';
export const findUniqueUser = async(email) =>{
    return await prisma.user.findUnique({
        where: { email },
    });
} 

export const createUser = async (name, email, password) => {
     const hashedPassword = await bcrypt.hash(password, 10);
     const userTotalCount = await prisma.user.count();
        const userId = `USR${userTotalCount + 101}`;
    return await prisma.user.create({
        data: {
            userId,
            name,
            email,
            password: hashedPassword,
        },
    });
}