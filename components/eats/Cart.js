import CartItem from "./CartItem";
import { LocationMarkerIcon } from "@heroicons/react/solid";
import Image from "next/image";

function Cart() {
  return (
    <div className="absolute right-0 z-10 flex-col hidden w-2/6 h-full bg-white bg-opacity-50 rounded-br-none md:flex backdrop-filter backdrop-blur-sm rounded-3xl ring-1 ring-white">
      <div className="border-b-2 border-white">
        <div className="flex p-8 bg-white bg-opacity-60 rounded-l-3xl ring-1 ring-white">
          <Image
            width={64}
            height={64}
            objectFit="contain"
            src="https://res.cloudinary.com/dssvrf9oz/image/upload/v1624626137/michael-dam-mEZ3PoFGs_k-unsplash_fe709q.jpg"
            className="object-contain w-16 h-16 rounded-full"
            alt="avatar"
          />
          <h1 className="text-left ml-20 !w-10 font-semibold text-xl">
            Emmanuela Morley
          </h1>
        </div>
        <div className="flex items-center justify-between m-4 my-3">
          <h2 className="text-2xl font-semibold">My order</h2>
          <h2 className="text-xl font-semibold">Edit</h2>
        </div>
        <div>
          <CartItem
            price={15.0}
            quant={1}
            name="Ceaser Salad"
            image="https://res.cloudinary.com/dssvrf9oz/image/upload/v1624633837/image-removebg-preview_mxb2vu.png"
          />
          <CartItem
            price={24.0}
            quant={2}
            name="Coleslaw"
            image="https://res.cloudinary.com/dssvrf9oz/image/upload/v1624680422/image-removebg-preview_1_ukql6s.png"
          />
          <CartItem
            price={20.0}
            quant={2}
            name="Cobb salad"
            image="https://res.cloudinary.com/dssvrf9oz/image/upload/v1624680573/image-removebg-preview_2_ficyc1.png"
          />
          <CartItem
            price={14.0}
            quant={1}
            name="Chilean Salad"
            image="https://res.cloudinary.com/dssvrf9oz/image/upload/v1624680574/image-removebg-preview_3_vkyado.png"
          />
        </div>
        <div className="flex items-center justify-between pb-3 m-10 mt-2 mb-2">
          <h2 className="text-2xl font-semibold">Total</h2>
          <h2 className="text-xl font-semibold">$73.00</h2>
        </div>
      </div>
      <div className="flex items-center justify-between m-10 mt-2 mb-1">
        <h2 className="text-2xl font-semibold">Address</h2>
        <h2 className="text-xl font-semibold">Edit</h2>
      </div>
      <div className="flex m-10 mt-2 mb-2">
        <LocationMarkerIcon className="text-[#F24A51] mt-2 h-8 w-8" />
        <div className="flex flex-col ml-4 text-lg font-semibold">
          <p>Po Box 2192</p>
          <p>West New York, New</p>
          <p>Jersey(NJ), 07093</p>
        </div>
      </div>
      <button className="w-10/12 py-2 mb-5 ml-10 text-white rounded-full cursor-pointer green-gradient">
        Checkout
      </button>
    </div>
  );
}

export default Cart;
