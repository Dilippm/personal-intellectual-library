import prisma from '../db/prisma.js';
import bcrypt from 'bcrypt';

export const getAllUsers = async () => {
  try {
    const users = await prisma.user.findMany({
      select: {
        userId: true,
        name: true,
        email: true,
      },
    });
   
    return users;
  } catch (error) {
    console.error(error);
    throw new Error('Server error');
  }         
  }

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