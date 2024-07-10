import {Book} from './Book';


export class Member{
    name : string;
    memberId: number;
    borrowedBooks:Book[];


    constructor(name:string,memberId:number){
        this.name = name;
        this.memberId = memberId;
        this.borrowedBooks = [];
    }

    borrowBook(book:Book) : void{
        this.borrowedBooks.push(book);
    }

    returnBook(book:Book):void{
        this.borrowedBooks = this.borrowedBooks.filter(b=>b !==book);
    }

    listBorrowedBooks(): void{
        console.log(`${this.name} has borrowed`);
        this.borrowedBooks.forEach(book =>{
            console.log(book.getInfo);
            
        })
        
    }
}

