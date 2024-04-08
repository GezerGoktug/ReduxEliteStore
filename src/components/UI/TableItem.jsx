import Button from "./Button";
import { useDispatch } from "react-redux";
import { MdDelete } from "react-icons/md";
import { cartActions } from "../../store/slices/cartSlice";
const TableItem = ({ product }) => {
  const dispatch = useDispatch();
  const { removeProduct, increaseQuantity, decreaseQuantity } = cartActions;
  return (
    <tr className="bg-white border-b   hover:bg-gray-300   ">
      <td className="px-6 py-4">
        <img
          className=" me-auto object-contain h-16"
          src={product.image}
          alt={product.title}
        />
      </td>
      <th
        scope="row"
        className="md:px-3 lg:px-6 py-4 font-medium text-ellipsis overflow-hidden "
      >
        {product.title}
      </th>
      <td className="px-6 py-4">
        <div className="flex items-center">
          <button
            type="button"
            id="decrement-button"
            onClick={() => dispatch(decreaseQuantity({ product }))}
            className="flex-shrink-0 bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:border-gray-600 hover:bg-gray-200 inline-flex items-center justify-center border border-gray-300 rounded-md h-5 w-5 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none"
          >
            <svg
              className="w-2.5 h-2.5 text-gray-900 dark:text-white"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 18 2"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h16"
              />
            </svg>
          </button>
          <input
            disabled
            type="text"
            className="flex-shrink-0 text-gray-900  border-0 bg-transparent text-sm font-normal focus:outline-none focus:ring-0 max-w-[2.5rem] text-center"
            value={product.quantity}
          />
          <button
            type="button"
            id="increment-button"
            onClick={() => dispatch(increaseQuantity({ product }))}
            className="flex-shrink-0 bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:border-gray-600 hover:bg-gray-200 inline-flex items-center justify-center border border-gray-300 rounded-md h-5 w-5 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none"
          >
            <svg
              className="w-2.5 h-2.5 text-gray-900 dark:text-white"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 18 18"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 1v16M1 9h16"
              />
            </svg>
          </button>
        </div>
      </td>
      <td className="px-6 py-4 text-red-700 font-semibold text-nowrap">
        {product.price} $
      </td>
      <td className="px-6 py-4 text-right">
        <Button
          onClick={() => dispatch(removeProduct({ product }))}
          className="bg-red-800 text-white  hover:bg-red-900 ms-auto"
        >
          <MdDelete />
          <span>Remove</span>
        </Button>
      </td>
    </tr>
  );
};

export default TableItem;
