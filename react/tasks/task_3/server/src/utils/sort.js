export const sortMovies = (movies, query) => {
  const data = [...movies];
  const { sortBy, sortOrder } = query;

  if (sortBy && sortOrder) {
    data.sort((a, b) => {
      let aField = a[sortBy];
      let bField = b[sortBy];

      if (sortOrder === "desc") {
        const tmp = aField;
        aField = bField;
        bField = tmp;
      }

      if (typeof aField === "string") {
        return aField.localeCompare(bField);
      }

      if (typeof aField === "number") {
        return aField - bField;
      }

      return 0;
    });
  }

  return data;
};
