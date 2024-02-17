import express from "express"
import mongoose from "mongoose"
import dotenv from 'dotenv'
import userRouter from './routes/user.route.js'
dotenv.config();

mongoose.connect(process.env.MONGO).then(() =>{
    console.log('connected to mongodb');
}).catch((err)=>{
    console.log(err);
})

const app=express();
const PORT=3000;

app.use(express.json());

app.listen(PORT,()=>{
    console.log(`server is listening on port ${PORT}`);
})

app.use('/api/user',userRouter)
app.use('/api/auth',userRouter);

app.use((err,req,res,next) => {
    const statusCode = err.statusCode || 500;
    const message = err.message || 'Internal Server Error'
    return res.status(statusCode).json({
        success: false,
        statusCode,
        message,
    });
});