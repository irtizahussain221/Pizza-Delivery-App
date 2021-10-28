const mongoose = require("mongoose");
const express = require("express");
const app = express();
const cors = require("cors");
const dotenv = require("dotenv");
const orderRoutes = require("./routes/order.routes");
const pizzaRoutes = require("./routes/pizza.routes");
const userRoutes = require("./routes/user.routes");

//saving the path to views directory in path variable
const path = __dirname + "/views";

//using dotenv to read variables in .env file
dotenv.config();

//establishing a connection
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

app.use(express.static(path));

//parsing bodies of incoming requests
app.use(express.json());

//enabling auth-token header to be exposed
const corsOptions = {
  exposedHeaders: "auth-token",
};

app.use(cors(corsOptions));

//using routes
app.use("/", userRoutes, pizzaRoutes, orderRoutes);

//Serving frontend react from express server
app.get("/*", (_req, res) => {
  res.sendFile(path + "/index.html");
});

//listening to incoming requests and responses
app.listen(process.env.PORT, () => {
  console.log(`Server listening at http://localhost:${process.env.PORT}`);
});
