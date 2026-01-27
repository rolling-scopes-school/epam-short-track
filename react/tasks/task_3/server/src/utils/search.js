export const searchMovies = (movies, query) => {
  let data = [...movies];
  const { search, searchBy } = query;

  if (search && searchBy) {
    switch (searchBy) {
      case "title":
        data = movies.filter((item) =>
          new RegExp(search, "i").test(item.title)
        );
        break;

      case "genres": {
        const query = `${search[0].toUpperCase()}${search.substr(1)}`;
        data = movies.filter((item) =>
          item.genres.some((x) => x.includes(query))
        );
        break;
      }
    }
  }

  return data;
};
