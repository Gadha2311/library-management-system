"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Library = void 0;
class Library {
    constructor() {
        this.books = [];
        this.members = [];
    }
    addBook(book) {
        this.books.push(book);
    }
    addMember(member) {
        this.members.push(member);
    }
    borrowBook(memberId, bookTitle) {
        const member = this.members.find(m => m.memberId === memberId);
        const book = this.books.find(b => b.title === bookTitle);
        if (member && book) {
            member.borrowBook(book);
            this.books = this.books.filter(b => b !== book);
            console.log(`${member.name} borrowed "${book.title}"`);
        }
        else {
            console.log(`Book or Member not found.`);
        }
    }
    returnBook(memberId, bookTitle) {
        const member = this.members.find(m => m.memberId === memberId);
        const book = member === null || member === void 0 ? void 0 : member.borrowedBooks.find(b => b.title === bookTitle);
        if (member && book) {
            member.returnBook(book);
            this.books.push(book);
            console.log(`${member.name} returned "${book.title}"`);
        }
        else {
            console.log(`Book or Member not found.`);
        }
    }
    listAvailableBooks() {
        console.log('Available Books:');
        this.books.forEach(book => {
            console.log(book.getInfo());
        });
    }
}
exports.Library = Library;
//# sourceMappingURL=Library.js.map