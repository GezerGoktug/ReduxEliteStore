import CartLeftSection from "../components/Cart/CartLeftSection";
import CartRightSection from "../components/Cart/CartRightSection";

const Cart = () => {
  return (
    <div className="min-h-screen  bg-green-300">
      <div className="mx-4 sm:mx-8 md:mx-12 lg:mx-16 xl:mx-24 flex flex-col gap-2 pb-10">
        <h3 className="text-4xl font-semibold text-left my-10">My Cart</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-y-6 md:gap-6 lg:gap-10 xl:gap-16 ">
          <CartLeftSection />
          <CartRightSection />
        </div>
      </div>
    </div>
  );
};

export default Cart;
