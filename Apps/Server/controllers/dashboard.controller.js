import Product from "../models/ProductModel.js";
import User from "../models/UserModels.js";
import Order from "../models/OrderModels.js";
import Contact from "../models/ContactModel.js"

const getDashboardStats = async (req, res) => {
  try {

    // Counts
    const totalProducts = await Product.countDocuments();

    const totalCustomers = await User.countDocuments({
      role: "user",
    });

    const totalOrders = await Order.countDocuments();
    const newEnquiries = await Contact.countDocuments({
  status: "New",
});

    // Revenue
    const revenueResult = await Order.aggregate([
       {
    $group: {
      _id: null,
      totalRevenue: {
        $sum: "$totalAmount",
      },
    },
  },
    ]);

    const totalRevenue =
      revenueResult.length > 0
        ? revenueResult[0].totalRevenue
        : 0;

    // Recent Orders
    const recentOrders = await Order.find()
      .populate("customer", "name email")
      .sort({ createdAt: -1 })
      .limit(5);

    // Recent Customers
    const recentCustomers = await User.find({
      role: "user",
    })
      .select("name email createdAt")
      .sort({ createdAt: -1 })
      .limit(5);
    // Monthly Sales
const monthlySales = await Order.aggregate([
  {
    $group: {
      _id: {
        month: { $month: "$createdAt" },
      },
      sales: {
        $sum: "$totalAmount",
      },
    },
  },
  {
    $sort: {
      "_id.month": 1,
    },
  },
]);

const months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

const salesChart = monthlySales.map((item) => ({
  month: months[item._id.month - 1],
  sales: item.sales,
}));

const orderStatus = await Order.aggregate([
  {
    $group: {
      _id: "$status",
      value: {
        $sum: 1,
      },
    },
  },
]);

const orderStatusChart = orderStatus.map((item) => ({
  name: item._id,
  value: item.value,
}));

    return res.status(200).json({
      success: true,
      data: {
        totalProducts,
        totalCustomers,
        totalOrders,
        totalRevenue,
        newEnquiries,
        recentOrders,
        recentCustomers,
        monthlySales:salesChart,
        orderStatus: orderStatusChart,
      },
    });


  } catch (error) {

    return res.status(500).json({
      success: false,
      message: error.message,
    });

  }
};

export { getDashboardStats };