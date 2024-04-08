import { cartActions } from "../../store/slices/cartSlice";
import Button from "../UI/Button";
import Table from "../UI/Table";
import { FaTrash } from "react-icons/fa";
import { useDispatch } from "react-redux";

const CartLeftSection = () => {
  const dispatch = useDispatch();
  const { clearCart } = cartActions;
  return (
    <div className="col-span-2  min-h-80 overflow-x-auto">
      <Table />
      <Button
        onClick={() => dispatch(clearCart())}
        className="bg-red-800 text-white  hover:bg-red-900 me-auto mt-3"
      >
        <FaTrash />
        <span>Clear Cart</span>
      </Button>
    </div>
  );
};

export default CartLeftSection;
