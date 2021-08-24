import { motion } from "framer-motion";
import toast from "react-hot-toast";
import { db } from "../../../firebase";
import Header from "../../components/Header";

interface ParcelProps {
  parcel: {
    pickupaddress: string;
    zip: string;
    recipientphone: string;
    recipientsaddress: string;
    usermail: string;
    username: string;
    weight: string;
    id: string;
  };
}

const parcelTrack: React.FC<ParcelProps> = ({ parcel }) => {
  const CopyLink = () => {
    navigator.clipboard.writeText(
      `http://Voyaggerr.vercel.app/parcel/${parcel.id}`
    );
    toast.success("copied link to clipboard");
  };

  return (
    <div>
      <Header />
      <div className="flex w-screen h-[80vh] justify-center items-center">
        <motion.div
          initial={{ y: -50 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center w-4/5 py-5 pl-4 m-5 space-y-5 md:space-y-0 mx-auto mb-2 font-medium text-center bg-white bg-opacity-25 rounded-lg shadow-xl justify-evenly md:flex-row md:space-x-5 backdrop-filter backdrop-blur-2xl"
        >
          <div className="flex flex-col items-center md:items-start">
            <h3>Order parcel.ID</h3>
            <a href={`/parcel/${parcel.id}`} className="text-gray-500 ">
              #{parcel.id}
            </a>
          </div>
          <div className="flex flex-col items-center md:items-start">
            <h3>Status</h3>
            <h3 className="text-green-600">Order Placed</h3>
          </div>
          <div className="flex flex-col items-center md:items-start">
            <h3>Zip Code</h3>
            <h3 className="text-red-600">{parcel.zip}</h3>
          </div>
          <div className="flex flex-col items-center md:items-start">
            <div className="flex items-center space-x-2 md:items-start ">
              <h3>Pickup Address: </h3>
              <h3>{parcel.pickupaddress}</h3>
            </div>
            <div className="flex items-center space-x-2 md:items-start ">
              <h3>Recipient&lsquo;s Phone: </h3>
              <h3>{parcel.recipientphone}</h3>
            </div>
            <div className="flex items-center space-x-2 md:items-start ">
              <h3>Recipient&lsquo;s address: </h3>
              <h3>{parcel.recipientsaddress}</h3>
            </div>
            <div className="flex items-center space-x-2 md:items-start ">
              <h3>Weight: </h3>
              <h3>{parcel.weight}</h3>
            </div>
          </div>
          <button
            className="font-medium text-center text-lg"
            onClick={CopyLink}
          >
            Share with someone
          </button>
        </motion.div>
      </div>
    </div>
  );
};

export default parcelTrack;

export async function getServerSideProps(context: any) {
  const id = context.query.id;
  const parcelref = db.collection("parcels").doc(id);

  const parcelRes = await parcelref.get();

  const parcel = {
    id: parcelRes.id,
    ...parcelRes.data(),
  };

  return {
    props: {
      parcel,
    },
  };
}
