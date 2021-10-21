const express = require("express");
const app = express();
const cors = require("cors");
const dotenv = require("dotenv");
const routes = require("./routes/routes");

dotenv.config();
const port = process.env.PORT;

const db = require("./db");

app.use(express.json());

const corsOptions = {
  exposedHeaders: "auth-token",
};

app.use(cors(corsOptions));
app.use("/", routes);

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
