interface book {
  volumeInfo: {
    imageLinks: {
      thumbnail: string;
    };
    previewLink: string;
    title: string;
    authors: [string];
  };
  id: string;
}
export default book;
