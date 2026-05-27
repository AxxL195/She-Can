import mongoose from 'mongoose';
import {DB_URI} from '../config/env.js';

if(!DB_URI){
    console.error('Database URI is not defined in environment variables');
    process.exit(1);
}

const connectToDB = async () =>{
    try{
        await mongoose.connect(DB_URI);
        console.log('Connected to MongoDB successfully');
    }catch(error){
        console.error('Error connecting to MongoDB:', error);
        process.exit(1);
    }
}

export default connectToDB;