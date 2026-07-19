import Order from "../models/OrderModels.js";
import Product from "../models/ProductModel.js";

const createOrder = async (req, res) => {

    try {
const {
  orderItems,
  shippingAddress,
  paymentMethod,
} = req.body;

if (!orderItems || orderItems.length === 0) {
  return res.status(400).json({
    success: false,
    message: "No order items found",
  });
}

const customer = req.user.userId;

let totalAmount = 0;

const orderProducts = [];
for (const item of orderItems) {

    const product = await Product.findById(item.product);

    if (!product) {

        return res.status(404).json({
            success: false,
            message: "Product not found",
        });

    }
    if (product.stock < item.quantity) {

    return res.status(400).json({
        success: false,
        message: `${product.name} is out of stock`,
    });

}

totalAmount += product.price * item.quantity;


orderProducts.push({

    product: product._id,

    name: product.name,

    price: product.price,

    quantity: item.quantity,

    image: product.image.url,

});

product.stock -= item.quantity;
await product.save();

}



const order = await Order.create({

    customer:req.user.userId,

    orderItems: orderProducts,

    shippingAddress,

    paymentMethod,

    totalAmount,

});
return res.status(201).json({

    success: true,

    message: "Order placed successfully",

    data: order,

});
       

    } catch (error) {

        return res.status(500).json({
            success: false,
            message: error.message,
        });

    }

};
const getMyOrders = async (req, res) => {
  try {
    const customer = req.user.userId;

    const orders = await Order.find({ customer:id })
      .populate("orderItems.product")
      .sort({ createdAt: -1 });

    return res.status(200).json({
      success: true,
      data: orders,
    });

  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
const getOrderById = async (req, res) => {
  try {
    const { id } = req.params;

    const order = await Order.findById(id)
      .populate("orderItems.product");

    if (!order) {
      return res.status(404).json({
        success: false,
        message: "Order not found",
      });
    }

    // Security check
    if (
      order.customer.toString() !== req.user.userId &&
      req.user.role !== "admin"
    ) {
      return res.status(403).json({
        success: false,
        message: "Unauthorized",
      });
    }

    return res.status(200).json({
      success: true,
      data: order,
    });

  } catch (error) {

    return res.status(500).json({
      success: false,
      message: error.message,
    });

  }
};
const getAllOrders = async (req, res) => {
  try {

    const orders = await Order.find()
      .populate("customer", "name email")
      .populate("orderItems.product", "name image")
      .sort({ createdAt: -1 });

    return res.status(200).json({
      success: true,
      data: orders,
    });

  } catch (error) {

    return res.status(500).json({
      success: false,
      message: error.message,
    });

  }
};
const updateOrderStatus = async (req, res) => {
  try {

    const { id } = req.params;
    const { status } = req.body;

    const order = await Order.findById(id);

    if (!order) {
      return res.status(404).json({
        success: false,
        message: "Order not found",
      });
    }

    order.status = status;

    await order.save();

    return res.status(200).json({
      success: true,
      message: "Order status updated successfully",
      data: order,
    });

  } catch (error) {

    return res.status(500).json({
      success: false,
      message: error.message,
    });

  }
};


export {createOrder,getMyOrders,getOrderById,getAllOrders,updateOrderStatus}