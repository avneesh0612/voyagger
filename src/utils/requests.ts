const requests = {
  fetchFiction: {
    title: "Fiction",
    url: `/volumes?q=fiction&key=${process.env.BOOK_API_KEY}`,
  },

  fetchScifi: {
    title: "Sci-Fi",
    url: `/volumes?q=sci-fi&key=${process.env.BOOK_API_KEY}`,
  },
  fetchreligion: {
    title: "Religion & Spirituality",
    url: `/volumes?q=Religion&key=${process.env.BOOK_API_KEY}`,
  },

  fetchMysteries: {
    title: "Mysteries",
    url: `/volumes?q=mysteries&key=${process.env.BOOK_API_KEY}`,
  },

  fetchRomance: {
    title: "Romance",
    url: `/volumes?q=romaces&key=${process.env.BOOK_API_KEY}`,
  },

  fetchCrime: {
    title: "True Crime",
    url: `/volumes?q=crime&key=${process.env.BOOK_API_KEY}`,
  },

  fetchMystery: {
    title: "Mystery",
    url: `/volumes?q=selfdevelopment&key=${process.env.BOOK_API_KEY}`,
  },

  fetchBiographies: {
    title: "Biographies and Memoirs",
    url: `/volumes?q=biographies&key=${process.env.BOOK_API_KEY}`,
  },

  fetchHistory: {
    title: "History",
    url: `/volumes?q=history&key=${process.env.BOOK_API_KEY}`,
  },
};

export default requests;

// Self-Improvement
// Personal Growth
// Home & Garden
// Gardening
// Mystery, Thriller & Crime Fiction
// Suspense
// True Crime
// Science Fiction & Fantasy
// Young Adult
// Dystopian
// Paranormal, Occult & Supernatural
// Romance
// Historical Fiction
// Science & Mathematics
// History
// Study Aids & Test Prep
// Business
// Small Business & Entrepreneurs
// All categories
