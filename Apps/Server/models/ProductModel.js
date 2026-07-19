import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },

    description: {
      type: String,
      required: true,
      trim: true,
    },

    price: {
      type: Number,
      required: true,
      min: 0,
    },

    category: {
  type: mongoose.Schema.Types.ObjectId,
  ref: "Category",
  required: true,
},

    image:  
      {
        url:{
          type: String,
          required:true
      },
      public_id: {
      type: String,
      required: true,
    },
        
      },

    stock: {
      type: Number,
      required: true,
      default: 0,
      min: 0,
    },

    sunlight: {
      type: String,
      default: "",
    },

    watering: {
      type: String,
      default: "",
    },

    plantType: {
      type: String,
      default: "",
    },

    spacing: {
      type: String,
      default: "",
    },

    isFeatured: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

const Product = mongoose.model("Product", productSchema);

export default Product;