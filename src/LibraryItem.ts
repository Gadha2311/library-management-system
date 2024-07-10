export class LibraryItem{
    title:string;
    author:string;
    year:number;


    constructor(title:string,author:string,year:number){
        this.title=title;
        this.author=author;
        this.year=year;
    }

    getInfo():string{
        return `${this.title} by ${this.author}, ${this.year}`;
    }
}