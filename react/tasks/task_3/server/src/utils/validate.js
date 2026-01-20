export const validateMovieData = (data) => {
  if (!data.title?.trim()) {
    return { valid: false, message: "Invalid or missing title." };
  }

  if (!data.vote_average || typeof +data.vote_average !== "number") {
    return { valid: false, message: "Invalid or missing rating." };
  }

  if (
    !data.release_date ||
    typeof data.release_date !== "string" ||
    !data.release_date.match(/^\d{4}-\d{2}-\d{2}$/)
  ) {
    return {
      valid: false,
      message: "Invalid or missing release date. Format should be YYYY-MM-DD.",
    };
  }

  if (!data.poster_path || typeof data.poster_path !== "string") {
    return {
      valid: false,
      message: "Invalid or missing poster path.",
    };
  }

  if (!data.overview?.trim()) {
    return { valid: false, message: "Invalid or missing overview." };
  }

  if (
    !Array.isArray(data.genres) ||
    data.genres.length === 0 ||
    !data.genres.every((genre) => typeof genre === "string")
  ) {
    return {
      valid: false,
      message: "Invalid or missing genres. Should be an array of genres.",
    };
  }

  if (!data.runtime || typeof +data.runtime !== "number") {
    return { valid: false, message: "Invalid or missing runtime." };
  }

  return { valid: true };
};
