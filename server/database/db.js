import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();


const Connection = async () => {

    const URL = process.env.MONGO_URI;

    try {
        await mongoose.connect(URL, { useUnifiedTopology: true });
        console.log('connected to MongoDB')
    } catch(err) {
        console.log('Error:', err.message);
    }
}

export default Connection;