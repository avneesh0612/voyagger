import { ArrowRightIcon, SearchIcon } from "@heroicons/react/outline";
import FoodItem from "./FoodItem";
import OfferProduct from "./OfferProduct";

function Main() {
  return (
    <main className="md:w-[65vw] w-full md:pl-10  md:ml-20">
      <div className="md:w-[55vw] w-5/6 flex ring-1 ring-white backdrop-filter backdrop-blur-3xl bg-white  h-12 rounded-full  bg-opacity-40  m-5 mx-auto items-center justify-center">
        <input
          className="bg-transparent outline-none w-full pl-10 text-gray-200 placeholder-gray-200 caret-gray-200"
          placeholder="Search"
        />
        <SearchIcon className="h-12 backdrop-filter backdrop-blur-2xl w-12 bg-white bg-opacity-40 p-3 rounded-full" />
      </div>

      <div className="flex overflow-scroll md:w-[67vw] hidescrollbar mx-10 h-48 space-x-6">
        <FoodItem
          image="https://res.cloudinary.com/dssvrf9oz/image/upload/v1624629913/images-removebg-preview_1_gafetc.png"
          name="Pizza"
        />
        <FoodItem
          image="https://res.cloudinary.com/dssvrf9oz/image/upload/v1624629095/113-1138371_animated-sushi-png-clipart-sushi-png-transparent-png-removebg-preview_epiwfy.png"
          name="Sushi"
        />
        <FoodItem
          image="https://res.cloudinary.com/dssvrf9oz/image/upload/v1624631322/Chicken_bk0ok0.png"
          name="Meat"
        />
        <FoodItem
          active
          image="https://res.cloudinary.com/dssvrf9oz/image/upload/v1624629555/unnamed-removebg-preview_ctc9oo.png"
          name="Salad"
        />
        <FoodItem
          image="https://res.cloudinary.com/dssvrf9oz/image/upload/v1624629677/flat-japanese-dango-icon-traditional-asian-dessert-hand-drawn-cartoon-illustration-isolated-vector-sign-white-background-three-163955813-removebg-preview_bxs75y.png"
          name="Dango"
        />
        <FoodItem
          image="https://res.cloudinary.com/dssvrf9oz/image/upload/v1624629796/images-removebg-preview_idtvcx.png"
          name="Donut"
        />
      </div>
      <div>
        <div className="md:w-[64vw] mx-5 flex justify-between">
          <h2 className="text-xl font-semibold">Best offers</h2>
          <div className="flex items-center">
            <h2 className="text-xl font-semibold">View All</h2>
            <ArrowRightIcon className="w-6 h-6 ml-1" />
          </div>
        </div>
      </div>
      <div className="mt-5 flex flex-wrap md:flex-nowrap justify-evenly mb-5 md:mb-0">
        <OfferProduct
          name="Caesar Salad"
          image="https://res.cloudinary.com/dssvrf9oz/image/upload/v1624633837/image-removebg-preview_mxb2vu.png"
          price={15.0}
          active
        />
        <OfferProduct
          name="Coleslaw"
          image="https://res.cloudinary.com/dssvrf9oz/image/upload/v1624680422/image-removebg-preview_1_ukql6s.png"
          price={12.0}
        />
        <OfferProduct
          name="Cobb salad"
          image="https://res.cloudinary.com/dssvrf9oz/image/upload/v1624680573/image-removebg-preview_2_ficyc1.png"
          price={10.0}
        />
        <OfferProduct
          name="Chilean Salad"
          image="https://res.cloudinary.com/dssvrf9oz/image/upload/v1624680574/image-removebg-preview_3_vkyado.png"
          price={14.0}
        />
      </div>
    </main>
  );
}

export default Main;
