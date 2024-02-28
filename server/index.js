import { connectDB } from './db/index.js';
import App from './App.js';
import express from 'express';
import path from 'path';
import dotenv from 'dotenv';
dotenv.config();

connectDB()
  .then(() => {
    const port = process.env.PORT;
    App.listen(port, () => {
      console.log(`Server is listening on the port :${port}`);
    });
  })
  .catch((error) => {
    console.log(`Mongodb connection failed : \n${error}`);
  });

const __dirname = path.resolve();
App.use(express.static(path.join(__dirname, '/client/dist')));
App.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'client', 'dist', 'index.html'));
});

App.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || 'Internal Server Error';
  return res.status(statusCode).json({
    success: false,
    statusCode,
    message,
  });
});
