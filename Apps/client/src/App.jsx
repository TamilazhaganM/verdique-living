import "./index.css";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

import AppRoutes from "./routes/AppRoutes";

import { getWishlist } from "./services/wishlist.service";
import { setWishlist } from "./redux/slices/wishlistSlice";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const loadWishlist = async () => {
      try {
        const token = localStorage.getItem("token");

        if (!token) return;

        const response = await getWishlist();

        dispatch(setWishlist(response.data));
      } catch (error) {
        console.log(error);
      }
    };

    loadWishlist();
  }, [dispatch]);

  return <AppRoutes />;
}

export default App;
