import  Express from "express";
import mongoose from "mongoose";
import dotenv from 'dotenv';
dotenv.config();
mongoose
.connect(process.env.MONGO)
.then(()=>{
    console.log('connected to MOngoDB!');
}).catch((err)=>{
    console.log(err);
})


mongoose.connect(process.env.MONGO)

const app= Express();

app.listen(3000,()=>{
    console.log('server is runing on port 3000 hello how are you !!!');
}
);