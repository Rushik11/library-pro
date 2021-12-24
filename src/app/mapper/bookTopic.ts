export function getBookTopic(parameter :any) {
    return (
      parameter && {
        id: parameter._id,
        img: parameter.img,
        bookName:parameter.bookId.title,
        heading: parameter.heading,
        description: parameter.description,
      }
    );
  }