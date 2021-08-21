import { UserProvider } from "@auth0/nextjs-auth0";
import { NextSeo } from "next-seo";
import { AppProps } from "next/app";
import Head from "next/head";
import NextNProgress from "nextjs-progressbar";
import { Toaster } from "react-hot-toast";
import { Provider } from "react-redux";
import { store } from "../app/store";
import StorageService from "../services/StorageService";
import { hydrate } from "../slices/basketSlice";
import "../styles/globals.css";

const MyApp = ({ Component, pageProps }: AppProps) => {
  store.subscribe(() => {
    StorageService.set("basket", JSON.stringify(store.getState().basket));
  });

  let basket = StorageService.get("basket");
  basket = basket ? JSON.parse(basket) : { items: [] };
  store.dispatch(hydrate(basket));

  return (
    <UserProvider>
      <Provider store={store}>
        <NextSeo
          title="Voyager"
          description="Connecting people, Changing Lives"
          openGraph={{
            url: "https://voyagerr.vercel.app",
            title: "Voyager",
            description: "Voyager",
            images: [
              {
                url: "https://res.cloudinary.com/dssvrf9oz/image/upload/v1629552406/Copy_of_Connecting_people_Changing_lives_bvbr3d.png",
                width: 800,
                height: 700,
                alt: "Voyager",
              },
            ],
            site_name: "Voyager",
          }}
          twitter={{
            handle: "@avneesh0612",
            site: "https://voyagerr.vercel.app/",
            cardType: "summary_large_image",
          }}
        />
        <Head>
          <link rel="icon" href="/favicon.svg" />
        </Head>
        <NextNProgress color="#DC602E" height={4} />
        <Toaster />
        <Component {...pageProps} />
      </Provider>
    </UserProvider>
  );
};

export default MyApp;
