import Product from "../models/ProductModel.js";

export const getDashboard = async (req, res) => {

    try {

        const totalProducts =
            await Product.countDocuments();

        const featuredProducts =
            await Product.countDocuments({
                isFeatured: true
            });

        const lowStockProducts =
            await Product.countDocuments({
                stock: { $lt: 10 }
            });

        const recentProducts =
            await Product.find()
                .sort({ createdAt: -1 })
                .limit(5);

        res.json({
            success: true,
            totalProducts,
            featuredProducts,
            lowStockProducts,
            recentProducts
        });

    } catch (error) {

        res.status(500).json({
            success: false,
            message: error.message
        });

    }

}