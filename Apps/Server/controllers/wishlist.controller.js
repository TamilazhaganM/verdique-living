import Wishlist from "../models/WishlistModel.js";

const toggleWishlist = async (req, res) => {
  try {
    const { productId } = req.params;
    const userId = req.user.userId;

    const existingWishlist = await Wishlist.findOne({
      user: userId,
      product: productId,
    });

    if (existingWishlist) {
      await existingWishlist.deleteOne();

      return res.status(200).json({
        success: true,
        wishlisted: false,
        message: "Removed from wishlist",
      });
    }

    await Wishlist.create({
      user: userId,
      product: productId,
    });

    return res.status(201).json({
      success: true,
      wishlisted: true,
      message: "Added to wishlist",
    });

  } catch (error) {

    return res.status(500).json({
      success: false,
      message: error.message,
    });

  }
};

const getWishlist = async (req, res) => {
  try {

    const userId = req.user.userId;

    const wishlist = await Wishlist.find({
      user: userId,
    }).populate("product");

    return res.status(200).json({
      success: true,
      data: wishlist,
    });

  } catch (error) {

    return res.status(500).json({
      success: false,
      message: error.message,
    });

  }
};

export { toggleWishlist, getWishlist };