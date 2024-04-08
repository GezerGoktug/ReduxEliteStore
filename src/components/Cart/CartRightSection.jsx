import { useState } from "react";
import Button from "../UI/Button";
import { useSelector } from "react-redux";

const CartRightSection = () => {
  const price = useSelector((state) => state.price);
  const [fastCargo, setFastCargo] = useState(false);
  let cargoPrice = 10;
  const handleFastCargo = (e) => setFastCargo(e.target.checked);
  const calculateTotal = () => {
    if (fastCargo) {
      const newPrice = ((price * 100 + cargoPrice * 100) / 100).toFixed(2);
      return newPrice;
    }
    return price;
  };
  return (
    <div className="h-max min-h-80 bg-slate-100 outline outline-slate-400 p-4">
      <h1 className="text-2xl font-medium">Cash</h1>
      <ul className="flex flex-col my-6">
        <div className="flex justify-between py-2">
          <li>Product total:</li>
          <li className="font-bold">{price}$</li>
        </div>
        <div className="flex justify-between pt-2 pb-4 border-b-2 border-slate-600 ">
          <li className="flex items-center gap-x-2">
            <span>Fast Cargo:</span>
            <input
              onChange={handleFastCargo}
              className=" scale-125 p-0 mt-1"
              type="checkbox"
            />
          </li>
          <li className="font-bold">{fastCargo ? `${cargoPrice}$` : "0$"}</li>
        </div>
        <div className="flex justify-between  pt-4 ">
          <li className="text-xl">Cash total:</li>
          <li className="font-bold text-xl">{calculateTotal()}$</li>
        </div>
      </ul>
      <div className="flex flex-col gap-4 mb-5">
        <input
          className="p-2 border border-slate-300"
          type="text"
          placeholder="Card Number"
        />
        <input
          className="p-2 border border-slate-300"
          type="text"
          placeholder="Expiry Date"
        />
        <input
          className="p-2 border border-slate-300"
          type="text"
          placeholder="CVV"
        />
      </div>
      <Button className="bg-green-500 hover:bg-green-600">Pay</Button>
    </div>
  );
};

export default CartRightSection;
