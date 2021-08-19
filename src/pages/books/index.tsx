import { useRouter } from "next/router";
import Image from "next/image";
import Header from "../../components/Header";
import requests from "../../utils/requests";
import Link from "next/link";
import { motion } from "framer-motion";
import book from "../../types/bookTypes";

interface BookProps {
  books: {
    items: [book];
  };
}

const Index: React.FC<BookProps> = ({ books }) => {
  const router = useRouter();

  return (
    <div className="w-screen ">
      <Header />
      <div className="flex">
        <motion.div
          initial={{ x: -100 }}
          animate={{ x: 0 }}
          className="flex flex-col ml-3 space-y-5 text-xl text-text"
        >
          {Object.entries(requests).map(([key, { title }]) => (
            <h2
              key={key}
              className="mr-3 font-lobster text-text  cursor-pointer hover:underline"
              onClick={() => router.push(`/books/?volume=${key}`)}
            >
              {title}
            </h2>
          ))}
        </motion.div>
        <motion.div
          initial={{ x: 100 }}
          animate={{ x: 0 }}
          className="relative w-1/2 bottom-0 z-20 flex mx-auto text-text flex-wrap"
        >
          {books.items.map((book: book) => (
            <motion.div
              whileHover={{
                scale: [1, 1.1, 1.05],
                zIndex: 1,
                transition: {
                  duration: 1,
                },
              }}
              key={book.id}
              className="flex flex-col m-5"
            >
              <Link href={book.volumeInfo?.previewLink} passHref>
                {book.volumeInfo.imageLinks?.thumbnail && (
                  <motion.div className="flex  shadow-xl cursor-pointer">
                    <a target="_blank" className="relative w-[150px] h-[225px]">
                      <Image
                        layout="fill"
                        objectFit="contain"
                        src={book.volumeInfo.imageLinks?.thumbnail}
                        alt={book.volumeInfo.title}
                      />
                    </a>
                  </motion.div>
                )}
              </Link>
              <h2 className="w-[150px]   cursor-pointer text-text text-center text-lg">
                {book?.volumeInfo.title.slice(0, 25)}{" "}
                {book?.volumeInfo.title.length > 25 ? "..." : ""}
              </h2>
              <h2 className="w-[150px] font-extrabold font-dancing cursor-pointer text-text text-center text-lg">
                {book?.volumeInfo.authors}{" "}
              </h2>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Index;

export async function getServerSideProps(context) {
  let volume = context.query.volume;

  if (!volume) {
    volume = "fetchFiction";
  }

  const URL = `https://www.googleapis.com/books/v1${requests[volume]?.url}&maxResults=20`;

  const request = await fetch(URL).then((res) => res.json());

  return {
    props: {
      books: request,
      volume,
    },
  };
}
