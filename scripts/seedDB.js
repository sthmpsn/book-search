const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Books collection and inserts the books below for testing

mongoose.connect(
    process.env.MONGODB_URI || "mongodb://localhost/booksearch"
);

// Seed books array to populate
const bookSeed = [
    {
        title: "The Dead Zone",
        author: "Stephen King",
        desc:
            "A number-one national best seller about a man who wakes up from a five-year coma able to see people's futures and the terrible fate awaiting mankind in The Dead Zone - a \"compulsive page-turner\" (The Atlanta Journal-Constitution). Johnny Smith awakens from a five-year coma after his car accident and discovers that he can see people's futures and pasts when he touches them. Many consider his talent a gift; Johnny feels cursed. His fiancée married another man during his coma, and people clamor for him to solve their problems. When Johnny has a disturbing vision after he shakes the hand of an ambitious and amoral politician, he must decide if he should take drastic action to change the future. The Dead Zone is a \"faultlessly paced...continuously engrossing\" (Los Angeles Times) novel of second sight.",
        imageLink: "http://books.google.com/books/content?id=ZbUACwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
        link: "http://books.google.com/books?id=ZbUACwAAQBAJ&printsec=frontcover&dq=deadzone&hl=&cd=1&source=gbs_api"
    },
    {
        title: "Lord of the Flies",
        author: "William Golding",
        desc:
            "The tale of a party of shipwrecked schoolboys, marooned on a coral island, who at first enjoy the freedom of the situation but soon divide into fearsome gangs which turn the paradise island into a nightmare of panic and death.",
        imageLink: "http://books.google.com/books/content?id=iyfgqV5dxXQC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
        link: "http://books.google.com/books?id=iyfgqV5dxXQC&printsec=frontcover&dq=lordoftheflies&hl=&cd=2&source=gbs_api"
    }
];

db.Book
    .remove({})
    .then(() => db.Book.collection.insertMany(bookSeed))
    .then(data => {
        console.log(data.result.n + " records inserted!");
        process.exit(0);
    })
    .catch(err => {
        console.log(err);
        process.exit(1);
    });