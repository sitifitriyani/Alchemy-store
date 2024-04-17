// // modelUser.js

// import { sequelize } from '../../db.js';
// import { errorHandler } from '../middleware/error.js';
// import bcrypt from 'bcrypt';

// export const test = (req, res) => {
//   res.json({
//     message: 'API is working!',
//   });
// };

// // Update user
// export const updateUser = async (req, res, next) => {
//   if (req.user.id !== req.params.id) {
//     return next(errorHandler(401, 'You can update only your account!'));
//   }
//   try {
//     let { username, email, password, profilePicture } = req.body;

//     // Hash password jika ada perubahan
//     if (password) {
//       password = await bcrypt.hash(password, 10);
//     }

//     // Lakukan proses update pada database menggunakan Sequelize
//     const [updatedRows] = await sequelize.query(`
//       UPDATE user
//       SET username = :username, email = :email, password = :password, profile_picture = :profilePicture
//       WHERE id = :id
//       RETURNING id, username, email, profile_picture AS profilePicture
//     `, {
//       replacements: { username, email, password, profilePicture, id: req.params.id },
//       type: sequelize.QueryTypes.UPDATE
//     });

//     res.status(200).json(updatedRows[0]);
//   } catch (error) {
//     next(error);
//   }
// };

// // Delete user
// export const deleteUser = async (req, res, next) => {
//   if (req.user.id !== req.params.id) {
//     return next(errorHandler(401, 'You can delete only your account!'));
//   }
//   try {
//     // Lakukan proses delete pada database menggunakan Sequelize
//     await sequelize.query(`
//       DELETE FROM users
//       WHERE id = :id
//     `, {
//       replacements: { id: req.params.id },
//       type: sequelize.QueryTypes.DELETE
//     });

//     res.status(200).json({ message: 'User has been deleted' });
//   } catch (error) {
//     next(error);
//   }
// };

// modelUser.js

import { pool } from '../../db.js';
import { errorHandler } from '../middleware/error.js';
import bcrypt from 'bcrypt';

// Fungsi untuk memperbarui pengguna berdasarkan ID
export const updateUser = async (req, res, next) => {
  const userId = req.params.id;
  
  if (req.user.id !== userId) {
    return next(errorHandler(401, 'You can update only your account!'));
  }
  
  try {
    let { username, email, password, profilePicture } = req.body;

    // Hash password jika ada perubahan
    if (password) {
      password = await bcrypt.hash(password, 10);
    }

    // Lakukan proses update pada database
    const query = `
      UPDATE users
      SET username = $1, email = $2, password = $3, profilePicture = $4
      WHERE id = $5
      RETURNING id, username, email, profilePicture AS profilePicture
    `;
    const result = await pool.query(query, [username, email, password, profilePicture, userId]);

    if (result.rowCount === 0) {
      return next(errorHandler(404, 'User not found'));
    }

    res.status(200).json(result.rows[0]);
  } catch (error) {
    next(error);
  }
};

// Fungsi untuk menghapus pengguna berdasarkan ID
export const deleteUser = async (req, res, next) => {
  const userId = req.params.id;
  
  if (req.user.id !== userId) {
    return next(errorHandler(401, 'You can delete only your account!'));
  }

  try {
    // Lakukan proses delete pada database
    const query = `
      DELETE FROM users
      WHERE id = $1
    `;
    const result = await pool.query(query, [userId]);

    if (result.rowCount === 0) {
      return next(errorHandler(404, 'User not found'));
    }

    res.status(200).json({ message: 'User has been deleted' });
  } catch (error) {
    next(error);
  }
};
