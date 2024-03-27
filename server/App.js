import express from 'express';
import cookieParser from 'cookie-parser';
import userRouter from './routes/user.route.js';
import authRouter from './routes/auth.route.js';
import listingRouter from './routes/listing.route.js';

const App = express();
App.use(express.json());
App.use(cookieParser());
App.use('/api/user', userRouter);
App.use('/api/auth', authRouter);
App.use('/api/listing', listingRouter);


export default App;
