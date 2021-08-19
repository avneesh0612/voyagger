import React from "react";
import { Medicines } from "../../types/itemTypes";
import OfferProduct from "./OfferProduct";

interface MainProps {
  medicines: [Medicines];
}

const Main: React.FC<MainProps> = ({ medicines }) => {
  return (
    <main className="md:w-[65vw] w-full">
      <div className="flex items-center justify-evenly"></div>

      <div>
        <div className="md:w-[64vw] mx-5 flex justify-between">
          <h2 className="text-xl font-semibold">Best offers</h2>
        </div>
      </div>
      <div className="flex flex-wrap mt-5 mb-5 space-y-6 md:w-[50vw] mx-auto space-x-5 md:space-y-3 justify-evenly items-center  md:mb-0">
        {medicines.map((medicine: Medicines) => (
          <div key={medicine.id}>
            <OfferProduct
              name={medicine.name}
              image={medicine.image}
              price={medicine.price}
              id={medicine.id}
            />
          </div>
        ))}
      </div>
    </main>
  );
};

export default Main;
