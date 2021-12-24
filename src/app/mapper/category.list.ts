export function getCategoryList(parameter :any) {
    return (
      parameter && {
        id: parameter._id,
        img: parameter.img,
        name: parameter.name,
      }
    );
  }