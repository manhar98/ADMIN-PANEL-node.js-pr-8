const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");

const connectDB = require("./config/db");

dotenv.config();

const app = express();

// MIDDLEWARE
app.use(cors());
app.use(express.json());

// DATABASE CONNECTION
connectDB();

// TEST ROUTE
app.get("/", (req, res) => {
  res.send("Admin Panel API is Running Successfully");
});

// ADMIN ROUTES
app.use("/api/admin", require("./routes/adminRoutes"));

// NOT FOUND ROUTE
app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: "API Route Not Found",
  });
});

// SERVER
const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log(`Server Running on Port ${PORT}`);
});