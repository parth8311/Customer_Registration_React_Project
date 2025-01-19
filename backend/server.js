const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const authRoutes = require("./routes/authRoutes");
const sequelize = require("./config/db");

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.use("/api/auth", authRoutes);

sequelize
  .sync()
  .then(() => {
    app.listen(5000, () => console.log("Server running on port 5000"));
  })
  .catch((error) => console.log(error));
