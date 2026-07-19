import jwt from "jsonwebtoken"

const verifyToken = (req,res,next)=>{
    
        const authHeader = req.headers.authorization
if(!authHeader){
    return res.status(401).json({
        success:false,
        message:"Authorization token is missing"
    })
}
    const token = authHeader.split(" ")[1]
   try { 
    const decoded = jwt.verify(
        token,
        process.env.JWT_SECRET
    )
    req.user = decoded
    next()
    } catch (error) {
       console.log("JWT Error Name:", error.name);
  console.log("JWT Error Message:", error.message);
        return res.status(401).json({
            success:false,
            message:"Invalid or expired token"
        })
    }

}

const isAdmin = (req, res, next) => {
  try {
    if (req.user.role !== "admin") {
      return res.status(403).json({
        success: false,
        message: "Access denied. Admin only.",
      });
    }

    next();
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};



export  {verifyToken, isAdmin};