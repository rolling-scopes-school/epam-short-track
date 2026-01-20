export const paginateMovies = (movies, query) => {
  const { offset, limit } = query;

  return movies.slice(offset, offset + limit);
};
