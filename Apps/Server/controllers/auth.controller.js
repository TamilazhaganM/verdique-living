import User from "../models/UserModels.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import sendEmail from "../services/sendMail.js";
import verificationEmailTemplate from "../templates/verificationEmail.js";

const registerUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    if (!name || !email || !password) {
      return res.status(400).json({
        success: false,
        message: "All fields are required",
      });
    }

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res
        .status(409)
        .json({ success: false, message: "Email Already Exist" });
    }
    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await User.create({
      name,
      email,
      password: hashedPassword,
    });
    const emailVerificationToken = jwt.sign(
      {
        userId: user._id,
        email: user.email,
      },
      process.env.JWT_SECRET,
      {
        expiresIn: "1h",
      },
    );
    const verificationLink = `${process.env.CLIENT_URL}/verify-email?token=${emailVerificationToken}`;
    const html = verificationEmailTemplate(verificationLink);
    await sendEmail(user.email, "Verification", html);
    return res.status(201).json({
      success: true,
      message: "Registration Successful. Please Verify your email",
    });
    
  } catch (error) {
    console.error(error);
return res.status(500).json({
  success: false,
  message: error.message,
});  }
};

const verifyEmail = async (req, res) => {
  try {
    const { token } = req.body;
    if (!token) {
      return res.status(400).json("Token is missing");
    }
     console.log(token);
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const userId = decoded.userId;
    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json("User Not Found");
    }
    if (user.isVerified === true) {
      return res.status(400).json("User already verified");
    }

    user.isVerified = true;

    await user.save();
    return res.status(200).json("user verified Successfully");
  } catch (error) {
    return res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

const loginUser = async(req,res)=>{

    try {
        const {email,password} = req.body
    if(!email || !password){
        return res.status(400).json("Email or password is missinig")
    }
    const user = await User.findOne({email}).select("+password")
    if(!user){
        return res.status(401).json("Invalid email or password")
    }

    if(user.isVerified ===false){
        return res.status(403).json("Please Verify your email")
    }
  const verifyPassword = await bcrypt.compare(password,user.password)
  
  if(!verifyPassword){
    return res.status(401).json("Invalid email or password")
  }

    const accessToken = jwt.sign({
        userId:user._id,
        role:user.role
    },
process.env.JWT_SECRET,
{
    expiresIn:"1h"
}
)

const refreshToken = jwt.sign(
    {
        userId:user._id,
        role:user.role
    },
    process.env.JWT_REFRESH_SECRET,
    {expiresIn:"7d"}
)
user.refreshToken = refreshToken
await user.save()

return res.status(200).json({
    success:true,
    accessToken,
    message:"Login Successful",
    user: {
    id: user._id,
    name: user.name,
    email: user.email,
    role: user.role,
  },
})
    } catch (error) {
       return res.status(500).json({message:error.message})
    }
    

}
const getCurrentUser = async (req, res) => {
  try {

    const user = await User.findById(req.user.userId).select(
      "name email role"
    );

    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }

    return res.status(200).json({
      success: true,
      data: user,
    });

  } catch (error) {

    return res.status(500).json({
      success: false,
      message: error.message,
    });

  }
};


export{registerUser,loginUser,verifyEmail,getCurrentUser};
