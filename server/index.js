import { connectDB } from './db/index.js';
import App from './App.js';
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


App.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || 'Internal Server Error';
  return res.status(statusCode).json({
    success: false,
    statusCode,
    message,
  });
});
