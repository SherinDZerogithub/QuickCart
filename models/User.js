//if user gets created it will be save in our database
//1. create the user model
//2. user schema

import mongoose from "mongoose";

//this is the schema for user
const userScema = new mongoose.Schema({
    _id: {type: String, required: true},
    name: {type: String, required: true},
    email: {type: String, required: true},  
    imageUrl: {type: String, required: true},
    cartItems: {type: Object, default: {}}
} , {minimize: false}
)

//if the model is awailabble it will return the model else it will create the model
const User = mongoose.models.user || mongoose.model('user', userScema)

export default User
//user model is ready

