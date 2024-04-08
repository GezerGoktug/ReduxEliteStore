import { useEffect, useMemo, useState } from "react";
import useHttp from "../../hooks/useHttp";
import ProductCard from "../UI/ProductCard";
import ProductCardSkeleton from "../UI/ProductCardSkeleton";

const Products = ({ category }) => {
  //! Kategori işlemleri sonunda filtrelenmiş ürünleri tutacak state
  const [filteredData, setFilteredData] = useState([]);
  //! Ürün API'mize istek attık useHttp custom hooku ile. 
  //! Apı isteği sürerken isLoading => true  olur Skeleton Product Card lar çalışır.
  //! Api isteği bittikten data geldikten sonra isLoading => false olur ve
  //! Ürünler karşımıza gelir.
  const { isLoading, error, data } = useHttp(
    "https://fakestoreapi.com/products"
  );
  //! Gelen verileri useMemo saklıyoruz. Böylelikle data değişmediği sürece...
  //! saklı ürün verilerinden kullanıcaz tekrar apiye istek atmamıza gerek yok.
  const memoizedData = useMemo(() => {
    return data;
  }, [data]);
  //! Kategori işlemleri 
  useEffect(() => {
    if (!isLoading && data && category !== "All") {
      const filteredProducts = memoizedData.filter(
        (product) => product.category === category
      );
      setFilteredData(filteredProducts);
    } else {
      setFilteredData(memoizedData || []);
    }
  }, [category, isLoading, data, memoizedData]);

  return (
    <section className="bg-[url('img/shopping.png')]  bg-contain col-span-5 grid grid-cols-1 min-[500px]:grid-cols-2  lg:grid-cols-3 xl:grid-cols-4 gap-4 bg-slate-500 p-6">
      {isLoading
        ? [1, 2, 3, 4, 5, 6].map((index) => <ProductCardSkeleton key={index} />)
        : filteredData.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
    </section>
  );
};

export default Products;
