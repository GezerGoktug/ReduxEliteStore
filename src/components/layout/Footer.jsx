import { CiShop } from "react-icons/ci";
import {
  FaFacebook,
  FaHome,
  FaInstagram,
  FaShoppingCart,
  FaTwitter,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import Button from "../UI/Button";

const Footer = () => {
  return (
    <footer className="bg-green-700 py-8">
      <div className=" mx-4 sm:mx-8 md:mx-12 lg:mx-16 xl:mx-24 ">
        <div className="grid grid-cols-1 md:grid-cols-3 justify-between gap-8">
          {/* Marka Bilgileri */}
          <div>
            <Link
              to="/"
              className="flex items-center gap-2 text-xl my-2 text-white"
            >
              <CiShop className="text-xl sm:text-3xl" />
              <span className="font-bold">
                Elite <span className="text-green-400">Store</span>
              </span>
            </Link>
            <p className="text-gray-300">
              Elite Store offers the best quality products to its customers.
              Customer satisfaction and reliable shopping experience are our
              priority.
            </p>
            <div className="mt-4 flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-white">
                <FaFacebook />
              </a>
              <a href="#" className="text-gray-300 hover:text-white">
                <FaTwitter />
              </a>
              <a href="#" className="text-gray-300 hover:text-white">
                <FaInstagram />
              </a>
            </div>
          </div>
          {/* Sayfa Bağlantıları */}
          <div className=" inline-flex justify-left md:justify-center text-left">
            <div className="flex flex-col space-y-2">
              <h3 className="text-white font-semibold">Pages</h3>
              <Link
                to="/"
                className="text-gray-300 hover:text-white flex items-center"
              >
                <FaHome className="mr-1" /> Home
              </Link>
              <Link
                to="/cart"
                className="text-gray-300 hover:text-white flex items-center"
              >
                <FaShoppingCart className="mr-1" /> My Cart
              </Link>
            </div>
          </div>
          {/* İletişim Bilgileri ve Abonelik Formu */}
          <div className=" ">
            <div className="flex flex-col space-y-2">
              <h3 className="text-white font-semibold">Contact</h3>
              <p className="text-gray-300">
                Address: 1234 Elite Street, Elite District, Elite City
              </p>
              <p className="text-gray-300">Telephone: 123-456-7890</p>
              <p className="text-gray-300">E-mail: info@elitestore.com</p>
              <form className="flex flex-col space-y-2  w-full min-[460px]:w-1/2 md:w-full">
                <label className="text-gray-300">E-mail Subscribe</label>
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="bg-gray-200 rounded-md p-2"
                />
                <Button
                  type="submit"
                  className="bg-gray-800   text-white hover:bg-gray-700"
                >
                  Subscribe
                </Button>
              </form>
            </div>
          </div>
        </div>
        <div className=" text-center text-gray-300 mt-8 border-t-2 pt-12 pb-3 border-green-950">
          <p className="text-sm">
            &copy; 2024 Elite Store - All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
