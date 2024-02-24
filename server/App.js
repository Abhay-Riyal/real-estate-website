import express from 'express';
import userRouter from './routes/user.route.js';
import authRouter from './routes/auth.route.js';

const App = express();
App.use(express.json());
App.use('/api/user', userRouter);
App.use('/api/auth', authRouter);
export default App;
