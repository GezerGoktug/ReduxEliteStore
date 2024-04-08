import { FaCartPlus } from "react-icons/fa";
import Button from "./Button";
import { useDispatch } from "react-redux";
import { cartActions } from "../../store/slices/cartSlice";
import { BsFillCartCheckFill } from "react-icons/bs";
import { useSelector } from "react-redux";
import { useEffect, useRef } from "react";

const ProductCard = ({ product }) => {
  const productCard = useRef();
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.myCart);
  const { addProduct } = cartActions;
  //! Product card oluşma animasyonu
  useEffect(() => {
    productCard.current.style.opacity = 0;
    setTimeout(() => {
      productCard.current.style.opacity = 1;
    }, 150);
  }, [product]);
  const status = {
    isDisabled: false,
    icon: <FaCartPlus />,
    title: "Add to cart",
    className: "outline-cyan-800  hover:bg-cyan-700  bg-cyan-600",
  };
  //! Sepetteki ürünler için sepete ekleme butonu stil ve durum özellikleri
  if (cart.some((item) => item.id === product.id)) {
    status.isDisabled = true;
    status.title = "Added to cart";
    status.icon = <BsFillCartCheckFill />;
    status.className = "bg-green-600 hover:bg-green-700 outline-green-800";
  }
  //! Sepette olmayan ürünler için sepete ekleme butonu stil ve durum özellikleri
  else {
    status.isDisabled = false;
    status.icon = <FaCartPlus />;
    status.title = "Add to cart";
    status.className = "outline-cyan-800  hover:bg-cyan-700  bg-cyan-600";
  }

  const { isDisabled, title, className, icon } = status;
  return (
    <div
      ref={productCard}
      className="card transition-opacity flex flex-col gap-2 justify-start bg-transparent backdrop-blur-[5px] outline p-4 "
    >
      <div className="card-img bg-white   ">
        <img
          className="object-contain  p-4 border-2 h-48 w-full border-cyan-700"
          src={product.image}
          alt={product.title}
        />
      </div>
      <div className="card-title flex flex-col w-full h-full justify-start items-center">
        <h2 className="text-2xl font-semibold my-2  w-full  break-words">
          {product.title}
        </h2>
        <span className="font-medium mt-auto">{product.category}</span>
        <span className="  font-bold  text-2xl text-green-700">
          {product.price} $
        </span>
        <Button
          isDisabled={isDisabled}
          onClick={() => dispatch(addProduct({ product }))}
          className={`" ${className} outline  my-2 text-slate-200  py-2 w-full "`}
        >
          {icon}
          <span>{title}</span>
        </Button>
      </div>
    </div>
  );
};

export default ProductCard;
