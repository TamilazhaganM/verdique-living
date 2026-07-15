import express from "express"
import authRoutes from "./routes/authRoutes.js"
import productRoutes from "./routes/productRoutes.js"
import dashboardRoutes from "./routes/dashboardRoutes.js"
import cors from "cors"
const app = express()
app.use(express.json())
app.use(cors({
origin:"http://localhost:5173",
credentials:true
}))

app.get("/",(req,res,)=>{
    res.json({success: true, message: "Verdique Living API is running"})
})

app.use("/api",authRoutes)
app.use("/api/auth/products", productRoutes);
app.use("/api/auth/dashboard",dashboardRoutes)

export default app;