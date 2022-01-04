export class detail {
  id?: String;
  bookdetailsId?:any
  bookName?: string;
  bookId?:string
  heading?: string;
  description?: any;
  page?: number;
  booksId?:string;
  countBook?: number;
  page_no?:number
  bookHeading?:string
  success?: Boolean;
  search?:string;
  categoryName?: string;
  detail?: detail ={};
}

export class highLightDetails{
  selection?:string
  page_no?:number
  bookdetailsId?:string
  bookId?:string
}

export class highLight{
  details?:string
  highLight?:highLight [] = []
}

export class bookStyle{
  fontSize?:string;
  fontFamily?:string;
  fontBgColor?:string;
  fontColor?:string;
} 

export class complete{
  bookId?:string;
  completed?:Boolean
  complete?:complete = {}
}

