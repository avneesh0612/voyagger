import "../styles/globals.css";
import { UserProvider } from "@auth0/nextjs-auth0";
import { NextSeo } from "next-seo";
import { AppProps } from "next/app";
import { Provider } from "react-redux";
import { store } from "../app/store";
import StorageService from "../services/StorageService";
import { hydrate } from "../slices/basketSlice";
import NextNProgress from "nextjs-progressbar";
import { Toaster } from "react-hot-toast";

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
          description="This example uses more of the available config options."
          //   canonical="https://www.canonical.ie/"
          //   openGraph={{
          //     url: "https://www.url.ie/a",
          //     title: "Open Graph Title",
          //     description: "Open Graph Description",
          //     images: [
          //       {
          //         url: "https://www.example.ie/og-image-01.jpg",
          //         width: 800,
          //         height: 600,
          //         alt: "Og Image Alt",
          //       },
          //       {
          //         url: "https://www.example.ie/og-image-02.jpg",
          //         width: 900,
          //         height: 800,
          //         alt: "Og Image Alt Second",
          //       },
          //       { url: "https://www.example.ie/og-image-03.jpg" },
          //       { url: "https://www.example.ie/og-image-04.jpg" },
          //     ],
          //     site_name: "SiteName",
          //   }}
          //   twitter={{
          //     handle: "@handle",
          //     site: "@site",
          //     cardType: "summary_large_image",
          //   }}
        />
        <NextNProgress color="#DC602E" height={4} />
        <Toaster />
        <Component {...pageProps} />
      </Provider>
    </UserProvider>
  );
};

export default MyApp;
