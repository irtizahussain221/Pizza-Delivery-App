const mongoose = require('mongoose');

mongoose.connect("mongodb+srv://Pizza_User:irtizahere10@sandbox.ibylc.mongodb.net/MERN_PIZZA?retryWrites=true&w=majority", {
    useUnifiedTopology: true,
    useNewUrlParser: true
});

const db = mongoose.connection;

db.on("connected", () => {
    console.log("Connection Successfull!");
});

db.on("error", (error) => {
    console.log(`Some error occured ${error.message}`);
});

module.exports = mongoose;