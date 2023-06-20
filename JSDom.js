function myFunction(){
    var element = document.body;
    element.classList.toggle("dark-mode");
}

// const bookList = document.querySelector("#book-list");
// console.log(bookList);


// const banner = document.querySelector("#page-banner");
// console.log('The banner type is:', banner.nodeType);


// I'm attempting to create a class named "Book" 
class Book {
    constructor(name) {
      this.name = name;
    }
  
    delete() {
      console.log(`Deleting book: {this.name}`);
    }
  }
  
  // UI class
  class UI {
    static addBook(bookName) {
      const book = new Book(bookName);
      console.log(`Adding book: {book.name}`);
    }
  }
  
  // METHODS
  UI.addBook('Name of the Wind');
  UI.addBook('The Wise Man\'s Fear');
  