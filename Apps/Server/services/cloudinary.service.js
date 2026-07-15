
import cloudinary from "../config/cloudinary.js"

const uploadImage = async (path) => {
    return await cloudinary.uploader.upload(path,{
        folder:"Verdique Products"
    })
}

const deleteImage = async (publicId) =>{
    return await cloudinary.uploader.destroy(publicId)
}

export  {uploadImage,deleteImage}