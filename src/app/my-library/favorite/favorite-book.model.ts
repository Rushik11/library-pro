export class favourites{
    bookId?:string;
    bookImg?:string;
    bookTitle?:string;
    bookThought?:string;
    bookAuthorName?:string;
    bookCategoryName?:string;
    completed?:Boolean;
    favourites?:favourites []=[]
}