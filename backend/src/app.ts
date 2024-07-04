import express from "express";
// import { createHandler } from "graphql-http/lib/use/express";
// import { ruruHTML } from "ruru/server";
import cors from "cors";
import bodyParser from "body-parser";
import helmet from "helmet";

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(helmet());

app.listen(PORT, () => console.log(`Server NodeJS + Express is running on port ${PORT}`));