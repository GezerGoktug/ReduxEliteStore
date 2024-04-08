const Categories = ({ setCategory }) => {
  const categoryİtems = document.getElementsByClassName("category");
  //! Kategori seçildiğinde ilgili state güncellenir.
  const handleCategory = (e) => {
    for (let i = 0; i < categoryİtems.length; i++)
      categoryİtems[i].classList.remove("bg-slate-300");

    e.target.classList.add("bg-slate-300");
    setCategory(e.target.textContent);
  };
  return (
    <section className="bg-slate-100 border-e border-slate-800">
      <h4 className=" py-3 px-4 text-xl font-semibold">Categories</h4>
      <ul className="flex flex-col font-medium  h-max   ">
        <li
          onClick={handleCategory}
          className="category cursor-pointer bg-slate-300 hover:bg-slate-300 py-4 px-4 border-t border-slate-600 "
        >
          All
        </li>
        <li
          onClick={handleCategory}
          className="category cursor-pointer hover:bg-slate-300 py-4 px-4 border-t border-slate-600 "
        >
          men&apos;s clothing
        </li>
        <li
          onClick={handleCategory}
          className="category cursor-pointer hover:bg-slate-300 py-4 px-4 border-t border-slate-600"
        >
          jewelery
        </li>
        <li
          onClick={handleCategory}
          className="category cursor-pointer hover:bg-slate-300 py-4 px-4 border-t border-slate-600"
        >
          electronics
        </li>
        <li
          onClick={handleCategory}
          className="category cursor-pointer hover:bg-slate-300 py-4 px-4 border-y border-slate-600"
        >
          women&apos;s clothing
        </li>
      </ul>
    </section>
  );
};

export default Categories;
