import { motion } from "framer-motion";
import Image from "next/image";
import { useRouter } from "next/router";
import Header from "../../components/Header";
import book from "../../types/bookTypes";
import requests from "../../utils/requests";

interface BookProps {
  books: {
    items: [book];
  };
  routertitle: string;
}

const Index: React.FC<BookProps> = ({ books, routertitle }) => {
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
              className={`mr-3 cursor-pointer font-lobster text-text hover:underline ${
                routertitle === title ? "underline" : ""
              }`}
              onClick={() => router.push(`/books/?volume=${key}`)}
            >
              {title}
            </h2>
          ))}
        </motion.div>
        <motion.div
          initial={{ x: 100 }}
          animate={{ x: 0 }}
          className="relative bottom-0 z-20 flex flex-wrap w-1/2 mx-auto text-text"
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
              {book.volumeInfo.imageLinks?.thumbnail && (
                <a
                  target="_blank"
                  rel="noreferrer"
                  href={book.volumeInfo.previewLink}
                  className="relative w-[150px] h-[225px]"
                >
                  <motion.div className="flex shadow-xl cursor-pointer">
                    <Image
                      layout="fill"
                      objectFit="contain"
                      src={book.volumeInfo.imageLinks?.thumbnail}
                      alt={book.volumeInfo.title}
                    />
                  </motion.div>
                </a>
              )}
              <h2 className="w-[150px] font-Poppins  cursor-pointer text-text text-center text-lg">
                {book?.volumeInfo.title.slice(0, 25)}{" "}
                {book?.volumeInfo.title.length > 25 ? "..." : ""}
              </h2>
              <h2 className="w-[150px] font-extrabold font-lobster cursor-pointer text-text text-center text-lg">
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

  const routertitle = requests[volume].title;

  const URL = `https://www.googleapis.com/books/v1${requests[volume]?.url}&maxResults=20`;

  const request = await fetch(URL).then((res) => res.json());

  return {
    props: {
      books: request,
      volume,
      routertitle,
    },
  };
}
