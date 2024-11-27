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
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    credentials: false,
}));

app.use(express.json());

// Connect to MongoDB
const URI = process.env.MONGODB_URI;
mongoose.connect(URI)
    .then(() => console.log('MongoDB Connected'))
    .catch((err) => {
        console.error('Error connecting to MongoDB:', err.message);
    });


// Define API routes
app.use('/api/book', bookRoute);
app.use('/api/user', userRoute);

// Default route for testing deployment
app.get('/', (req, res) => {
    res.status(200).send('API is running...');
});

// Catch-all route for undefined endpoints
app.use((req, res) => {
    res.status(404).json({ error: 'Endpoint not found' });
});

export default app;
