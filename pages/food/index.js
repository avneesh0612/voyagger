import Main from "../../components/eats/Main";
import Cart from "../../components/eats/Cart";
import Header from "../../components/Header";
import { withPageAuthRequired } from "@auth0/nextjs-auth0";

export default function Home({ user }) {
  return (
    <div className="flex flex-col min-h-screen md:flex-row min-w-screen">
      <div>
        <Header user={user} />
        <Main />
      </div>
      <Cart />
    </div>
  );
}

export const getServerSideProps = withPageAuthRequired();
