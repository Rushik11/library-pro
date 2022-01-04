export function getHighLightBook(parameter :any) {
    return (
      parameter && {
        bookId: parameter.details._id,
        bookImg: parameter.details.img,
        bookTitle: parameter.details.title,
        bookThought:parameter.details.thought,
        bookAuthor:parameter.details.auother_name
      }
    );
  }

  export function getFullHighLightBook(parameter :any) {
    return (
      parameter && {
        bookId: parameter.bookId._id,
        bookImg: parameter.bookId.img,
        bookTitle: parameter.bookId.title,
        bookAuthor:parameter.bookId.auother_name,
        hedding:parameter.bookdetailsId.heading,
        highLights:parameter.selection,
        highLightPageNo:parameter.page_no
      }
    );
  }