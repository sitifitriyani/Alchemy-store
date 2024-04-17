// // import User from '../models/modelUser.js';
// import bcrypt from 'bcrypt';
// import { errorHandler } from '../middleware/error.js';
// import jwt from 'jsonwebtoken';

// export const signup = async (req, res, next) => {
//   const { username, email, password } = req.body;
//   const hashedPassword = await bcrypt.hash(password, 10);
//   const newUser = new User({ username, email, password: hashedPassword });
//   try {
//     await newUser.save();
//     res.status(201).json({ message: 'User created successfully' });
//   } catch (error) {
//     next(error);
//   }
// };

// export const signin = async (req, res, next) => {
//   const { email, password } = req.body;
//   try {
//     const validUser = await User.findOne({ email });
//     if (!validUser) return next(errorHandler(404, 'User not found'));
//     const validPassword = await bcrypt.compare(password, validUser.password);
//     if (!validPassword) return next(errorHandler(401, 'wrong credentials'));
//     const token = jwt.sign({ id: validUser._id }, process.env.JWT_SECRET);
//     const { password: hashedPassword, ...rest } = validUser._doc;
//     const expiryDate = new Date(Date.now() + (24 * 60 * 60 * 1000)); // 1 hour
//     res
//       .cookie('access_token', token, { httpOnly: true, expires: expiryDate })
//       .status(200)
//       .json(rest);
//   } catch (error) {
//     next(error);
//   }
// };

// export const google = async (req, res, next) => {
//   try {
//     const user = await User.findOne({ email: req.body.email });
//     if (user) {
//       const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);
//       const { password: hashedPassword, ...rest } = user._doc;
//       const expiryDate = new Date(Date.now() + (24 * 60 * 60 * 1000)); // 1 hour
//       res
//         .cookie('access_token', token, {
//           httpOnly: true,
//           expires: expiryDate,
//         })
//         .status(200)
//         .json(rest);
//     } else {
//       const generatedPassword =
//         Math.random().toString(36).slice(-8) +
//         Math.random().toString(36).slice(-8);
//       const hashedPassword = await bcrypt.hash(generatedPassword, 10);
//       const newUser = new User({
//         username:
//           req.body.name.split(' ').join('').toLowerCase() +
//           Math.random().toString(36).slice(-8),
//         email: req.body.email,
//         password: hashedPassword,
//         profilePicture: req.body.photo,
//       });
//       await newUser.save();
//       const token = jwt.sign({ id: newUser._id }, process.env.JWT_SECRET);
//       const { password: hashedPassword2, ...rest } = newUser._doc;
//       const expiryDate = new Date(Date.now() + (24 * 60 * 60 * 1000)); // 1 hour
//       res
//         .cookie('access_token', token, {
//           httpOnly: true,
//           expires: expiryDate,
//         })
//         .status(200)
//         .json(rest);
//     }
//   } catch (error) {
//     next(error);
//   }
// };

// export const signout = (req, res) => {
//   res.clearCookie('access_token').status(200).json('Signout success!');
// };


import { pool } from '../../db.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { errorHandler } from '../middleware/error.js';

export const signup = async (req, res, next) => {
  const { username, email, password } = req.body;
  const hashedPassword = await bcrypt.hash(password, 10);
  
  try {
    const client = await pool.connect();
    const result = await client.query('INSERT INTO users (username, email, password) VALUES ($1, $2, $3) RETURNING *', [username, email, hashedPassword]);
    client.release();

    res.status(201).json({ message: 'User created successfully' });
  } catch (error) {
    next(error);
  }
};

export const signin = async (req, res, next) => {
  const { email, password } = req.body;
  
  try {
    const client = await pool.connect();
    const result = await client.query('SELECT * FROM users WHERE email = $1', [email]);
    const user = result.rows[0];
    client.release();

    if (!user) return next(errorHandler(404, 'User not found'));
    
    const validPassword = await bcrypt.compare(password, user.password);
    if (!validPassword) return next(errorHandler(401, 'Wrong credentials'));
    
    const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET);
    const { password: hashedPassword, ...rest } = user;

    // const expiryDate = new Date(Date.now() + (24 * 60 * 60 * 1000)); // 1 hour
    res
      .cookie('access_token', token, { httpOnly: true})
      .status(200)
      .json(rest);
  } catch (error) {
    next(error);
  }
};

export const google = async (req, res, next) => {
  const { email } = req.body;

  try {
    const client = await pool.connect();
    const result = await client.query('SELECT * FROM users WHERE email = $1', [email]);
    const user = result.rows[0];
    
    if (user) {
      const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET);
      const { password: hashedPassword, ...rest } = user;

      const expiryDate = new Date(Date.now() + (24 * 60 * 60 * 1000)); // 1 hour
      res
        .cookie('access_token', token, {
          httpOnly: true,
          expires: expiryDate,
        })
        .status(200)
        .json(rest);
    } else {
      const generatedPassword =
        Math.random().toString(36).slice(-8) +
        Math.random().toString(36).slice(-8);
      const hashedPassword = await bcrypt.hash(generatedPassword, 10);
      
      const username = req.body.name.split(' ').join('').toLowerCase() + Math.random().toString(36).slice(-8);
      const newUser = await client.query('INSERT INTO users (username, email, password) VALUES ($1, $2, $3) RETURNING *', [username, email, hashedPassword]);
      
      const token = jwt.sign({ id: newUser.id }, process.env.JWT_SECRET);
      const { password: hashedPassword2, ...rest } = newUser.rows[0];

      const expiryDate = new Date(Date.now() + (24 * 60 * 60 * 1000)); // 1 hour
      res
        .cookie('access_token', token, {
          httpOnly: true,
          expires: expiryDate,
        })
        .status(200)
        .json(rest);
    }

    client.release();
  } catch (error) {
    next(error);
  }
};

export const signout = (req, res) => {
  res.clearCookie('access_token').status(200).json('Signout success!');
};

