
import { createUser, findUniqueUser,getAllUsers } from '../services/userService.js';
import bcrypt from 'bcrypt';
import { generateToken } from '../utils/tokenServices.js';
export const register = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    const existingUser = await findUniqueUser(email);

    if (existingUser) {
      return res.status(400).json({
        message: 'User already exists',
      });
    }

    const user = await createUser(name, email, password);

    res.status(201).json({
      message: 'User created successfully',
      user: {
        id: user.userId,
        name: user.name,
        email: user.email,
      },
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      message: 'Server error',
    });
  }
};

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await findUniqueUser(email);

    if (!user) {
      return res.status(400).json({
        message: 'Invalid credentials',
      });
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.status(400).json({
        message: 'Invalid credentials',
      });
    }

    const token = generateToken(user.userId);

    res.json({
      message: 'Login successful',
      token,
      user: {

        name: user.name,
        
      },
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      message: 'Server error',
    });
  }
};


export const getUsers = async (req, res) => {
  try {
    const users = await getAllUsers();
    res.json(users);
  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: 'Server error',
    });
  }
};