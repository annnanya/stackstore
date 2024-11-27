import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import bookRoute from './route/book.route.js';
import userRoute from './route/user.route.js';
import cors from 'cors';

dotenv.config();

const app = express();

// Debug log for environment variables
console.log('Environment Variables Loaded:');
console.log(`PORT: ${process.env.PORT}`);
console.log(`MONGODB_URI: ${process.env.MONGODB_URI ? 'Loaded' : 'Not Loaded'}`);

// Allow CORS from all origins for public access
app.use(cors({
    origin: '*', // This will allow any domain to access the API
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'], // Allow necessary methods
    credentials: false, // Set to false as you are not using cookies or credentials for public access
}));

// Log each incoming request
app.use((req, res, next) => {
    console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
    console.log('Headers:', req.headers);
    next();
});

// Middleware to parse JSON
app.use(express.json());

// Configuration
const port = process.env.PORT || 4000;
const URI = process.env.MONGODB_URI;

// MongoDB connection
async function connectDB() {
    try {
        await mongoose.connect(URI);
        console.log('MongoDB Connected');
    } catch (error) {
        console.error('MongoDB Connection Error:', error.message);
        process.exit(1); // Exit process if connection fails
    }
}

// Connect to MongoDB
connectDB();

// Define routes
app.use('/api/book', bookRoute);
app.use('/api/user', userRoute);

// Default route for testing deployment
app.get('/', (req, res) => {
    res.status(200).send('API is running...');
});

// Catch-all route for undefined endpoints
app.use((req, res) => {
    console.log(`404 - Not Found: ${req.method} ${req.url}`);
    res.status(404).json({ error: 'Endpoint not found' });
});

// Start the server
app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});

// Export the app for testing or serverless deployment
export default app;
