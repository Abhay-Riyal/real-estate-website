import express from 'express';
import cookieParser from 'cookie-parser';
import userRouter from './routes/user.route.js';
import authRouter from './routes/auth.route.js';
import listingRouter from './routes/listing.route.js';
import cors from cors

const App = express();
App.use(express.json());
App.use(cookieParser());
App.use('/api/user', userRouter);
App.use('/api/auth', authRouter);
App.use('/api/listing', listingRouter);

// App.use(cors({
//     origin: {"https://real-estate-website-pink.vercel.app/"},
//     methods: ["POST","GET"],
//     credentials: true,
// }
    
// ))
export default App;
