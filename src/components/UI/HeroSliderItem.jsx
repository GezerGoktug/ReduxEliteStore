import Button from "./Button";

const HeroSliderItem = ({ header, content, src }) => {
  return (
    <div className=" flex flex-col md:grid  md:grid-cols-2 items-start   md:items-center   justify-between h-full ">
      <div className=" relative text-left w-full  whitespace-normal overflow-hidden break-words ">
        <h2 className="text-3xl mt-8   lg:text-5xl font-bold mb-2 hero-header">
          {header}
        </h2>
        <p className="text-xl hero-title">{content}</p>
        <Button className="bg-green-transparent mt-4 hover:bg-green-600 border-2 border-green-600">
          Discover
        </Button>
      </div>
      <img
        className="object-contain w-[80%] mx-auto my-auto md:w-full h-[45%] sm:h-[65%] md:h-[80%]  drop-shadow-2xl "
        src={`img/${src}`}
        alt={header}
      />
    </div>
  );
};

export default HeroSliderItem;
