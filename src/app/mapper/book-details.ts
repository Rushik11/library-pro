export function getBookDetails(parameter :any) {
    return (
      parameter && {
        id: parameter._id,
        countBook: parameter.countBook,
        description: parameter.detail.description,
        heading:parameter.detail.heading,
        page_no: parameter.detail.page_no,
        page: parameter.page,
        bookHeading:parameter.detail.bookId.title,
        booksId:parameter.detail.bookId._id,
        bookId:parameter.detail.bookId._id,
        bookdetailsId:parameter.detail._id
      }
    );
  }


  export function getHighLight(parameter :any){
      return(
          parameter && {
            details:parameter.selection
          }
      )
  }