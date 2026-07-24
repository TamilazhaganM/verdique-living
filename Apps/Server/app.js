import express from "express"
import authRoutes from "./routes/authRoutes.js"
import productRoutes from "./routes/productRoutes.js"
import dashboardRoutes from "./routes/dashboardRoutes.js"
import orderRoutes from "./routes/orderRoutes.js"
import reviewRoutes from "./routes/reviewRoutes.js"
import wishlistRoutes from "./routes/wishlistRoutes.js"
import cors from "cors"
import userRoutes from './routes/userRoutes.js'
import contactRoutes from "./routes/contactRoutes.js"
import categoryRoutes from "./routes/categoryRoutes.js";
const app = express()
app.use(express.json())
app.use(cors({
origin:["http://localhost:5174","https://verdique-living.vercel.app",],
credentials:true
}))

app.get("/",(req,res,)=>{
    res.json({success: true, message: "Verdique Living API is running"})
})

app.use("/api/auth",authRoutes)
app.use("/api/products", productRoutes);
app.use("/api/dashboard",dashboardRoutes)
app.use("/api/orders",orderRoutes)
app.use("/api/reviews",reviewRoutes)
app.use("/api/wishlist",wishlistRoutes)
app.use("/api/users",userRoutes)
app.use("/api/contact", contactRoutes);
app.use("/api/category",categoryRoutes)
export default app;