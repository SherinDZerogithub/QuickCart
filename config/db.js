<<<<<<< HEAD
import mongoose from "mongoose";

let cached = global.mongoose

if(!cached){
    cached = global.mongoose = { conn: null, promise: null }
}

async function connectDB() {
    if(cached.conn){
        return cached.conn
    }
    if(!cached.conn){
        //mongodb connection is not established
        //so we are going to establish the connection
        const opts = {
            bufferCommands: false
        }
        cached.promise = mongoose.connect(`${process.env.MONGODB_URI}/QuickCart`, opts).then((mongoose) => {
            return mongoose
        })
    }

     cached.conn = await cached.promise
     return cached.conn
    
}

export default connectDB
=======
//abcd
>>>>>>> 6be81944983b0614027cd164e81f45df5748e911
