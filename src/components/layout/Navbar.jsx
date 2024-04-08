import { CiShop, CiShoppingBasket } from "react-icons/ci";
import { AiOutlineRollback } from "react-icons/ai";
import Button from "../UI/Button";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect, useRef } from "react";
import useScrollPosition from "../../hooks/useScrollPosition";

const Navbar = () => {
  const nav = useRef();
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const cart = useSelector((state) => state.myCart);
  //! Sitenin aşağısına doğru indikçe navbar yukarı sabitlenir.
  //! Scrollbarın konumunu tespit etmek için özel custom hook
  const scrollPosition = useScrollPosition();
  useEffect(() => {
    if (scrollPosition >= 800) {
      nav.current.classList.remove("bg-transparent");
      nav.current.classList.add(
        "fixed",
        "top-0",
        "left-0",
        "right-0",
        "bg-gradient-to-b",
        "from-green-200",
        "to-green-300",
        "border-b-2",
        "border-green-800"
      );
      nav.current.firstElementChild.classList.remove(
        "border-b-2",
        "border-green-400"
      );
    } else {
      nav.current.classList.remove(
        "fixed",
        "top-0",
        "left-0",
        "right-0",
        "bg-gradient-to-b",
        "from-green-200",
        "to-green-300",
        "border-b-2",
        "border-green-800"
      );
      nav.current.firstElementChild.classList.add(
        "border-b-2",
        "border-green-400"
      );
    }
  }, [scrollPosition]);

  return (
    <nav ref={nav} className="z-10 bg-transparent  ">
      <div className="mx-4 sm:mx-8 md:mx-12 lg:mx-16 xl:mx-24 border-b-2 border-green-400 h-20 flex justify-between items-center text-base sm:text-xl ">
        <Link to="/" className="flex items-center gap-2">
          <CiShop className="text-xl sm:text-3xl" />
          <span className="font-bold">
            Elite <span className="text-green-600">Store</span>
          </span>
        </Link>
        {pathname === "/" ? (
          <Button
            onClick={() => navigate("/cart")}
            className=" bg-green-500 hover:bg-green-600 outline outline-green-700 "
          >
            <CiShoppingBasket className="text-xl" />
            <span className="font-semibold">Go to cart</span>
            <span className="flex items-center justify-center w-6 text-sm h-6 text-white font-semibold rounded-full bg-red-700">
              {cart.length}
            </span>
          </Button>
        ) : (
          <Button
            className=" bg-green-500 hover:bg-green-600 outline outline-green-700 "
            onClick={() => navigate("/")}
          >
            <AiOutlineRollback className="text-xl" />
            <span className=" text-sm sm:text-base font-semibold">
              Go to Home Page
            </span>
          </Button>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
