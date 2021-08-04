import Main from "../../components/eats/Main";
import Cart from "../../components/eats/Cart";
import Header from "../../components/Header";
import { withPageAuthRequired } from "@auth0/nextjs-auth0";
4;

interface HomeProps {
  user: object;
}

const Home: React.FC<HomeProps> = ({ user }) => {
  return (
    <div className="flex flex-col min-h-screen md:flex-row min-w-screen">
      <div>
        <Header ssruser={user} />
        <Main />
      </div>
      <Cart />
    </div>
  );
};

export default Home;

export const getServerSideProps = withPageAuthRequired();
