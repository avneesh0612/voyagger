import { motion } from "framer-motion";
import toast from "react-hot-toast";

interface OrderProps {
  pickupaddress: string;
  zip: string;
  recipientphone: string;
  recipientsaddress: string;
  usermail: string;
  username: string;
  weight: string;
  id: string;
}

const Order: React.FC<OrderProps> = ({
  pickupaddress,
  recipientphone,
  zip,
  recipientsaddress,
  weight,
  id,
}) => {
  const CopyLink = () => {
    navigator.clipboard.writeText(`http://Voyaggerr.vercel.app/parcel/${id}`);
    toast.success("copied link to clipboard");
  };

  return (
    <motion.div
      initial={{ x: 50 }}
      animate={{ x: 0 }}
      transition={{ duration: 1 }}
      className="flex flex-col items-center w-4/5 py-5 pl-4 m-5 mx-auto mb-2 space-y-5 font-medium text-center bg-white bg-opacity-25 rounded-lg shadow-xl md:space-y-0 justify-evenly md:flex-row md:space-x-5 backdrop-filter backdrop-blur-2xl"
    >
      <div className="flex flex-col items-center md:items-start">
        <h3>Order ID</h3>
        <a href={`/parcel/${id}`} className="text-gray-500">
          #{id}
        </a>
      </div>
      <div className="flex flex-col items-center md:items-start">
        <h3>Status</h3>
        <h3 className="text-green-600">Order Placed</h3>
      </div>
      <div className="flex flex-col items-center md:items-start">
        <h3>Zip Code</h3>
        <h3 className="text-red-600">{zip}</h3>
      </div>
      <div className="flex flex-col items-center md:items-start">
        <div className="flex items-center space-x-2 md:items-start ">
          <h3>Pickup Address: </h3>
          <h3>{pickupaddress}</h3>
        </div>
        <div className="flex items-center space-x-2 md:items-start ">
          <h3>Recipient&lsquo;s Phone: </h3>
          <h3>{recipientphone}</h3>
        </div>
        <div className="flex items-center space-x-2 md:items-start ">
          <h3>Recipient&lsquo;s address: </h3>
          <h3>{recipientsaddress}</h3>
        </div>
        <div className="flex items-center space-x-2 md:items-start ">
          <h3>Weight: </h3>
          <h3>{weight}</h3>
        </div>
      </div>

      <button className="text-lg font-medium text-center" onClick={CopyLink}>
        Share with someone
      </button>
    </motion.div>
  );
};

export default Order;
