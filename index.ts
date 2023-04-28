interface Book {
    id: number;
    title: string;
    author: string;
    published: Date;
    available: boolean;
  }
  
  const books: Book[] = [
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
  
  function addBook(book: Book): void {
    books.push(book);
  }
  
  function findBookById(id: number): Book | undefined {
    return books.find((book) => book.id === id);
  }
  
  function updateBook(book: Book): boolean {
    const index = books.findIndex((b) => b.id === book.id);
    if (index !== -1) {
      books[index] = book;
      return true;
    }
    return false;
  }
  
  function removeBook(id: number): boolean {
    const index = books.findIndex((book) => book.id === id);
    if (index !== -1) {
      books.splice(index, 1);
      return true;
    }
    return false;
  }
  
  ///testing 

  // Add two new books to the array
const book1: Book = {
    id: 3,
    title: "The Silent Patient",
    author: "Alex Michaelides",
    published: new Date("February 5, 2019"),
    available: true,
  };
  
  const book2: Book = {
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
  const foundBook = findBookById(3);
  console.log(foundBook);
  
  // Remove a book by its id
  removeBook(4);
  
  // Find a book by its id again
  const foundBook2 = findBookById(4);
  console.log(foundBook2);
  