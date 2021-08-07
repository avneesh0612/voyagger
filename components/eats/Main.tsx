import { ArrowRightIcon, SearchIcon } from "@heroicons/react/outline";
import FoodItem from "./FoodItem";
import OfferProduct from "./OfferProduct";
import React from "react";
import { Category, Salad } from "../../types/itemTypes";

interface MainProps {
  salads: [Salad];
  categories: [Category];
}

const Main: React.FC<MainProps> = ({ salads, categories }) => {
  return (
    <main className="md:w-[65vw] w-full">
      <div className="md:w-[55vw] w-5/6 flex ring-1 ring-white backdrop-filter backdrop-blur-3xl bg-white  h-12 rounded-full  bg-opacity-40  m-5 mx-auto items-center justify-center">
        <input
          className="w-full pl-10 bg-transparent outline-none caret-gray-200"
          placeholder="Search"
        />
        <SearchIcon className="w-12 h-12 p-3 bg-white rounded-full backdrop-filter backdrop-blur-2xl bg-opacity-40" />
      </div>

      <div className="flex overflow-scroll md:w-[67vw] hidescrollbar mx-10 h-48 space-x-6 pr-14">
        {categories.map((category: Category) => (
          <div key={category.id}>
            <FoodItem image={category.image} name={category.name} />
          </div>
        ))}
      </div>
      <div>
        <div className="md:w-[64vw] mx-5 flex justify-between">
          <h2 className="text-xl font-semibold">Best offers</h2>
        </div>
      </div>
      <div className="flex flex-wrap mt-5 mb-5 md:flex-nowrap justify-evenly md:mb-0">
        {salads.map((salad: Salad) => (
          <div key={salad.id}>
            <OfferProduct
              name={salad.name}
              image={salad.image}
              price={salad.price}
              id={salad.id}
              active={salad.active}
            />
          </div>
        ))}
      </div>
    </main>
  );
};

export default Main;
