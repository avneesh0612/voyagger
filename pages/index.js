import Header from "../components/Header";
import Items from "../components/Items";
import { withPageAuthRequired } from "@auth0/nextjs-auth0";

export default function Home({ user }) {
  return (
    <div>
      <Header user={user} />
      <div className="flex flex-col w-screen justify-evenly">
        <div className="flex w-3/5 mx-auto my-5 justify-evenly">
          <Items
            image="https://media.baamboozle.com/uploads/images/67836/1600826082_888203"
            text="Travel"
            href="travel"
          />
          <Items
            image="https://res.cloudinary.com/dssvrf9oz/image/upload/v1627986059/ae5fdac3b3f6840c1efcc225d53ee0-unscreen_k7zhvz.gif"
            text="Send something"
            href="parcel"
          />
        </div>
        <div className="flex w-3/5 mx-auto my-5 justify-evenly">
          <Items
            image="https://res.cloudinary.com/dssvrf9oz/image/upload/v1627995535/701c4f418e5d1bb0b278aea50296c5-unscreen_grwuqi.gif"
            text="Order food"
            href="food"
          />
          <Items
            image="https://res.cloudinary.com/dssvrf9oz/image/upload/v1627986581/https-3A-2F-2Fbucketeer-e05bbc-unscreen_bcuzxf.gif"
            text="Order medicines"
            href="medicine"
            repeat
          />
        </div>
      </div>
    </div>
  );
}

export const getServerSideProps = withPageAuthRequired();
