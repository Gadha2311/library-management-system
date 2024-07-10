import { Book } from './Book';
import { Member } from './Member';

export class Library {
    books: Book[];
    members: Member[];

    constructor() {
        this.books = [];
        this.members = [];
    }

    addBook(book: Book): void {
        this.books.push(book);
    }

    addMember(member: Member): void {
        this.members.push(member);
    }

    borrowBook(memberId: number, bookTitle: string): void {
        const member = this.members.find(m => m.memberId === memberId);
        const book = this.books.find(b => b.title === bookTitle);

        if (member && book) {
            member.borrowBook(book);
            this.books = this.books.filter(b => b !== book);
            console.log(`${member.name} borrowed "${book.title}"`);
        } else {
            console.log(`Book or Member not found.`);
        }
    }

    returnBook(memberId: number, bookTitle: string): void {
        const member = this.members.find(m => m.memberId === memberId);
        const book = member?.borrowedBooks.find(b => b.title === bookTitle);

        if (member && book) {
            member.returnBook(book);
            this.books.push(book);
            console.log(`${member.name} returned "${book.title}"`);
        } else {
            console.log(`Book or Member not found.`);
        }
    }

    listAvailableBooks(): void {
        console.log('Available Books:');
        this.books.forEach(book => {
            console.log(book.getInfo());
        });
    }
}
