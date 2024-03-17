const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const morgan = require("morgan");
const connectDB = require("./config/db");


// env config
dotenv.config();

// router import
const employeeRoutes = require("./routers/employeeRouters");

// database connect
connectDB();

// react object
const app = express();

// middlewares
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));


// routers
app.use("/api/v1/employee", employeeRoutes);

// listen
app.listen(process.env.PORT, () => {
    console.log(`server running on port ${process.env.PORT}`);
  });
  