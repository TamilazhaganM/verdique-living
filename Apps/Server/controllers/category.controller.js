import Category from "../models/CategoryModel.js";
import {
  uploadImage,
  deleteImage,
} from "../services/cloudinary.service.js";

// ==============================
// Create Category
// ==============================

const createCategory = async (req, res) => {
  try {
    const {
      name,
      description,
      isActive,
    } = req.body;

    if (!name || !req.file) {
      return res.status(400).json({
        success: false,
        message: "Category name and image are required.",
      });
    }

    const existingCategory = await Category.findOne({
      name: name.trim(),
    });

    if (existingCategory) {
      return res.status(400).json({
        success: false,
        message: "Category already exists.",
      });
    }

    const uploadResult = await uploadImage(req.file.path);

    const category = await Category.create({
      name,
      description,
      isActive:isActive === "true",
      image: {
        url: uploadResult.secure_url,
        public_id: uploadResult.public_id,
      },
    });

    return res.status(201).json({
      success: true,
      message: "Category created successfully.",
      data: category,
    });

  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// ==============================
// Get All Categories
// ==============================

const getAllCategories = async (req, res) => {
  try {

    const categories = await Category.find().sort({
      createdAt: -1,
    });

    return res.status(200).json({
      success: true,
      count: categories.length,
      data: categories,
    });

  } catch (error) {

    return res.status(500).json({
      success: false,
      message: error.message,
    });

  }
};

// ==============================
// Get Category By Id
// ==============================

const getCategoryById = async (req, res) => {
  try {

    const category = await Category.findById(req.params.id);

    if (!category) {
      return res.status(404).json({
        success: false,
        message: "Category not found.",
      });
    }

    return res.status(200).json({
      success: true,
      data: category,
    });

  } catch (error) {

    return res.status(500).json({
      success: false,
      message: error.message,
    });

  }
};

// ==============================
// Update Category
// ==============================

const updateCategory = async (req, res) => {
  try {

    const { id } = req.params;

    const category = await Category.findById(id);

    if (!category) {
      return res.status(404).json({
        success: false,
        message: "Category not found.",
      });
    }

    category.name = req.body.name || category.name;

    category.description =
      req.body.description || category.description;

    if (req.body.isActive !== undefined) {
      category.isActive = req.body.isActive==="true";
    }

    if (req.file) {

      await deleteImage(category.image.public_id);

      const uploadResult = await uploadImage(req.file.path);

      category.image = {
        url: uploadResult.secure_url,
        public_id: uploadResult.public_id,
      };
      console.log(category.image);
console.log(category.image.public_id);
    }

    await category.save();

    return res.status(200).json({
      success: true,
      message: "Category updated successfully.",
      data: category,
    });

  } catch (error) {

    return res.status(500).json({
      success: false,
      message: error.message,
    });

  }
};

// ==============================
// Delete Category
// ==============================

const deleteCategory = async (req, res) => {
  try {

    const { id } = req.params;

    const category = await Category.findById(id);

    if (!category) {
      return res.status(404).json({
        success: false,
        message: "Category not found.",
      });
    }

    await deleteImage(category.image.public_id);

    await category.deleteOne();

    return res.status(200).json({
      success: true,
      message: "Category deleted successfully.",
    });

  } catch (error) {

    return res.status(500).json({
      success: false,
      message: error.message,
    });

  }
};

export {
  createCategory,
  getAllCategories,
  getCategoryById,
  updateCategory,
  deleteCategory,
};