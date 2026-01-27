import fs from "fs";
import {
  filterMovies,
  paginateMovies,
  searchMovies,
  sortMovies,
} from "../utils/index.js";
import { validateMovieData } from "../utils/validate.js";

export const getMovies = async ({ query }, res) => {
  try {
    const { offset, limit } = query;
    const data = await fs.readFileSync("data/movies.json").toString();
    const movies = JSON.parse(data);
    const foundMovies = searchMovies(movies, query);
    const filteredMovies = filterMovies(foundMovies, query);
    const sortedMovies = sortMovies(filteredMovies, query);
    const paginatedMovies = paginateMovies(sortedMovies, query);
    const totalAmount = movies.length;

    res.status(200).json({
      data: paginatedMovies,
      totalAmount,
      offset,
      limit,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getMovieById = async ({ params }, res) => {
  try {
    const data = await fs.readFileSync("data/movies.json").toString();
    const movies = JSON.parse(data);
    const movie = movies.find((item) => item.id === parseInt(params.id, 10));

    if (!movie) {
      return res.status(404).json({ message: "Movie not found" });
    }

    return res.status(200).json({ data: movie });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const deleteMovie = async ({ params }, res) => {
  try {
    const data = await fs.readFileSync("data/movies.json").toString();
    const movies = JSON.parse(data);
    const movie = movies.find((item) => item.id === parseInt(params.id, 10));

    if (!movie) {
      return res.status(404).json({ message: "Movie not found" });
    }

    const filteredMovies = movies.filter((item) => item.id !== movie.id);
    const newData = JSON.stringify(filteredMovies, null, 2);
    await fs.writeFileSync("data/movies.json", newData, "utf-8");

    return res.status(200).json({ message: "Movie deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const addMovie = async ({ body }, res) => {
  try {
    const { valid, message } = validateMovieData(body);

    if (!valid) {
      return res.status(400).json({ message });
    }

    const data = await fs.readFileSync("data/movies.json").toString();
    const movie = { ...body, id: new Date().valueOf() };
    const newData = JSON.stringify([movie, ...JSON.parse(data)], null, 2);

    await fs.writeFileSync("data/movies.json", newData, "utf-8");

    return res
      .status(200)
      .json({ data: movie, message: "Movie added successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const updateMovie = async ({ params, body }, res) => {
  try {
    if (!body.id) {
      return res.status(400).json({ message: "Invalid id" });
    }

    const data = await fs.readFileSync("data/movies.json").toString();
    const movies = JSON.parse(data);
    const movie = movies.find((item) => item.id === parseInt(body.id, 10));

    if (!movie) {
      return res.status(404).json({ message: "Movie not found" });
    }

    const { valid, message } = validateMovieData(body);
    if (!valid) {
      return res.status(400).json({ message });
    }

    let updatedMovie;

    const newData = JSON.stringify(
      movies.map((item) => {
        if (item.id === movie.id) {
          updatedMovie = { ...movie, ...body };
          return { ...movie, ...body };
        }
        return item;
      }),
      null,
      2
    );

    await fs.writeFileSync("data/movies.json", newData, "utf-8");

    return res
      .status(200)
      .json({ data: updatedMovie, message: "Movie updated successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
