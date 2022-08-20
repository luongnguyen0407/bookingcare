const express = require("express");
const initWebRoute = require("./routes/initWebRoute");
const connectDB = require("./src/config/connectDB");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 6000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
connectDB();
initWebRoute(app);
app.listen(PORT, () => {
  console.log("server started on port" + PORT);
});
