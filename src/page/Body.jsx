import React from "react";
import { useEffect, useState } from "react";
import Card from "../Components/Card.jsx";
import Simmer from "../utils/Simmer.jsx";
import  {Link} from "react-router";

export default function Body() {
  const [cardData, setCardData] = useState([]);
  const [search, setSearch] = useState("");
  const [filteredData, setFilteredData] = useState([]);

  const fetchData = async () => {
    const productResponse = await fetch("https://fakestoreapi.com/products");
    const ResJson = await productResponse.json();
    // console.log(ResJson);
    

    // console.log(ResJson);
    if (ResJson) {
      setCardData(ResJson);
      setFilteredData(ResJson);
    } else {
      console.log("SomeThing Went Wrong");
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  function FilterData() {
    const filtered = filteredData.filter(
      (item) => item.category === "men's clothing"
    );
    // setCardData(filtered);
    setFilteredData(filtered);
  }
  const searching = () => {
    let filterSearch = cardData.filter((item) =>
      item.title.toLowerCase().includes(search.toLowerCase())
    );
    setFilteredData(filterSearch);
  };
  return (
    <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8 flex-col">
      <div className="w-full ">
        <div className="w-full min-w-[200px]">
          <div className="relative  w-full">
            <input
              className="w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-blue-600 rounded-md pl-3 pr-28 p-4 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
              placeholder="Search..."
              value={search}
              onChange={(e) => {
                setSearch(e.target.value);
              }}
            />
            {}
            <button
              className="  absolute top-1 right-1 flex items-center rounded bg-slate-800 py-3 px-2.5 border border-transparent text-center text-sm text-white transition-all shadow-sm hover:shadow focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
              type="button"
              onClick={searching}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-4 h-4 mr-2"
              >
                <path
                  fillRule="evenodd"
                  d="M10.5 3.75a6.75 6.75 0 1 0 0 13.5 6.75 6.75 0 0 0 0-13.5ZM2.25 10.5a8.25 8.25 0 1 1 14.59 5.28l4.69 4.69a.75.75 0 1 1-1.06 1.06l-4.69-4.69A8.25 8.25 0 0 1 2.25 10.5Z"
                  clipRule="evenodd"
                />
              </svg>
              Search
            </button>
          </div>
        </div>
      </div>
      <div className="flex gap-6">
        <button
          className=" mt-10 p-3 border rounded-xl hover:bg-slate-300 transition-all active:opacity-25"
          onClick={FilterData}
        >
          Male
        </button>
        <button
          className=" mt-10 p-3 border rounded-xl hover:bg-slate-300 transition-all active:opacity-25"
          onClick={() => {
            setFilteredData(cardData);
          }}
        >
          All Products
        </button>
      </div>
      <h2 className="text-2xl font-bold tracking-tight text-orange-500 pt-6">
        Customers also purchased
      </h2>

      <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
        {cardData === 0 ? (
          // <Simmer />
          <h1>Loading..</h1>
        ) : (
          <>
            {filteredData.map((item) => (
             <Link to={`/products/${item.id}`} key={item.id}><Card SetData={item} /></Link>
            ))}
          </>
        )}
      </div>
    </div>
  );
}
