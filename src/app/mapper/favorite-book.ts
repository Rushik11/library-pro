export function getFavoriteBookList(parameter :any) {
    return (
      parameter && {
        bookId: parameter._id,
        bookImg: parameter.img,
        bookTitle: parameter.title,
        bookThought:parameter.thought,
        bookAuthorName: parameter.auother_name,
        bookCategoryName: parameter.categoryId.name
      }
    );
  }