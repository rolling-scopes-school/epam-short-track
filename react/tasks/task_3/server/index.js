import express from "express";
import swaggerUiExpress from "swagger-ui-express";
import YAML from "yamljs";
import cors from 'cors';
import { moviesRouter } from "./src/routes/movies.route.js";
import { addOffsetAndLimit } from "./src/middlewares/index.js";
import { meRouter } from "./src/routes/me.route.js";

const swaggerDocument = YAML.load('./swagger.yaml');

const app = express();
const port = 4000;

app.use(cors());
app.use(express.json());
app.use(addOffsetAndLimit);
app.use("/movies", moviesRouter);
app.use("/me", meRouter);
app.use('/api-docs', swaggerUiExpress.serve, swaggerUiExpress.setup(swaggerDocument));

app.get("/", (_req, res) => {
  res.redirect('/api-docs');
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
