import { LibraryItem } from "./LibraryItem";

export class Book extends LibraryItem{
    genre:string;


    constructor(title:string,author:string,year:number,genre:string){
        super(title,author,year);
        this.genre=genre;
    }


    getInfo(): string {
        return `${super.getInfo()} - Genre: ${this.genre}`;
    }
}