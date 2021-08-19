import { getSession, withPageAuthRequired } from "@auth0/nextjs-auth0/";
import { PlusIcon } from "@heroicons/react/solid";
import { NextSeo } from "next-seo";
import Image from "next/image";
import Currency from "react-currency-formatter";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { db } from "../../../firebase";
import Cart from "../../components/Cart";
import { addToBasket } from "../../slices/basketSlice";
import { Salad } from "../../types/itemTypes";
import { user } from "../../types/userType";

interface ProductProps {
  currentProduct: Salad;
  user: user;
  dbuser: user;
}

const Product: React.FC<ProductProps> = ({ currentProduct, user, dbuser }) => {
  const name = currentProduct.name;
  const price = currentProduct.price;
  const image = currentProduct.image;
  const active = currentProduct.active;
  const id = currentProduct.id;
  const description = currentProduct.description;
  const dispatch = useDispatch();

  const addItemToFoodbasket = () => {
    const product = {
      name,
      price,
      image,
      active,
      id,
      description,
    };

    dispatch(addToBasket(product));
    toast.success("Added item to basket", {
      style: {
        borderRadius: "100px",
      },
    });
  };

  return (
    <div className="flex flex-col min-h-screen md:flex-row min-w-screen">
      <NextSeo title={`${name} | Voyager`} />
      <div className="flex items-center justify-center w-full md:w-4/6">
        <div className="flex flex-col items-center -mt-2 w-96">
          <div className="z-20 bg-white rounded-full drop-shadow-xl ">
            <Image
              height={200}
              width={200}
              objectFit="contain"
              src={image}
              alt="salad"
              className="z-10 object-contain rounded-full w-60 h-60"
            />
          </div>
          <div className="p-5 pt-20 -mt-16 bg-white w-80 rounded-3xl">
            <h3 className="text-lg font-semibold text-center">{name}</h3>
            <h3>{description}</h3>
            <div className="flex justify-between">
              <Currency quantity={price} currency="INR" />
              <PlusIcon
                onClick={addItemToFoodbasket}
                className={`h-8 w-8 rounded-full cursor-pointer ${
                  active ? "bg-white text-black" : "green-gradient text-white"
                }`}
              />
            </div>
          </div>
        </div>
      </div>
      <Cart ssruser={user} dbuser={dbuser} />
    </div>
  );
};

export default Product;

export const getServerSideProps = withPageAuthRequired({
  async getServerSideProps(context: any) {
    const categoryId = context.query.category;
    const session = getSession(context.req, context.res);

    const userref = db.collection("users").doc(session?.user.email);

    const userRes = await userref.get();

    const dbuser = {
      id: userRes.id,
      ...userRes.data(),
    };

    const pathId = context.query.id;
    const ref = db
      .collection("products")
      .doc("food")
      .collection(categoryId)
      .doc(context.query.id);

    const productRes = await ref.get();

    const currentProduct = {
      id: productRes.id,
      ...productRes.data(),
    };

    const allcategories = await db
      .collection("products")
      .doc("food")
      .collection("categories")
      .get();

    return { props: { currentProduct, pathId, categoryId, dbuser } };
  },
});
