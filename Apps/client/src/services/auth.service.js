import api from "./axios";

const registerUser = async(data)=>{
const response = await api.post('/register',data)
return response.data
}

const loginUser = async(data)=>{
    const response = await api.post("/login",data)
    return response.data
}
const verifyEmail = async(data)=>{
    const response = await api.post("/verify-email",data)
    return response.data
}

const forgotPassword = async(data)=>{
    const response = await api.post("/forgot-password",data)
    return response.data
}
const resetPassword = async(data)=>{
    const response = await api.post("/reset-password",data)
    return  response.data
}


export {registerUser,loginUser,verifyEmail,forgotPassword,resetPassword}