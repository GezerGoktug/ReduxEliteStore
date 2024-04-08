import { useSelector } from "react-redux";
import TableItem from "./TableItem";

const ProductTable = () => {
  const cart = useSelector((state) => state.myCart);

  return (
    <div className="relative overflow-x-auto shadow-md bg-white">
      <table className="w-full text-sm text-left rtl:text-right text-gray-700 ">
        <thead className="text-xs uppercase bg-blue-950 text-gray-300">
          <tr>
            <th scope="col" className="px-6 py-3">
              İmage
            </th>
            <th scope="col" className="px-6 py-3">
              Product name
            </th>
            <th scope="col" className="px-6 py-3">
              Quantity
            </th>
            <th scope="col" className="px-6 py-3">
              Price
            </th>
            <th scope="col" className="px-6 py-3">
              <span className="sr-only">Edit</span>
            </th>
          </tr>
        </thead>
        <tbody>
          {cart.length === 0 ? (
            <tr>
              <td
                colSpan="5"
                className="text-3xl py-[122px] font-semibold text-center"
              >
                Cart Empty
              </td>
            </tr>
          ) : (
            cart.map((product) => (
              <TableItem key={product.id} product={product} />
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};

export default ProductTable;
