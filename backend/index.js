const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const connectDB = require("./config/db");
const authRoute = require('./routes/authRoute');
const adminRoutes = require("./routes/adminRoutes");


const app = express();
dotenv.config();
connectDB();

 app.use(cors(
//     origin: 'http://localhost:5173', // Explicitly allow your frontend's origin
//     credentials: true, // Allow cookies and authorization headers to be sent
//     methods: ['GET', 'POST', 'PUT', 'DELETE'], // Explicitly allow common HTTP methods
//     allowedHeaders: ['Content-Type', 'Authorization'], // Explicitly allow headers needed for your API
));
app.use(express.json());



app.use("/api/admin", adminRoutes);
app.use('/api/auth', authRoute);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
