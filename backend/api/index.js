import express from 'express';
<<<<<<< HEAD
import dotenv from 'dotenv';
import userRoutes from './routes/routeUser.js'; 
import authRoutes from './routes/routeAuth.js';
import ProductRoute from "./routes/routeProducts.js";
import cookieParser from 'cookie-parser';
import path from 'path';
import FileUpload from "express-fileupload";
import cors from "cors";

dotenv.config();

const __dirname = path.resolve();
const app = express();

// Menggunakan Express untuk menyajikan file statis dari direktori public di frontend
app.use('/images', express.static(path.join(__dirname, 'frontend', 'public')));
// app.get('*', (req, res) => {
//   res.sendFile(path.join(__dirname,' ', ' ', ' '));
// });

app.use(express.json());
app.use(cookieParser());
app.use(cors());
app.use(express.json());
app.use(FileUpload());
app.use(ProductRoute);


app.listen(process.env.PORT || 3000, () => {
  console.log(`Server listening on port ${process.env.PORT || 3000}`);
});

app.use('/api/user', userRoutes);
app.use('/api/auth', authRoutes);

app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || 'Internal Server Error';
  return res.status(statusCode).json({
    success: false,
    message,
    statusCode,
  });
});
=======
import dotenv from 'dotenv'
import cookieParser from 'cookie-parser';
import routerLogin from "../api/routers/routerLogin.js";
dotenv.config();
const app = express();

app.use(express.json());
app.use(cookieParser());
app.use(express.static("public"));
app.use(routerLogin);

const PORT = process.env.PORT || 3000;
app.listen(3000, () => console.log(`server is running on http://localhost:${PORT}`));
>>>>>>> c79317b5d723b2c48839370d279469a20e534702
