export class ReddingBook{
    bookId?:string;
    bookImg?:string;
    bookTitle?:string;
    bookThought?:string;
    bookAuthorName?:string;
    bookCategoryName?:string;
    completed?:Boolean;
    Reads?:ReddingBook []=[]
}