import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import bookRoute from './route/book.route.js';
import userRoute from './route/user.route.js';
import cors from 'cors';

dotenv.config();

const app = express();

// Allow CORS from all origins for public access
app.use(cors({
    origin: '*', // This will allow any domain to access the API
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'], // Allow necessary methods
    credentials: false, // Set to false as you are not using cookies or credentials for public access
}));

app.use(express.json());

const port = process.env.PORT || 4000;
const URI = process.env.MONGODB_URI;

// MongoDB connection
async function connectDB() {
    try {
        await mongoose.connect(URI);
        console.log('MongoDB Connected');
    } catch (error) {
        console.error('MongoDB Connection Error:', error.message);
        process.exit(1);
    }
}

// Connect to MongoDB
connectDB();

// Define routes
app.use('/api/book', bookRoute);
app.use('/api/user', userRoute);

app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});

export default app;
