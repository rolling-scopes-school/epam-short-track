export const filterMovies = (movies, query) => {
  let data = [...movies];
  const { filter } = query;

  const parsedGenres = filter && filter.split(",");

  if (parsedGenres && parsedGenres.length) {
    const filterLength = parsedGenres.length;
    const filterMap = parsedGenres.reduce(
      (prev, curr) =>
        Object.assign(prev, { [curr.toLowerCase().trim()]: true }),
      {}
    );

    data = movies.filter((item) => {
      const array = item.genres || [];

      const count = array.reduce(
        (prev, curr) => prev + (filterMap[curr.toLowerCase().trim()] ? 1 : 0),
        0
      );

      return count >= filterLength;
    });
  }

  return data;
};
