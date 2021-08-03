import Head from "next/head";
import Main from "../../components/eats/Main";
import Cart from "../../components/eats/Cart";

export default function Home() {
  return (
    <div className="flex md:flex-row flex-col min-w-screen min-h-screen !bg-no-repeat !bg-cover">
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.png" />
      </Head>

      <Main />

      <Cart />
    </div>
  );
}
