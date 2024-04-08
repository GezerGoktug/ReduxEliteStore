import { useState } from "react";
import Categories from "./Categories";
import Products from "./Products";

const Main = () => {
  const [category, setCategory] = useState("All");

  return (
    <div className="bg-green-300 border-t-2 border-green-400 py-20">
      <main className="grid grid-cols-1 md:grid-cols-6 mx-4 sm:mx-8 md:mx-12 lg:mx-16 xl:mx-24 border-2 border-slate-800 outline outline-1 shadow-sm shadow-cyan-950 ">
        <Categories setCategory={setCategory} />
        <Products category={category} />
      </main>
    </div>
  );
};

export default Main;
