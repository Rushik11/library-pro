export class bookList {
  _id?: string;
  img?:string;
  categoryId?: {
    name?:string;
    _id?:string
  };
  title?:string;
  thought?:string;
  overview?:string;
  name?:string;
  about_the_author?:string;
  auother_name?:string;
  bookList?: bookList ={} 
}
