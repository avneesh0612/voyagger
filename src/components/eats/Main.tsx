import React from "react";
import { Category, Salad } from "../../types/itemTypes";
import FoodItem from "../FoodItem";
import OfferProduct from "../OfferProduct";

interface MainProps {
  salads: [Salad];
  categories: [Category];
  categoryRoute: string;
}

const Main: React.FC<MainProps> = ({ salads, categories, categoryRoute }) => {
  return (
    <main className="md:w-[65vw] w-full">
      <div className="flex overflow-scroll md:w-[67vw] hidescrollbar mx-10 h-48 space-x-6  pr-14">
        {categories.map((category: Category) => (
          <div key={category.id}>
            <FoodItem
              image={category.image}
              name={category.name}
              categoryRoute={categoryRoute}
            />
          </div>
        ))}
      </div>
      <div>
        <div className="md:w-[64vw] mx-5 flex justify-between">
          <h2 className="text-xl font-semibold">Best offers</h2>
        </div>
      </div>
      <div className="flex flex-wrap mt-5 mb-5 space-y-6 md:flex-nowrap md:space-y-0 justify-evenly md:mb-0">
        {salads.map((salad: Salad) => (
          <div key={salad.id}>
            <OfferProduct
              name={salad.name}
              image={salad.image}
              price={salad.price}
              id={salad.id}
              active={salad.active}
              category={salad.category}
              description={salad.description}
            />
          </div>
        ))}
      </div>
    </main>
  );
};

export default Main;
