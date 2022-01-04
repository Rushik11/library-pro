export function getCompleteBook(parameter :any) {
    return (
      parameter && {
        bookId: parameter.bookId._id,
        bookImg: parameter.bookId.img,
        bookTitle: parameter.bookId.title,
        bookThought:parameter.bookId.thought,
        bookAuthorName: parameter.bookId.auother_name,
        bookCategoryName: parameter.bookId.categoryId.name,
        completed:parameter.completed
      }
    );
  }