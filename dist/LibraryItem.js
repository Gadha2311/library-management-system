"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LibraryItem = void 0;
class LibraryItem {
    constructor(title, author, year) {
        this.title = title;
        this.author = author;
        this.year = year;
    }
    getInfo() {
        return `${this.title} by ${this.author}, ${this.year}`;
    }
}
exports.LibraryItem = LibraryItem;
//# sourceMappingURL=LibraryItem.js.map