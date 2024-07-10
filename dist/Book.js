"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Book = void 0;
const LibraryItem_1 = require("./LibraryItem");
class Book extends LibraryItem_1.LibraryItem {
    constructor(title, author, year, genre) {
        super(title, author, year);
        this.genre = genre;
    }
    getInfo() {
        return `${super.getInfo()} - Genre: ${this.genre}`;
    }
}
exports.Book = Book;
//# sourceMappingURL=Book.js.map