"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Member = void 0;
class Member {
    constructor(name, memberId) {
        this.name = name;
        this.memberId = memberId;
        this.borrowedBooks = [];
    }
    borrowBook(book) {
        this.borrowedBooks.push(book);
    }
    returnBook(book) {
        this.borrowedBooks = this.borrowedBooks.filter(b => b !== book);
    }
    listBorrowedBooks() {
        console.log(`${this.name} has borrowed`);
        this.borrowedBooks.forEach(book => {
            console.log(book.getInfo);
        });
    }
}
exports.Member = Member;
//# sourceMappingURL=Member.js.map