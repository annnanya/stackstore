import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';

dotenv.config();

const app = express();
const port = process.env.PORT || 4000;
const URI = process.env.MONGODB_URI;

async function connectDB() {
    try {
        await mongoose.connect(URI);
        console.log('MongoDB Connected');
    } catch (error) {
        console.error('MongoDB Connection Error:', error.message);
        process.exit(1);
    }
}

connectDB();

app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});
