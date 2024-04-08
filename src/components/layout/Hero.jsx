import Glide from "@glidejs/glide";
import { FaCircle } from "react-icons/fa";
import { CiCircleChevLeft, CiCircleChevRight } from "react-icons/ci";
import "@glidejs/glide/dist/css/glide.core.min.css";
import HeroSliderItem from "../UI/HeroSliderItem";
import { useEffect, useState } from "react";

const Hero = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  //! Carousel işlevleri 
  useEffect(() => {
    const glide = new Glide(".glide", {
      type: "carousel",
      startAt: 0,
      perView: 1,
      autoplay: 5000,
    });
    glide.on("run", function () {
      setActiveIndex(glide.index);
    });
    glide.mount();

    return () => {
      glide.destroy();
    };
  }, []);
  return (
    <div className="glide relative">
      <div
        className="glide__track mx-4 sm:mx-8 md:mx-12 lg:mx-16 xl:mx-24"
        data-glide-el="track"
      >
        <ul
          className="glide__slides "
          style={{ minHeight: "calc(100vh - 80px)" }}
        >
          <li className="glide__skide ">
            <HeroSliderItem
              header="Elevate Your Steps"
              content="Sneakers that Combine Comfort and Style"
              src="trousers.png"
            />
          </li>
          <li className="glide__skide">
            <HeroSliderItem
              header="Stay Stylish in Chilly Weather"
              content="Jackets that Offer Both Fashion and Warmth"
              src="jacket-removebg-preview.png"
            />
          </li>
          <li className="glide__skide">
            <HeroSliderItem
              header="Stylish and Functional"
              content="Trendy Bag Models that Simplify Your Daily Life"
              src="handbag.png"
            />
          </li>
          <li className="glide__skide">
            <HeroSliderItem
              header="Reflect Your Personal Style"
              content="Eye-catching Bracelets with Unique Designs"
              src="bracelet.png"
            />
          </li>
        </ul>
      </div>
      <div className="glide__arrows " data-glide-el="controls">
        <button
          className="glide__arrow glide__arrow--left absolute top-80 left-3 text-4xl "
          data-glide-dir="<"
        >
          <CiCircleChevLeft />
        </button>
        <button
          className="glide__arrow glide__arrow--right absolute top-80 right-3 text-4xl"
          data-glide-dir=">"
        >
          <CiCircleChevRight />
        </button>
      </div>

      <div
        className="glide__bullets flex gap-5 text-sm  absolute bottom-12 left-1/2 -translate-x-1/2"
        data-glide-el="controls[nav]"
      >
        {[0, 1, 2, 3].map((index) => (
          <button
            key={index}
            className={`glide__bullet ${
              activeIndex === index ? "opacity-100" : "opacity-60"
            }`}
            data-glide-dir={`=${index}`}
          >
            <FaCircle />
          </button>
        ))}
      </div>
    </div>
  );
};

export default Hero;
