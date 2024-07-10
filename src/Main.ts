import { Book } from './Book';
import { Member } from './Member';
import { Library } from './Library';

const library = new Library();

library.addBook(new Book('The Hobbit', 'J.R.R. Tolkien', 1937, 'Fantasy'));
library.addBook(new Book('1984', 'George Orwell', 1949, 'Dystopian'));

const member1 = new Member('Alice', 1);
const member2 = new Member('Bob', 2);
library.addMember(member1);
library.addMember(member2);

library.borrowBook(1, 'The Hobbit');
library.listAvailableBooks();
member1.listBorrowedBooks();

library.returnBook(1, 'The Hobbit');
library.listAvailableBooks();
member1.listBorrowedBooks();
