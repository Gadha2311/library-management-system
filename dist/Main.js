"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Book_1 = require("./Book");
const Member_1 = require("./Member");
const Library_1 = require("./Library");
const library = new Library_1.Library();
library.addBook(new Book_1.Book('The Hobbit', 'J.R.R. Tolkien', 1937, 'Fantasy'));
library.addBook(new Book_1.Book('1984', 'George Orwell', 1949, 'Dystopian'));
const member1 = new Member_1.Member('Alice', 1);
const member2 = new Member_1.Member('Bob', 2);
library.addMember(member1);
library.addMember(member2);
library.borrowBook(1, 'The Hobbit');
library.listAvailableBooks();
member1.listBorrowedBooks();
library.returnBook(1, 'The Hobbit');
library.listAvailableBooks();
member1.listBorrowedBooks();
//# sourceMappingURL=Main.js.map