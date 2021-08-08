import { groupBy } from "lodash";
import moment from "moment";
import Image from "next/image";
import Currency from "react-currency-formatter";

interface OrderProps {
  id: string;
  amount: number;
  amountShipping: number;
  images: [string];
  timestamp: number;
}

const Order: React.FC<OrderProps> = ({
  id,
  amount,
  amountShipping,
  images,
  timestamp,
}) => {
  const groupedImages = Object.values(groupBy(images));

  return (
    <div className="">
      <div className="block sm:flex items-center sm:space-x-10 p-5 m-5 mt-5 text-[#023047] text-sm  mb-2 pb-1 backdrop-filter backdrop-blur-2xl bg-white bg-opacity-25 shadow-xl rounded-lg pl-4">
        <div className="text-3xl">
          <p className="text-xs font-bold">ORDER PLACED</p>
          <p>{moment.unix(timestamp).format("MM/DD/YYYY")}</p>
        </div>

        <div>
          <p className="text-xs font-bold">TOTAL</p>
          <p>
            <span className="font-bold">
              <Currency quantity={amount} currency="INR" />
            </span>{" "}
            (Including <Currency quantity={amountShipping} currency="INR" /> for{" "}
            {""}
            <span className="italic">Delivery</span>)
          </p>
        </div>

        <p className="absolute self-end flex-1 text-sm text-right text-blue-500 top-3 right-3 sm:static whitespace-nowrap sm:text-xl">
          {images.length} {""}
          {images.length === 1 ? "item" : "items"}
        </p>

        <p className="text-xs truncate w-100 sm:absolute top-3 right-2 sm:w-72 whitespace-nowrap">
          ORDER #{id}
        </p>
      </div>

      <div className="p-5 sm:p-10">
        <div className="flex space-x-6 overflow-x-auto">
          {groupedImages.map((group, i) => (
            <div key={i} className="relative">
              <div className="relative w-20 h-20 sm:h-32 sm:w-32">
                <Image
                  src={group[0]}
                  alt="image"
                  layout="fill"
                  objectFit="contain"
                />
              </div>
              {group.length > 1 && (
                <div className="absolute p-1 text-2xl font-bold text-center text-black bg-white rounded shadow bg-opacity-60 bottom-2 right-2 backdrop-filter backdrop-blur-2xl">
                  &times; {group.length}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Order;
