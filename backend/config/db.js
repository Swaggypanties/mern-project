import mongoose from "mongoose";

export const connectDB = async () => { // This connects my node.js app to the mongodb server
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI ); 
        console.log(`MongoDB connected: ${conn.connection.host}`);
    
    }   catch(error) {
        console.error(`Error: ${error,message}`);
        process.exit(1); // process code 1 means exit with failure and 0 means success.
        }
}