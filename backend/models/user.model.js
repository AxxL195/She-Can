import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true,
        trim: true,
        minlength: 3,
        maxlength: 50
    },
    email:{
        type: String,
        required: true,
        unique: true,
        trim: true,
        lowercase: true,
        match: /^\S+@\S+\.\S+$/
    },
    password:{
        type: String,
        required:true,
        minLength: 6
    },
    message:{
        type: String,
        required: true,
        trim: true,
        minlength: 3,
        maxlength: 500
    }
})

const User = mongoose.model("User",userSchema);

export default User;