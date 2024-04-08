import { useLocation } from "react-router-dom";
import Hero from "./Hero";
import Navbar from "./Navbar";

const Header = () => {
  const { pathname } = useLocation();
  return (
    <header
      className={`${
        pathname === "/" ? "min-h-screen" : ""
      }  bg-gradient-to-b from-green-200 to-green-300`}
    >
      <Navbar />
      {pathname === "/" ? <Hero /> : ""}
    </header>
  );
};

export default Header;
