import { RouterProvider } from "react-router-dom";
import { router } from "./router/route";
import { Toaster } from "react-hot-toast";
import { useEffect } from "react";
import { useSelector } from "react-redux";

function App() {
  const cart = useSelector((state) => state.myCart);
  const price = useSelector((state) => state.price);
  //! Sepet bilgilerini yerel depolamaya kaydet.
  useEffect(() => {
    const localData = {
      myCart: cart,
      price: price,
    };
    localStorage.setItem("cartData", JSON.stringify(localData));
  }, [cart, price]);
  return (
    <>
      <Toaster />
      <RouterProvider router={router} />
    </>
  );
}

export default App;
