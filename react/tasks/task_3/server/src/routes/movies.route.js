import { Router } from "express";
import {
  deleteMovie,
  getMovieById,
  getMovies,
  addMovie,
  updateMovie,
} from "../controllers/movies.controller.js";

const router = Router();

router.get("/", getMovies);
router.get("/:id", getMovieById);
router.post("/", addMovie);
router.put("/:id", updateMovie);
router.delete("/:id", deleteMovie);

export const moviesRouter = router;
