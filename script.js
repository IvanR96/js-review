const data = [
  {
    id: 1,
    title: "The Lord of the Rings",
    publicationDate: "1954-07-29",
    author: "J. R. R. Tolkien",
    genres: [
      "fantasy",
      "high-fantasy",
      "adventure",
      "fiction",
      "novels",
      "literature",
    ],
    hasMovieAdaptation: true,
    pages: 1216,
    translations: {
      spanish: "El señor de los anillos",
      chinese: "魔戒",
      french: "Le Seigneur des anneaux",
    },
    reviews: {
      goodreads: {
        rating: 4.52,
        ratingsCount: 630994,
        reviewsCount: 13417,
      },
      librarything: {
        rating: 4.53,
        ratingsCount: 47166,
        reviewsCount: 452,
      },
    },
  },
  {
    id: 2,
    title: "The Cyberiad",
    publicationDate: "1965-01-01",
    author: "Stanislaw Lem",
    genres: [
      "science fiction",
      "humor",
      "speculative fiction",
      "short stories",
      "fantasy",
    ],
    hasMovieAdaptation: false,
    pages: 295,
    translations: {},
    reviews: {
      goodreads: {
        rating: 4.16,
        ratingsCount: 11663,
        reviewsCount: 812,
      },
      librarything: {
        rating: 4.13,
        ratingsCount: 2434,
        reviewsCount: 0,
      },
    },
  },
  {
    id: 3,
    title: "Dune",
    publicationDate: "1965-01-01",
    author: "Frank Herbert",
    genres: ["science fiction", "novel", "adventure"],
    hasMovieAdaptation: true,
    pages: 658,
    translations: {
      spanish: "",
    },
    reviews: {
      goodreads: {
        rating: 4.25,
        ratingsCount: 1142893,
        reviewsCount: 49701,
      },
    },
  },
  {
    id: 4,
    title: "Harry Potter and the Philosopher's Stone",
    publicationDate: "1997-06-26",
    author: "J. K. Rowling",
    genres: ["fantasy", "adventure"],
    hasMovieAdaptation: true,
    pages: 223,
    translations: {
      spanish: "Harry Potter y la piedra filosofal",
      korean: "해리 포터와 마법사의 돌",
      bengali: "হ্যারি পটার এন্ড দ্য ফিলোসফার্স স্টোন",
      portuguese: "Harry Potter e a Pedra Filosofal",
    },
    reviews: {
      goodreads: {
        rating: 4.47,
        ratingsCount: 8910059,
        reviewsCount: 140625,
      },
      librarything: {
        rating: 4.29,
        ratingsCount: 120941,
        reviewsCount: 1960,
      },
    },
  },
  {
    id: 5,
    title: "A Game of Thrones",
    publicationDate: "1996-08-01",
    author: "George R. R. Martin",
    genres: ["fantasy", "high-fantasy", "novel", "fantasy fiction"],
    hasMovieAdaptation: true,
    pages: 835,
    translations: {
      korean: "왕좌의 게임",
      polish: "Gra o tron",
      portuguese: "A Guerra dos Tronos",
      spanish: "Juego de tronos",
    },
    reviews: {
      goodreads: {
        rating: 4.44,
        ratingsCount: 2295233,
        reviewsCount: 59058,
      },
      librarything: {
        rating: 4.36,
        ratingsCount: 38358,
        reviewsCount: 1095,
      },
    },
  },
];

function getBooks() {
  return data;
}

function getBook(id) {
  return data.find((d) => d.id === id);
}

//DESTRUCTURING
/*
const book = getBook(1);
book;

const { title, author, pages, publicationDate, genres, hasMovieAdaptation } =
  book;

console.log(author, title);

// DESTRUCTURING WITH ARRAYS

//const primaryGenre = genres[0];
//const secondaryGenre = genres[1];

const [primaryGenre, secondaryGenre, ...otherGenres] = genres;

console.log(primaryGenre, secondaryGenre, otherGenres);

// SPREAD OPERATOR
const newGenres = [...genres, "epic fantasy"];
newGenres;

//OVERRIDE VALUES IN ARRAYS WITH SPREAD OPERATOR
const updatedBook = {
  ...book,
  moviePublicationDate: "2001-12-19",
  rottenRating: 4.53,
}; // new property added

updatedBook;

// TEMPLATE LITERALS

const summary = `${title} is a book that is ${pages} pages long, not for the feint of heart.`;
summary;

// TERNARIES

const pagesRange = pages > 1000 ? "over a thousand" : "less than 1000";

pagesRange;

console.log(`The book has ${pagesRange} pages`);

// ARROW FUNCTIONS
// arrow function example
const getYear = (str) => str.split("-")[0];

console.log(getYear(publicationDate));

// SHORT CIRCUITING AND LOGICAL OPERATORS &&, ||, ??

//short circuit example
console.log(true && "this is true");
console.log(false && "this wont work!!");
console.log(hasMovieAdaptation && "This book has a movie!");

// falsy: 0, '', null
console.log("ivan" && "there is a string here");

// OR OPERATOR SHORT CIRCUITS WHEN FIRST OPERATOR IS TRUE
console.log(true || "Some string");
console.log(false || "Some string");

console.log(book.translations.spanish);

const spanishTranslation = book.translations.spanish || "NOT TRANSLATED";
console.log(spanishTranslation);

console.log(book.reviews.librarything.reviewsCount);

const countWrong =
  book.reviews.librarything.reviewsCount ||
  "This book contains no reviews yet :(";

console.log(countWrong);

//CHAINING OPERATOR

function getTotalReviewCount(book) {
  const goodreads = book.reviews?.goodreads?.reviewsCount;
  const librarything = book.reviews.librarything?.reviewsCount ?? 0;
  return goodreads + librarything;
}

console.log(getTotalReviewCount(book));
*/

// ARRAY MAP METHOD
const books = getBooks();

const x = [1, 2, 3, 4, 5].map((element) => element * 2);

console.log(x);

const author = books.map((book) => book.author);

console.log(author);
