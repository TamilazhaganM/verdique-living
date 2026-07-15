import Product from "../models/ProductModel.js";

import { uploadImage, deleteImage } from "../services/cloudinary.service.js";

const createProduct = async (req, res) => {
  try {
    const {
      name,
      description,
      price,
      category,
      stock,
      sunlight,
      watering,
      spacing,
      plantType,
      isFeatured,
    } = req.body;
    if (!name || !description || !price || !category || !stock || !req.file) {
      return res.status(400).json({
        success: false,
        message: "All required fields including images are required",
      });
    }
    console.log(req.file);
    const uploadResult = await uploadImage(req.file.path);
    const product = await Product.create({
      name,
      description,
      price,
      category,
      stock,
      sunlight,
      watering,
      spacing,
      plantType,
      isFeatured,
      image: {
        url: uploadResult.secure_url,
        public_id: uploadResult.public_id,
      },
    });

    return res.status(201).json({
      success: true,
      message: "Product created successfully.",
      data: product,
    });
  } catch (error) {
    console.error(error);

    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
const getAllProducts = async (req, res) => {
  try {
   const {
  search,
  category,
  sort,
  page = 1,
  limit = 10,
  minPrice,
  maxPrice,
  inStock
} = req.query;

const currentPage = Number(page);
const pageLimit = Number(limit);
const skip = (currentPage - 1) * pageLimit;

// Filter
const filter = {};

if (search) {
  filter.name = {
    $regex: search,
    $options: "i",
  };
}

if (category) {
  filter.category = category;
}
if (minPrice || maxPrice) {

    filter.price = {};

    if (minPrice) {

        filter.price.$gte = Number(minPrice);

    }

    if (maxPrice) {

        filter.price.$lte = Number(maxPrice);

    }

}
if (inStock === "true") {
    filter.stock = {
        $gt: 0,
    };
}

// Sorting
let sortOption = {};

switch (sort) {
  case "price_asc":
    sortOption = { price: 1 };
    break;

  case "price_desc":
    sortOption = { price: -1 };
    break;
    
  case "name_asc":
    sortOption = { name: 1 };
    break;

  case "name_desc":
    sortOption = { name: -1 };
    break;

  case "latest":
    sortOption = { createdAt: -1 };
    break;

  case "oldest":
    sortOption = { createdAt: 1 };
    break;

  default:
    sortOption = { createdAt: -1 }; // Default: Latest products first
}

const products = await Product.find(filter)
  .sort(sortOption)
  .skip(skip)
  .limit(pageLimit);

const totalProducts = await Product.countDocuments(filter);
const totalPages = Math.ceil(totalProducts / pageLimit);

return res.status(200).json({
  success: true,
  currentPage,
  totalPages,
  totalProducts,
  hasNextPage: currentPage < totalPages,
  hasPrevPage: currentPage > 1,
  data: products,
});
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
const getProductById = async (req, res) => {
  try {
    const { id } = req.params;

    const product = await Product.findById(id);

    if (!product) {
      return res.status(404).json({
        success: false,
        message: "Product not found",
      });
    }

    res.status(200).json({
      success: true,
      data: product,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
const updateProduct = async (req, res) => {
  try {
    const { id } = req.params;

    const product = await Product.findById(id);

    if (!product) {
      return res.status(404).json({
        success: false,
        message: "Product not found",
      });
    }

    // Update text fields
    product.name = req.body.name || product.name;
    product.description = req.body.description || product.description;
    product.category = req.body.category || product.category;
    product.price = req.body.price || product.price;
    product.stock = req.body.stock || product.stock;
    product.sunlight = req.body.sunlight || product.sunlight;
    product.watering = req.body.watering || product.watering;
    product.spacing = req.body.spacing || product.spacing;
    product.plantType = req.body.plantType || product.plantType;

    // Boolean handling
    if (req.body.isFeatured !== undefined) {
      product.isFeatured = req.body.isFeatured;
    }

    // Update image only if new image uploaded
    if (req.file) {
      // Delete old image
      await deleteImage(product.image.public_id);

      // Upload new image
      const uploadResult = await uploadImage(req.file.path);

      // Save new image info
      product.image = {
        url: uploadResult.secure_url,
        public_id: uploadResult.public_id,
      };
    }

    await product.save();

    return res.status(200).json({
      success: true,
      message: "Product updated successfully",
      data: product,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
const deleteProduct = async (req, res) => {
  try {
    const { id } = req.params;

    const product = await Product.findById(id);

    if (!product) {
      return res.status(404).json({
        success: false,
        message: "Product not found",
      });
    }

    await deleteImage(product.image.public_id);

    await product.deleteOne();

    return res.status(200).json({
      success: true,
      message: "Product deleted successfully",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export {
  createProduct,
  getAllProducts,
  getProductById,
  updateProduct,
  deleteProduct,
};
