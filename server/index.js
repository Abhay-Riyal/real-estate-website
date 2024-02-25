import { connectDB } from "./db/index.js"
import App from "./App.js";
import dotenv from 'dotenv'
dotenv.config();

connectDB()
.then(()=>{
    const port=process.env.PORT;
    App.listen(port,()=>{
        console.log(`Server is listening on the port :${port}`);
    })
})
.catch((error)=>{
    console.log(`Mongodb connection failed : \n${error}`);
})

