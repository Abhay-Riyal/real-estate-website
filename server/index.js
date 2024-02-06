import express from "express"

const App=express();
const PORT=3000;


App.listen(PORT,()=>{
    console.log(`server is listening on port ${PORT}`);
})