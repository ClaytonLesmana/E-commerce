import express from 'express';
import cors from 'cors'; 
import 'dotenv/config';
import connectDB from './config/mongodb.js';
import connectCloudinary from './config/cloudinary.js';
import userRouter from './routes/userRoute.js';
import productRouter from './routes/productRoute.js';
import cartRouter from './routes/cartRoute.js';


// App Config
const app = express();
const port = process.env.PORT || 4000;
connectDB();
connectCloudinary();

// Middlewares
app.use(express.json());    // This will allow us to parse the incoming requests with JSON payloads 
app.use(cors());            // This will allow us to make requests from the frontend to the backend

// API Endpoints
app.use('/api/user', userRouter)
app.use('/api/product', productRouter)
app.use('/api/cart', cartRouter)


app.get('/', (req, res) => {
    res.send("API Working")
})

app.listen(port, () => console.log(`Server is running on port ${port}`));