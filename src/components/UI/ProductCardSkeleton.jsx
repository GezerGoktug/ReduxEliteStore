const ProductCardSkeleton = () => {
  return (
    <div className="card bg-transparent backdrop-blur-[5px] outline p-4">
      <div className="card-img bg-gray-400 h-64 w-full rounded-lg animate-pulse"></div>
      <div className="card-title mt-4  space-y-2">
        <div className="bg-gray-400 mx-auto h-6 w-2/3 rounded-lg animate-pulse"></div>
        <div className="bg-gray-400 mx-auto h-4 w-1/2 rounded-lg animate-pulse"></div>
        <div className="bg-gray-400 mx-auto h-4 w-1/3 rounded-lg animate-pulse"></div>
        <div className="bg-gray-400 mx-auto h-8 w-full rounded-lg animate-pulse"></div>
      </div>
    </div>
  );
};

export default ProductCardSkeleton;
