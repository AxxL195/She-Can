import express from 'express';
import {PORT} from './config/env.js';
import cors from 'cors';
import connectToDB from './database/mongodb.js';

import userRouter from './routes/user.routes.js';

const app= express();
app.use(cors());
app.use('/api/v1/user',userRouter);

app.get ('/',(req,res)=>{
    res.send('Hello World');
})

app.listen(PORT,async ()=>{
    await connectToDB();
    console.log(`Server is running on port http://localhost:${PORT}`);
})