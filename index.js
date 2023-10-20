const books = [
  {
    name: "To Kill a Mockingbird",
    authorFirst: "Harper",
    authorLast: "Lee",
    publishDate: 1960,
    genre: ["mystery", "historical", "fiction"],
  },
  {
    name: "The Great Gatsby",
    authorFirst: "F. Scott",
    authorLast: "Fitzgerald",
    publishDate: 1925,
    genre: ["mystery", "historical", "fiction"],
  },
  {
    name: "The Hobbit",
    authorFirst: "JRR",
    authorLast: "Tolkien",
    publishDate: 1937,
    genre: ["fantasy", "fiction"],
  },
  {
    name: "Harry Potter and the Deathly Hallows",
    authorFirst: "JK",
    authorLast: "Rowling",
    publishDate: 1997,
    genre: ["fantasy", , "fiction"],
  },
  {
    name: "Ulysses",
    authorFirst: "James",
    authorLast: "Joyce",
    publishDate: 1918,
    genre: ["historical", "non-fiction"],
  },
  {
    name: "War and Peace",
    authorFirst: "Leo",
    authorLast: "Tolstoy",
    publishDate: 1867,
    genre: ["historical", "fiction"],
  },
  {
    name: "Pride and Prejudice",
    authorFirst: "Jane",
    authorLast: "Austen",
    publishDate: 1813,
    genre: ["fiction"],
  },
  {
    name: "The Catcher in the Rye",
    authorFirst: "JD",
    authorLast: "Salinger",
    publishDate: 1951,
    genre: ["fiction"],
  },
  {
    name: "Great Expectations",
    authorFirst: "Charles",
    authorLast: "Dickens",
    publishDate: 1861,
    genre: ["historical", "fiction"],
  },
  {
    name: "Little Women",
    authorFirst: "Lousia May",
    authorLast: "Alcott",
    publishDate: 1868,
    genre: ["womens", "historical", "fiction"],
  },
];

const titles = [
  "To Kill a Mockingbird",
  "The Great Gatsby",
  "The Hobbit",
  "Harry Potter and the Deathly Hallows",
  "Ulysses",
  "War and Peace",
  "Pride and Prejudice",
  "The Catcher in the Rye",
  "Great Expectations",
  "Little Women",
];

//1
books.forEach((authorname)=> console.log(
  authorname.authorFirst, 
  authorname.authorLast, 
  "wrote", 
  authorname.name,
  "in", 
  authorname.publishDate));

//2
const haha = books.sort((a,b) => a.publishDate - b.publishDate)
haha.forEach((gettingtitle) => console.log(gettingtitle.name))

//3
titles.sort(); console.log(titles); 

//4
const war = books.filter((peace)=> peace.name.includes("War"));
console.log(war[0].authorFirst, war[0].authorLast);
 
//5
const before1900 = books.filter((older) => older.publishDate < 1900);
console.log(before1900.length);


//6
const date = new Date();
const in100years = books.filter((dateiswithin)=> date.getFullYear() - dateiswithin.publishDate <= 100);
if (in100years.length >= 1){
  console.log("yes");
}
else {
  console.log("no");
}

//7
const dates = new Date();
const all100years = books.filter((dateiswithin)=> dates.getFullYear() - dateiswithin.publishDate <= 100);
if (all100years.length >= 10){
  console.log("yes");
}
else {
  console.log("no");
}

//8
const finallyfree = books.filter((history) => history.genre.includes("historical"));
console.log(finallyfree);

//1Array of authors and the book they wrote
//"--- wrote --- in ---"

//2Sort books from oldest to most recent

//3sort books alphabetically

//4Find who wrote War and Peace

//5how many books were written before 1900?

//6was there at least one book published within the last 100 years?

//7was every book published within the last 100 years?

//8print a list of books that "includes" the genre historical
