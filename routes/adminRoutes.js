const express = require("express");

const router = express.Router();

const {
  registerAdmin,
  loginAdmin,
  getAdminProfile,
  getDashboardStats,
  createUser,
  getAllUsers,
  getSingleUser,
  updateUser,
  deleteUser,
} = require("../controllers/adminControllers");

const protectAdmin = require("../middleware/authMiddleware");

// PUBLIC ROUTES
router.post("/register", registerAdmin);
router.post("/login", loginAdmin);

// PROTECTED ROUTES
router.get("/profile", protectAdmin, getAdminProfile);

router.get("/dashboard", protectAdmin, getDashboardStats);

// USER CRUD ROUTES
router.post("/users", protectAdmin, createUser);

router.get("/users", protectAdmin, getAllUsers);

router.get("/users/:id", protectAdmin, getSingleUser);

router.put("/users/:id", protectAdmin, updateUser);

router.delete("/users/:id", protectAdmin, deleteUser);

module.exports = router;