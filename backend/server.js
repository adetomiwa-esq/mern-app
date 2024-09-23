import express, { urlencoded } from "express";
import dotenv from "dotenv";
import router from "./routes/goalRoutes.js";
import errorHandler from "./middleware/errorHandler.js";
dotenv.config();

const port = process.env.PORT || 5001;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api/goals", router);

app.use(errorHandler);

app.listen(port, () => console.log(`Server started on port ${port}`));
