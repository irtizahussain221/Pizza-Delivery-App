const mongoose = require("mongoose");
const express = require("express");
const app = express();
const cors = require("cors");
const dotenv = require("dotenv");
const routes = require("./routes/routes");

dotenv.config();
const port = process.env.PORT;

mongoose
  .connect(process.env.MONGODB_URI, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  })
  .then(() => {
    console.log("Connection with database established");
  })
  .catch((e) => {
    console.log(e.message);
  });

app.use(express.json());

const corsOptions = {
  exposedHeaders: "auth-token",
};

app.use(cors(corsOptions));
app.use("/", routes);

app.listen(process.env.PORT, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
