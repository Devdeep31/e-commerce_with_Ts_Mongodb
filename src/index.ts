import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/databasecon";  
import userRoutes from "./routes/userRoutes";
import productRoutes from "./routes/productRoutes";
import cartRoutes from "./routes/cartRoutes";
import orderRoutes from "./routes/orderRoutes";


const app = express();
dotenv.config();


app.use(express.json());

connectDB();

app.use("/api", userRoutes,productRoutes,cartRoutes,orderRoutes);


// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
