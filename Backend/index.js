import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import bookRoute from "./route/book.route.js";
import userRoute from "./route/user.route.js";
import cors from "cors";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json())
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
// connection to database
connectDB();

// defining routes
app.use("/book", bookRoute);
app.use("/user", userRoute);

app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});

export default app;