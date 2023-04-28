var books = [
    {
        id: 1,
        title: "The Lord of the Rings",
        author: "J.R.R. Tolkien",
        published: new Date("1954-07-29"),
        available: true,
    },
    {
        id: 2,
        title: "The Testaments",
        author: "Margaret Atwood",
        published: new Date("September 10, 2019"),
        available: true,
    },
    {
        id: 3,
        title: "Where the Crawdads Sing",
        author: "Delia Owens",
        published: new Date("August 14, 2018"),
        available: false,
    },
];
function addBook(book) {
    books.push(book);
}
function findBookById(id) {
    return books.find(function (book) { return book.id === id; });
}
function updateBook(book) {
    var index = books.findIndex(function (b) { return b.id === book.id; });
    if (index !== -1) {
        books[index] = book;
        return true;
    }
    return false;
}
function removeBook(id) {
    var index = books.findIndex(function (book) { return book.id === id; });
    if (index !== -1) {
        books.splice(index, 1);
        return true;
    }
    return false;
}
///testing 
// Add two new books to the array
var book1 = {
    id: 3,
    title: "The Silent Patient",
    author: "Alex Michaelides",
    published: new Date("February 5, 2019"),
    available: true,
};
var book2 = {
    id: 4,
    title: "The Institute",
    author: "Stephen King",
    published: new Date("September 10, 2019"),
    available: false,
};
addBook(book1);
addBook(book2);
// Update the availability of book2
book2.available = true;
updateBook(book2);
// Find a book by its id
var foundBook = findBookById(3);
console.log(foundBook);
// Remove a book by its id
removeBook(4);
// Find a book by its id again
var foundBook2 = findBookById(4);
console.log(foundBook2);
