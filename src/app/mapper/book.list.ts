export function getBookList(parameter :any) {
    return (
      parameter && {
        id: parameter._id,
        img: parameter.img,
        author_name:parameter.auother_name,
        categoryId: parameter.categoryId._id,
        categoryName:parameter.categoryId.name,
        title: parameter.title,
        thought: parameter.thought,
        overview: parameter.overview,
        about_the_author: parameter.about_the_author
      }
    );
  }